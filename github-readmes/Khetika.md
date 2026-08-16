# Khetika

Voice-first grocery shopping — natural-language search and Web Speech API voice commands drive search, cart, checkout, and order tracking in one lightweight storefront.

## Why it exists

Typing product names is friction. Khetika lets a user say *"order 2 packs of dosa batter"* and the request flows through search → cart → checkout → order tracking without touching a form.

## Features

- **Voice checkout** — spoken commands add items and place orders end-to-end.
- **NLP text search** — natural-language product queries with keyword extraction + filters.
- **Live order tracking** — order stages (received → preparing → out for delivery → delivered) visible in real time.
- **Serverless** — lightweight, fast-to-deploy storefront.

## Architecture

```
voice input (Web Speech API) / text search
   │
   ▼
NLP keyword extraction + filters
   │
   ▼
search results ──► cart ──► checkout (voice or tap)
   │
   ▼
order tracking — live stages
```

## Metrics

| Metric | Value |
| --- | --- |
| Search modes | 2 (voice + NLP text) |
| Voice checkout steps | 3-step flow |
| Order tracking | live status stages |

## Tech stack

- Next.js · React · Tailwind CSS
- Web Speech API (voice input)
- NLP keyword extraction + filters
- Serverless deployment

## Getting started

```bash
git clone https://github.com/chandu954/khetika-webapp
cd khetika-webapp
npm install
npm run dev
```

## Links

- Live demo: [khetika-webapp.vercel.app](https://khetika-webapp.vercel.app)
