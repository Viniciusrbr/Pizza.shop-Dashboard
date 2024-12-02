import path from 'node:path'

import react from '@vitejs/plugin-react'
import { defineConfig, InlineConfig, UserConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    setupFiles: ['./test/setup.ts'],
    enviorment: 'happy-dom',
  },
} as UserConfig & {
  test: InlineConfig
})
