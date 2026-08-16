# ashish-chandan.dev — Portfolio

Personal portfolio of **Ashish Chandan** — AI Engineer &amp; Full-Stack Developer.

Terminal-styled single-page site: hero with a live-typing terminal, stats strip, skills matrix, six project cards with live-demo links, a resume-optimization before/after showcase, two full case studies, and a ⌘K command palette.

## Sections

| Route | Description |
| --- | --- |
| `/` | Single-page portfolio (hero, stats, about, projects, showcase, case studies, experience, praise, skills, education, contact) |
| `/blog` | Technical write-ups (RAG, multi-agent systems, LLM products) |
| `/blog/[slug]` | Individual post pages (SSG via `generateStaticParams`) |
| `/feed.xml` | RSS feed for published posts |
| `/opengraph-image.png` | Auto-generated social preview |

## Stack

- **Framework** — Next.js 15 (App Router), TypeScript, Tailwind CSS v4
- **Animation** — IntersectionObserver-driven reveal (no runtime animation deps)
- **Analytics** — @vercel/analytics (auto-enabled on Vercel)
- **Fonts** — Inter + JetBrains Mono via `next/font`

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Commands

```bash
npm run dev         # dev server
npm run build       # production build
npm run start       # serve production build
npm run check       # lint + typecheck + tests
npm run test        # vitest (blog data integrity, page structure)
npm run check:links # verify all external links are reachable
```

## Structure

```
app/
  page.tsx              # single-page composition
  layout.tsx            # fonts, metadata, analytics
  blog/                 # blog index + posts content
  opengraph-image.tsx   # dynamic OG image
  robots.ts / sitemap.ts
  feed.xml/route.ts     # RSS
components/
  Nav, Hero, Terminal, Stats, About, Projects, Showcase,
  CaseStudy, CaseStudyEleva, Experience, Praise, Skills,
  Education, Contact, Footer, CommandPalette, ScrollProgress
```

## Custom domain

The site URL is centralized in `lib/site.ts` and consumed by sitemap, robots, JSON-LD, and OG metadata. Point a custom domain by setting the Vercel env var `NEXT_PUBLIC_SITE_URL=https://yourdomain.com` — no code changes.

## Deploy

Push to GitHub and import into [Vercel](https://vercel.com) — zero config. Analytics, OG image, sitemap, and robots.txt all work serverless out of the box.