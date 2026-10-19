// Astro settings. The site builds to plain HTML files in the "dist" folder.
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://proflodrainage.com',
  output: 'static',
  trailingSlash: 'ignore',
});
