const FEATURES = [
  {
    icon: "bi bi-tools",
    title: "Built for Real-World Use, Not Just Stats",
    desc: "Every product on this site has been handled, tested, or put through its paces in an actual workspace. No spec-sheet recommendations.",
  },
  {
    icon: "bi bi-patch-check-fill",
    title: "Affiliate Links Clearly Marked",
    desc: "No stealth loot boxes. If a link earns a commission, you'll know. Transparency is non-negotiable here.",
  },
  {
    icon: "bi bi-clipboard2-check-fill",
    title: "If It's on the List, It Passed Alpha",
    desc: "Products earn their spot by passing a real-world test first. If it didn't make the cut in my own setup, it doesn't make the page.",
  },
  {
    icon: "bi bi-shield-check",
    title: "Only Gear from My Own Workspace",
    desc: "This site is built from lived-in experience — not press samples or paid placements. The inventory is personal.",
  },
];

export default function AboutView() {
  return (
    <div className="about-view">
      <div className="page-header">
        <h1>About the Blog</h1>
        <h2>Hello there! Grab your favorite pen and spiral notebook — let's talk office spaces.</h2>
      </div>

      <div className="page-content">
        <div className="about-body">
          <h1 className="about-callout-lead">
            Welcome to the blog — where office supplies are treated less like stationery and more like
            loot drops for your build.
          </h1>
          <p>
            Think of this space as a guide for building your ideal workspace loadout. From ergonomic
            chairs that boost your comfort levels, to desk organizers that help you manage your
            inventory — everything here is about finding gear that actually improves your daily grind.
          </p>
          <p>
            You'll find honest reviews, buying guides, comparisons, and productivity tips — all written
            from the perspective of someone slowly leveling up their understanding of office gear (and
            occasionally realizing they didn't need another notebook… but bought it anyway).
          </p>
          <p>
            No pay-to-win recommendations. No endless sales pitches. Just real opinions, tested tools,
            and a little desk humor for good measure.
          </p>
          <p>
            Consider this your starter zone. The quests are simple, the gear is practical, and the
            final boss is your workday.
          </p>
          <blockquote className="about-quote">
            Your keyboard is ready. Time to upgrade.
          </blockquote>
        </div>

        <div className="about-feature-grid">
          {FEATURES.map(f => (
            <div key={f.title} className="about-feature">
              <i className={f.icon}></i>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
