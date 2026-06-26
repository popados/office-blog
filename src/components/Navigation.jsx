"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const PAGES = [
  { path: "/",        label: "Home" },
  { path: "/about",   label: "About" },
  { path: "/shop",    label: "Shop" },
  { path: "/blog",    label: "Blog" },
  { path: "/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();

  function isActive(path) {
    if (path === "/") return pathname === "/";
    return pathname === path || pathname.startsWith(path + "/");
  }

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="logo">
          <i className="bi bi-award-fill logo-icon"></i>
          <div className="logo-text">
            <span className="logo-title">OfficeEssentials</span>
            <span className="logo-tagline">Affiliate Reviews &amp; Recommendations</span>
          </div>
        </Link>
        <nav className="site-nav">
          {PAGES.map(({ path, label }) => (
            <Link
              key={path}
              href={path}
              className={isActive(path) ? "active" : ""}
            >
              {label}
            </Link>
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
