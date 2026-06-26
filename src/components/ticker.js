const DEALS = [
  { name: "Pilot G2 12-pack",             badge: "19% off",   price: "$14.49" },
  { name: "Logitech MX Keys",             badge: "17% off",   price: "$99.99" },
  { name: "Monitor arm",                  badge: "27% off",   price: "$39.99" },
  { name: "Standing desk converter",      badge: "24% off",   price: "$129.99" },
  { name: "Leuchtturm1917 notebook",      badge: "top rated", price: "$22.95" },
  { name: "Post-it Super Sticky 12-pack", badge: "new deal",  price: "$16.29" },
  { name: "HP LaserJet toner",            badge: "31% off",   price: "$38.00" },
];

export function createTicker() {
  const wrap = document.createElement("div");
  wrap.className = "ticker-wrap";

  // Duplicate items so the seamless loop works at 50% translate
  const items = [...DEALS, ...DEALS];

  wrap.innerHTML = `
    <div class="ticker-label">Today's deals</div>
    <div class="ticker-overflow">
      <div class="ticker-track">
        ${items.map(d =>
          `<div class="ticker-item">${d.name} &nbsp;<span class="ticker-save">${d.badge}</span>&nbsp; — ${d.price}</div>`
        ).join("")}
      </div>
    </div>
  `;

  return wrap;
}
