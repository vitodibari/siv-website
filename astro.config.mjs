// @ts-check
import {defineConfig} from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import compress from 'astro-compress';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://summerisvolley.it',

  vite: {
      plugins: [tailwindcss()]
  },

  adapter: node({
    mode: 'standalone',
  }),
});