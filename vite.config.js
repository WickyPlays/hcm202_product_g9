import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/hcm202_product_g9/",
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://simple-gemini-express.onrender.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
