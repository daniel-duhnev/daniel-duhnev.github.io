# Portfolio — Daniel Duhnev

Personal portfolio for **ML / MLOps engineering** work.
Live at **https://daniel-duhnev.github.io/**.

## What this is

A fast, single-page static site built with [Astro](https://astro.build) and deployed to GitHub Pages by GitHub Actions. No client-side JavaScript is shipped; fonts are self-hosted; content lives in small typed data files.

## Why this stack

- **Astro** — static-first, zero-JS output.
- **GitHub Pages + Actions** — free hosting, deploys on every push to `main`
  and on demand from the Actions tab (`workflow_dispatch`).
- **Self-hosted fonts** (`@fontsource`) — no external requests, better
  performance and privacy.

## Repository map

```
.github/workflows/deploy.yml   CI/CD: build + deploy to Pages
astro.config.mjs               site config (GitHub Pages user site, no base path)
public/                        static assets: favicon, CV pdf (gitignored)
src/consts.ts                  name, links, positioning line
src/data/profile.ts            experience timeline, skills, education
src/components/                Hero, ExperienceTimeline, SkillsGrid, Contact, Section
src/pages/index.astro          the whole site (one page)
```

## Local development

```bash
npm install
npm run dev        # http://localhost:4321/
npm run build      # static output in dist/
npm run preview    # serve the built site
```

## Editing content

- **Experience / skills / education** — edit `src/data/profile.ts`.
- **Identity / links / positioning** — edit `src/consts.ts`.
- **CV PDF** — drop the exported PDF into `public/`, matching `CV_FILENAME`
  in `src/consts.ts`. Never commit an address/phone-bearing version.

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes it to GitHub Pages. For an on-demand deploy without a
commit: GitHub → Actions → *Deploy to GitHub Pages* → **Run workflow**.

One-time setup (already done): repository **Settings → Pages → Source:
GitHub Actions**.

## Privacy rule

The public site and repo must never contain a phone number or home street
address. Public contact is email, GitHub and LinkedIn only. Before publishing
a new CV PDF into `public/`, double-check it doesn't leak either.
