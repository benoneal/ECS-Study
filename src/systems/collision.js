'use strict'

import forEach from 'lodash/forEach'
import find from 'lodash/find'
import has from 'lodash/has'
import clamp from 'lodash/clamp'
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
  let player = findByComponent('player')
  let laser = findByComponent('laser')
  let { appearance, position, soundEffect } = player.components

  forEach(entities, entity => {
    let { delicious, tooSpicy, spawn, playerControlled } = entity.components

    // handle laser collisions
    if (!playerControlled && laser && laser.components.laser.firing && doesIntersect(laser, entity)) {
      if (tooSpicy) ECS.game.updateScore(5)
      if (delicious) ECS.game.updateScore(2)
      if (!spawn) ECS.removeEntity(entity)
    }

    // handle player collisions
    if (!playerControlled && doesIntersect(player, entity)) {
      appearance.useAltImage = true
      setTimeout(() => appearance.useAltImage = false, 200)
      if (spawn) { // with pickups
        soundEffect.effect = 'yeah'
        soundEffect.action = 'fire'
        if (laser) {
          laser.components.laser.ammo += 60
          laser.components.laser.maxAmmo += 60
        } else {
          ECS.addEntity(new spawn.entity(position))
        }
      }

      if (tooSpicy) { // with DeathWings
        soundEffect.effect = 'hot'
        soundEffect.action = 'fire'
        modHealth(player, -tooSpicy.damage)
        ECS.game.difficulty(1)
        ECS.game.updateScore(-1)
      } 

      if (delicious) { // with BuffaloWings
        soundEffect.effect = 'nom'
        soundEffect.action = 'fire'
        modHealth(player, delicious.healing)
        ECS.game.updateScore()
      }

      ECS.removeEntity(entity)
    }
  })

}

Collision.requirements = ['appearance', 'position']

export default Collision