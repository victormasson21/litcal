## Seasons: a literary calendar

A potentially lifelong mission to build a calendar from quotes found in the books I read.

---

### Deployed

[victormasson21.github.io/litcal](https://victormasson21.github.io/litcal/)

Every push to `main` builds the static site and deploys it to GitHub Pages (`.github/workflows/nextjs.yml`).

### Run locally

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Check before pushing:

```bash
pnpm lint
pnpm build
```

### Quotes

Quotes live in `data/quotes.json`. Each entry has an `id`, `day`, `month`, `quote`, `author`, `book`, `year` and `display`. Only entries with `display: true` appear on the site.

- Line breaks in `quote` show as paragraphs.
- Keep one shown quote per day.
- The build fails on a shown quote with an invalid month or day, and names its `id`.
