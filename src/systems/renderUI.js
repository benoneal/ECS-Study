'use strict'

import forEach from 'lodash/forEach'
import ECS from '../ECS'
import clearCanvas from '../helpers/clearCanvas'

const drawHealthBar = (value, max) => {
  let { width, height } = ECS.$UIcanvas
  ECS.UIcontext.fillStyle = 'rgba(66,66,66,0.7)'
  ECS.UIcontext.fillRect(50, height - 60, width - 100, 30)
  ECS.UIcontext.fillStyle = 'rgba(179,204,87,1)'
  ECS.UIcontext.fillRect(50, height - 60, (width - 100) * (value / max), 30)
}
const drawAmmoBar = (value, max) => {
  let { width, height } = ECS.$UIcanvas
  ECS.UIcontext.fillStyle = 'rgba(66,66,66,0.7)'
  ECS.UIcontext.fillRect(50, height - 30, width - 100, 10)
  ECS.UIcontext.fillStyle = 'rgba(63,184,175,1)'
  ECS.UIcontext.fillRect(50, height - 30, (width - 100) * (value / max), 10)
}
const drawScore = () => {
  ECS.UIcontext.fillStyle = '#E6AC27'
  ECS.UIcontext.font = 'bold 2em "Open Sans"'
  ECS.UIcontext.fillText(ECS.score, 40, 40)
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

    drawScore()
  })
}

Render.requirements = ['playerControlled']

export default Render
