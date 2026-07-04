// @ts-check
import {defineConfig} from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: process.env.BASE_URL || '/',
  base: process.env.BASE_URL || '/',

  vite: {
      plugins: [tailwindcss()]
  },

  integrations: [sitemap()],
});