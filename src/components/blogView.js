const POSTS = [
  {
    icon: "✏️", bg: "#fef3c7", tag: "Pens & Writing",
    title: "The 10 Best Gel Pens for Smooth Writing in 2024",
    excerpt: "After testing 40 different pens over three months, we found the clear winners for everyday writing.",
    date: "Dec 12, 2024", read: "6 min read",
  },
  {
    icon: "💺", bg: "#e0e7ff", tag: "Office Furniture",
    title: "Standing Desk Review: Is It Worth the Switch?",
    excerpt: "We put five standing desks to the test. Here's what we learned about health, productivity, and value.",
    date: "Dec 5, 2024", read: "10 min read",
  },
  {
    icon: "📓", bg: "#d1fae5", tag: "Notebooks",
    title: "Leuchtturm vs Moleskine: An Honest 60-Day Comparison",
    excerpt: "Two premium notebooks, one very clear winner — at least for our daily workflow.",
    date: "Nov 28, 2024", read: "7 min read",
  },
  {
    icon: "🖥️", bg: "#dbeafe", tag: "Tech & Accessories",
    title: "Best USB-C Hubs for a Clean Desk Setup (2024)",
    excerpt: "Too many cables? We tested eight USB-C hubs to find which ones actually declutter your workspace.",
    date: "Nov 20, 2024", read: "8 min read",
  },
  {
    icon: "🗂️", bg: "#fce7f3", tag: "Organization",
    title: "How to Build a Desk Setup That Boosts Deep Focus",
    excerpt: "Small changes to how you organize your desk can have a surprising impact on getting things done.",
    date: "Nov 14, 2024", read: "5 min read",
  },
  {
    icon: "🖋️", bg: "#ecfdf5", tag: "Pens & Writing",
    title: "Fountain Pens for Beginners: Our Top 5 Picks Under $50",
    excerpt: "Want to try fountain pens but don't know where to start? These five make it easy.",
    date: "Nov 7, 2024", read: "9 min read",
  },
];

export function createBlogView() {
  const el = document.createElement("div");
  el.className = "blog-view";

  el.innerHTML = `
    <div class="page-header">
      <h1>Latest Reviews &amp; Articles</h1>
      <p>Honest, in-depth guides to help you build a workspace that actually works for you.</p>
    </div>
    <div class="page-content">
      <div class="blog-grid">
        ${POSTS.map(p => `
          <article class="blog-card">
            <div class="blog-img" style="background:${p.bg};">${p.icon}</div>
            <div class="blog-body">
              <p class="blog-tag">${p.tag}</p>
              <h3 class="blog-title">${p.title}</h3>
              <p class="blog-excerpt">${p.excerpt}</p>
              <div class="blog-footer">
                <span class="blog-meta">${p.date} · ${p.read}</span>
                <a href="#" class="read-link">Read →</a>
              </div>
            </div>
          </article>
        `).join("")}
      </div>
    </div>
  `;

  return el;
}
