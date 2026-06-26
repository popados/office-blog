export function createNavigation(onNavigate, activePage = "home") {
  const header = document.createElement("header");
  header.className = "site-header";

  const pages = ["home", "about", "shop", "blog", "contact"];

  header.innerHTML = `
    <div class="site-header-inner">
      <a class="logo" href="#" data-page="home">
        <i class="bi bi-award-fill logo-icon"></i>
        <div class="logo-text">
          <span class="logo-title">OfficeEssentials</span>
          <span class="logo-tagline">Affiliate Reviews &amp; Recommendations</span>
        </div>
      </a>
      <nav class="site-nav">
        ${pages.map(p => `
          <a href="#" data-page="${p}" class="${activePage === p ? "active" : ""}">
            ${p.charAt(0).toUpperCase() + p.slice(1)}
          </a>
        `).join("")}
      </nav>
      <div class="header-actions">
        <button class="icon-btn" aria-label="Search"><i class="bi bi-search"></i></button>
        <button class="icon-btn" aria-label="Cart">
          <i class="bi bi-cart2"></i>
          <span class="cart-badge">0</span>
        </button>
      </div>
    </div>
  `;

  header.querySelectorAll("[data-page]").forEach(el => {
    el.addEventListener("click", e => {
      e.preventDefault();
      onNavigate(el.dataset.page);
    });
  });

  return header;
}
