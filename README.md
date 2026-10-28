# SI研究所 website

SI研究所の公式サイト用 Astro プロジェクトです。

## Cloudflare Pages の設定

- Git リポジトリ: `ryom0624/astro-cloudflare`
- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: 空欄（リポジトリのルート）

GitHub の `main` ブランチに変更を追加すると、Cloudflare Pages が自動でビルド・公開できます。

## ブログ記事の追加

`src/content/blog/` に Markdown ファイルを追加してください。各記事の先頭には次の情報が必要です。

```yaml
---
title: "記事タイトル"
description: "記事の短い説明"
pubDate: 2026-10-28
category: "お知らせ"
---
```

本文はこの下に Markdown で書きます。

## 公開前に変更する内容

- `src/layouts/BaseLayout.astro` と各ページ内の `info@example.com` を正式な連絡先へ変更
- `astro.config.mjs` の `site` を実際の公開URLへ変更
- `src/pages/company.astro` に正式な会社情報を追記
- Cloudflare Pages の公開URLが決まったら `public/robots.txt` の sitemap URL も更新
