'use strict'

import forEach from 'lodash/forEach'
import clamp from 'lodash/clamp'
import ECS from '../ECS'

let initialised
let baseSpeed = 1
let controls = {
  '87': 'moveUp',
  '38': 'moveUp',
  '83': 'moveDown',
  '40': 'moveDown',
  '68': 'moveRight',
  '39': 'moveRight',
  '65': 'moveLeft',
  '37': 'moveLeft',
  '32': 'fireLaser',
  '80': 'pause'
}

let actions = {
  moveUp: false,
  moveDown: false,
  moveLeft: false,
  moveRight: false,
  fireLaser: false,
  pause: false
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

    if (actions.moveUp === actions.moveDown) {
      actions.moveUp = false
      actions.moveDown = false
    } 

    if (actions.moveUp) modY(entity, position.y - velocity)
    if (actions.moveDown) modY(entity, position.y + velocity)

    if (actions.moveLeft === actions.moveRight) {
      actions.moveLeft = false
      actions.moveRight = false
    } 
    
    if (actions.moveLeft) {
      modX(entity, position.x - velocity)
      ECS.game.decreaseSpeed()
    }
    if (actions.moveRight) {
      modX(entity, position.x + velocity)
      ECS.game.increaseSpeed()
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
