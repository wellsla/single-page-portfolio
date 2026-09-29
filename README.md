# Welliton Slaviero — Portfolio

Personal portfolio of **Welliton Slaviero, Full Stack Software Engineer** (TypeScript · Vue 3 · React · Laravel · AI-augmented development).

**Live:** https://welliton-slaviero.vercel.app · **LinkedIn:** https://www.linkedin.com/in/welliton-slaviero/ · **GitHub:** https://github.com/wellsla

Single-page site with hero, about + career timeline, project case studies and contact, available in English (`/en`, default) and Portuguese (`/pt`), with light/dark theme.

## Tech stack

| Area | Tools |
|---|---|
| Framework | Next.js 15 (App Router, React Server Components) · React 18 · TypeScript |
| UI | Tailwind CSS · shadcn/ui (Radix UI primitives) · lucide-react icons · Framer Motion |
| Theming | next-themes (system / light / dark) |
| i18n | Dynamic `[lang]` route + typed dictionaries loaded on the server |
| Quality | ESLint (`eslint-config-next`) · Prettier · `tsc --noEmit` |
| Hosting | Vercel |

## How it works

- **Routing:** `/` redirects to `/en`; `src/app/[lang]/page.tsx` loads the dictionary for the requested locale and renders every section.
- **Content as data:** all copy lives in `src/dictionaries/en.ts` and `src/dictionaries/pt.ts`. The `Dictionary` type is inferred from them (`src/lib/get-dictionary.ts`), so both files must keep the same shape. TypeScript flags any mismatch.
- **Sections:** each section is a component in `src/components/*-section.tsx` that receives only its slice of the dictionary.
- **Project media and links:**
  - Screenshots are mapped by project `id` in `src/lib/images.json` (files in `public/img/`). Projects without a screenshot get an icon cover instead.
  - External links and "private project" flags are mapped by `id` in `projectLinks` inside `src/components/projects-section.tsx`.

## Project structure

```
src/
├── app/
│   ├── layout.tsx          # Root HTML, fonts, SEO metadata
│   ├── page.tsx            # Redirects / → /en
│   └── [lang]/
│       ├── layout.tsx      # Theme provider
│       └── page.tsx        # Page composition per locale
├── components/             # Header, sections, footer, theme toggle
│   └── ui/                 # shadcn/ui components
├── dictionaries/           # en.ts / pt.ts — all site content
└── lib/                    # get-dictionary, images.json, utils
```

## Getting started

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Open http://localhost:9002.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Development server on port 9002 |
| `npm run build` | Production build (`NODE_ENV=production`, POSIX shell syntax: use Git Bash/WSL on Windows or run `npx next build`) |
| `npm run start` | Serves the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript type check |
| `npm run format` | Prettier on the whole project |

## Updating content

1. Edit the text in **both** `src/dictionaries/en.ts` and `src/dictionaries/pt.ts`.
2. For a new project, add an item with a unique `id` to `projects.items`. Then optionally add its image to `public/img/` + `src/lib/images.json`, and its link to `projectLinks`.
3. Run `npm run typecheck && npx next build` before pushing. Vercel deploys `main` automatically.

## Security

Dependencies are kept on patched Next.js releases (currently `15.5.26`, which fixes the React Server Components "React2Shell" advisory and later critical RCE advisories). Check with `npm audit` after upgrades.

## License

Personal content (texts, photos, project descriptions) © Welliton Slaviero. All rights reserved.
