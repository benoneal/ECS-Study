'use strict'

import random from 'lodash/random'
import ECS from '../ECS'

let appearance = { size: { w: 35, h: 35 }, image: 'deathWing' }

export default (position) => {
  var entity = new ECS.Entity()
  entity.addComponent(new ECS.components.Appearance(appearance))
  entity.addComponent(new ECS.components.Position(position))
  entity.addComponent(new ECS.components.Collision())
  entity.addComponent(new ECS.components.TooSpicy())
  entity.components.position.deg = random(0, 359)
  return entity
}
