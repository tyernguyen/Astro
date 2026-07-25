# Cách đưa giao diện này vào repo Astro của bạn

Copy 4 file sau vào repo (giữ nguyên đường dẫn):

- `src/styles/global.css`
- `src/layouts/Base.astro`
- `src/pages/index.astro`
- `src/pages/blog/[...id].astro` — trong gói tải về file này tên là `-...id-.astro`; **đổi tên lại thành `[...id].astro`** khi copy (dấu ngoặc vuông là bắt buộc với Astro).

Sau đó:

```
git add . && git commit -m "Giao dien blog" && git push
```

Cloudflare Pages sẽ tự build. Chạy thử trên máy: `npm install && npm run dev` → http://localhost:4321

Không cần sửa gì thêm — code đọc thẳng từ `src/content/blog/` theo đúng schema trong `content.config.ts` (title, description, pubDate, category, draft). Mục lục lấy từ các tiêu đề `##`; thời gian đọc tính từ số chữ.
