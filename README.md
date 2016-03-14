# Entity Component System (ECS) in Javascript
This is a basic implementation of ECS in Javascript, [based heavily on this tutorial](http://vasir.net/blog/game-development/how-to-build-entity-component-system-in-javascript).

The game is obviously very simple: 

* Eat delicious buffalo wings for points and healing
* Avoid the unecessarily hot death wings (they glow red and hurt bad)
* Collect the laser eyes powerup to allow you to clear paths when things get hairy
* Moving to the right speeds things up and multiplies all points gained

Controls: 
```
W|A|S|D or up|left|down|right = movement
Space = fire lasers (when you have the pickup and have a blue ammo bar below your health)
P = pause (any key will un-pause)
```

To run it, simply open index.html in your browser. 

To mess around with it, run: 
```
npm install
npm run dev
```
Then open index.html in your browser. 

Clicking "Again" after you die triggers a page reload so you don't need to refresh manually while developing: you only need to die (you will). 
