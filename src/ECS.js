'use strict'

import Entity from './Entity'
import components from './Components'
import systems from './Systems'
import assemblages from './assemblages'
import game from './Game'

let ECS = {
  Entity,
  components,
  systems,
  assemblages,
  game,
  entities: {},
  score: 0,
  addEntity(entity) {
    ECS.entities[entity.id] = entity
  }, 
  removeEntity(entity) {
    delete ECS.entities[entity.id || entity]
  }
}

export default ECS