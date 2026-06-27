"use client";

import { useState } from "react";

const PRODUCTS = [
  {
    icon: "✒️",
    bg: "#E0F2F0",
    brand: "Pilot",
    name: "G2 Fine Ballpoint Pens — 12-Pack",
    stars: "★★★★★",
    rating: "4.8 (9.2k)",
    price: "$14.49",
    orig: "$18.00",
    off: "Save 19%",
    tag: "b-sale",
    tagLabel: "19% off",
    cat: "pens",
  },
  {
    icon: "⌨️",
    bg: "#1a1a2e",
    brand: "Razer",
    name: "Huntsman Elite — Opto-Mechanical Gaming Keyboard",
    stars: "★★★★★",
    rating: "4.8 (14.3k)",
    price: "$149.99",
    orig: "$199.99",
    off: "Save 25%",
    tag: "b-pick",
    tagLabel: "Editor's pick",
    cat: "tech",
  },
];

const BRANDS = [
  { name: "Pilot", count: 1, on: true },
  { name: "Razer", count: 1, on: true },
];

const FEATURED = {
  icon: "⌨️",
  name: "Razer Huntsman Elite — Opto-Mechanical Gaming Keyboard",
  desc: "Linear optical switches, per-key RGB Chroma lighting, magnetic leatherette wrist rest, and a dedicated media dial. The keyboard that earns its place on any serious desk.",
  stars: "4.8 · 14,300+ reviews · Verified purchase",
  orig: "$199.99",
  price: "$149.99",
  saving: "You save $50.00 (25%)",
};

const CAT_TABS = [
  { id: "all",  icon: "⊞",  label: "All products" },
  { id: "pens", icon: "✏️", label: "Writing tools" },
  { id: "tech", icon: "⌨️", label: "Tech accessories" },
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
  const [brands, setBrands]         = useState(BRANDS);

  const filtered = activeCat === "all"
    ? PRODUCTS
    : PRODUCTS.filter(p => p.cat === activeCat);

  function toggleBrand(i) {
    setBrands(prev => prev.map((b, idx) => idx === i ? { ...b, on: !b.on } : b));
  }

  return (
    <div className="shop-view">
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
          <div className="price-labels"><span>$14</span><span>Up to $200</span></div>

          <div className="filt-section-head">Rating</div>
          <div className="rating-row on">★★★★★ <span>4.8 avg · 23k+ reviews</span></div>

          <div className="filt-section-head">Availability</div>
          <div className="filt-row on"><div className="filt-left"><div className="filt-check on"></div> In stock</div></div>
          <div className="filt-row on"><div className="filt-left"><div className="filt-check on"></div> On sale</div></div>
          <div className="filt-row on"><div className="filt-left"><div className="filt-check on"></div> Prime eligible</div></div>

          <div className="filt-section-head">Source</div>
          <div className="filt-row on"><div className="filt-left"><div className="filt-check on"></div> Amazon</div></div>
        </aside>

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
            <div className="feat-icon">{FEATURED.icon}</div>
            <div className="feat-info">
              <div className="feat-name">{FEATURED.name}</div>
              <div className="feat-desc">{FEATURED.desc}</div>
              <div className="feat-stars"><span className="s">★★★★★</span> {FEATURED.stars}</div>
            </div>
            <div className="feat-right">
              <div className="feat-orig">Was {FEATURED.orig}</div>
              <div className="feat-price">{FEATURED.price}</div>
              <div className="feat-save">{FEATURED.saving}</div>
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
