import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
    plugins: [ react(), tailwindcss() ],
    build: {
        outDir: path.resolve(__dirname, '../../dist/web'),  // Output to root/dist/web
        emptyOutDir: true
    },
    envDir: path.resolve(__dirname, '../../'), // Load from root
    envPrefix: 'VITE_', // Only expose VITE_ vars
    base: './',
})