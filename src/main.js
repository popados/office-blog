import "../styles/default.css";
import "../styles/app.css";
import "../styles/responsive.css";

import { createTicker } from "./components/ticker.js";
import { createNavigation } from "./components/navigation.js";
import { createHomeView } from "./components/homeView.js";
import { createAboutView } from "./components/aboutView.js";
import { createShopView } from "./components/shopView.js";
import { createBlogView } from "./components/blogView.js";
import { createContactView } from "./components/contactView.js";

const app = document.getElementById("app");
let currentPage = "home";

function navigate(page) {
  currentPage = page;
  window.scrollTo({ top: 0, behavior: "smooth" });
  renderApp();
}

function renderApp() {
  app.innerHTML = "";

  app.appendChild(createTicker());
  app.appendChild(createNavigation(navigate, currentPage));

  const views = {
    home: () => createHomeView(navigate),
    about: createAboutView,
    shop: createShopView,
    blog: createBlogView,
    contact: createContactView,
  };

  const factory = views[currentPage] ?? views.home;
  app.appendChild(factory());

  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = `<p>© 2024 OfficeEssentials · Affiliate Reviews &amp; Recommendations · <a href="#">Privacy Policy</a> · <a href="#">Disclosure</a></p>`;
  app.appendChild(footer);
}

renderApp();
