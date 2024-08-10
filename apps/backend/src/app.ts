import express, {Express} from 'express'

import {health, createUser} from './routes'

const app: Express = express()
app.use(express.json())

app.get('/health', health)
app.post('/users', createUser)

export default app
