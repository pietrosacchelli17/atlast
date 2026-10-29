# ATLAST — The Architecture Travelbook (prototype)

Next.js (App Router) · TypeScript · Tailwind CSS 4 · MapLibre GL.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm run lint && npm run typecheck
```

## Structure
- `src/data/` typed content model (`types.ts`) and local demo data (places, destinations, guides, journal, categories).
- `src/lib/content.ts` the only module pages read content through; swap for a DB/CMS here.
- `src/lib/store.ts` localStorage for saved places and mock guide purchases; swap for API calls when accounts exist.
- `src/components/` ui, layout, cards, map, home.
- `public/images/` drop real photos here (see its README); generated placeholders are replaced automatically.

## Honesty about content
Every entry has `demo: true` and shows a "Demo content" marker. Architects, dates and locations are included for realism but are **not verified**; hours and prices are deliberately omitted. Basemap tiles load from OpenFreeMap (no key); replace the style URL in `AtlasMap.tsx` for production.
