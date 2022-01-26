import 'dotenv/config'
import express from 'express'

import postRoutes from './routes/postRoutes.js'

const app = express()

const PORT = process.env.PORT || 3000

app
  .use(express.urlencoded({ extended: true })) // Handle request parameters
  .use(express.json()) // Handle request body
  .use(express.static('public')) // Serve static asset files
  .set('view engine', 'ejs') // Set view engine to EJS
  .use('/blog', postRoutes) // Blog routes
  .get('/', (req, res) => res.render('index')) // Static pages routing
  .get('/about', (req, res) => res.render('about'))
  .listen(PORT, () => console.log(`App is listening on port ${PORT}`))
