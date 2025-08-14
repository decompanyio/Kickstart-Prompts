import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@repo/assets': path.resolve(__dirname, '../../packages/assets'),
      '@repo/tailwind-config': path.resolve(
        __dirname,
        '../../packages/tailwind-config'
      ),
    },
  },
})
