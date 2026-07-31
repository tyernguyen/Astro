# Hướng dẫn triển khai blog (tổng chi phí: chỉ tiền domain ~300k/năm)

## Bước 0 — Chạy thử trên máy (tùy chọn)

Cài Node.js (https://nodejs.org, bản LTS), rồi mở terminal trong thư mục này:

```
npm install
npm run dev
```

Mở http://localhost:4321 để xem blog. Sửa file nào, trang tự cập nhật ngay.

## Bước 1 — Đưa code lên GitHub (miễn phí)

1. Tạo tài khoản GitHub nếu chưa có: https://github.com
2. Tạo repository mới, đặt tên ví dụ `blog`, chọn Private hoặc Public đều được.
3. Trong thư mục này chạy:

```
git init
git add .
git commit -m "Blog dau tien"
git branch -M main
git remote add origin https://github.com/TEN-CUA-LUAN/blog.git
git push -u origin main
```

## Bước 2 — Deploy lên Cloudflare (miễn phí)

Repo này đang deploy qua **Workers Builds** (Cloudflare đã gộp Pages vào
Workers cho dự án mới — không dùng luồng "Create → Pages" cũ nữa):

1. Tạo tài khoản: https://dash.cloudflare.com
2. Vào **Workers & Pages → Create → Workers → Connect to Git**, chọn repo.
3. Cấu hình build:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Output directory: `dist`
4. Bấm **Save and Deploy**. Blog sẽ có địa chỉ dạng `https://ten-project.ten-tai-khoan.workers.dev`.

Từ đây về sau, mỗi lần `git push` là blog tự cập nhật. Đăng bài = tạo file .md mới + push.

Blog hiện tại: project `astro25072026`, địa chỉ
`https://astro25072026.tyernguyen.workers.dev`.

## Bước 3 — Gắn domain riêng (khoản chi duy nhất)

1. Domain đã mua sẵn tại GoDaddy: `tyertrovert.site` (chưa trỏ về Cloudflare).
2. Trong Cloudflare dashboard → project `astro25072026` → **Settings →
   Domains & Routes → Custom Domains → Add**, nhập `tyertrovert.site`.
   Cloudflare sẽ hướng dẫn cập nhật nameserver/DNS bên GoDaddy.
3. Sửa dòng `site:` trong file `astro.config.mjs` và dòng `Sitemap:` trong
   `public/robots.txt` thành `https://tyertrovert.site`, rồi push lại.

## Bước 4 — Cài đo lường hiệu suất (miễn phí)

### Cloudflare Web Analytics (nhẹ, không cần banner cookie)
1. Cloudflare dashboard → **Analytics & Logs → Web Analytics → Add a site**.
2. Copy đoạn mã `<script ...>` được cấp.
3. Dán vào file `src/layouts/Base.astro`, ngay chỗ có dòng ghi chú `<!-- ĐO LƯỜNG: ... -->`.

### Google Search Console (quan trọng nhất cho nội dung)
1. Vào https://search.google.com/search-console → Add property → nhập domain.
2. Xác minh bằng DNS (Cloudflare làm bước này rất nhanh).
3. Sau 2–4 tuần sẽ thấy: người ta tìm từ khóa gì ra blog, bài nào được click nhiều — dùng dữ liệu này để chọn đề tài bài tiếp theo.

### (Tùy chọn) Google Analytics 4
Nếu muốn phân tích sâu hơn (thời gian đọc, luồng di chuyển), tạo property GA4 và dán mã gtag vào cùng vị trí trong `Base.astro`.

## Cách đăng bài mới

1. Tạo file mới trong `src/content/blog/`, ví dụ `bai-hoc-nps.md`.
2. Điền frontmatter (xem bài mẫu `cach-viet-bai-moi.md`).
3. Viết nội dung Markdown.
4. `git add . && git commit -m "Bai moi" && git push` — xong.

## Nhịp đo lường gợi ý (mỗi tháng, 15 phút)

| Chỉ số | Nguồn | Mục tiêu 6 tháng đầu |
|---|---|---|
| Số bài đăng | Đếm tay | 4 bài/tháng |
| Lượt xem | Cloudflare Analytics | Tăng đều, không cần con số tuyệt đối |
| Số truy vấn hiển thị trên Google | Search Console | Xuất hiện ổn định |
| Top 3 bài kéo traffic | Search Console | Viết thêm bài cùng chủ đề |
