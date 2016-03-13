'use strict'

function SecondaryAppearance(params = {}) {
  this.size = params.size || { w: 50, h: 50 }
  this.image = `img/${params.image || 'missing'}.png`
  return this
}

SecondaryAppearance.prototype.name = 'secondaryAppearance'

export default SecondaryAppearance