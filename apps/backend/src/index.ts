import mongoose from 'mongoose'

import dotenv from 'dotenv'

import app from './app'
import {mongoUri} from './mongo/config'

dotenv.config()

const port = process.env.PORT || 8000

app.listen(port, async () => {
  await mongoose.connect(mongoUri)

  console.log(`[server]: Server is running at http://localhost:${port}`)
})

export default app
