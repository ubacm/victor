import express from 'express'
import bodyParser from 'body-parser'

// Environment configuration.
const env = process.env.NODE_ENV || 'dev'

const app = express()
app.use(bodyParser)

app.post('/checkin', function (req, res) {
  console.log(req.body)
  res.send('Hello World!')
})

app.listen(process.env.PORT || 5000, function () {
  console.log('Victor is starting.')
})