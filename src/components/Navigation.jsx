"use client";

import { useState } from "react";
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
  const [open, setOpen] = useState(false);

  function isActive(path) {
    if (path === "/") return pathname === "/";
    return pathname === path || pathname.startsWith(path + "/");
  }

  function close() {
    setOpen(false);
  }

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="logo" onClick={close}>
          <i className="bi bi-award-fill logo-icon"></i>
          <div className="logo-text">
            <span className="logo-title">OfficeEssentials</span>
            <span className="logo-tagline">Affiliate Reviews &amp; Recommendations</span>
          </div>
        </Link>

        <nav className={`site-nav${open ? " open" : ""}`}>
          {PAGES.map(({ path, label }) => (
            <Link
              key={path}
              href={path}
              className={isActive(path) ? "active" : ""}
              onClick={close}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <button className="icon-btn" aria-label="Search">
            <i className="bi bi-search"></i>
          </button>
          <button
            className="icon-btn nav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(o => !o)}
          >
            <i className={open ? "bi bi-x-lg" : "bi bi-list"}></i>
          </button>
        </div>
      </div>
    </header>
  );
}
