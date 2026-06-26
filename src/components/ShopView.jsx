"use client";

import { useState } from "react";

const CAT_TABS = [
  { id: "all",        icon: "⊞",  label: "All products" },
  { id: "pens",       icon: "✏️", label: "Writing tools" },
  { id: "furniture",  icon: "🪑", label: "Ergonomics" },
  { id: "tech",       icon: "⌨️", label: "Tech accessories" },
  { id: "essentials", icon: "🖨️", label: "Essentials" },
  { id: "desk",       icon: "📁", label: "Filing & Desk" },
  { id: "notebooks",  icon: "📓", label: "Notebooks" },
];

const INITIAL_BRANDS = [
  { name: "Pilot",     count: 24, on: true  },
  { name: "Logitech",  count: 18, on: true  },
  { name: "Staedtler", count: 11, on: false },
  { name: "3M",        count: 9,  on: false },
  { name: "Moleskine", count: 7,  on: false },
  { name: "FLEXISPOT", count: 5,  on: false },
  { name: "HP",        count: 12, on: false },
];

const PRODUCTS = [
  { icon: "✒️", bg: "#E0F2F0", brand: "Pilot",          name: "G2 Fine ballpoint pens — 12-pack",       stars: "★★★★★", rating: "4.8 (9.2k)", price: "$14.49", orig: "$18.00",  off: "Save 19%", tag: "b-sale", tagLabel: "19% off",      cat: "pens" },
  { icon: "📓", bg: "#DCFCE7", brand: "Leuchtturm1917", name: "A5 dot-grid hardcover notebook",          stars: "★★★★★", rating: "4.9 (4.1k)", price: "$22.95", orig: "",        off: "",        tag: "b-pick", tagLabel: "Editor's pick", cat: "notebooks" },
  { icon: "🖥️", bg: "#FEF3C7", brand: "Amazon Basics",  name: "Single monitor arm — height adjustable",  stars: "★★★★☆", rating: "4.6 (6.8k)", price: "$39.99", orig: "$54.99",  off: "Save 27%", tag: "b-hot",  tagLabel: "Hot",          cat: "tech" },
  { icon: "⌨️", bg: "#EDE9FE", brand: "Logitech",       name: "MX Keys wireless keyboard",               stars: "★★★★★", rating: "4.8 (12k)",  price: "$99.99", orig: "$119.99", off: "Save 17%", tag: "b-sale", tagLabel: "17% off",      cat: "tech" },
  { icon: "📋", bg: "#FEE2E2", brand: "3M",             name: "Post-it Super Sticky notes — 12 pads",    stars: "★★★★★", rating: "4.7 (3.3k)", price: "$16.29", orig: "",        off: "",        tag: "b-new",  tagLabel: "New",           cat: "essentials" },
  { icon: "📐", bg: "#E0F2F0", brand: "FLEXISPOT",      name: 'Standing desk converter — 35"',           stars: "★★★★☆", rating: "4.5 (2.1k)", price: "$129.99",orig: "$169.99", off: "Save 24%", tag: "b-sale", tagLabel: "24% off",      cat: "furniture" },
  { icon: "🖊️", bg: "#FEF3C7", brand: "Zebra",         name: "Sarasa Clip Gel Pens — 10-pack",           stars: "★★★★★", rating: "4.9 (1.2k)", price: "$18.99", orig: "",        off: "",        tag: "b-pick", tagLabel: "Top rated",    cat: "pens" },
  { icon: "🗂️", bg: "#EDE9FE", brand: "Veikous",       name: "Desktop file organizer — 5-section",       stars: "★★★★☆", rating: "4.6 (543)",  price: "$34.99", orig: "$44.99",  off: "Save 22%", tag: "b-sale", tagLabel: "22% off",      cat: "desk" },
  { icon: "🖋️", bg: "#DCFCE7", brand: "Lamy",          name: "Safari Fountain Pen — extra fine",         stars: "★★★★★", rating: "4.8 (567)",  price: "$29.99", orig: "",        off: "",        tag: "b-pick", tagLabel: "Editor's pick", cat: "pens" },
];

const SORT_OPTIONS = ["Top rated", "Price: low", "Price: high", "Newest", "Best discount"];

function ProductCard({ p }) {
  return (
    <div className="pcard">
      <div className="pcard-img" style={{ background: p.bg }}>
        {p.icon}
        <span className={`pcard-tag ${p.tag}`}>{p.tagLabel}</span>
      </div>
      <div className="pcard-body">
        <div className="pcard-brand">{p.brand}</div>
        <div className="pcard-name">{p.name}</div>
        <div className="pcard-stars">{p.stars} <span>{p.rating}</span></div>
        <div className="pcard-price-row">
          <span className="pcard-price">{p.price}</span>
          {p.orig && <span className="pcard-orig">{p.orig}</span>}
          {p.off  && <span className="pcard-off">{p.off}</span>}
        </div>
      </div>
      <div className="pcard-foot">
        <button className="pcard-btn">↗ View deal on Amazon</button>
      </div>
    </div>
  );
}

export default function ShopView() {
  const [activeCat, setActiveCat]   = useState("all");
  const [activeSort, setActiveSort] = useState("Top rated");
  const [brands, setBrands]         = useState(INITIAL_BRANDS);

  const filtered = activeCat === "all" ? PRODUCTS : PRODUCTS.filter(p => p.cat === activeCat);

  function toggleBrand(i) {
    setBrands(prev => prev.map((b, idx) => idx === i ? { ...b, on: !b.on } : b));
  }

  return (
    <div className="shop-view">
      {/* ── Category tabs ── */}
      <div className="cats-bar">
        {CAT_TABS.map(c => (
          <button
            key={c.id}
            className={`cat-tab ${activeCat === c.id ? "active" : ""}`}
            onClick={() => setActiveCat(c.id)}
          >
            <span>{c.icon}</span> {c.label}
          </button>
        ))}
      </div>

      <div className="shop-body">
        {/* ── Sidebar ── */}
        <aside className="shop-sidebar">
          <div className="filt-section-head">Brand</div>
          {brands.map((b, i) => (
            <div key={b.name} className={`filt-row ${b.on ? "on" : ""}`} onClick={() => toggleBrand(i)}>
              <div className="filt-left">
                <div className={`filt-check ${b.on ? "on" : ""}`}></div>
                {b.name}
              </div>
              <span className="filt-count">{b.count}</span>
            </div>
          ))}

          <div className="filt-section-head">Price</div>
          <div className="price-track"><div className="price-fill"></div></div>
          <div className="price-labels"><span>$0</span><span>Up to $200</span></div>

          <div className="filt-section-head">Rating</div>
          <div className="rating-row">★★★★★ <span>5 stars only (142)</span></div>
          <div className="rating-row on">★★★★☆ <span>4+ stars (280)</span></div>
          <div className="rating-row">★★★☆☆ <span>3+ stars (340)</span></div>

          <div className="filt-section-head">Availability</div>
          <div className="filt-row on"><div className="filt-left"><div className="filt-check on"></div> In stock</div></div>
          <div className="filt-row"><div className="filt-left"><div className="filt-check"></div> On sale</div></div>
          <div className="filt-row"><div className="filt-left"><div className="filt-check"></div> Prime eligible</div></div>

          <div className="filt-section-head">Source</div>
          <div className="filt-row on"><div className="filt-left"><div className="filt-check on"></div> Amazon</div></div>
          <div className="filt-row"><div className="filt-left"><div className="filt-check"></div> Staples</div></div>
          <div className="filt-row"><div className="filt-left"><div className="filt-check"></div> Office Depot</div></div>
        </aside>

        {/* ── Content ── */}
        <div className="shop-content">
          <div className="content-bar">
            <span className="results-label">Showing <strong>{filtered.length}</strong> products</span>
            <div className="sort-row">
              <span className="sort-lbl">Sort by:</span>
              {SORT_OPTIONS.map(s => (
                <button
                  key={s}
                  className={`sort-pill ${activeSort === s ? "active" : ""}`}
                  onClick={() => setActiveSort(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="featured-strip">
            <span className="feat-badge">⭐ Editor's pick</span>
            <div className="feat-icon">🪑</div>
            <div className="feat-info">
              <div className="feat-name">FlexiChair Pro ergonomic mesh chair</div>
              <div className="feat-desc">Lumbar support, adjustable armrests, breathable mesh back. Our top-rated chair after 6 months of real-desk testing.</div>
              <div className="feat-stars"><span className="s">★★★★★</span> 4.9 · 2,341 reviews · Verified purchase</div>
            </div>
            <div className="feat-right">
              <div className="feat-orig">Was $249.00</div>
              <div className="feat-price">$189.99</div>
              <div className="feat-save">You save $59.01 (24%)</div>
              <button className="feat-cta">↗ View on Amazon</button>
            </div>
          </div>

          <div className="pcard-grid">
            {filtered.map((p, i) => <ProductCard key={i} p={p} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
