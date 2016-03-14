'use strict'

import forEach from 'lodash/forEach'
import ECS from '../ECS'
import random from 'lodash/random'

let mp3Cache = {}
let sfxCache = {}

const actions = {
  fire(id, effect) { mp3Cache[effect].play() },
  start(id, effect) { 
    if (sfxCache[id]) return 
    sfxCache[id] = mp3Cache[effect] 
    sfxCache[id].play()
  },
  stop(id) { 
    if (!sfxCache[id]) return
    sfxCache[id].pause()
    sfxCache[id] = null 
  }
}

const SoundFX = entities => {
  forEach(entities, entity => {
    let { effect, action } = entity.components.soundEffect
    if (!action || !effect) return actions.stop(entity.id)
    effect += random(1, 5)
    if (!mp3Cache[effect]) mp3Cache[effect] = new Audio(`mp3/${effect}.mp3`) 

    actions[action] && actions[action](entity.id, effect)
    entity.components.soundEffect.effect = ''
    entity.components.soundEffect.action = ''
  })
}

SoundFX.requirements = ['soundEffect']

export default SoundFX