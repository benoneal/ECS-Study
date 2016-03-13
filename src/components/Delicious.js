'use strict'

function Delicious(value = 2) {
  this.healing = value
  return this
}

Delicious.prototype.name = 'delicious'

export default Delicious