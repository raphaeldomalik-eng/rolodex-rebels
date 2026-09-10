"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { ANALYTICS_CONSENT_KEY } from "./analytics-events";

type Consent = "granted" | "denied" | null;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function CookieConsent() {
  const [consent, setConsent] = useState<Consent>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const saved = window.localStorage.getItem(ANALYTICS_CONSENT_KEY);
      if (saved === "granted" || saved === "denied") setConsent(saved);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  function initialiseAnalytics() {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || ((...args: unknown[]) => window.dataLayer.push(args));
    window.gtag("consent", "default", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    window.gtag("js", new Date());
    window.gtag("config", "G-EZSJL5TG8N");
    window.dispatchEvent(new Event("rr:analytics-ready"));
  }

  function choose(nextConsent: Exclude<Consent, null>) {
    window.localStorage.setItem(ANALYTICS_CONSENT_KEY, nextConsent);
    setConsent(nextConsent);
    setIsOpen(false);
    window.gtag?.("consent", "update", {
      analytics_storage: nextConsent === "granted" ? "granted" : "denied",
    });
  }

  const showBanner = consent === null || isOpen;

  return <>
    {consent === "granted" && (
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-EZSJL5TG8N"
        strategy="lazyOnload"
        onLoad={initialiseAnalytics}
      />
    )}
    {showBanner && <aside className="consent-banner" aria-label="Cookie preferences">
      <div><strong>Cookies and privacy</strong><p>We use Google Analytics to understand visits and improve this site. Analytics storage is denied until you choose “Accept analytics”. <Link href="/privacy">Read our privacy notice</Link>.</p></div>
      <div className="consent-actions"><button type="button" className="consent-reject" onClick={() => choose("denied")}>Reject analytics</button><button type="button" className="consent-accept" onClick={() => choose("granted")}>Accept analytics</button></div>
    </aside>}
    {consent !== null && !isOpen && <button className="cookie-settings" type="button" onClick={() => setIsOpen(true)}>Cookie settings</button>}
  </>;
}
