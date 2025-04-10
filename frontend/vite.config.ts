import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    // Ensure we're not trying to use Node.js modules in the browser
    rollupOptions: {
      external: ['aws-amplify'],
    },
  },
  // Define environment variables
  define: {
    'process.env': process.env
  }
})
