"use client";

import { hasAnalyticsConsent } from "./analytics-consent";

const ATTRIBUTION_STORAGE_KEY = "rr-marketing-attribution-v1";
const AI_REFERRAL_STORAGE_KEY = "rr-ai-referral-recorded";
const CASE_STUDY_STORAGE_KEY = "rr-case-study-view-recorded";
const UTM_KEYS = ["source", "medium", "campaign", "content", "term"] as const;

export type MarketingAttribution = {
  landingPage: string;
  originatingPage: string;
  servicePage: string;
  audienceRoute: string;
  referrer: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmContent: string;
  utmTerm: string;
};

let currentAttribution: MarketingAttribution | null = null;

function clean(value: string | null, maxLength = 300) {
  return (value ?? "").trim().slice(0, maxLength);
}

function externalReferrer() {
  if (!document.referrer) return "";

  try {
    const referrer = new URL(document.referrer);
    if (referrer.origin === window.location.origin) return "";
    return clean(`${referrer.origin}${referrer.pathname}`, 500);
  } catch {
    return "";
  }
}

function initialAttribution(): MarketingAttribution {
  const params = new URLSearchParams(window.location.search);
  const campaign = Object.fromEntries(
    UTM_KEYS.map((key) => [key, clean(params.get(`utm_${key}`), 200)]),
  ) as Record<(typeof UTM_KEYS)[number], string>;
  const path = window.location.pathname;

  return {
    landingPage: path,
    originatingPage: path,
    servicePage: path.startsWith("/services/") ? path : "",
    audienceRoute: path.startsWith("/who-we-help/") ? path : "",
    referrer: externalReferrer(),
    utmSource: campaign.source,
    utmMedium: campaign.medium,
    utmCampaign: campaign.campaign,
    utmContent: campaign.content,
    utmTerm: campaign.term,
  };
}

function storedAttribution() {
  if (!hasAnalyticsConsent()) return null;

  try {
    const stored = window.sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY);
    return stored ? JSON.parse(stored) as MarketingAttribution : null;
  } catch {
    return null;
  }
}

function saveAttribution(attribution: MarketingAttribution) {
  if (!hasAnalyticsConsent()) return;
  try {
    window.sessionStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(attribution));
  } catch {
    // Keep attribution in memory when browser storage is unavailable.
  }
}

export function initialiseMarketingAttribution() {
  currentAttribution ??= storedAttribution() ?? initialAttribution();
  saveAttribution(currentAttribution);
  return currentAttribution;
}

export function recordMarketingPageContext(path = window.location.pathname) {
  const attribution = initialiseMarketingAttribution();
  if (path.startsWith("/services/")) attribution.servicePage = path;
  if (path.startsWith("/who-we-help/")) attribution.audienceRoute = path;
  saveAttribution(attribution);
}

export function recordEnquiryOrigin(path: string) {
  const attribution = initialiseMarketingAttribution();
  attribution.originatingPage = path;
  recordMarketingPageContext(path);
  saveAttribution(attribution);
}

export function persistMarketingAttribution() {
  if (!hasAnalyticsConsent()) return;
  recordMarketingPageContext();
}

export function clearMarketingAttribution() {
  currentAttribution = null;
  try {
    window.sessionStorage.removeItem(ATTRIBUTION_STORAGE_KEY);
    window.sessionStorage.removeItem(AI_REFERRAL_STORAGE_KEY);
    window.sessionStorage.removeItem(CASE_STUDY_STORAGE_KEY);
  } catch {
    // No persisted attribution remains when storage is unavailable.
  }
}

export function getMarketingAttribution() {
  if (!hasAnalyticsConsent()) return null;
  return initialiseMarketingAttribution();
}

export function marketingAttributionParameters() {
  const attribution = getMarketingAttribution();
  if (!attribution) return { page_path: window.location.pathname };

  return {
    page_path: window.location.pathname,
    landing_page: attribution.landingPage,
    originating_page: attribution.originatingPage,
    service_page: attribution.servicePage,
    audience_route: attribution.audienceRoute,
    referrer_source: attribution.referrer,
    utm_source: attribution.utmSource,
    utm_medium: attribution.utmMedium,
    utm_campaign: attribution.utmCampaign,
    utm_content: attribution.utmContent,
    utm_term: attribution.utmTerm,
  };
}

export function emptyMarketingAttribution(): MarketingAttribution {
  return {
    landingPage: "",
    originatingPage: "",
    servicePage: "",
    audienceRoute: "",
    referrer: "",
    utmSource: "",
    utmMedium: "",
    utmCampaign: "",
    utmContent: "",
    utmTerm: "",
  };
}
