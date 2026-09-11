import Image from "next/image";
import Link from "next/link";
import rebelsLogo from "../public/rolodex-rebels-logo-transparent.png";
import footerLogo from "../public/rolodex-rebels-logo-footer.png";

export const navItems = [
  ["Why Us", "/why-us"],
  ["Services", "/services"],
  ["Who We Help", "/who-we-help"],
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Rolodex Rebels home">
        <Image src={rebelsLogo} alt="Rolodex Rebels" sizes="(max-width: 760px) 142px, 218px" loading="eager" />
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
        <Image src={footerLogo} alt="Rolodex Rebels" sizes="270px" />
      </Link>
      <p>Full-service music marketing.<br />From the streets to the screens.</p>
      <div className="footer-links">
        {navItems.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        <Link href="/start-a-project">Start a Project</Link>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Rolodex Rebels</span>
        <span><Link href="/privacy">Privacy</Link> · <Link href="/cookies">Cookies</Link></span>
        <span>Photography: Jonathan Ikemura / Unsplash · Mico Medel / Pexels · Fabian Centeno / Unsplash</span>
      </div>
    </footer>
  );
}
