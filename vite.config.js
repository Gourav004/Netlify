import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss()],
  preview: {
    allowedHosts: [
      'netlify-edl4.onrender.com', // ✅ allow your deployed host
      'localhost',                 // ✅ optional, for local testing
    ],
  },
})
