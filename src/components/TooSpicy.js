'use strict'

function TooSpicy(value = 25) {
  this.damage = value
  return this
}

TooSpicy.prototype.name = 'tooSpicy'

export default TooSpicy