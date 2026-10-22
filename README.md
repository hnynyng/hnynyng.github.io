# Portfolio — Hon Yen Yang

Live: https://hnynyng.github.io

Single-page portfolio built with Next.js and exported as a fully static site for GitHub Pages.

## Stack

- Next.js (App Router) with `output: "export"`: no server, no analytics, no external requests
- TypeScript, plain CSS design tokens (Tailwind is only used for its reset)
- System font stack, light and dark themes that follow the system setting, with a remembered toggle

## Edit content

Every fact on the site lives in [`content/site.ts`](content/site.ts). Anything starting with `TODO` shows on the page as a visible TODO until it is filled in.

Replace `public/Hon_Yen_Yang_Resume.pdf` with the real resume (same file name).

## Develop

```bash
npm install
npm run dev
```

`npm run build` writes the static site to `out/`.

## Deploy

`.github/workflows/deploy.yml` builds and publishes `out/` to GitHub Pages on every push to `main`.
In the repository settings, Pages must use **GitHub Actions** as its source.
