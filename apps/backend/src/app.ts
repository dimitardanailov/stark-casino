import express, {Express} from 'express'

import {health} from './routes'

const app: Express = express()

app.get('/health', health)

export default app
