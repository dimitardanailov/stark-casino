import * as dotenv from 'dotenv'

dotenv.config()

const mongoUri = process.env.MONGO_URI || ''
const e2eUri = process.env.MONGO_E2E_URI || ''

export {mongoUri, e2eUri}
