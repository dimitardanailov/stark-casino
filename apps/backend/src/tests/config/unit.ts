import config from './base'

import type {Config} from '@jest/types'

const unitTestsConfig: Config.InitialOptions = {
  ...config,
  testTimeout: 120000,
  testRegex: '.test.ts$',
  rootDir: '../../',
}

export default unitTestsConfig
