import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import electron from 'vite-plugin-electron'

export default defineConfig({
  root: 'src',
  plugins: [
    react(),
    electron([
      {
        entry: './main.ts',
        onstart({ startup }) {
          startup()
        },
        vite: {
          build: {
            outDir: 'dist-electron',
            rollupOptions: {
              external: ['electron-reload']
            }
          }
        }
      },
      {
        entry: './preload.ts',
        vite: {
          build: {
            outDir: 'dist-electron'
          }
        }
      }
    ]),
  ],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
})
