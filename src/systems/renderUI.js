'use strict'

import forEach from 'lodash/forEach'
import ECS from '../ECS'
import clearCanvas from '../helpers/clearCanvas'
import husl from 'husl'

const drawHealthBar = (value, max) => {
  let { width, height } = ECS.$UIcanvas
  let percent = (value / max)
  ECS.UIcontext.fillStyle = 'rgba(66,66,66,0.7)'
  ECS.UIcontext.fillRect(50, height - 60, width - 100, 30)
  ECS.UIcontext.fillStyle = husl.toHex(percent * 90 + 20, 100, 50)
  ECS.UIcontext.fillRect(50, height - 60, (width - 100) * percent, 30)
}
const drawAmmoBar = (value, max) => {
  let { width, height } = ECS.$UIcanvas
  let percent = (value / max)
  ECS.UIcontext.fillStyle = 'rgba(66,66,66,0.7)'
  ECS.UIcontext.fillRect(50, height - 30, width - 100, 10)
  ECS.UIcontext.fillStyle = husl.toHex(10, 90, (value / max) * 25 + 15)
  ECS.UIcontext.fillRect(50, height - 30, (width - 100) * percent, 10)
}
const drawStats = () => {
  ECS.UIcontext.fillStyle = '#E6AC27'
  ECS.UIcontext.font = 'bold 2em "Open Sans"'
  ECS.UIcontext.fillText(`${ECS.score}  x${Math.round(ECS.game.speed() / 2)}`, 40, 60)
}

const Render = entities => {
  clearCanvas(ECS.UIcontext, ECS.$UIcanvas)

  forEach(entities, entity => {
    let { health, laser } = entity.components

    if (laser && laser.ammo) {
      let { ammo, maxAmmo } = laser
      drawAmmoBar(ammo, maxAmmo)
    }

    if (health) {
      let { value, maxHealth } = health
      drawHealthBar(value, maxHealth)
    }

    drawStats()
  })
}

Render.requirements = ['playerControlled']

export default Render
