'use strict'

import random from 'lodash/random'

function Position(params = {}) {
  this.x = params.x != null ? params.x : random(0.05, 0.95)
  this.y = params.y != null ? params.y : random(0.05, 0.95)
  this.deg = params.deg || 0
}

Position.prototype.name = 'position'

export default Position