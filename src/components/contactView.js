export function createContactView() {
  const el = document.createElement("div");
  el.className = "contact-view";

  el.innerHTML = `
    <div class="page-header">
      <h1>Get in Touch</h1>
      <p>Have a question, product suggestion, or partnership inquiry? We'd love to hear from you.</p>
    </div>
    <div class="page-content">
      <div class="contact-grid">
        <div class="contact-info">
          <h2>Contact Information</h2>
          <p>Reach out through the form or use the details below. We typically respond within one business day.</p>
          <div class="contact-detail">
            <div class="contact-detail-icon"><i class="bi bi-envelope-fill"></i></div>
            <div class="contact-detail-text">
              <strong>Email</strong>
              <span>hello@officeessentials.com</span>
            </div>
          </div>
          <div class="contact-detail">
            <div class="contact-detail-icon"><i class="bi bi-geo-alt-fill"></i></div>
            <div class="contact-detail-text">
              <strong>Location</strong>
              <span>Austin, Texas, USA</span>
            </div>
          </div>
          <div class="contact-detail">
            <div class="contact-detail-icon"><i class="bi bi-clock-fill"></i></div>
            <div class="contact-detail-text">
              <strong>Response Time</strong>
              <span>Within 1 business day</span>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <h2>Send a Message</h2>
          <form id="contact-form">
            <div class="form-row">
              <div class="form-group">
                <label for="c-name">Name</label>
                <input type="text" id="c-name" name="name" placeholder="Your name" />
              </div>
              <div class="form-group">
                <label for="c-email">Email</label>
                <input type="email" id="c-email" name="email" placeholder="you@example.com" />
              </div>
            </div>
            <div class="form-group">
              <label for="c-subject">Subject</label>
              <input type="text" id="c-subject" name="subject" placeholder="What's this about?" />
            </div>
            <div class="form-group">
              <label for="c-message">Message</label>
              <textarea id="c-message" name="message" placeholder="Tell us more..."></textarea>
            </div>
            <button type="submit" class="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  `;

  const form = el.querySelector("#contact-form");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const btn = form.querySelector(".submit-btn");
    btn.textContent = "Message Sent!";
    btn.style.background = "#059669";
    setTimeout(() => {
      btn.textContent = "Send Message";
      btn.style.background = "";
      form.reset();
    }, 3000);
  });

  return el;
}
