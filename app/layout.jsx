import "@/styles/default.css";
import "@/styles/app.css";
import "@/styles/responsive.css";

import Ticker     from "@/src/components/Ticker.jsx";
import Navigation from "@/src/components/Navigation.jsx";

export const metadata = {
  title: "OfficeEssentials",
  description: "Affiliate reviews and recommendations for office supplies, desk accessories, and productivity tools.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" />
      </head>
      <body>
        <Ticker />
        <Navigation />
        {children}
        <footer className="site-footer">
          <p>
            © 2026 OfficeEssentials · Affiliate Reviews &amp; Recommendations ·{" "}
            <a href="#">Privacy Policy</a> · <a href="#">Disclosure</a>
          </p>
        </footer>
      </body>
    </html>
  );
}
