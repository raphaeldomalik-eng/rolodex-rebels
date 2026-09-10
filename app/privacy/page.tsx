import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy notice | Rolodex Rebels",
  description: "How Rolodex Rebels handles website analytics and privacy.",
};

export default function PrivacyPage() {
  return <main className="policy-page">
    <a className="skip-link" href="#privacy-content">Skip to content</a>
    <header className="site-header"><Link className="header-logo" href="/" aria-label="Rolodex Rebels home">ROLODEX REBELS</Link><Link className="policy-home" href="/">Back to home</Link></header>
    <article id="privacy-content" className="policy-content content-width">
      <p className="eyebrow eyebrow-pink">PRIVACY & COOKIES</p>
      <h1>Privacy notice</h1>
      <p className="policy-intro">Rolodex Rebels does not provide an account, contact form, checkout, or database on this website. We do use limited analytics, with your permission, to understand how people use the site.</p>
      <h2>What we collect</h2>
      <p>If you accept analytics, Google Analytics 4 may collect information such as pages viewed, approximate location, device/browser information, referral source, and interactions such as clicks. We do not ask you to submit personal details through this website.</p>
      <h2>Cookies and consent</h2>
      <p>Analytics is disabled until you select “Accept analytics”. If you reject it, the analytics scripts do not load. We remember your choice in your browser&apos;s local storage so we do not ask on every visit. You can change your choice at any time using the Cookie settings control.</p>
      <h2>How contact links work</h2>
      <p>The telephone, email, and Facebook links open your chosen device or service. Any information you send through those services is handled by the relevant provider and by Rolodex Rebels outside this website.</p>
      <h2>Google Analytics</h2>
      <p>Google processes analytics data on our behalf through Google Analytics. You can learn more about Google&apos;s practices in its <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">privacy policy</a> and opt out with Google&apos;s <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noreferrer">Analytics opt-out browser add-on</a>.</p>
      <h2>Your rights</h2>
      <p>Depending on your circumstances, UK data protection law may give you rights including access, correction, deletion, restriction, objection, and complaint to the ICO. For privacy questions, contact <a href="mailto:joanne@rolodexrebels.co.uk">joanne@rolodexrebels.co.uk</a>.</p>
      <p className="policy-updated">Last updated: 10 September 2026</p>
    </article>
  </main>;
}
