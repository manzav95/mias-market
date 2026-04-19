# Mia’s Mini Market

Static Next.js (App Router) showcase site: pastel boutique styling, category cards, shop grid, and a **Selected Items** drawer that opens a prefilled **mailto** order request (no checkout).

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Production build: `npm run build` then `npm start`.

## Where to put your logo and photos

- **Logo:** `public/images/mia-logo.png` with `LOGO_IMAGE_PATH = "mia-logo.png"` in `lib/constants.ts`. Clear `LOGO_IMAGE_PATH` to fall back to the built-in text logo.
- **Mia showcase composite:** optional master artboard at `public/images/mia-showcase-composite.png`; paths are centralized in `lib/mia-showcase-assets.ts`.
- **Hero banner:** the home hero uses `public/images/mia-hero-source.png` at its **native aspect ratio** (no stretch). If you replace that file, update `miaHeroIntrinsicSize` in `lib/mia-showcase-assets.ts` to match the new width and height in pixels.
- **Category + shop tiles:** paths live in `lib/mia-showcase-assets.ts`. Each category uses a dedicated photo: `mia-hair-claw-clips.png`, `mia-pipe-cleaner-animals.png`, `mia-clay-items.png`, `mia-pipe-cleaner-bouquet.png`, `mia-clay-keychains.png`, `mia-balloon-squishies.png`, `mia-bracelets.png`, `mia-bedazzled-items.png`. The composite (`mia-showcase-composite.png`) and `mia-tile-*.png` crops are optional if you re-cut the hero banner only.
- **Regenerating crops (macOS):** from `public/images`, after replacing `mia-showcase-composite.png`, you can re-run:

```bash
SRC="mia-showcase-composite.png"
sips -c 482 1024 --cropOffset 0 0 "$SRC" --out mia-hero-banner.png
sips -c 251 204 --cropOffset 0 482 "$SRC" --out mia-tile-hair-clips.png
sips -c 251 204 --cropOffset 204 482 "$SRC" --out mia-tile-plush.png
sips -c 251 204 --cropOffset 408 482 "$SRC" --out mia-tile-charms.png
sips -c 251 204 --cropOffset 612 482 "$SRC" --out mia-tile-bouquet.png
sips -c 251 208 --cropOffset 816 482 "$SRC" --out mia-tile-keychains.png
sips -c 231 341 --cropOffset 0 733 "$SRC" --out mia-tile-balloons.png
sips -c 231 341 --cropOffset 341 733 "$SRC" --out mia-tile-bracelets.png
sips -c 231 342 --cropOffset 682 733 "$SRC" --out mia-tile-bedazzled.png
```

Adjust the `482` / `251` / `231` heights if your new composite has different row proportions (image is 1024×964 with this split).

## What to edit for your business

| What | File |
| --- | --- |
| Order + inquiry email | `lib/constants.ts` → `ORDER_EMAIL` |
| Venmo / Apple Pay / Zelle / cash copy | `lib/constants.ts` → `PAYMENT_DETAILS` |
| Shop inventory | `data/products.ts` |
| Home “Shop by Category” cards | `data/categories.ts` (each row links to a `productId` in `products.ts`) |
| FAQ questions and answers | `data/faq.ts` (replace any answer that still says to edit that file) |

## Project layout

- `app/` — routes: `page.tsx` (Home), `shop`, `about`, `faq`, `contact`, plus `globals.css` and `layout.tsx`.
- `components/` — `Header`, `AnnouncementBar`, `Logo`, `HeroSection`, `ShopByCategory`, `CategoryCard`, `ProductCard`, `SelectedItemsDrawer`, `PaymentOptions`, `ValuePropsSection`, `Footer`.
- `context/SelectedItemsContext.tsx` — selected lines, drawer open state, payment preference for the email body.
- `lib/constants.ts` — brand email, payment placeholders, optional logo filename.
- `lib/mia-showcase-assets.ts` — paths to the composite, hero banner, and per-tile PNGs.
- `lib/mailto.ts` — builds the `mailto:` link and message body.
- `data/` — editable mock products, home categories, and FAQ entries (`faq.ts`).
- `public/images/` — static images served from `/images/...`.

## Accessibility notes

The selected-items panel is a fixed `role="dialog"` with `aria-modal`, Escape to close, and focus moved to the close control when opened. Buttons use visible focus rings.
