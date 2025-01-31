import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    cssMinify: false,
    minify: false,
  },
  server: {
    port: process.env.PORT || 5173,
    host: '0.0.0.0',
    allowedHosts: ["vizonx.onrender.com"],  // Allow the specified host
    cors: true, // Enable CORS if needed
  },
})