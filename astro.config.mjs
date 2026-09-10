import { defineConfig } from 'astro/config';

// Project Pages: https://teassty.github.io/mebel-slavika/
export default defineConfig({
  site: 'https://teassty.github.io',
  // Trailing slash required so BASE_URL + 'images/...' resolves correctly on GH Pages
  base: '/mebel-slavika/',
  compressHTML: true,
});
