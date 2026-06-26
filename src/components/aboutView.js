export function createAboutView() {
  const el = document.createElement("div");
  el.className = "about-view";

  el.innerHTML = `
    <div class="page-header">
      <h1>About OfficeEssentials</h1>
      <p>We're a team of productivity enthusiasts dedicated to finding the best office supplies through honest, hands-on testing.</p>
    </div>
    <div class="page-content">
      <div class="about-grid">
        <div class="about-body">
          <h2>Our Story</h2>
          <p>Founded in 2019, OfficeEssentials started as a simple blog where our founder shared honest reviews of the office supplies he tested at his own desk. What began as a weekend project quickly grew into a trusted resource for thousands of professionals looking to build a more productive workspace.</p>
          <p>Today, our team of dedicated reviewers tests hundreds of products each year — from ballpoint pens to standing desks — and shares findings you can actually trust.</p>
          <p>We only recommend what we'd use ourselves. No sponsored placements, no inflated ratings.</p>
        </div>
        <div class="about-img-placeholder">
          <i class="bi bi-award-fill"></i>
        </div>
      </div>

      <div class="about-feature-grid">
        <div class="about-feature">
          <i class="bi bi-clipboard2-check-fill"></i>
          <h3>500+ Products Reviewed</h3>
          <p>Every item is tested by a real human before it earns our recommendation.</p>
        </div>
        <div class="about-feature">
          <i class="bi bi-people-fill"></i>
          <h3>50k+ Monthly Readers</h3>
          <p>A growing community of professionals who trust our honest assessments.</p>
        </div>
        <div class="about-feature">
          <i class="bi bi-hand-thumbs-up-fill"></i>
          <h3>No Paid Reviews</h3>
          <p>Our editorial integrity is non-negotiable — we never accept payment for ratings.</p>
        </div>
      </div>
    </div>
  `;

  return el;
}
