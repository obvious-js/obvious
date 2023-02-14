import { Socket } from './lib/socket' // eslint-disable-line
import { Watcher } from './lib/watcher' // eslint-disable-line

export type CallbackType = (...args: any[]) => any

export type ScriptType = Partial<HTMLScriptElement> | string | HTMLScriptElement

export type LinkType = Partial<HTMLLinkElement> | string | HTMLLinkElement

export type AssetsConfigType = Record<
  string,
  {
    js?: Array<ScriptType>
    css?: Array<LinkType>
  }
>

export type ConfType = {
  assets: AssetsConfigType
  [key: string]: any
}

export type ContextType = {
  name: string
  loadScript: (script: ScriptType) => Promise<void>
  loadLink: (link: LinkType) => void
  [key: string]: any
}

export type NextFnType = (ctx?: ContextType) => void | Promise<void>

export type MiddlewareFnType = (ctx: ContextType, next: NextFnType) => void | Promise<void>

export type LifecyleCallbackType = (
  data?: any,
) => void | (() => void) | Promise<void> | Promise<() => void>

export type DependencyType =
  | {
      name: string
      data?: any
      ctx?: Record<string, any>
    }
  | string

export type RelateType =
  | {
      name: string
      ctx: Record<string, any>
    }
  | string

export type StoreType<T = any> = {
  state: T
  owner: Socket | null
  watchers: Set<Watcher<any>>
}

export type StoresType = Record<string, StoreType>

export { Socket } from './lib/socket'

export { Bus } from './lib/bus'

export { App } from './lib/app'
