import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://agent-notify.solomonneas.dev',
  output: 'static',
  vite: { plugins: [tailwindcss()] },
});
