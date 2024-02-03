// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import fs from 'fs'
import path from 'path'

const baseFolder = './src/components/'

const components = fs.readdirSync(baseFolder).filter((f) => fs.statSync(path.join(baseFolder, f)).isDirectory())

const entries = {
  index: './src/index.js',
  ...components.reduce((obj, name) => {
    obj[name] = baseFolder + name
    return obj
  }, {}),
}

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      pkt: '@oslokommune/punkt-css/dist',
      pktAssets: '@oslokommune/punkt-assets/dist',
      '@': resolve(__dirname, './src/'),
      componentSpecs: resolve(__dirname, '../../component-specs/'),
    },
  },
  build: {
    copyPublicDir: false,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: entries,
      name: 'punkt-vue',
      // the proper extensions will be added
      fileName: 'punkt-vue-[name]',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        exports: 'named',
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
