import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://astro-cloudflare.pages.dev',
  output: 'static',
  integrations: [sitemap()],
});
