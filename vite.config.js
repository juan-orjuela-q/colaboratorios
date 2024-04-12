import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/encuentrodepromotores/',
  build: {
    assetsDir: 'assets', // Directorio para los assets en producción
  },
  plugins: [react()],
})
