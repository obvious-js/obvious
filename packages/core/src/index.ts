import { createBus, getBus, touchBus } from './lib/bus'; // eslint-disable-line

const ObviousCore = {
  createBus,
  getBus,
  touchBus
}

export { Bus, createBus, getBus, touchBus } from './lib/bus'; // eslint-disable-line
export { App } from './lib/app'
export { Socket } from './lib/socket'

export default ObviousCore
