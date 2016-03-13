'use strict'

import forEach from 'lodash/forEach'
import ECS from '../ECS'

function clearCanvas(ctx) {
  ctx.save()
  ctx.setTransform(1, 0, 0, 1, 0, 0)
  ctx.clearRect(0, 0, ECS.$canvas.width, ECS.$canvas.height)
  ctx.restore()
}

let imgCache = {}
const drawImageRot = (img, x, y, w, h, deg) => {
  var rad = deg * Math.PI / 180
  ECS.context.translate(x + w / 2, y + h / 2)
  ECS.context.rotate(rad)
  ECS.context.drawImage(img, w / 2 * (-1), h / 2 * (-1), w, h)
  ECS.context.rotate(rad * ( -1 ) )
  ECS.context.translate((x + w / 2) * (-1), (y + h / 2) * (-1))
}
const drawHealthBar = (value, max) => {
  let { width, height } = ECS.$UIcanvas
  let weight = 40
  ECS.UIcontext.fillStyle = 'rgba(66,66,66,0.7)'
  ECS.UIcontext.fillRect(weight, height - weight - 20, width - weight * 2, weight)
  ECS.UIcontext.fillStyle = 'rgba(179,204,87,1)'
  ECS.UIcontext.fillRect(weight, height - weight - 20, (width - weight * 2) * (value / max), weight)
}
const drawAmmoBar = (value, max) => {
  let { width, height } = ECS.$UIcanvas
  let weight = 20
  ECS.UIcontext.fillStyle = 'rgba(66,66,66,0.7)'
  ECS.UIcontext.fillRect(weight * 2, height - weight - 10, width - weight * 4, weight)
  ECS.UIcontext.fillStyle = 'rgba(63,184,175,1)'
  ECS.UIcontext.fillRect(weight * 2, height - weight - 10, (width - weight * 4) * (value / max), weight)
}
const drawScore = () => {
  let { width } = ECS.$UIcanvas
  ECS.UIcontext.fillStyle = '#E6AC27'
  ECS.UIcontext.font = 'bold 2em "Open Sans"'
  ECS.UIcontext.fillText(ECS.score, 40, 40)
}

const drawAppearance = (appearance, position, leftAlign) => {
  let { width, height } = ECS.$canvas
  let { image, size } = appearance
  let { w, h } = size
  let { x, y, deg } = position
  w = w * 1.6 // trying to get hitboxes roughly comparable to graphic
  h = h * 1.6
  let xPos = x * width - w / 2
  let yPos = y * height - h / 2
  if (leftAlign) xPos = x * width 

  if (!imgCache[image]) {
    let img = new Image()
    img.onload = () => {
      imgCache[image] = img
      drawImageRot(imgCache[image], xPos, yPos, w, h, deg)
    }
    img.src = image
  } else {
    drawImageRot(imgCache[image], xPos, yPos, w, h, deg)
  }
}

const Render = entities => {
  clearCanvas(ECS.context)
  clearCanvas(ECS.UIcontext)

  forEach(entities, entity => {
    let { appearance, secondaryAppearance, position, health, playerControlled, laser } = entity.components

    if (laser && laser.ammo) {
      let { ammo, maxAmmo } = laser
      drawAmmoBar(ammo, maxAmmo)
    }

    if (laser && !laser.firing) return
    drawAppearance(appearance, position, !!laser)
    if (secondaryAppearance) drawAppearance(secondaryAppearance, position)

    if (playerControlled && playerControlled.isPlayer) {
      let { value, maxHealth } = health
      drawHealthBar(value, maxHealth)
    }

    drawScore()
  })
}

Render.requirements = ['appearance', 'position']

export default Render
