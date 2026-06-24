import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://cloche.escoffierlabs.dev',
  output: 'static',
  trailingSlash: 'never',
  vite: { plugins: [tailwindcss()] },
});
