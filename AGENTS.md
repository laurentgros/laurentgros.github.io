# PLANET'EnR static site — agent notes

This repo is a **static clone** of the WordPress site [planet-enr.fr](https://planet-enr.fr). It is **not** WordPress. Keep content and routes aligned with that live site unless Laurent asks to change them.

## Tech stack

Match [creeperdeking/creeperdeking.github.io](https://github.com/creeperdeking/creeperdeking.github.io):

| Layer | Choice |
| --- | --- |
| Runtime | Node 24 (see `.nvmrc`), engines `>=20.19.0` |
| UI | React 18 + TypeScript |
| Bundler | Vite 7, `server.port` 3000, `build.outDir` `build` |
| CSS / widgets | Bootstrap 5 + `react-bootstrap` 2.8 |
| Routing | `react-router-dom` 6 `createBrowserRouter` |
| Head tags | `react-helmet-async` |
| Deploy | GitHub Actions `.github/workflows/pages.yml` on `main` (preferred). Fallback: `npm run deploy` → `gh-pages` branch. |

GitHub Pages SPA fallback: `index.html` (query-string restore) + `public/404.html` (rafgraph spa-github-pages). `pathSegmentsToKeep` is `0` because this is a user site (`laurentgros.github.io`), not a project pages path.

There is no backend. Do not add PHP, WP REST, or a server-only form plugin.

## Layout (source)

```
index.html                 Vite HTML shell + SPA redirect script
src/index.tsx              Bootstrap CSS, site CSS, React mount
src/App.tsx                Router + eager page imports + HelmetProvider
src/nav.ts                 Shared header/footer links
src/site.css               Mesmerize-like theme (hero, gray pages, logos)
src/components/Layout.tsx  Header + <Outlet /> + Footer
src/components/Header.tsx  Logo, desktop nav, mobile overlay
src/components/Footer.tsx
src/components/PageHero.tsx Inner-page banner + title
src/pages/*.tsx            One file per route
public/images/             Logo, favicon, hero slides, carport, partner logos
```

Home uses a full-viewport slideshow hero. Other pages use `PageHero` (solar-roof photo + dark overlay) then a gray `#636363` content band. Accent button color is `#03a9f4`. Font is Open Sans.

## Routes (WordPress slugs)

| Path | Page | Notes |
| --- | --- | --- |
| `/` | `Home.tsx` | Slideshow: solar-roof, heat-pump, heat-pumps, technician |
| `/nos-conseils` | `Conseils.tsx` | Bootstrap accordion (AIDES, ACCOMPAGNEMENT, CONSEILS, ANALYSES, SATISFACTION) |
| `/carport` | `Carport.tsx` | Three photos in `public/images/carport/` |
| `/nos-partenaires` | `Partenaires.tsx` | Logo grids: PV, batteries, PAC, EV chargers |
| `/contact` | `Contact.tsx` | POST JSON to FormSubmit (`https://formsubmit.co/ajax/relation@planet-enr.fr`). FormSubmit activates **per origin**: localhost and `laurentgros.github.io` each need their own « Activate Form » click in `relation@planet-enr.fr`. Treat JSON `success: "false"` as failure (HTTP is still 200). |
| `/mentions-legales` | `Mentions.tsx` | Legal text from the WP page |

Phones: `06 88 60 25 24`, `06 65 77 50 75`. Email: `relation@planet-enr.fr`.

## Commands

```bash
nvm use          # Node 24
npm start        # http://localhost:3000
npm run build    # output in build/
npm run deploy   # build + push build/ to gh-pages
```

Do not commit `node_modules/` or `build/`. Do not `git push --force` unless Laurent asks. Only commit or deploy when asked.
