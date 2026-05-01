# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Local development

```bash
python3 serve.py
```

Starts a server at `http://localhost:8080`. The 404 page also works locally. The server applies the same security headers as production (CSP, `X-Frame-Options`, `Referrer-Policy`, etc.), so always test through it rather than opening the file directly.

## Architecture

This is a **zero-build, pure vanilla HTML/CSS/JS** site — no frameworks, no bundler, no transpilation.

### File layout

| File | Purpose |
|---|---|
| `index.html` | Entire site: all markup, inline `<style>`, inline `<script>` |
| `404.html` | Custom 404 page |
| `politica-de-privacidade.html` | Privacy policy (LGPD) |
| `og-image.svg` / `og-image.png` | Open Graph image (SVG source, PNG rendered via `@resvg/resvg-js`) |
| `serve.py` | Local dev server with production-parity security headers |
| `sitemap.xml` | `<lastmod>` is auto-updated on each deploy (see `static.yml`) |

All CSS lives in a single `<style>` block at the top of `index.html`. All JavaScript lives in `<script>` blocks at the bottom.

### Theming

CSS custom properties drive dark/light/system theming. The active theme is stored in `localStorage` under the key `nc-theme` and applied as `data-theme` on `<html>` (`"dark"` | `"light"`; system resolves at runtime). Theme is initialised in an inline `<script>` in `<head>` to avoid flash-of-wrong-theme.

### Internationalisation (PT/EN)

All translatable strings live in a `const translations = { pt: {...}, en: {...} }` object near the bottom of `index.html`. Elements carry `data-i18n="key"` (for `innerHTML`) or `data-i18n-placeholder="key"` (for `placeholder`). `setLang(lang)` walks those attributes and swaps strings. Default language is Portuguese (`currentLang = 'pt'`).

### Contact form

[EmailJS](https://www.emailjs.com/) is loaded **lazily** via `IntersectionObserver` — the SDK script is only injected when the `#contato` section scrolls into view. Credentials (`publicKey`, `service_id`, `template_id`) are hardcoded in `index.html`; replace them if forking.

## Deploy

Pushing to `main` triggers `.github/workflows/static.yml`, which updates `sitemap.xml`'s `<lastmod>` to today and deploys to GitHub Pages. No build step — the repo root is served as-is.
