'use strict'

import userInput from './systems/userInput'
import wingMovement from './systems/wingMovement'
import collision from './systems/collision'
import scaleDifficulty from './systems/scaleDifficulty'
import healthMonitor from './systems/healthMonitor'
import soundFX from './systems/soundFX'
import render from './systems/render'
import renderUI from './systems/renderUI'

export default [
  userInput,
  scaleDifficulty,
  wingMovement,
  collision,
  healthMonitor, 
  soundFX,
  render,
  renderUI
]