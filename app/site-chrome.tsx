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
      <a className="brand" href="/" aria-label="Rolodex Rebels home">
        <img src="/rolodex-rebels-logo-transparent.png" alt="Rolodex Rebels" />
      </a>
      <nav className="primary-nav" aria-label="Primary navigation">
        {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </nav>
      <a className="header-cta" href="/start-a-project">Start a Project</a>
      <details className="mobile-menu">
        <summary>Menu</summary>
        <nav aria-label="Mobile navigation">
          {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          <a href="/start-a-project">Start a Project</a>
        </nav>
      </details>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <a className="footer-brand" href="/">
        <img src="/rolodex-rebels-logo-transparent.png" alt="Rolodex Rebels" />
      </a>
      <p>Full-service music marketing.<br />From the streets to the screens.</p>
      <div className="footer-links">
        {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        <a href="/start-a-project">Start a Project</a>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Rolodex Rebels</span>
        <a href="/privacy">Privacy &amp; cookies</a>
        <span>Photography: Jonathan Ikemura / Unsplash · Mico Medel / Pexels · Fabian Centeno / Unsplash</span>
      </div>
    </footer>
  );
}
