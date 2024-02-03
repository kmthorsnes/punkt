import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  outDir: './dist-app',
  build: {
    output: 'static',
  },
});
