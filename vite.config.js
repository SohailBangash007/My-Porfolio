import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Absolute base so clean URLs (and trailing slashes) always load /assets correctly.
  base: '/',
  server: {
    port: 5173,
    open: true,
  },
})
