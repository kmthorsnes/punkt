import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import react from "@astrojs/react";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  base: import.meta.env.BASE_URL,
  integrations: [vue(), mdx(), react()],
  vite: {
    resolve: {
      alias: {
        "@pkt": ["@oslokommune/punkt-css/dist"],
        "@pkt-assets": ["@oslokommune/punkt-assets/dist"],
        "~/*": ["./*"],
        "@/*": ["./*"],
        "~~/*": ["./*"],
        "@@/*": ["./*"],
      },
    },
  },
  markdown: {
    syntaxHighlight: "prism",
  },
});
