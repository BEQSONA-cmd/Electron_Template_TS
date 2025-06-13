import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import electron from 'vite-plugin-electron'

export default defineConfig({
  root: 'src',
  plugins: [
    react(),
    electron({
      entry: 'src/main.ts',
      onstart(args) {
        args.startup()
      },
      vite: {
        build: {
          outDir: 'dist-electron',
          rollupOptions: {
            external: ['electron-reload']
          }
        }
      }
    }),
  ],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
})