'use strict'

function SecondaryAppearance(params = {}) {
  this.size = params.size || { w: 50, h: 50 }
  this.image = `img/${params.image || 'missing'}.png`
  this.imageAlign = params.imageAlign || 'c' // l|r|t|b|tl|tr|bl|br
}

SecondaryAppearance.prototype.name = 'secondaryAppearance'

export default SecondaryAppearance