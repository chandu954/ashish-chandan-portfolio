# QuickCart

Full-stack e-commerce storefront — global cart state across catalog and checkout, middleware-protected order flows, built for the edge.

## Features

- **Global cart state** — React context keeps cart in sync across catalog and checkout views.
- **Middleware-protected checkout** — Next.js middleware guards order flows; no route-jacking to checkout.
- **Product catalog** — browsing, detail, and add-to-cart in one storefront.
- **Edge-ready** — middleware runs at the edge for fast route protection.

## Architecture

```
browse catalog ──► add to cart (React context — global)
                        │
                        ▼
              checkout flow (middleware-protected routes)
                        │
                        ▼
                  order confirmation
```

## Metrics

| Metric | Value |
| --- | --- |
| Global cart state | 1 (shared across views) |
| Checkout flows | 3 |
| Route protection | edge middleware |

## Tech stack

- Next.js · React · Tailwind CSS
- Next.js middleware (route protection)

## Getting started

```bash
git clone https://github.com/chandu954/QuickCart
cd QuickCart
npm install
npm run dev
```

## Links

- Live demo: [quick-cart-woad-omega.vercel.app](https://quick-cart-woad-omega.vercel.app)
