# Ayotisegun — artist website

Portfolio site for **Obajuluwa Timothy Oluwasegun (Ayotisegun)**, impasto painter.
Built with [Astro](https://astro.build): fast static pages with automatic image optimisation.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build in dist/
```

## Pages

| Page | File |
|---|---|
| Home (video hero, statement, selected works, commissions CTA) | `src/pages/index.astro` |
| Works grid | `src/pages/works/index.astro` |
| Single artwork | `src/pages/works/[slug].astro` |
| About | `src/pages/about.astro` |
| Commissions + contact | `src/pages/commissions.astro` |

## Common edits

**Contact details**: edit `src/site.ts`. Add `email`, `whatsapp` and `youtube` there; empty
values are hidden, and the "Enquire" button uses WhatsApp, then email, then Instagram.

**Add a painting**
1. Put the photo in `src/assets/works/` (e.g. `market-day.jpg`).
2. Create `src/content/works/market-day.md`:

   ```md
   ---
   title: Market Day
   year: 2026
   medium: Oil on canvas, impasto
   dimensions: 90 × 120 cm
   image: ../../assets/works/market-day.jpg
   alt: Describe what is in the painting for screen readers.
   status: available        # available | sold | commission | private
   featured: true           # show on the home page
   order: 3                 # position on the home page
   ---

   A short description of the work.
   ```

**Home page video**: `public/media/hero.mp4` (keep it under ~3 MB, muted, a few seconds of slow pan).

## Placeholders to confirm with the artist

- Titles "Riders at Dusk" and "Riders in Grey" are working titles.
- Dimensions are not yet listed.
- `site` in `astro.config.mjs` should be set to the real domain.

`originals/` holds the unedited photos and video as received; the site does not use them directly.
