'use strict'

function Appearance(params = {}) {
  this.size = params.size || { w: 50, h: 50 }
  this.image = `img/${params.image || 'missing'}.png`
  return this
}

Appearance.prototype.name = 'appearance'

export default Appearance