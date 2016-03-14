'use strict'

function Appearance(params = {}) {
  this.size = params.size || { w: 50, h: 50 }
  this.image = `img/${params.image || 'missing'}.png`
  this.imageAlign = params.imageAlign || 'c' // l|r|t|b|tl|tr|bl|br
  this.altImage = `img/${params.altImage || 'missing'}.png`
  this.useAltImage = false
}

Appearance.prototype.name = 'appearance'

export default Appearance