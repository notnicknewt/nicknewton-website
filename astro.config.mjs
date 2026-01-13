// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  server: {
    host: true
  },
  vite: {
    preview: {
      allowedHosts: true
    },
    server: {
      allowedHosts: true
    }
  }
});
