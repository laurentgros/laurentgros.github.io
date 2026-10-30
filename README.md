# laurentgros.github.io

Clone statique de [planet-enr.fr](https://planet-enr.fr), construit avec React et Vite (même stack que [creeperdeking.github.io](https://github.com/creeperdeking/creeperdeking.github.io)). Utiliser Node 24.

## Scripts

### `npm start`

Démarre le serveur de développement sur [http://localhost:3000](http://localhost:3000).

### `npm run build`

Génère le site de production dans le dossier `build`.

### `npm run deploy`

Construit le site et publie le dossier `build` sur la branche `gh-pages` (déploiement local).

Le déploiement recommandé est GitHub Actions (`.github/workflows/pages.yml`) : un push sur `main` construit Vite et publie Pages. Dans le dépôt : **Settings → Pages → Source = GitHub Actions**.
