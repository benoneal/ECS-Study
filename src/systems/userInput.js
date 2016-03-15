'use strict'

import forEach from 'lodash/forEach'
import clamp from 'lodash/clamp'
import ECS from '../ECS'

let initialised
let baseSpeed = 1
let controls = {
  '87': 'moveUp', // w
  '38': 'moveUp', // up
  '83': 'moveDown', // s
  '40': 'moveDown', // down
  '68': 'moveRight', // d
  '39': 'moveRight', // right
  '65': 'moveLeft', // a
  '37': 'moveLeft', // left
  '32': 'fireLaser', // space
  '80': 'pause', // p
  '67': 'capture' // c
}

let actions = {
  moveUp: false,
  moveDown: false,
  moveLeft: false,
  moveRight: false,
  fireLaser: false,
  pause: false,
  capture: false
}

const startAction = e => actions[controls[e.keyCode]] = true
const stopAction = e => actions[controls[e.keyCode]] = false
const handlePause = e => {
  stopAction(e)
  ECS.game.togglePause()
  window.removeEventListener('keydown', handlePause)
}

const UserInput = entities => {
  if (!initialised) {
    window.addEventListener('keydown', startAction)
    window.addEventListener('keyup', stopAction)
    initialised = true
  }
  const modY = (entity, pos) => entity.components.position.y = clamp(pos, 0, 1)
  const modX = (entity, pos) => entity.components.position.x = clamp(pos, 0, 0.5)

  let velocity = (baseSpeed * (1 + ECS.game.speed / 50)) / 100

  forEach(entities, entity => {
    let { laser, position, soundEffect } = entity.components
    if (actions.pause) {
      window.addEventListener('keydown', handlePause)
      ECS.game.togglePause()
    }

    if (actions.capture) {
      ECS.game.saveGame()
      actions.capture = false
    }

    if (actions.moveUp !== actions.moveDown) {
      if (actions.moveUp) modY(entity, position.y - velocity)
      if (actions.moveDown) modY(entity, position.y + velocity)
    }

    if (actions.moveLeft !== actions.moveRight) {
      if (actions.moveLeft) {
        modX(entity, position.x - velocity)
        ECS.game.decreaseSpeed()
      }
      if (actions.moveRight) {
        modX(entity, position.x + velocity)
        ECS.game.increaseSpeed()
      }
    }

    if (laser) {
      soundEffect.effect = actions.fireLaser && 'pew'
      soundEffect.action = actions.fireLaser ? 'start' : 'stop'

      laser.firing = actions.fireLaser
      actions.fireLaser && laser.ammo--
      if (laser.ammo <= 0) ECS.removeEntity(entity)
    }
  })
}

UserInput.requirements = ['playerControlled', 'position']

export default UserInput
