import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sdl.beauty',
  output: 'static',
  adapter: cloudflare({
    imageService: 'cloudflare',
    platformProxy: {
      enabled: true,
    },
    // Disable automatic session KV binding (not needed for static site)
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
  // Remove cssMinify: 'lightningcss' — not bundled in CF Pages build env
  // Vite defaults to esbuild CSS minification which works everywhere
});
