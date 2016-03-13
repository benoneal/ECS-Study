'use strict'

function Laser(ammo = 120) {
  this.firing = false
  this.ammo = ammo
  this.maxAmmo = ammo
  return this
}

Laser.prototype.name = 'laser'

export default Laser