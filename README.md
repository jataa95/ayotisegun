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

Design: white, editorial layout with huge bold Inter type, inspired by the reference site supplied by the client.

| Page | File |
|---|---|
| Home: name with floating artwork tiles, banners, about, featured works, process, contact form | `src/pages/index.astro` |
| Work grid | `src/pages/work/index.astro` |
| Single artwork | `src/pages/work/[slug].astro` |
| Info (about the artist) | `src/pages/info.astro` |
| Contact form (shared) | `src/components/Contact.astro` |

The hero tiles are small crops in `src/assets/tiles/`; their positions are set in the `tiles` list at the top of
`src/pages/index.astro`.

The contact form has no server: it opens WhatsApp with the message filled in if `whatsapp` is set in `src/site.ts`,
otherwise an email if `email` is set, otherwise it copies the message and opens Instagram.

## Common edits

**Contact details**: edit `src/site.ts`. Add `email`, `whatsapp` and `youtube` there; empty
values are hidden, and the contact form and "Ask about this work" links use WhatsApp, then email, then Instagram.

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
   theme: Markets, women     # short theme line
   statement: One sentence about the painting, shown in capitals.
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
