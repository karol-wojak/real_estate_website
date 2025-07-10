import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Get the repository name from the environment variable (if set for CI)
// or hardcode it for consistent GitHub Pages deployment.
// Replace 'your-repository-name' with your actual GitHub repository name.
// const BASE_URL = process.env.VITE_BASE_URL || '/real_estate_website/';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    host: 'localhost',
    port: 5173,
    cors: true,
    proxy: {
      '/api': {
        target: 'http://localhost:1337',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
    },
  },
  preview: {
    host: 'localhost',
    port: 4173,
    cors: true,
  },
})
    