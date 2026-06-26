import "../styles/default.css";
import "../styles/app.css";
import "../styles/responsive.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Ticker      from "./components/Ticker.jsx";
import Navigation  from "./components/Navigation.jsx";
import HomeView    from "./components/HomeView.jsx";
import AboutView   from "./components/AboutView.jsx";
import ShopView    from "./components/ShopView.jsx";
import BlogView    from "./components/BlogView.jsx";
import ContactView from "./components/ContactView.jsx";

function App() {
  return (
    <BrowserRouter>
      <Ticker />
      <Navigation />
      <Routes>
        <Route path="/"        element={<HomeView />} />
        <Route path="/about"   element={<AboutView />} />
        <Route path="/shop"    element={<ShopView />} />
        <Route path="/blog"    element={<BlogView />} />
        <Route path="/contact" element={<ContactView />} />
        <Route path="*"        element={<HomeView />} />
      </Routes>
      <footer className="site-footer">
        <p>
          © 2026 OfficeEssentials · Affiliate Reviews &amp; Recommendations ·{" "}
          <a href="#">Privacy Policy</a> · <a href="#">Disclosure</a>
        </p>
      </footer>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
