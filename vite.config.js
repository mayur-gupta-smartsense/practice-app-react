import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    open: true
  },
  // If you have assets in the public folder
  publicDir: 'public',
  // If your entry point is different, adjust this
  root: '.',
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})