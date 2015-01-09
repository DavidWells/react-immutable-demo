# React Immutable Demo / Playground

Forked from https://github.com/jergason/happytrack and dumbed down to ES5. Many thanks to @jergason for the talk and the resources.

# Why Immutable?

>If an object is immutable, it can be "copied" simply by making another reference to it instead of copying the entire object. Because a reference is much smaller than the object itself, this results in memory savings and a potential boost in execution speed for programs which rely on copies (such as an undo-stack).

[The case for Immutability](https://github.com/facebook/immutable-js#the-case-for-immutability)

[Watch Video from @jergason for more info](http://youtu.be/Ofx0Gl5viqE?t=31m2s)

> Track your happies

happytrack is a small demonstration of using [immutable.js](https://github.com/facebook/immutable-js)
and cursors to manage data flow in an application instead of Flux.

## Installation

```bash
npm i
npm run build
npm start
```

Go to [http://localhost:3000](http://localhost:3000) to see it in action.

# Other Immutable resources

* [History-tracking wrapper for Immutable.js collections and cursors](https://github.com/KualiCo/immutable-history)
