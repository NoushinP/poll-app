import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// const ASSET_URL = process.env.ASSET_URL || '';
export default defineConfig({
  // base: `${ASSET_URL}/dist/`,
  plugins: [react()],
  server: {
    host: true,
    strictPort: true,
    port: 8000,
    open: true,
    proxy: {
      '/graphql': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      }, 
    } 

  }
})