import config from './base'

import type {Config} from '@jest/types'

const integrationTestsConfig: Config.InitialOptions = {
  ...config,
  testTimeout: 120000,
  testRegex: '.spec.ts$',
  testEnvironment: 'node',
  rootDir: '../integration',
}

export default integrationTestsConfig
