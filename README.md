# alepistola.github.io

Sito personale, costruito con [Astro](https://astro.build) e pubblicato su GitHub Pages. Ogni push su `main` lo ricompila e lo pubblica (`.github/workflows/deploy.yml`).

## Modificare i contenuti

Tutto il testo del sito sta nella cartella `content/`. Non serve toccare altro.

| File | Cosa contiene |
|---|---|
| `content/site.yaml` | Nome, ruolo, città, link del footer |
| `content/about.md` | La bio in home |
| `content/config.yaml` | La scheda `config.yaml`: `now`, interessi, stack, off duty. Una chiave vuota o cancellata non compare |
| `content/runs.yaml` | Esperienze e formazione (la tabella "Runs") |
| `content/publications.yaml` | Pubblicazioni |
| `content/projects.yaml` | Progetti |
| `content/posts/*.md` | Articoli, uno per file |

### Articoli

Ogni file in `content/posts/` inizia così:

```yaml
---
title: "Titolo"
description: Una riga di sommario (facoltativa)
date: 2026-12-01
status: draft        # draft | wip | published
visible: true        # false = non compare da nessuna parte
---
```

- `status: published` crea la pagina dell'articolo e il link in home.
- `status: draft` o `wip` mostra solo il titolo nella sezione Writing.
- `visible: false` nasconde l'articolo del tutto. Se nessun articolo è visibile, la sezione Writing non viene mostrata.
- Le note a margine si scrivono come note a piè di pagina Markdown: `testo[^1]` e poi `[^1]: la nota`.

`content/posts/example-article.md` è un modello nascosto con tutti gli elementi disponibili.

## Anteprima in locale

```bash
npm install
npm run dev
```

Il sito è su http://localhost:4321. In anteprima si vedono anche gli articoli con `visible: false`, marcati "hidden (dev only)".

## Linee guida

- [stile.md](stile.md): stile, design, UI e UX del sito.
- [picture.md](picture.md): immagini, grafici, illustrazioni e animazioni.
