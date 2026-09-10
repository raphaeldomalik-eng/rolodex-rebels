"use client";

export const ANALYTICS_CONSENT_KEY = "rr-analytics-consent";

export function trackEvent(name: string, parameters: Record<string, string> = {}) {
  if (window.localStorage.getItem(ANALYTICS_CONSENT_KEY) !== "granted") return;
  window.gtag?.("event", name, parameters);
}
