/* eslint-disable indent */

import fs from 'fs'

import react from '@vitejs/plugin-react'
import { loadEnv, type ConfigEnv } from 'vite'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig as defineTestConfig } from 'vitest/config'

export default ({ mode }: ConfigEnv) => {
  // eslint-disable-next-line no-undef
  const env = loadEnv(mode, process.cwd())

  const isDevelop: boolean = env.VITE_DEVELOP === 'true'

  return defineTestConfig({
    plugins: [react(), tsconfigPaths(), svgr({ include: '**/*.svg?react' })],

    test: {
      environment: 'jsdom',
      setupFiles: ['./setup.test.tsx'],
      include: ['src/**/*.test.{ts,tsx}'],
    },

    server: {
      https: isDevelop
        ? {
            key: fs.readFileSync('localhost-key.pem'),
            cert: fs.readFileSync('localhost.pem'),
          }
        : undefined,
    },
  })
}
