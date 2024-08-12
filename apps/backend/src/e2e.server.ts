import mongoose from 'mongoose'
import crypto from 'crypto'
import dotenv from 'dotenv'

import app from './app'
import {e2eUri} from './mongo/config'

dotenv.config()

const port = process.env.PORT || 9000

app.listen(port, async () => {
  const dbName = `casino-stark-e2e-${crypto.randomUUID()}`
  await mongoose.connect(e2eUri, {
    dbName,
  })

  console.log(
    `[server]: Server is running at http://localhost:${port} and db: ${dbName}`,
  )
})
