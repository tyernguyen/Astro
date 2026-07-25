---
title: "Cách đăng bài mới trên blog này"
description: "Hướng dẫn nhanh: tạo một file Markdown, đẩy lên GitHub, bài tự động xuất hiện."
pubDate: 2026-07-25
category: "chuyen-doi"
---

Bài viết này vừa là bài mẫu, vừa là hướng dẫn. Muốn đăng bài mới, chỉ cần 3 bước:

## 1. Tạo file mới

Trong thư mục `src/content/blog/`, tạo file `.md` với tên không dấu, ví dụ `bai-hoc-tu-nps.md`.

## 2. Điền phần đầu bài (frontmatter)

```
---
title: "Tiêu đề bài viết"
description: "Mô tả ngắn 1-2 câu, hiện ở trang chủ và Google."
pubDate: 2026-08-01
category: "nghe-cx"
draft: false
---
```

Có 3 chuyên mục: `nghe-cx`, `tai-chinh`, `chuyen-doi`. Đặt `draft: true` nếu bài chưa muốn công khai.

## 3. Viết nội dung bằng Markdown

Xuống dòng bình thường, **in đậm**, *in nghiêng*, tiêu đề phụ dùng `##`. Sau đó lưu file, chạy `git push` — Cloudflare sẽ tự build và bài xuất hiện sau khoảng 1 phút.

> Mẹo: viết nháp ở bất cứ đâu, nhưng khi hoàn thiện hãy đọc to lên một lần. Câu nào đọc bị vấp là câu cần sửa.
