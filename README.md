# SDL Beauty — sdl.beauty

Luxury med spa brand acquisition landing page for **sdl.beauty** — Scottsdale, AZ.

## Stack

- **Framework**: [Astro](https://astro.build) v5 — static output
- **Adapter**: `@astrojs/cloudflare` — Cloudflare Pages edge delivery
- **Images**: Cloudflare Images CDN (`imagedelivery.net`)
- **Styles**: Tailwind CSS v3 + custom CSS design tokens
- **Structured Data**: JSON-LD (`WebSite`, `LocalBusiness`, `Offer`)
- **Sitemap**: `@astrojs/sitemap` → `/sitemap-index.xml`
- **CTA**: Single `mailto:sales@desertrich.com` acquisition funnel

## Getting Started

```bash
npm install
npm run dev
```

## Build & Deploy

```bash
# Build
npm run build          # outputs to /dist

# Deploy via Wrangler
npm run deploy         # wrangler pages deploy dist
```

### Cloudflare Pages Dashboard Settings

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Output directory | `dist` |
| Node version | `20` |

## Content

All site copy and brand metadata lives in:

```
src/content/brand/sdl.json
```

Update `heroImages`, `email`, `tagline`, and `description` here — the entire site re-derives from this single source of truth.

## Acquisition Contact

**sales@desertrich.com**
