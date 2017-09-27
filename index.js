const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')

const app = express()

app.use(bodyParser.json())
app.use(morgan('combined'))
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}))

require('./routes')(app)

sequelize.sync({force: false})
  .then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })
