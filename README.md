
<!-- markdownlint-disable MD031 -->
<!-- markdownlint-disable MD032 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD036 -->
<!-- markdownlint-disable MD041 -->
<div id="top-of-doc"></div>

# Readme File | office-affiliate | June/26/2026 |

[My Github](https://github.com/popados) | [Jump to End](#end-of-doc)

***

## Specifications

Office supply affiliate site built with Next.js 16 + React 19. App Router SPA with SSG on all pages, ISR on the shop, and SSG with `generateStaticParams` for blog posts. Deals ticker, sidebar-filtered shop, file-based markdown blog, and contact form. All styles are hand-written CSS — no UI framework.

***

## Tech Stack

| Tool | Version | Purpose |
| ---- | ------- | ------- |
| Next.js | ^16.2.9 | Framework — App Router, SSG, ISR, file routing |
| React | ^19.2.7 | UI components |
| React DOM | ^19.2.7 | DOM rendering |
| react-markdown | ^10.1.0 | Markdown rendering in blog posts |
| remark-gfm | ^4.0.1 | GFM tables, strikethrough, task lists |
| Bootstrap Icons | 1.11.3 (CDN) | UI icons |
| Inter | Google Fonts (CDN) | Typography |

***

## Scripts

```bash
npm run dev     # start dev server (localhost:3000)
npm run build   # production build → .next/
npm run start   # serve production build locally
```

***

## Project Structure

```bash
office-affiliate/
├── next.config.mjs
├── jsconfig.json
├── package.json
├── .gitignore
├── app/                          # Next.js App Router
│   ├── layout.jsx                # root layout — Ticker, Navigation, footer, CDN links
│   ├── page.jsx                  # / (SSG)
│   ├── about/
│   │   └── page.jsx              # /about (SSG)
│   ├── shop/
│   │   └── page.jsx              # /shop (ISR — revalidate: 3600)
│   ├── blog/
│   │   ├── page.jsx              # /blog (SSG)
│   │   └── [slug]/
│   │       └── page.jsx          # /blog/:slug (SSG — generateStaticParams)
│   └── contact/
│       └── page.jsx              # /contact (SSG)
├── styles/
│   ├── default.css               # CSS variables, reset, base typography
│   ├── app.css                   # all component styles
│   └── responsive.css            # breakpoints (1024 / 900 / 640px)
├── src/
│   ├── posts/                    # markdown blog posts (file-based)
│   │   ├── gel-pens-2026.md
│   │   ├── standing-desk-review.md
│   │   ├── leuchtturm-vs-moleskine.md
│   │   ├── usb-c-hubs-2026.md
│   │   ├── desk-setup-focus.md
│   │   └── fountain-pens-beginners.md
│   ├── utils/
│   │   ├── parseFrontmatter.js   # YAML frontmatter parser (no dependencies)
│   │   └── posts.js              # fs-based post loader — getAllPosts, getPostBySlug
│   └── components/
│       ├── Ticker.jsx            # server component — animated deals ticker
│       ├── Navigation.jsx        # client component — next/link + usePathname
│       ├── HomeView.jsx          # client component — useRouter for CTA navigation
│       ├── AboutView.jsx         # server component — about page with personal copy
│       ├── ShopView.jsx          # client component — category tabs, sidebar filters
│       ├── BlogView.jsx          # server component — post card grid, next/link cards
│       ├── BlogPost.jsx          # server component — full post reader (react-markdown)
│       └── ContactView.jsx       # client component — contact form with sent state
├── img/
│   └── mockup.png
└── docs/
    ├── about-page.md
    └── affiliate-30-day.md
```

***

## Views

### Home

- Animated ticker bar with live deal items (pauses on hover)
- Hero section — headline, description, two CTA buttons
- Top picks sidebar — ranked #1–#5 products with prices and badges
- Four trust badges with icons
- Six-category grid (Writing, Desk, Notebooks, Essentials, Furniture, Tech)
- Dark banner with "View Latest Reviews" CTA

### Shop

- Category tab bar — 7 tabs, filters the product grid
- Sidebar filters — Brand checkboxes (toggle), price range track, star rating, availability, source
- Sort bar — 5 sort options (Top rated, Price low/high, Newest, Best discount)
- Featured strip — editor's pick with expanded detail and Amazon CTA
- Product card grid — 9 products with brand, star rating, sale badge, price, and "View deal" button

### About

- Personal copy sourced from `docs/about-page.md`
- Sections: The Story, The Blog, The Shop, closing quote
- Three feature cards: Built for Real-World Use, Affiliate Links Clearly Marked, If It's on the List It Passed

### Blog

- Six article cards with color-coded thumbnails — click any card to navigate to `/blog/:slug`
- Tag, title, excerpt, date, read time per card
- Full post reader with rendered markdown, tables, and styled typography
- Back button returns to `/blog`; unknown slugs redirect to `/blog` automatically

### Contact

- Contact info sidebar — email, location, response time
- Message form — name, email, subject, message
- Submit button shows "Message Sent!" confirmation for 3 seconds, then resets

***

## Routing

Next.js App Router file-based routing. No router library needed — each `app/**/page.jsx` maps directly to a URL.

| Route | Page file | Rendering |
| ----- | --------- | --------- |
| `/` | `app/page.jsx` | SSG |
| `/about` | `app/about/page.jsx` | SSG |
| `/shop` | `app/shop/page.jsx` | ISR (`revalidate: 3600`) |
| `/blog` | `app/blog/page.jsx` | SSG |
| `/blog/:slug` | `app/blog/[slug]/page.jsx` | SSG (`generateStaticParams`) |
| `/contact` | `app/contact/page.jsx` | SSG |

`Navigation` uses `usePathname` from `next/navigation` for the active link. `HomeView` uses `useRouter` for button-driven navigation. `BlogPost` pages get per-post metadata via `generateMetadata`. Unknown slugs return a 404 via `notFound()`.

***

## CSS Notes

- Inter loaded via Google Fonts for crisp screen rendering
- `-webkit-font-smoothing: antialiased` on `body`
- CSS custom properties defined in `default.css` (`--color-primary`, `--color-text-muted`, etc.)
- `--color-text-muted` set to `#4b5563` — dark enough to read without relying on weight
- Body text and supporting descriptions at `font-weight: 500` throughout
- Ticker uses a `@keyframes ticker-scroll` animation at `translateX(-50%)` on a duplicated item list for seamless looping

***

# End of Document

***

[Jump to Top](#top-of-doc)

<div id="end-of-doc"></div>

<details>
<summary>
Notes :
</summary>

- Template reference: `template.html` (DeskHaven) — ticker, top picks panel, shop sidebar, and pcard components sourced from here
- Mockup reference: `img/mockup.png` — used to define the initial site structure and section layout
- 30-day content plan: `docs/affiliate-30-day.md`

</details>
