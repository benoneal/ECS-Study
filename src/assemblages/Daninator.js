'use strict'

import ECS from '../ECS'

let appearance = { size: { w: 55, h: 82 }, image: 'daninator', altImage: 'daninator-eating' }

export default (position) => {
  let entity = new ECS.Entity()
  entity.addComponent(new ECS.components.Player())
  entity.addComponent(new ECS.components.Appearance(appearance))
  entity.addComponent(new ECS.components.Position(position))
  entity.addComponent(new ECS.components.PlayerControlled(true))
  entity.addComponent(new ECS.components.Health(100))
  entity.addComponent(new ECS.components.Collision())
  entity.addComponent(new ECS.components.SoundEffect())
  return entity
}
