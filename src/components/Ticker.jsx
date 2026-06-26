const DEALS = [
  { name: "Pilot G2 12-pack",             badge: "19% off",   price: "$14.49" },
  { name: "Logitech MX Keys",             badge: "17% off",   price: "$99.99" },
  { name: "Monitor arm",                  badge: "27% off",   price: "$39.99" },
  { name: "Standing desk converter",      badge: "24% off",   price: "$129.99" },
  { name: "Leuchtturm1917 notebook",      badge: "top rated", price: "$22.95" },
  { name: "Post-it Super Sticky 12-pack", badge: "new deal",  price: "$16.29" },
  { name: "HP LaserJet toner",            badge: "31% off",   price: "$38.00" },
];

const items = [...DEALS, ...DEALS];

export default function Ticker() {
  return (
    <div className="ticker-wrap">
      <div className="ticker-label">Today's deals</div>
      <div className="ticker-overflow">
        <div className="ticker-track">
          {items.map((d, i) => (
            <div key={i} className="ticker-item">
              {d.name}&nbsp;<span className="ticker-save">{d.badge}</span>&nbsp;— {d.price}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
