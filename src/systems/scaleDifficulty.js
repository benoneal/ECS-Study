'use strict'

import ECS from '../ECS'

const ScaleDifficulty = entities => {
  ECS.game.multiplier = entities[0].components.position.x * 5 + 1
}

ScaleDifficulty.requirements = ['player', 'position']

export default ScaleDifficulty