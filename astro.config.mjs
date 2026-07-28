import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Sau khi mua domain, đổi thành domain thật, ví dụ: 'https://luanwrites.com'
  site: 'https://blog-luan.pages.dev',
  integrations: [sitemap()],
});
