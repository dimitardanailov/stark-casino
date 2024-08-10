import express, {Express} from 'express'

import cors from 'cors'

import {health, createUser} from './routes'

const app: Express = express()

const corsOptions = {
  // Replace with the URL of your frontend application
  origin: 'http://localhost:3000',

  // Allow specific HTTP methods
  methods: 'GET,POST,PUT,DELETE',

  // Allow specific headers
  allowedHeaders: 'Content-Type,Authorization',
}
app.use(cors(corsOptions))

app.use(express.json())

app.get('/health', health)
app.post('/users', createUser)

export default app
