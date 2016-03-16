'use strict'

import forEach from 'lodash/forEach'
import ECS from '../ECS'
import clearCanvas from '../helpers/clearCanvas'
import husl from 'husl'

let imgCache = {}

const drawImageRot = (img, x, y, w, h, deg) => {
  var rad = deg * Math.PI / 180
  ECS.context.translate(x + w / 2, y + h / 2)
  ECS.context.rotate(rad)
  ECS.context.drawImage(img, w / 2 * (-1), h / 2 * (-1), w, h)
  ECS.context.rotate(rad * (-1) )
  ECS.context.translate((x + w / 2) * (-1), (y + h / 2) * (-1))
}

let imagePosition = (x, y, w, h, align) => {
  let { width, height } = ECS.$canvas
  let t = y * height,
      b = y * height - h,
      m = y * height - h / 2,
      l = x * width,
      c = x * width - w / 2,
      r = x * width - w
  let coords = {
    c: { x: c, y: m },
    l: { x: l, y: m },
    r: { x: r, y: m },
    t: { x: c, y: t },
    b: { x: c, y: b },
    tl: { x: l, y: t },
    tr: { x: r, y: t },
    bl: { x: l, y: b },
    br: { x: r, y: b },
  }
  return coords[align]
}

const drawAppearance = (appearance, position) => {
  let { image, imageAlign, size, altImage, useAltImage } = appearance
  if (useAltImage) image = altImage
  let { w, h } = size
  let { x, y, deg } = position
  w = w * 1.6 // trying to get hitboxes roughly comparable to graphic
  h = h * 1.6
  let pos = imagePosition(x, y, w, h, imageAlign)

  if (!imgCache[image]) {
    let img = new Image()
    img.onload = () => {
      imgCache[image] = img
      drawImageRot(imgCache[image], pos.x, pos.y, w, h, deg)
    }
    img.src = image
  } else {
    drawImageRot(imgCache[image], pos.x, pos.y, w, h, deg)
  }
}

const Render = entities => {
  clearCanvas(ECS.context, ECS.$canvas)
  ECS.$canvas.style.backgroundColor = husl.toHex(212, ECS.game.multiplier * 25, 40)

  forEach(entities, entity => {
    let { appearance, secondaryAppearance, position, health, playerControlled, laser } = entity.components

    if (laser && !laser.firing) return
    drawAppearance(appearance, position)
    if (secondaryAppearance) drawAppearance(secondaryAppearance, position)
  })
}

Render.requirements = ['appearance', 'position']

export default Render
