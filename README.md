# Cloche site

Astro static site for cloche.solomonneas.dev, the landing page for [Cloche](https://github.com/escoffier-labs/cloche).

## Develop
```bash
npm install && npm run dev
```

## Build and check
```bash
npm run check && npm run build
```

## Deploy (Vercel)
- Framework preset: Astro. Build: `npm run build`. Output: `dist`.
- Add domain `cloche.solomonneas.dev` in Vercel project settings, then point a CNAME at Vercel.
