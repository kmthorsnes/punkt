import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "pkt": "@oslokommune/punkt-css/dist",
      "pktAssets": "@oslokommune/punkt-assets/dist",
      "componentSpecs": resolve(__dirname, "../../component-specs/"),
    },
  },
  build: {
    outDir: "./dist-app",
  },
});
