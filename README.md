## Seasons: a literary calendar

A potentially lifelong mission to build a calendar from quotes found in the books I read.

---

### Deployed

[seasons.vicm.dev](https://seasons.vicm.dev)

Every push to `main` builds the static site and deploys it to GitHub Pages (`.github/workflows/nextjs.yml`). The custom domain is set in the repo's Pages settings, with a DNS-only `CNAME` record for `seasons` pointing to `victormasson21.github.io` in Cloudflare.

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
