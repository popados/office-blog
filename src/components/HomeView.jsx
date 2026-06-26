"use client";

import { useRouter } from "next/navigation";

const TOP_PICKS = [
  { rank: "#1", icon: "✒️", bg: "#E0F2F0", name: "Pilot G2 Fine pens",   brand: "Pilot · 12-pack",       price: "$14.49", orig: "$18.00",  badge: "b-sale", label: "19% off" },
  { rank: "#2", icon: "⌨️", bg: "#EDE9FE", name: "Logitech MX Keys",     brand: "Logitech · wireless",    price: "$99.99", orig: "$119.99", badge: "b-sale", label: "17% off" },
  { rank: "#3", icon: "📓", bg: "#DCFCE7", name: "Leuchtturm1917 A5",    brand: "Leuchtturm · dot grid",  price: "$22.95", orig: "",        badge: "b-pick", label: "Editor's pick" },
  { rank: "#4", icon: "🖥️", bg: "#FEF3C7", name: "Monitor arm stand",    brand: "Amazon Basics · single", price: "$39.99", orig: "$54.99",  badge: "b-hot",  label: "Hot deal" },
  { rank: "#5", icon: "📋", bg: "#FEE2E2", name: "Post-it Super Sticky", brand: "3M · 12-pack",           price: "$16.29", orig: "",        badge: "b-new",  label: "New" },
];

const CATEGORIES = [
  { id: "cat-pens",       icon: "bi bi-pen-fill",        label: "Writing & Pens" },
  { id: "cat-desk",       icon: "bi bi-grid-fill",        label: "Desk Organization" },
  { id: "cat-notebooks",  icon: "bi bi-journal-richtext", label: "Notebooks & Paper" },
  { id: "cat-essentials", icon: "bi bi-box-seam-fill",    label: "Office Essentials" },
  { id: "cat-furniture",  icon: "bi bi-house-fill",       label: "Office Furniture" },
  { id: "cat-tech",       icon: "bi bi-laptop-fill",      label: "Tech & Accessories" },
];

const TRUST_BADGES = [
  { icon: "bi bi-star-fill",      title: "Expert Reviews",          desc: "Our experts have tried thousands of products to help find the very best." },
  { icon: "bi bi-tags-fill",      title: "Best Value",              desc: "We only recommend supplies that fit your budget without sacrificing quality." },
  { icon: "bi bi-shield-check",   title: "Trusted Recommendations", desc: "All our picks are items you can genuinely rely on, every single day." },
  { icon: "bi bi-lightning-fill", title: "Work Smarter",            desc: "The right supplies help you stay focused and get more done." },
];

export default function HomeView() {
  const router = useRouter();

  function go(path) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    router.push(path);
  }

  return (
    <div className="home-view">
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <p className="hero-eyebrow">Affiliate Reviews &amp; Recommendations</p>
            <h1 className="hero-title">Your keyboard called—it wants better company.</h1>
            <p className="hero-desc">
              Discover office supplies, desk accessories, and productivity tools that help you
              work smarter and keep your workspace looking sharp.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => go("/shop")}>Upgrade Your Workspace →</button>
              <button className="btn btn-outline" onClick={() => go("/shop")}>Explore Top Picks →</button>
            </div>
          </div>

          <div className="hero-side">
            <div className="side-head">This week's top picks</div>
            {TOP_PICKS.map(p => (
              <div key={p.rank} className="top-pick">
                <span className="pick-rank">{p.rank}</span>
                <div className="pick-icon" style={{ background: p.bg }}>{p.icon}</div>
                <div className="pick-body">
                  <div className="pick-name">{p.name}</div>
                  <div className="pick-brand">{p.brand}</div>
                </div>
                <div className="pick-right">
                  <div className="pick-price">{p.price}</div>
                  {p.orig && <div className="pick-orig">{p.orig}</div>}
                  <span className={`pick-badge ${p.badge}`}>{p.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="trust-section">
        <div className="trust-grid">
          {TRUST_BADGES.map(b => (
            <div key={b.title} className="trust-badge">
              <div className="trust-icon"><i className={b.icon}></i></div>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="categories-section">
        <h2>Shop by Category</h2>
        <div className="categories-grid">
          {CATEGORIES.map(c => (
            <div key={c.id} className="category-card" onClick={() => go("/shop")}>
              <div className={`category-img ${c.id}`}><i className={c.icon}></i></div>
              <div className="category-info">
                <h3>{c.label}</h3>
                <span className="shop-link">Shop now →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="reviews-banner">
        <div className="reviews-banner-inner">
          <div>
            <h2>Honest reviews. Smart picks. Better workspace.</h2>
            <p>Our goal is simple: help you find office supplies that genuinely make a difference.</p>
          </div>
          <button className="btn btn-outline-white" onClick={() => go("/blog")}>View Latest Reviews</button>
        </div>
      </section>
    </div>
  );
}
