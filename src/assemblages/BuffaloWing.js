'use strict'

import random from 'lodash/random'
import ECS from '../ECS'

let appearance = { size: { w: 30, h: 30 }, image: 'buffaloWing' }

export default (position) => {
  var entity = new ECS.Entity()
  entity.addComponent(new ECS.components.Appearance(appearance))
  entity.addComponent(new ECS.components.Position(position))
  entity.addComponent(new ECS.components.Collision())
  entity.addComponent(new ECS.components.Delicious())
  entity.components.position.deg = random(0, 359)
  return entity
}
