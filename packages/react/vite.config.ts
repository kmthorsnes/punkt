import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import * as packageJson from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      include: ['src/components/', 'src/index.ts'],
    }),
    react(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      pkt: '@oslokommune/punkt-css/dist',
      pktAssets: '@oslokommune/punkt-assets/dist',
      componentSpecs: resolve(__dirname, '../../component-specs/'),
    },
  },
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'punkt-react',
      fileName: (format) => `punkt-react.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
      output: {
        exports: 'named',
        globals: {
          react: 'React',
        },
      },
    },
  },
})
