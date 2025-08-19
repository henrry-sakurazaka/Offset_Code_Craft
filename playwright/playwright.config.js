import { defineConfig } from '@playwright/test';

const isCI = !!process.env.CI;

export default defineConfig({
  testDir: './playwright',
  timeout: 30 * 1000,
  expect: { timeout: 5000 },
  fullyParallel: true,
  retries: isCI ? 2 : 0,
  reporter: [['list'], ['html', { open: 'never' }]],

  use: {
    baseURL: 'http://localhost:3000',
    headless: true,
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },

  webServer: {
    command: isCI ? 'bin/rails server -p 3000' : undefined,
    port: 3000,
    timeout: 120 * 1000,
    reuseExistingServer: true,
    cwd: '../' //Rails プロジェクトのルート
  }
});



