'use strict'

function Player(flag = true) {
  this.isPlayer = flag
}

Player.prototype.name = 'player'

export default Player