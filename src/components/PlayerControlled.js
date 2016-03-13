'use strict'

function PlayerControlled(isPlayer = false) {
  if (isPlayer) this.isPlayer = true
  this.pc = true
  return this
}

PlayerControlled.prototype.name = 'playerControlled'

export default PlayerControlled