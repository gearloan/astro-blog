import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';
import preact from '@astrojs/preact';

export default defineConfig({
  adapter: netlify(),
  integrations: [tailwind()], 
  integrations: [preact()],
});


