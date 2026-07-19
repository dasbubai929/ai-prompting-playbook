import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [cloudflare()],
  vite: {
    plugins: [tailwindcss()],
  },
});