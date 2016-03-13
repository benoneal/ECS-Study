'use strict'

import forEach from 'lodash/forEach'
import find from 'lodash/find'
import has from 'lodash/has'
import clamp from 'lodash/clamp'
import sfx from '../helpers/sfx'
import ECS from '../ECS'

function dimensions(entity) {
  let { width, height } = ECS.$canvas
  let { x, y } = entity.components.position
  let { w, h } = entity.components.appearance.size

  return {
    l: x * width - w / 2,
    t: y * height - h / 2,
    r: x * width + w / 2,
    b: y * height + h / 2
  }
}

function doesIntersect(a, b) {
  a = dimensions(a)
  b = dimensions(b)
  return (a.r > b.l && a.l < b.r && a.t < b.b && a.b > b.t)
}

const Collision = entities => {
  const findByComponent = component => find(entities, e => has(e, `components.${component}`))
  const modHealth = (entity, mod) => {
    let { value, maxHealth } = entity.components.health
    entity.components.health.value = clamp(value + mod, 0, maxHealth)
  }
  let player = findByComponent('playerControlled.isPlayer')
  let laser = findByComponent('laser')

  forEach(entities, entity => {
    let { delicious, tooSpicy, spawn, playerControlled } = entity.components
    if (!playerControlled && laser && laser.components.laser.firing && doesIntersect(laser, entity)) {
      ECS.game.updateScore()
      ECS.removeEntity(entity)
    }

    if (!playerControlled && doesIntersect(player, entity)) {
      // add trigger for animations of player eating and wings being eaten
      if (spawn) {
        if (laser) {
          laser.components.laser.ammo += 60
          laser.components.laser.maxAmmo += 60
        } else {
          ECS.addEntity(new spawn.entity(player.components.position))
        }
      }

      if (tooSpicy) {
        modHealth(player, -tooSpicy.damage)
        ECS.game.increaseDifficulty()

        ECS.$canvas.className='badHit' // refactor out
        setTimeout(() => ECS.$canvas.className='', 100)
        ECS.game.updateScore(-1)
      } 
      if (delicious) {
        sfx('nom')
        modHealth(player, delicious.healing)

        ECS.$canvas.className='goodHit' // refactor out
        setTimeout(() => ECS.$canvas.className='', 100)
        ECS.game.updateScore()
      }

      ECS.removeEntity(entity)
    }
  })

}

Collision.requirements = ['appearance', 'position']

export default Collision