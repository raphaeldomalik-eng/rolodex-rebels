export const ANALYTICS_CONSENT_KEY = "rr-analytics-consent";

export function hasAnalyticsConsent() {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(ANALYTICS_CONSENT_KEY) === "granted";
  } catch {
    return false;
  }
}
