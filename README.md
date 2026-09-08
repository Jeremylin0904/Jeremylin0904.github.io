# Shiuan-Ting (Jeremy) Lin — Personal Website

A bilingual research portfolio built with Astro and deployed to GitHub Pages.

## Local development

```sh
npm install
npm run dev
```

## Validation

```sh
npm run check
npm run build
```

English pages live under `/en/` and Traditional Chinese pages under `/zh/`. The root
route selects a language from the visitor's saved preference or browser language.

Content is maintained centrally in `src/data/site.ts`. Pushing `main` triggers the
GitHub Pages workflow in `.github/workflows/deploy.yml`.
