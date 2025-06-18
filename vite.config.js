    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'

    // Get the repository name from the environment variable (if set for CI)
    // or hardcode it for consistent GitHub Pages deployment.
    // Replace 'your-repository-name' with your actual GitHub repository name.
    const BASE_URL = process.env.VITE_BASE_URL || '/real_estate_website/';

    // https://vitejs.dev/config/
    export default defineConfig({
      plugins: [react()],
      base: BASE_URL, // Set the base URL for deployment
    })
    