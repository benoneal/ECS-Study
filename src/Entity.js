'use strict'

function Entity() {
  this.id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    let r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8)
    return v.toString(16)
  })
  this.components = {}
  return this
}

Entity.prototype.addComponent = function(component) {
  this.components[component.name] = component
  return this
}

Entity.prototype.removeComponent = function(component) {
  let name = typeof component === 'function' 
    ? componentName.prototype.name 
    : component

  delete this.components[name]
  return this
}

Entity.prototype.dehydrate = function() {
  console.log(JSON.stringify(this, null, 4))
  return this
}

export default Entity
