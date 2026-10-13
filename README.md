# Anissa Sabrina Briki — Portfolio

Professional portfolio built with Astro and Tailwind CSS, deployed on GitHub Pages.

## Commands

```
npm install        # once
npm run dev        # local preview at http://localhost:4321
npm run build      # production build in dist/
npm run preview    # serve the production build
```

## Where things live

| What | Where |
|---|---|
| Name, LinkedIn, email, CV file, portrait, draft mode | `src/site.config.ts` |
| Case studies (one file each) | `src/data/projects/` |
| Expertise and experience timeline | `src/data/profile.ts` |
| Interface wording (ready for a French copy) | `src/i18n/en.ts` |
| Case study template | `src/components/CaseStudy.astro` |
| Images | `public/images/<project>/` |
| Colours and fonts | `src/styles/global.css` |

## Add a project

1. Copy a file in `src/data/projects/` and edit its content.
2. Add it to the list in `src/data/projects/index.ts`.
3. Put its images in `public/images/<slug>/` and reference them in `evidence` with `src: '<slug>/file.jpg'`.

The page `/projects/<slug>/` is generated automatically.

## Add an image to a case study

In the project file, find the `evidence` entry and add `src`, `alt` and `source`:

```ts
{ title: 'HCP newsletter', note: 'Monthly professional newsletter.', src: 'nctf/newsletter.jpg', alt: '…', source: 'FILLMED, 2023' }
```

An entry without `src` is shown as a labelled placeholder. Never replace a missing original with an unrelated visual.

## Draft mode

`draft: true` in `src/site.config.ts`:

- shows what each placeholder is waiting for,
- shows tools marked "to confirm",
- tells search engines not to index the site.

Set it to `false` before sharing the site: unconfirmed tools are hidden, placeholders say "Visual to be added", and the site becomes indexable.

## Deployment on GitHub Pages

1. Create a repository on GitHub (for example `portfolio`) and push this folder to `main`.
2. Repository → Settings → Pages → Source: **GitHub Actions**.
3. Repository → Settings → Secrets and variables → Actions → **Variables**:
   - `SITE_URL` = `https://<your-user>.github.io`
   - `BASE_PATH` = `/<repository-name>/`
4. Push to `main`: the workflow builds and publishes the site at `https://<your-user>.github.io/<repository-name>/`.

### Custom domain

1. Add a file `public/CNAME` containing the domain (for example `anissabriki.com`).
2. Set `SITE_URL` to `https://anissabriki.com` and `BASE_PATH` to `/`.
3. Point the domain's DNS to GitHub Pages and enable "Enforce HTTPS" in the Pages settings.

## Content rules

- No invented metrics. Where results cannot be shared, the case study states the objective and the learning.
- Each case study separates my contribution, the broader brand initiative, and the situation today.
- Confidential data (client results, budgets, private contacts) is never shown.
- See `ASSETS-CHECKLIST.md` for what is still needed.
