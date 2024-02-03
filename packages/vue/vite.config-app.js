// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      pkt: '@oslokommune/punkt-css/dist',
      pktAssets: '@oslokommune/punkt-assets/dist',
      componentSpecs: resolve(__dirname, '../../component-specs/'),
    },
  },
  build: {
    outDir: './dist-app',
  },
})
