const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')

// SETTINGS
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// STATIC
app.use(express.static(path.join(__dirname, 'public')))

// MIDDLEWARES

// GLOBAL

// ROUTES
app.get('/', (req, res) => {
  res.send('INDEX')
})

// SERVER
app.listen(port, () => {
  console.log(`Server listened on port ${port}`);
})