import { registerApp, App } from '../../../src'

let unWatchPublicState: () => void = null
const app = new App('connect-testers/state', {
  state: {
    public: {
      value: 0
    },
    private: {
      value: 0
    }
  }
})

registerApp(app)
  .onBootstrap(() => {
    unWatchPublicState = app.publicState.watch(state => state.value).do((newValue, oldValue) => {
      console.log(newValue, oldValue)
    })
  })
  .onActivate((newPrivateStateValue) => {
    app.privateState.set(state => {
      state.value = newPrivateStateValue
    })
  })
  .onDestroy(() => {
    unWatchPublicState()
  })
