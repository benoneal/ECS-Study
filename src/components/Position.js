'use strict'

import random from 'lodash/random'

function Position(params = {}) {
  this.x = params.x || random(0.05, 0.95)
  this.y = params.y || random(0.05, 0.95)
  this.deg = params.deg || 0
  return this
}

Position.prototype.name = 'position'

export default Position