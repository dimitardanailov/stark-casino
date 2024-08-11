import { defineConfig, devices } from "@playwright/test";

/**
 * Documentation:
 * https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  // Glob patterns or regular expressions to ignore test files.
  testIgnore: "*test-assets",

  // Glob patterns or regular expressions that match test files.
  testMatch: "*.spec.ts",

  timeout: 30000,

  webServer: {
    command: "npm run start",
    url: "http://127.0.0.1:3000",
    reuseExistingServer: !process.env.CI,
    stdout: "ignore",
    stderr: "pipe",
  },

  use: {
    baseURL: "http://127.0.0.1:3000",
  },

  testDir: "./src/tests",

  snapshotPathTemplate: "{testDir}/__screenshots__/{testFilePath}/{arg}{ext}",

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
