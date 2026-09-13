// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deployed as a GitHub Pages *user* site (daniel-duhnev.github.io), so no
// base path is needed — internal URLs are root-relative.
export default defineConfig({
  site: 'https://daniel-duhnev.github.io',
  integrations: [sitemap()],
});
