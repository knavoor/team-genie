const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()
app.use(bodyParser.json())
app.use(morgan('combined'))
app.get('*', function (req, res) {
  res.status(200)
    .send('Hello')
}
)
app.listen(process.env.PORT || 3000, function () {
  console.log('Serving Port:3000')
})
