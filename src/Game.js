'use strict'

import forEach from 'lodash/forEach'
import round from 'lodash/round'
import filter from 'lodash/filter'
import every from 'lodash/every'
import random from 'lodash/random'
import clamp from 'lodash/clamp'
import ECS from './ECS'

let defaultStartPos = { x: 1.1 }

const range = num => Array.from(Array(num).keys())
const filteredEntities = req => filter(ECS.entities, e => every(req, r => !!e.components[r]))

function Game() {
  let { BuffaloWing, DeathWing, Daninator } = ECS.assemblages

  const gameLoop = () => {
    forEach(ECS.systems, system => system(filteredEntities(system.requirements)))
    if (random(200) <= this.speed) this.spawnWings()
    if (random(10000) <= this.speed) this.spawnLaserPickup()
    this.speed += 0.01
    this.difficulty += 0.01
    if (this._running) requestAnimationFrame(gameLoop)
  }

  const modSpeed = speed => this.speed = clamp(speed, 1, 50)
  const modDifficulty = difficulty => this.difficulty = clamp(difficulty, 10, 80)
  const wingFactory = Type => ECS.addEntity(new Type(defaultStartPos))

  this.speed = 1
  this.increaseSpeed = () => modSpeed(this.speed + 1)
  this.decreaseSpeed = () => modSpeed(this.speed - 1)

  this.difficulty = 10
  this.increaseDifficulty = () => modDifficulty(this.difficulty + 2)
  this.decreaseDifficulty = () => modDifficulty(this.difficulty - 1)

  this.spawnWings = () => wingFactory((random(100) >= this.difficulty) ? BuffaloWing : DeathWing)
  this.spawnLaserPickup = () => ECS.addEntity(new ECS.assemblages.LaserPickup(defaultStartPos))

  this.updateScore = (delta = 1) => {
    ECS.score += round(delta * (this.speed + this.difficulty))
  }

  this.startGame = () => {
    this._running = true
    if (window.location.hash.length) {
      this.loadGame()
    } else {
      ECS.addEntity(new Daninator({ x: 0.08, y: 0.5 }))
      this.spawnWings()
    }
    requestAnimationFrame(gameLoop)
  }

  this.loadGame = () => {
    let { entities, score } = JSON.parse(atob(window.location.hash.split('#')[1]))
    ECS.entities = entities
    ECS.score = score
  }

  this.saveGame = () => {
    let data = { entities: ECS.entities, score: ECS.score }
    window.location.hash = `#${btoa(JSON.stringify(data))}`
  }

  this.togglePause = () => {
    this._running = !this._running
    this._running && requestAnimationFrame(gameLoop)
  }

  this.endGame = () => {
    this._running = false
    document.getElementById('final-score').innerHTML = ECS.score
    document.getElementById('game-over').className = ''
    setTimeout(() => document.getElementById('game-canvas').className = 'game-over', 100)
  }

  return this
}

export default Game
