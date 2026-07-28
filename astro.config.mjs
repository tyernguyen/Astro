import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  // Sau khi mua domain, đổi thành domain thật, ví dụ: 'https://luanwrites.com'
  site: 'https://blog-luan.pages.dev',

  integrations: [sitemap()],
  adapter: cloudflare()
});