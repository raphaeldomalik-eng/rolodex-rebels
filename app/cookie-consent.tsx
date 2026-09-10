"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const CONSENT_KEY = "rr-analytics-consent";

type Consent = "granted" | "denied" | null;

export function CookieConsent() {
  const [consent, setConsent] = useState<Consent>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const saved = window.localStorage.getItem(CONSENT_KEY);
      if (saved === "granted" || saved === "denied") setConsent(saved);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  function choose(nextConsent: Exclude<Consent, null>) {
    window.localStorage.setItem(CONSENT_KEY, nextConsent);
    setConsent(nextConsent);
    setIsOpen(false);
  }

  const showBanner = consent === null || isOpen;

  return <>
    {consent === "granted" && <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-EZSJL5TG8N" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-EZSJL5TG8N');`}
      </Script>
    </>}
    {showBanner && <aside className="consent-banner" aria-label="Cookie preferences">
      <div><strong>Cookies and privacy</strong><p>We use Google Analytics to understand visits and improve this site. It only loads if you choose “Accept analytics”. <a href="/privacy">Read our privacy notice</a>.</p></div>
      <div className="consent-actions"><button type="button" className="consent-reject" onClick={() => choose("denied")}>Reject analytics</button><button type="button" className="consent-accept" onClick={() => choose("granted")}>Accept analytics</button></div>
    </aside>}
    {consent !== null && !isOpen && <button className="cookie-settings" type="button" onClick={() => setIsOpen(true)}>Cookie settings</button>}
  </>;
}
