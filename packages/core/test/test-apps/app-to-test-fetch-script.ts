const code = `\
const bus = window.__Bus__.testBus;

/**
 * app-a indicate both bootstrap and activate lifecycles
 * when it's activate at the first time, it should activate the lib react, and run the bootstrap callback
 * when it's activate after the first time, it should run the activate callback
 */
bus.createApp('app-to-test-fetch-script')
  .relyOn([
    'lib:react'
  ])
  .onBootstrap(async () => {
    console.log('bootstraped');
  })
  .onActivate(async () => {
    console.log('reactivated');
  })
  .onDestroy(async () => {
    console.log('destroy');
  });
`

export default code