const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 8080

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('3') // change this string to ensure a new version deployed
})

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log('server started on port 8080')
  /* eslint-enable no-console */
})