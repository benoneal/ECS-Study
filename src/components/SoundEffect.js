'use strict'

function SoundEffect(params = {}) {
  this.effect = params.effect || ''
  this.action = params.action || ''
}

SoundEffect.prototype.name = 'soundEffect'

export default SoundEffect