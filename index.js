'use strict'

import ECS from './src/ECS'

window.ECS = ECS

ECS.$canvas = document.getElementById('game-canvas')
ECS.context = ECS.$canvas.getContext('2d')
ECS.$UIcanvas = document.getElementById('game-ui')
ECS.UIcontext = ECS.$UIcanvas.getContext('2d')

ECS.game = new ECS.game()
ECS.game.startGame()