import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';
import preact from '@astrojs/preact';

export default defineConfig({
  adapter: netlify(),
  integrations: [
    tailwind(),
    preact()
  ],
  vite: {
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname
      }
    }
  },
  markdown: {
    shikiConfig: {
      // keep your existing langs if present, but be sure 'astro' is included
      langs: ['astro'],
    },
  },
});

