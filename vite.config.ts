import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr({ include: '**/*.svg?react' })],
  test: {
    environment: 'jsdom',
    setupFiles: ['./setup.test.tsx'],
    include: ['src/**/*.test.{ts,tsx}'],
  },
})
