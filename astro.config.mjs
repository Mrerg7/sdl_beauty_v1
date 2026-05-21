import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sdl.beauty',
  output: 'static',
  adapter: cloudflare({
    imageService: 'cloudflare',
    platformProxy: { enabled: true },
    sessions: false,
  }),
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
  image: {
    remotePatterns: [
      { protocol: 'https', hostname: 'imagedelivery.net' },
    ],
  },
  vite: {
    build: {
      // Explicitly use esbuild for CSS — avoids Vite 6 auto-selecting
      // lightningcss which is not available in the CF Pages build env
      cssMinify: 'esbuild',
    },
  },
});
