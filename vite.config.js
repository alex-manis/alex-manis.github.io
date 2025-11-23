import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Имя вашего репозитория на GitHub (без .git)
// Если репозиторий в корне GitHub Pages, оставьте пустую строку ''
const REPO_NAME = ''

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' 
    ? (REPO_NAME ? `/${REPO_NAME}/` : '/')
    : '/',
  server: {
    open: true,
    port: 5173,
    strictPort: false,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})

