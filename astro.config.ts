import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import { SITE } from "./src/config";

import vercel from "@astrojs/vercel";
// import { pagefindCopier } from "./pagefind-copier";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,

  integrations: [
    sitemap({
      filter: page => SITE.showArchives || !page.endsWith("/archives"),
    }),
    // @see https://github.com/withastro/starlight/issues/2824
    // pagefindCopier(),
  ],

  markdown: {
    remarkPlugins: [remarkToc, [remarkCollapse, { test: "Table of contents" }]],
    shikiConfig: {
      // For more themes, visit https://shiki.style/themes
      themes: { light: "min-light", dark: "night-owl" },
      wrap: true,
    },
  },

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },

  image: {
    // Used for all Markdown images; not configurable per-image
    // Used for all `<Image />` and `<Picture />` components unless overridden with a prop
    experimentalLayout: "constrained",
  },

  env: {
    schema: {
      PUBLIC_GOOGLE_SITE_VERIFICATION: envField.string({
        access: "public",
        context: "client",
        optional: true,
      }),
    },
  },

  experimental: {
    responsiveImages: true,
    preserveScriptOrder: true,
  },

  adapter: vercel({
    // @see https://docs.astro.build/en/guides/integrations-guide/vercel/#imageservice
    // imageService: true,
  }),
});
