'use strict'

import userInput from './systems/userInput'
import wingMovement from './systems/wingMovement'
import collision from './systems/collision'
import healthMonitor from './systems/healthMonitor'
import render from './systems/render'

export default [
  userInput,
  wingMovement,
  collision,
  healthMonitor, 
  render
]