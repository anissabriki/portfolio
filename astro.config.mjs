// Site URL and base path come from the environment so the same code works on
// https://<user>.github.io/<repo>/ (BASE_PATH=/<repo>/) and on a custom domain (BASE_PATH=/).
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: process.env.SITE_URL || 'https://example.com',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
  vite: { plugins: [tailwindcss()] },
});
