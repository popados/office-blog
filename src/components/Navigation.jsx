import { NavLink } from "react-router-dom";

const PAGES = [
  { path: "/",        label: "Home" },
  { path: "/about",   label: "About" },
  { path: "/shop",    label: "Shop" },
  { path: "/blog",    label: "Blog" },
  { path: "/contact", label: "Contact" },
];

export default function Navigation() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <NavLink to="/" className="logo">
          <i className="bi bi-award-fill logo-icon"></i>
          <div className="logo-text">
            <span className="logo-title">OfficeEssentials</span>
            <span className="logo-tagline">Affiliate Reviews &amp; Recommendations</span>
          </div>
        </NavLink>
        <nav className="site-nav">
          {PAGES.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="header-actions">
          <button className="icon-btn" aria-label="Search"><i className="bi bi-search"></i></button>
          <button className="icon-btn" aria-label="Cart">
            <i className="bi bi-cart2"></i>
            <span className="cart-badge">0</span>
          </button>
        </div>
      </div>
    </header>
  );
}
