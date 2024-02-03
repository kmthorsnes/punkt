// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";
import vue2 from "@vitejs/plugin-vue2";

import fs from "fs";
import path from "path";

const baseFolder = "./src/components/";

const components = fs
  .readdirSync(baseFolder)
  .filter((f) => fs.statSync(path.join(baseFolder, f)).isDirectory());

const entries = {
  index: "./src/index.js",
  ...components.reduce((obj, name) => {
    obj[name] = baseFolder + name;
    return obj;
  }, {}),
};

export default defineConfig({
  plugins: [vue2()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      pkt: "@oslokommune/punkt-css/dist",
      pktAssets: "@oslokommune/punkt-assets/dist",
      componentSpecs: resolve(__dirname, "../../component-specs/"),
    },
  },
  build: {
    copyPublicDir: false,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: entries,
      name: "punkt-vue2",
      // the proper extensions will be added
      fileName: "punkt-vue2-[name]",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        exports: "named",
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
