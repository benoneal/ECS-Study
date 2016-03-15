'use strict'

import ECS from '../ECS'

let appearance = { size: { w: 800, h: 65 }, image: 'laser', imageAlign: 'l' }
let secAppearance = { size: { w: 65, h: 65 }, image: 'laserEyes' }

export default (position) => {
  let entity = new ECS.Entity()
  entity.addComponent(new ECS.components.Appearance(appearance))
  entity.addComponent(new ECS.components.SecondaryAppearance(secAppearance))
  entity.addComponent(new ECS.components.Position(position))
  entity.addComponent(new ECS.components.PlayerControlled())
  entity.addComponent(new ECS.components.Collision())
  entity.addComponent(new ECS.components.Laser())
  entity.addComponent(new ECS.components.SoundEffect())
  return entity
}
