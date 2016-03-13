'use strict'

import ECS from '../ECS'

let appearance = { size: { w: 65, h: 65 }, image: 'daninator' }

export default (position) => {
  let entity = new ECS.Entity()
  entity.addComponent(new ECS.components.Appearance(appearance))
  entity.addComponent(new ECS.components.Position(position))
  entity.addComponent(new ECS.components.PlayerControlled(true))
  entity.addComponent(new ECS.components.Health(100))
  entity.addComponent(new ECS.components.Collision())
  return entity
}
