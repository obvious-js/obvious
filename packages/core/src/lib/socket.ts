import { effect, reactive, readonly } from 'vue'
import type { EventEmitter } from './event-emitter' // eslint-disable-line
import type { CallbackType, StoresType } from '../types' // eslint-disable-line
import { Errors, isPrimitive, Warnings } from './utils'
import { Watcher } from './watcher'

const STATE_INITIALIZED = '$state-initialized'
export class Socket {
  constructor(private eventEmitter: EventEmitter, private stores: StoresType) {
    this.eventEmitter = eventEmitter
    this.stores = stores
  }

  private offEvents(events: Record<string, CallbackType>, isUnicast: boolean, eventName?: string) {
    let cancelListening = isUnicast
      ? this.eventEmitter.removeUnicastEventListener
      : this.eventEmitter.removeBroadcastEventListener
    cancelListening = cancelListening.bind(this.eventEmitter)
    if (eventName) {
      if (events[eventName]) {
        cancelListening(eventName, events[eventName])
        delete events[eventName]
      } else {
        console.warn(Warnings.handlerIsNotInTheEventsPool(eventName, isUnicast))
      }
    } else {
      Object.entries(events).forEach(([eventName, handler]) => {
        cancelListening(eventName, handler)
      })
    }
  }

  /**
   * add broadcast event listeners
   * @param events
   */
  public onBroadcast<T extends Record<string, CallbackType>>(events: T) {
    Object.entries(events).forEach(([eventName, handler]) => {
      this.eventEmitter.addBroadcastEventListener(eventName, handler)
    })
    return (eventName?: string) => {
      this.offEvents(events, false, eventName)
    }
  }

  /**
   * add unicast event listeners
   * @param events
   */
  public onUnicast<T extends Record<string, CallbackType>>(events: T) {
    Object.entries(events).forEach(([eventName, handler]) => {
      try {
        this.eventEmitter.addUnicastEventListener(eventName, handler)
      } catch (err) {
        console.error(err)
      }
    })
    return (eventName?: string) => {
      this.offEvents(events, true, eventName)
    }
  }

  /**
   * create a proxy to emit a broadcast event
   * @param logger
   */
  public createBroadcaster<T extends Record<string, CallbackType>>(
    logger?: (eventName: string) => void,
  ) {
    return new Proxy<T>({} as any, {
      get: (target, eventName) => {
        return (...args: any[]) => {
          logger?.(eventName as string)
          return this.eventEmitter.emitBroadcast(eventName as string, ...args)
        }
      },
      set: () => {
        return false
      },
    })
  }

  /**
   * create a proxy to emit unicast event
   * @param logger
   */
  public createUnicaster<T extends Record<string, CallbackType>>(
    logger?: (eventName: string) => void,
  ) {
    return new Proxy<T>({} as any, {
      get: (target, eventName) => {
        return (...args: any[]) => {
          logger?.(eventName as string)
          return this.eventEmitter.emitUnicast(eventName as string, ...args)
        }
      },
      set: () => {
        return false
      },
    })
  }

  /**
   * judge if state has been initialized
   * @param namespace
   */
  public existState(namespace: string) {
    return !!this.stores[namespace]
  }

  /**
   * init a state
   * @param namespace
   * @param value
   * @param isPrivate is state can only be modified by the socket which initialized it
   */
  public initState<T extends object = any>(
    namespace: string,
    initialState: T,
    isPrivate: boolean = false,
  ) {
    if (this.existState(namespace)) {
      throw new Error(Errors.duplicatedInitial(namespace))
    } else {
      if (isPrimitive(initialState)) {
        throw new Error(Errors.initializePrimitiveState(namespace))
      }
      this.stores[namespace] = {
        state: reactive(initialState),
        owner: isPrivate ? this : null,
        watchers: new Set(),
      }
      this.eventEmitter.emitBroadcast(STATE_INITIALIZED, namespace)
    }
    return this.getState(namespace)
  }

  /**
   * get a state
   * @param {string} namespace
   */
  public getState<T = any, P = T>(namespace: string, getter?: (state: T) => P) {
    if (this.existState(namespace)) {
      const state = readonly(this.stores[namespace].state)
      return getter ? getter(state) : state
    } else {
      return null
    }
  }

  private getStateToSet(namespace: string) {
    if (!this.existState(namespace)) {
      const msg = Errors.accessUninitializedState(namespace)
      throw new Error(msg)
    }
    const stateOwner = this.stores[namespace].owner
    if (stateOwner !== this && stateOwner !== null) {
      const msg = Errors.modifyPrivateState(namespace)
      throw new Error(msg)
    }
    return this.stores[namespace].state
  }

  /**
   * set the value of the state
   * @param namespace
   * @param action
   * @param setter
   */
  public async setState<T = any>(
    namespace: string,
    action: string,
    setter: (state: T) => void | Promise<void>,
  ) {
    const state: T = this.getStateToSet(namespace)
    if (action) {
      await Promise.resolve(setter(state))
    } else {
      throw new Error(Errors.actionIsNotDefined(namespace))
    }
  }

  /**
   * watch the change of state
   * @param namespace
   * @param getter
   */
  public watchState<T = any, P = any>(namespace: string, getter: (state: T) => undefined | P) {
    if (!this.existState(namespace)) {
      const msg = Errors.accessUninitializedState(namespace)
      throw new Error(msg)
    }
    let flushed = false
    const state: T = readonly(this.stores[namespace].state)
    const watcher = new Watcher<P>(namespace, this.stores)
    const runner = effect(() => getter(state), {
      lazy: true,
      scheduler: () => {
        if (!flushed) {
          flushed = true
          Promise.resolve().then(() => {
            const watchingState = getter(state)
            watcher.handler?.(watchingState, watcher.oldWatchingStates)
            watcher.oldWatchingStates = watchingState
            flushed = false
          })
        }
      },
    })
    watcher.oldWatchingStates = runner()
    watcher.stopEffect = () => runner.effect.stop()
    return watcher
  }
}
