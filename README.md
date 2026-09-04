# palamidas-site

Personal site and online CV for Panagiotis Palamidas — [mesrine23.github.io](https://mesrine23.github.io)

Built with [Astro](https://astro.build). Static output, no client framework, English and Greek.

## Changing the content

**You almost never need to touch the markup.** All copy and CV data lives in two files:

| File | What it holds |
|---|---|
| `src/data/content.en.ts` | Everything in English |
| `src/data/content.el.ts` | Everything in Greek |
| `src/data/types.ts` | The shape both must follow |

Both files satisfy the same `Content` type, so if you add a field to one and forget
the other, `npm run check` fails instead of the site quietly going half-translated.

Anything written in `[BRACKETS]` is a placeholder still waiting for a real value.
Search for `[` to find what is outstanding.

### Adding your photo

Drop the image at `src/assets/portrait.jpg`, then follow the note in
`src/components/Hero.astro`. Astro resizes and converts it at build time.

### Adding the CV PDF

Put the file at `public/cv/panagiotis-palamidas-cv.pdf` and set `hero.cvUrl` in
**both** content files to `'/cv/panagiotis-palamidas-cv.pdf'`. While `cvUrl` is
`null` the Download CV button is hidden rather than linking to a missing file.

## Running it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output into dist/
npm run preview  # serve the built site
npm run check    # type-check content and components
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes it to GitHub Pages. Nothing to run by hand.

Repository Settings → Pages → Source must be set to **GitHub Actions**.

## Design

Direction "Terminal Glass": warm near-black terminal base, monospace metadata,
square geometry, with translucent glass used only on the photo frame, code panel,
app cards and secondary buttons. Tokens live in `src/styles/tokens.css`.

The site is dark by design. `src/styles/print.css` turns it into ink-on-paper so
the page prints cleanly to a couple of pages.
