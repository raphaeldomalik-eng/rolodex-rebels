import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "../json-ld";
import { breadcrumbJsonLd, pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Notice | Rolodex Rebels",
  description: "How Rolodex Rebels handles project enquiries, website analytics, privacy and your data rights.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return <main className="policy-page">
    <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Privacy", path: "/privacy" }])} />
    <a className="skip-link" href="#privacy-content">Skip to content</a>
    <header className="site-header"><Link className="header-logo" href="/" aria-label="Rolodex Rebels home">ROLODEX REBELS</Link><Link className="policy-home" href="/">Back to home</Link></header>
    <article id="privacy-content" className="policy-content content-width">
      <p className="eyebrow eyebrow-pink">PRIVACY & COOKIES</p>
      <h1>Privacy notice</h1>
      <p className="policy-intro">Rolodex Rebels uses the information you provide through the project enquiry form to respond to your enquiry. We also use limited analytics, with your permission, to understand how people use the site.</p>
      <h2>What we collect</h2>
      <p>When you submit a project enquiry, we collect the contact details and campaign information you choose to provide. If you accept analytics, Google Analytics 4 may also collect information such as pages viewed, approximate location, device/browser information, referral source, and interactions such as clicks.</p>
      <h2>How project enquiries are used</h2>
      <p>Project enquiry information is sent to Rolodex Rebels through an email delivery service and used to understand your brief, respond to you and discuss relevant services. Please do not include sensitive personal information in the form.</p>
      <h2>Cookies and consent</h2>
      <p>Analytics is disabled until you select “Accept analytics”. If you reject it, the analytics scripts do not load. We remember your choice in your browser&apos;s local storage so we do not ask on every visit. You can change your choice at any time using the Cookie settings control.</p>
      <h2>How direct contact links work</h2>
      <p>The telephone and email links open your chosen device or service. Information you send through those services is handled by the relevant provider and by Rolodex Rebels.</p>
      <h2>Google Analytics</h2>
      <p>Google processes analytics data on our behalf through Google Analytics. You can learn more about Google&apos;s practices in its <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">privacy policy</a> and opt out with Google&apos;s <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noreferrer">Analytics opt-out browser add-on</a>.</p>
      <h2>Your rights</h2>
      <p>Depending on your circumstances, UK data protection law may give you rights including access, correction, deletion, restriction, objection, and complaint to the ICO. For privacy questions, contact <a href="mailto:joanne@rolodexrebels.co.uk">joanne@rolodexrebels.co.uk</a>.</p>
      <p className="policy-updated">Last updated: 11 September 2026</p>
    </article>
  </main>;
}
