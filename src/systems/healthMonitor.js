'use strict'

import forEach from 'lodash/forEach'
import ECS from '../ECS'

const HealthMonitor = entities => {
  forEach(entities, entity => (entity.components.health.value <= 0) && ECS.game.endGame())
}

HealthMonitor.requirements = ['playerControlled', 'health']

export default HealthMonitor