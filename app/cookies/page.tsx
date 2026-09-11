import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "../json-ld";
import { breadcrumbJsonLd, pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({
  title: "Cookie Policy | Rolodex Rebels",
  description: "How Rolodex Rebels uses essential browser storage and optional analytics cookies on this website.",
  path: "/cookies",
});

export default function CookiesPage() {
  return <main className="policy-page">
    <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Cookies", path: "/cookies" }])} />
    <a className="skip-link" href="#cookies-content">Skip to content</a>
    <header className="site-header"><Link className="header-logo" href="/" aria-label="Rolodex Rebels home">ROLODEX REBELS</Link><Link className="policy-home" href="/">Back to home</Link></header>
    <article id="cookies-content" className="policy-content content-width">
      <p className="eyebrow eyebrow-pink">PRIVACY &amp; COOKIES</p>
      <h1>Cookie policy</h1>
      <p className="policy-intro">The site uses essential browser storage to remember your cookie choice. Google Analytics only loads after you choose “Accept analytics”.</p>
      <h2>Essential storage</h2>
      <p>We save your analytics preference in your browser so the site can respect your choice and avoid asking on every visit. This preference is necessary for the cookie controls to work.</p>
      <h2>Optional analytics</h2>
      <p>If you accept analytics, Google Analytics may use cookies or similar identifiers to measure visits, referral sources, pages viewed and useful actions such as project enquiries, email clicks and telephone clicks. Consent-based session storage also keeps limited campaign attribution, such as UTM tags and the page where an enquiry began, for the life of the browser tab.</p>
      <h2>Changing your choice</h2>
      <p>Use the “Cookie settings” button on any page to accept or reject analytics. Rejecting analytics does not stop you using the site or submitting a project enquiry.</p>
      <h2>More information</h2>
      <p>Read the <Link href="/privacy">Rolodex Rebels privacy notice</Link> for more about project enquiries, analytics and your data rights.</p>
      <p className="policy-updated">Last updated: 11 September 2026</p>
    </article>
  </main>;
}
