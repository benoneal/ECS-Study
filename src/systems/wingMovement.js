'use strict'

import filter from 'lodash/filter'
import forEach from 'lodash/forEach'
import ECS from '../ECS'

let baseSpeed = 0.5

const WingMovement = entities => {
  entities = filter(entities, entity => {
    let { delicious, tooSpicy, spawn } = entity.components
    return !!delicious || !!tooSpicy || !!spawn
  })

  let velocity = (baseSpeed * (1 + ECS.game.speed / 25)) / 100

  forEach(entities, entity => {
    let { delicious, tooSpicy, spawn, position } = entity.components
    if (delicious) entity.components.position.x -= velocity
    if (tooSpicy) entity.components.position.x -= velocity * 1.25
    if (spawn) entity.components.position.x -= velocity * 1.5
    if (position.x <= -0.1) {
      if (tooSpicy) ECS.game.updateScore()
      ECS.removeEntity(entity)
    }
  })
}

WingMovement.requirements = ['position']

export default WingMovement