# Changelog — sdl.beauty

## 2026-09-30 — Comprehensive optimization pass

### I. Technical foundation
- Removed render-blocking Google Fonts `@import`; non-blocking preload + `media=print` swap
- LCP preload for hero image, `preconnect` to `imagedelivery.net` + fonts
- Hardened `public/_headers`: HSTS (includeSubDomains + preload), CSP, `Cross-Origin-Opener-Policy`, immutable caching for `/_astro/*`, short cache for `*.xml`/`robots.txt`
- Extended JSON-LD: `Organization`, `Product` (domain), `Offer` with `InStock` + price-on-application, `BreadcrumbList`
- `astro.config.mjs`: sitemap `changefreq: weekly`, 404 filtered, esbuild minify
- `wrangler.toml`: pinned `compatibility_date`, free-plan vars only (static + lightweight Functions)

### II. SEO
- Title format: `sdl.beauty | Premium Domain for Sale | SDL Beauty — …`
- Meta description with availability + CTA + escrow; added `keywords`, `geo.region/placename`, OG/Twitter alt text
- New `FAQ` section (+ `FAQPage` schema) targeting long-tail: "buy .beauty domains", "premium domain for sale", transfer process
- Canonical + robots + sitemap-index verified (`/sitemap-index.xml` → `/sitemap-0.xml`)

### III. CRO
- Above-the-fold: availability pill, escrow/confidential badges, dual CTAs (Acquire + Make Offer)
- New `TrustBar`: escrow-secured, SSL/edge, NDA, clean title
- Multiple CTAs with `data-cta` tracking hooks (`hero-`, `buyer-`, `final-`, `sticky-`, `exit-`)
- New `ExitIntent`: desktop exit-intent + mobile timed fallback, once per session
- Sticky mobile CTA with safe-area padding

### IV. Mobile
- All CTAs `min-height: 48px`; body `font-size: 16px` minimum; `overflow-x: clip`
- Responsive gallery `srcset/sizes` + `aspect-ratio` (no CLS), `viewport-fit=cover`
- Sticky CTA, safe-area insets, `apple-mobile-web-app-capable`

### V. Authority building (foundations)
- FAQ content for featured snippets; Product/Offer/FAQ schema for rich results
- `security.txt`, `manifest.webmanifest`, `favicon.svg` for trust/crawlability

### VI. Design
- Dark/light mode toggle (`data-theme`, localStorage + OS preference), new design tokens
- Trust bar, FAQ, exit overlay, sticky CTA styles; preserved minimal luxury aesthetic

### VII. Validation
- `npm run build` passes (Astro static, 2 pages, sitemap generated)
- Single `<h1>`, all images have `alt`, skip link + ARIA labels, 14 mailto CTAs functional
- Stays on Cloudflare free plan: static Pages + `functions/api/health.js` only

### Deployment
- Backup branch before push; deploy via `wrangler pages deploy dist`
- Post-deploy: monitor 48h, resubmit sitemap in Google Search Console
- NOTE 2026-09-30: `functions/api/health.js` removed after deploy-stage failure
  (`No such module "node:stream"` — project lacks `nodejs_compat` flag).
  Site ships 100% static (proven stable). To re-add an API route later,
  enable `nodejs_compat` in Pages dashboard → Functions → Compatibility flags.
