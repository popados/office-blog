
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

Office supply affiliate site built with React + Vite. Multi-view SPA with a deals ticker, product shop with sidebar filters, blog, and contact form. All styles are hand-written CSS — no UI framework.

***

## Tech Stack

| Tool | Version | Purpose |
| ---- | ------- | ------- |
| Vite | ^8.1.0 | Dev server & bundler |
| React | ^19.2.0 | UI components |
| React DOM | ^19.2.0 | DOM rendering |
| @vitejs/plugin-react | ^6.0.3 | JSX transform |
| react-router-dom | latest | Client-side routing (BrowserRouter, NavLink) |
| react-markdown | latest | Markdown rendering in blog posts |
| remark-gfm | latest | GFM tables, strikethrough, task lists |
| Bootstrap Icons | 1.11.3 (CDN) | UI icons |
| Inter | Google Fonts (CDN) | Typography |

***

## Scripts

```bash
npm run dev       # start dev server (localhost:5173)
npm run build     # production build → dist/
npm run preview   # preview production build locally
```

***

## Project Structure

```bash
office-affiliate/
├── index.html
├── vite.config.js
├── package.json
├── styles/
│   ├── default.css           # CSS variables, reset, base typography
│   ├── app.css               # all component styles
│   └── responsive.css        # breakpoints (1024 / 900 / 640px)
├── src/
│   ├── main.jsx              # app entry — React root + BrowserRouter
│   ├── posts/                # markdown blog posts (file-based)
│   │   ├── gel-pens-2026.md
│   │   ├── standing-desk-review.md
│   │   ├── leuchtturm-vs-moleskine.md
│   │   ├── usb-c-hubs-2026.md
│   │   ├── desk-setup-focus.md
│   │   └── fountain-pens-beginners.md
│   ├── api/
│   │   └── api.js
│   ├── utils/
│   │   ├── formatters.js
│   │   ├── parseFrontmatter.js   # YAML frontmatter parser (no dependencies)
│   │   └── posts.js              # parses all .md files, exports POSTS + getPostBySlug
│   └── components/
│       ├── Ticker.jsx            # animated deals ticker bar
│       ├── Navigation.jsx        # sticky header, logo, nav links, cart
│       ├── HomeView.jsx          # hero, top picks, trust badges, categories, banner
│       ├── AboutView.jsx         # about page with personal copy
│       ├── ShopView.jsx          # category tabs, sidebar filters, product grid
│       ├── BlogView.jsx          # post card grid + list/detail state
│       ├── BlogPost.jsx          # full post reader (react-markdown)
│       └── ContactView.jsx       # contact form with sent confirmation
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

React Router v6 (`react-router-dom`) with `BrowserRouter`. Each view maps to a real URL path — back button, bookmarks, and direct links all work. `Navigation` uses `NavLink` with `end` on `/` to prevent the home link from staying active on every route.

| Route | View |
| ----- | ---- |
| `/` | HomeView |
| `/about` | AboutView |
| `/shop` | ShopView |
| `/blog` | BlogView |
| `/blog/:slug` | BlogPost |
| `/contact` | ContactView |

`HomeView` uses `useNavigate` for CTA buttons. `Navigation` handles scrolling to top on each link click. Post data is centralised in `src/utils/posts.js` — `POSTS` array and `getPostBySlug(slug)` are shared between `BlogView` and `BlogPost`.

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
