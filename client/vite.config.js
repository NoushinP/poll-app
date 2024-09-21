import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const ASSET_URL = process.env.ASSET_URL || '';
export default defineConfig({
  base: `${ASSET_URL}/client/dist/`,
  plugins: [react()],
  server: {
    // base: '/client/dist',
    port: 3000,
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