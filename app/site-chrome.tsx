import Link from "next/link";

export const navItems = [
  ["Why Us", "/why-us"],
  ["Services", "/services"],
  ["Who We Help", "/who-we-help"],
  ["Results", "/results"],
  ["Insights", "/insights"],
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Rolodex Rebels home">
        <img src="/rolodex-rebels-logo-transparent.png" alt="Rolodex Rebels" width="1983" height="793" />
      </Link>
      <nav className="primary-nav" aria-label="Primary navigation">
        {navItems.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
      <Link className="header-cta" href="/start-a-project">Start a Project</Link>
      <details className="mobile-menu">
        <summary>Menu</summary>
        <nav aria-label="Mobile navigation">
          {navItems.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          <Link href="/start-a-project">Start a Project</Link>
        </nav>
      </details>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link className="footer-brand" href="/">
        <img src="/rolodex-rebels-logo-transparent.png" alt="Rolodex Rebels" width="1983" height="793" />
      </Link>
      <p>Full-service music marketing.<br />From the streets to the screens.</p>
      <div className="footer-links">
        {navItems.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        <Link href="/start-a-project">Start a Project</Link>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Rolodex Rebels</span>
        <Link href="/privacy">Privacy &amp; cookies</Link>
        <span>Photography: Jonathan Ikemura / Unsplash · Mico Medel / Pexels · Fabian Centeno / Unsplash</span>
      </div>
    </footer>
  );
}
