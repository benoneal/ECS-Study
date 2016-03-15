'use strict'

function Laser(ammo = 60) {
  this.firing = false
  this.ammo = ammo
  this.maxAmmo = ammo
}

Laser.prototype.name = 'laser'

export default Laser