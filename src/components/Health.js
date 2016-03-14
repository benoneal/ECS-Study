'use strict'

function Health(value = 20) {
  this.maxHealth = value
  this.value = value
}

Health.prototype.name = 'health'

export default Health