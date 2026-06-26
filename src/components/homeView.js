const TOP_PICKS = [
  { rank: "#1", icon: "✒️", bg: "#E0F2F0", name: "Pilot G2 Fine pens",       brand: "Pilot · 12-pack",          price: "$14.49", orig: "$18.00", badge: "b-sale", label: "19% off" },
  { rank: "#2", icon: "⌨️", bg: "#EDE9FE", name: "Logitech MX Keys",         brand: "Logitech · wireless",       price: "$99.99", orig: "$119.99", badge: "b-sale", label: "17% off" },
  { rank: "#3", icon: "📓", bg: "#DCFCE7", name: "Leuchtturm1917 A5",        brand: "Leuchtturm · dot grid",     price: "$22.95", orig: "",        badge: "b-pick", label: "Editor's pick" },
  { rank: "#4", icon: "🖥️", bg: "#FEF3C7", name: "Monitor arm stand",        brand: "Amazon Basics · single",    price: "$39.99", orig: "$54.99", badge: "b-hot",  label: "Hot deal" },
  { rank: "#5", icon: "📋", bg: "#FEE2E2", name: "Post-it Super Sticky",     brand: "3M · 12-pack",              price: "$16.29", orig: "",        badge: "b-new",  label: "New" },
];

export function createHomeView(onNavigate) {
  const el = document.createElement("div");
  el.className = "home-view";

  el.innerHTML = `
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-content">
          <p class="hero-eyebrow">Affiliate Reviews &amp; Recommendations</p>
          <h1 class="hero-title">Your keyboard called—it wants better company.</h1>
          <p class="hero-desc">Discover office supplies, desk accessories, and productivity tools that help you work smarter and keep your workspace looking sharp.</p>
          <div class="hero-actions">
            <button class="btn btn-primary" data-page="shop">Upgrade Your Workspace →</button>
            <button class="btn btn-outline" data-page="shop">Explore Top Picks →</button>
          </div>
        </div>

        <div class="hero-side">
          <div class="side-head">This week's top picks</div>
          ${TOP_PICKS.map(p => `
            <div class="top-pick">
              <span class="pick-rank">${p.rank}</span>
              <div class="pick-icon" style="background:${p.bg}">${p.icon}</div>
              <div class="pick-body">
                <div class="pick-name">${p.name}</div>
                <div class="pick-brand">${p.brand}</div>
              </div>
              <div class="pick-right">
                <div class="pick-price">${p.price}</div>
                ${p.orig ? `<div class="pick-orig">${p.orig}</div>` : ""}
                <span class="pick-badge ${p.badge}">${p.label}</span>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="trust-section">
      <div class="trust-grid">
        <div class="trust-badge">
          <div class="trust-icon"><i class="bi bi-star-fill"></i></div>
          <h3>Expert Reviews</h3>
          <p>Our experts have tried thousands of products to help find the very best.</p>
        </div>
        <div class="trust-badge">
          <div class="trust-icon"><i class="bi bi-tags-fill"></i></div>
          <h3>Best Value</h3>
          <p>We only recommend supplies that fit your budget without sacrificing quality.</p>
        </div>
        <div class="trust-badge">
          <div class="trust-icon"><i class="bi bi-shield-check"></i></div>
          <h3>Trusted Recommendations</h3>
          <p>All our picks are items you can genuinely rely on, every single day.</p>
        </div>
        <div class="trust-badge">
          <div class="trust-icon"><i class="bi bi-lightning-fill"></i></div>
          <h3>Work Smarter</h3>
          <p>The right supplies help you stay focused and get more done.</p>
        </div>
      </div>
    </section>

    <section class="categories-section">
      <h2>Shop by Category</h2>
      <div class="categories-grid">
        <div class="category-card" data-page="shop">
          <div class="category-img cat-pens"><i class="bi bi-pen-fill"></i></div>
          <div class="category-info">
            <h3>Writing &amp; Pens</h3>
            <a href="#" class="shop-link" data-page="shop">Shop now →</a>
          </div>
        </div>
        <div class="category-card" data-page="shop">
          <div class="category-img cat-desk"><i class="bi bi-grid-fill"></i></div>
          <div class="category-info">
            <h3>Desk Organization</h3>
            <a href="#" class="shop-link" data-page="shop">Shop now →</a>
          </div>
        </div>
        <div class="category-card" data-page="shop">
          <div class="category-img cat-notebooks"><i class="bi bi-journal-richtext"></i></div>
          <div class="category-info">
            <h3>Notebooks &amp; Paper</h3>
            <a href="#" class="shop-link" data-page="shop">Shop now →</a>
          </div>
        </div>
        <div class="category-card" data-page="shop">
          <div class="category-img cat-essentials"><i class="bi bi-box-seam-fill"></i></div>
          <div class="category-info">
            <h3>Office Essentials</h3>
            <a href="#" class="shop-link" data-page="shop">Shop now →</a>
          </div>
        </div>
        <div class="category-card" data-page="shop">
          <div class="category-img cat-furniture"><i class="bi bi-house-fill"></i></div>
          <div class="category-info">
            <h3>Office Furniture</h3>
            <a href="#" class="shop-link" data-page="shop">Shop now →</a>
          </div>
        </div>
        <div class="category-card" data-page="shop">
          <div class="category-img cat-tech"><i class="bi bi-laptop-fill"></i></div>
          <div class="category-info">
            <h3>Tech &amp; Accessories</h3>
            <a href="#" class="shop-link" data-page="shop">Shop now →</a>
          </div>
        </div>
      </div>
    </section>

    <section class="reviews-banner">
      <div class="reviews-banner-inner">
        <div>
          <h2>Honest reviews. Smart picks. Better workspace.</h2>
          <p>Our goal is simple: help you find office supplies that genuinely make a difference.</p>
        </div>
        <button class="btn btn-outline-white" data-page="blog">View Latest Reviews</button>
      </div>
    </section>
  `;

  el.querySelectorAll("[data-page]").forEach(node => {
    node.addEventListener("click", e => {
      e.preventDefault();
      onNavigate(node.dataset.page);
    });
  });

  return el;
}
