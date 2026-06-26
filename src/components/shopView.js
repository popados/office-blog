const CAT_TABS = [
  { id: "all",        icon: "⊞",  label: "All products" },
  { id: "pens",       icon: "✏️", label: "Writing tools" },
  { id: "furniture",  icon: "🪑", label: "Ergonomics" },
  { id: "tech",       icon: "⌨️", label: "Tech accessories" },
  { id: "essentials", icon: "🖨️", label: "Essentials" },
  { id: "desk",       icon: "📁", label: "Filing & Desk" },
  { id: "notebooks",  icon: "📓", label: "Notebooks" },
];

const BRANDS = [
  { name: "Pilot",      count: 24, on: true  },
  { name: "Logitech",   count: 18, on: true  },
  { name: "Staedtler",  count: 11, on: false },
  { name: "3M",         count: 9,  on: false },
  { name: "Moleskine",  count: 7,  on: false },
  { name: "FLEXISPOT",  count: 5,  on: false },
  { name: "HP",         count: 12, on: false },
];

const PRODUCTS = [
  { icon: "✒️", bg: "#E0F2F0", brand: "Pilot",         name: "G2 Fine ballpoint pens — 12-pack",       stars: "★★★★★", rating: "4.8 (9.2k)", price: "$14.49", orig: "$18.00", off: "Save 19%", tag: "b-sale", tagLabel: "19% off",      cat: "pens" },
  { icon: "📓", bg: "#DCFCE7", brand: "Leuchtturm1917",name: "A5 dot-grid hardcover notebook",          stars: "★★★★★", rating: "4.9 (4.1k)", price: "$22.95", orig: "",       off: "",        tag: "b-pick", tagLabel: "Editor's pick", cat: "notebooks" },
  { icon: "🖥️", bg: "#FEF3C7", brand: "Amazon Basics", name: "Single monitor arm — height adjustable",  stars: "★★★★☆", rating: "4.6 (6.8k)", price: "$39.99", orig: "$54.99", off: "Save 27%", tag: "b-hot",  tagLabel: "Hot",          cat: "tech" },
  { icon: "⌨️", bg: "#EDE9FE", brand: "Logitech",      name: "MX Keys wireless keyboard",               stars: "★★★★★", rating: "4.8 (12k)",  price: "$99.99", orig: "$119.99",off: "Save 17%", tag: "b-sale", tagLabel: "17% off",      cat: "tech" },
  { icon: "📋", bg: "#FEE2E2", brand: "3M",            name: "Post-it Super Sticky notes — 12 pads",    stars: "★★★★★", rating: "4.7 (3.3k)", price: "$16.29", orig: "",       off: "",        tag: "b-new",  tagLabel: "New",           cat: "essentials" },
  { icon: "📐", bg: "#E0F2F0", brand: "FLEXISPOT",     name: "Standing desk converter — 35\"",           stars: "★★★★☆", rating: "4.5 (2.1k)", price: "$129.99",orig: "$169.99",off: "Save 24%", tag: "b-sale", tagLabel: "24% off",      cat: "furniture" },
  { icon: "🖊️", bg: "#FEF3C7", brand: "Zebra",        name: "Sarasa Clip Gel Pens — 10-pack",           stars: "★★★★★", rating: "4.9 (1.2k)", price: "$18.99", orig: "",       off: "",        tag: "b-pick", tagLabel: "Top rated",    cat: "pens" },
  { icon: "🗂️", bg: "#EDE9FE", brand: "Veikous",      name: "Desktop file organizer — 5-section",       stars: "★★★★☆", rating: "4.6 (543)",  price: "$34.99", orig: "$44.99", off: "Save 22%", tag: "b-sale", tagLabel: "22% off",      cat: "desk" },
  { icon: "🖋️", bg: "#DCFCE7", brand: "Lamy",         name: "Safari Fountain Pen — extra fine",         stars: "★★★★★", rating: "4.8 (567)",  price: "$29.99", orig: "",       off: "",        tag: "b-pick", tagLabel: "Editor's pick", cat: "pens" },
];

const SORT_OPTIONS = ["Top rated", "Price: low", "Price: high", "Newest", "Best discount"];

export function createShopView() {
  const el = document.createElement("div");
  el.className = "shop-view";

  let activeCat  = "all";
  let activeSort = "Top rated";

  // ── Category tabs ──────────────────────────────────────
  const catsBar = document.createElement("div");
  catsBar.className = "cats-bar";
  catsBar.innerHTML = CAT_TABS.map(c => `
    <button class="cat-tab ${c.id === activeCat ? "active" : ""}" data-cat="${c.id}">
      <span>${c.icon}</span> ${c.label}
    </button>
  `).join("");

  // ── Sidebar ─────────────────────────────────────────────
  const sidebar = document.createElement("aside");
  sidebar.className = "shop-sidebar";
  sidebar.innerHTML = `
    <div class="filt-section-head">Brand</div>
    ${BRANDS.map((b, i) => `
      <div class="filt-row ${b.on ? "on" : ""}" data-brand-idx="${i}">
        <div class="filt-left">
          <div class="filt-check ${b.on ? "on" : ""}"></div>
          ${b.name}
        </div>
        <span class="filt-count">${b.count}</span>
      </div>
    `).join("")}

    <div class="filt-section-head">Price</div>
    <div class="price-track"><div class="price-fill"></div></div>
    <div class="price-labels"><span>$0</span><span>Up to $200</span></div>

    <div class="filt-section-head">Rating</div>
    <div class="rating-row">★★★★★ <span>5 stars only (142)</span></div>
    <div class="rating-row on">★★★★☆ <span>4+ stars (280)</span></div>
    <div class="rating-row">★★★☆☆ <span>3+ stars (340)</span></div>

    <div class="filt-section-head">Availability</div>
    <div class="filt-row on"><div class="filt-left"><div class="filt-check on"></div> In stock</div></div>
    <div class="filt-row"><div class="filt-left"><div class="filt-check"></div> On sale</div></div>
    <div class="filt-row"><div class="filt-left"><div class="filt-check"></div> Prime eligible</div></div>

    <div class="filt-section-head">Source</div>
    <div class="filt-row on"><div class="filt-left"><div class="filt-check on"></div> Amazon</div></div>
    <div class="filt-row"><div class="filt-left"><div class="filt-check"></div> Staples</div></div>
    <div class="filt-row"><div class="filt-left"><div class="filt-check"></div> Office Depot</div></div>
  `;

  // ── Main content area ────────────────────────────────────
  const content = document.createElement("div");
  content.className = "shop-content";

  const contentBar = document.createElement("div");
  contentBar.className = "content-bar";
  contentBar.innerHTML = `
    <span class="results-label">Showing <strong>${PRODUCTS.length}</strong> products</span>
    <div class="sort-row">
      <span class="sort-lbl">Sort by:</span>
      ${SORT_OPTIONS.map(s => `
        <button class="sort-pill ${s === activeSort ? "active" : ""}" data-sort="${s}">${s}</button>
      `).join("")}
    </div>
  `;

  const featuredStrip = document.createElement("div");
  featuredStrip.className = "featured-strip";
  featuredStrip.innerHTML = `
    <span class="feat-badge">⭐ Editor's pick</span>
    <div class="feat-icon">🪑</div>
    <div class="feat-info">
      <div class="feat-name">FlexiChair Pro ergonomic mesh chair</div>
      <div class="feat-desc">Lumbar support, adjustable armrests, breathable mesh back. Our top-rated chair after 6 months of real-desk testing.</div>
      <div class="feat-stars"><span class="s">★★★★★</span> 4.9 · 2,341 reviews · Verified purchase</div>
    </div>
    <div class="feat-right">
      <div class="feat-orig">Was $249.00</div>
      <div class="feat-price">$189.99</div>
      <div class="feat-save">You save $59.01 (24%)</div>
      <button class="feat-cta">↗ View on Amazon</button>
    </div>
  `;

  const grid = document.createElement("div");
  grid.className = "pcard-grid";

  function renderGrid(cat) {
    const list = cat === "all" ? PRODUCTS : PRODUCTS.filter(p => p.cat === cat);
    grid.innerHTML = list.map(p => `
      <div class="pcard">
        <div class="pcard-img" style="background:${p.bg}">
          ${p.icon}
          <span class="pcard-tag ${p.tag}">${p.tagLabel}</span>
        </div>
        <div class="pcard-body">
          <div class="pcard-brand">${p.brand}</div>
          <div class="pcard-name">${p.name}</div>
          <div class="pcard-stars">${p.stars} <span>${p.rating}</span></div>
          <div class="pcard-price-row">
            <span class="pcard-price">${p.price}</span>
            ${p.orig ? `<span class="pcard-orig">${p.orig}</span>` : ""}
            ${p.off  ? `<span class="pcard-off">${p.off}</span>`   : ""}
          </div>
        </div>
        <div class="pcard-foot">
          <button class="pcard-btn">↗ View deal on Amazon</button>
        </div>
      </div>
    `).join("");
  }

  renderGrid("all");

  content.appendChild(contentBar);
  content.appendChild(featuredStrip);
  content.appendChild(grid);

  // ── Body layout ──────────────────────────────────────────
  const body = document.createElement("div");
  body.className = "shop-body";
  body.appendChild(sidebar);
  body.appendChild(content);

  el.appendChild(catsBar);
  el.appendChild(body);

  // ── Events ───────────────────────────────────────────────
  catsBar.querySelectorAll(".cat-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      catsBar.querySelectorAll(".cat-tab").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCat = btn.dataset.cat;
      renderGrid(activeCat);
    });
  });

  contentBar.querySelectorAll(".sort-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      contentBar.querySelectorAll(".sort-pill").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeSort = btn.dataset.sort;
    });
  });

  sidebar.querySelectorAll(".filt-row[data-brand-idx]").forEach(row => {
    row.addEventListener("click", () => {
      const check = row.querySelector(".filt-check");
      row.classList.toggle("on");
      check.classList.toggle("on");
    });
  });

  return el;
}
