const express = require('express')
const bodyParser = require('body-parser')
const { init } = require('./services/db')
const routes = require('./Routes/routes')

const app = express()
app.use(bodyParser.json())
app.use(routes)

init().then(() => {
  console.log('starting server on port 3000')
  app.listen(3000)
})
