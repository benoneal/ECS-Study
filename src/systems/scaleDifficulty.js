'use strict'

import ECS from '../ECS'

const ScaleDifficulty = entities => {
  ECS.game.multiplier = entities[0].components.position.x * 5
}

ScaleDifficulty.requirements = ['player', 'position']

export default ScaleDifficulty