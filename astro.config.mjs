import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Sau khi gắn domain tyertrovert.site vào Cloudflare, đổi thành 'https://tyertrovert.site'
  site: 'https://astro25072026.tyernguyen.workers.dev',
  integrations: [sitemap()],
});
