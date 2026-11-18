# thekevinli.github.io

Personal site, built with [Astro](https://astro.build) and deployed to GitHub Pages by GitHub Actions on every push to `master` (Settings → Pages → Source: **GitHub Actions**).

## Preview locally

```sh
npm install     # once
./preview.sh    # builds, then serves at http://localhost:8000/
```

## Edit

- Page copy: `src/data/site.ts`
- Posts: `src/content/blogs/<slug>.md`, each at `/blogs/<slug>/` (set `draft: false` to publish; add the slug to `blogList` in `site.ts`)
- Images: `public/images/`; resumes: `public/data/` (CV link in `site.ts`)
- Styles: `src/styles/global.css`
