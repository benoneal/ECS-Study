'use strict'

import random from 'lodash/random'

let mp3Cache = {}

export default name => {
  name += random(1, 5)
  if (!mp3Cache[name]) mp3Cache[name] = new Audio(`mp3/${name}.mp3`) 
  mp3Cache[name].play()
}
