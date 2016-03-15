'use strict'

import forEach from 'lodash/forEach'
import round from 'lodash/round'
import filter from 'lodash/filter'
import every from 'lodash/every'
import random from 'lodash/random'
import clamp from 'lodash/clamp'
import ECS from './ECS'

let wingPos = { x: 1.1, y: 0.5 }

const range = num => Array.from(Array(num).keys())
const filteredEntities = req => filter(ECS.entities, e => every(req, r => !!e.components[r]))

function Game() {
  let { BuffaloWing, DeathWing, LaserPickup, Daninator } = ECS.assemblages

  const gameLoop = () => {
    if (!this._running) return 
    forEach(ECS.systems, system => system(filteredEntities(system.requirements)))
    if (random(300) <= this.speed(0.01)) spawnWings()
    if (random(50000) <= this.difficulty(0.02)) spawnLaserPickup()
    requestAnimationFrame(gameLoop)
  }

  const spawn = (Type, yRange = 0.2) => {
    wingPos.y = clamp(wingPos.y + random(-yRange, yRange), 0.1, 0.8)
    ECS.addEntity(new Type(wingPos))
  }

  const spawnWings = () => (random(1000) >= this.difficulty()) ? spawn(BuffaloWing) : spawn(DeathWing, 0.4)
  const spawnLaserPickup = () => spawn(LaserPickup, 0.6)

  this._speed = 1
  this._difficulty = 10

  this.multiplier = 1
  this.speed = (delta = 0) => (this._speed += delta) * (this.multiplier || 1)
  this.difficulty = (delta = 0) => (this._difficulty += delta) * (this.multiplier || 1)

  this.updateScore = (delta = 1) => ECS.score += round(delta * this.speed() / 2)

  this.startGame = () => {
    this._running = true
    if (window.location.hash.length) {
      this.loadGame()
    } else {
      ECS.addEntity(new Daninator({ x: 0.08, y: 0.5 }))
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
