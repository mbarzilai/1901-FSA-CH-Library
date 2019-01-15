# Node / Express Quiz Questions

#### Q1: What does the following code log to the console (do not run this code in a repl - reason about it on your own):

```javascript
console.log(‘hello’)
setTimeout(() => {
  console.log(‘world’)
}, 0)
console.log(‘goodbye’)
```

* hello, world, goodbye
* hello, goodbye, world
* goodbye, world, hello
* world, hello, goodbye

#### Q2: Which of the following is NOT a BUILT-IN Node module?

* http
* fs
* express
* path

#### Q3: What is the advantage of performing a “Big O” analysis on an algorithm?

* To benchmark the actual time it takes for an algorithm to run
* To determine if one algorithm is better than another
* To decide between heuristics when trying to come up with practical solutions to normally intractable problems
* To compare the growth curves of algorithms as their input sizes get very, very large

#### Q4: What is the purpose of the package.json file in a Node project?

* Store a list of dependencies for the project
* Give the project a name
* Store metadata about the project
* All of the above
* None of the above

#### Q5: Which of the following Express route handlers will be executed for a request like GET /puppies HTTP/1.1. Select ALL THAT APPLY.

```
A: app.use((req, res) => {})
B: app.get(‘/’, (req, res) => {})
C: app.get(‘/puppies’, (req, res) => {})
D: app.use(‘/’, (req, res) => {})
```

#### Short Answer

In as much detail as possible, describe what happens when you require a module in Node (ex. require(‘./someFile’))
