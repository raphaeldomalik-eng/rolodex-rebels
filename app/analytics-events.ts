"use client";

import { marketingAttributionParameters } from "./analytics-attribution";
import { hasAnalyticsConsent } from "./analytics-consent";

export function trackEvent(name: string, parameters: Record<string, unknown> = {}) {
  if (!hasAnalyticsConsent() || !window.gtag) return false;
  window.gtag("event", name, { ...marketingAttributionParameters(), ...parameters });
  return true;
}
