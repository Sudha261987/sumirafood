import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.de
export default defineConfig({
  base: "/recipe-finder/",
  plugins: [
    react(),tailwindcss(),
  ],
})
