## Seasons: a literary calendar

A potentially lifelong mission to build a calendar from quotes found in the books I read.

---

### Deployed

[litcal-nine.vercel.app](https://litcal-nine.vercel.app/)

### Run locally

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000).


### Quotes

Quotes live in `data/quotes.json`. Each entry has an `id`, `day`, `month`, `quote`, `author`, `book`, `year` and `display`. Only entries with `display: true` appear on the site.


