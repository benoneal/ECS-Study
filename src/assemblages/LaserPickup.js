'use strict'

import ECS from '../ECS'

let appearance = { size: { w: 50, h: 50 }, image: 'laserPickup' }

export default (position) => {
  let entity = new ECS.Entity()
  entity.addComponent(new ECS.components.Appearance(appearance))
  entity.addComponent(new ECS.components.Position(position))
  entity.addComponent(new ECS.components.Collision())
  entity.addComponent(new ECS.components.Spawn(ECS.assemblages.Laser))
  return entity
}
