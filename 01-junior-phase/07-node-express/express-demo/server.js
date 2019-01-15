const path = require('path')
const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))



app.use((req, res, next) => {
  console.log('IM A MIDDLEWARE 😄')
  req.kittensAreGreat = true
  next()
})

app.use((req, res, next) => {
  // console.log('IM A BETTER MIDDLEWARE 🤑')
  console.log(`kittens are ${ req.kittensAreGreat ? 'great' : 'meh'}`)
  next()
})

app.get('/', (req, res, next) => {
  setTimeout(() => {
    res.send('Thanks for waiting! ❤️')
  }, 100)
})

const staticMiddleware = express.static(path.join(__dirname, 'public'))
app.use(staticMiddleware)

app.get('/kittens/:kittenName', (req, res, next) => {
  const kittenName = req.params.kittenName
  res.send(`
    <style>
      img { width: 100px; height: 100px; }
    </style>
    <h1>Hello, ${kittenName}!</h1>
    <img src="http://robohash.org/${kittenName}?set=set4"></img>
  `)
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`LISTENING ON PORT ${PORT}`)
})

