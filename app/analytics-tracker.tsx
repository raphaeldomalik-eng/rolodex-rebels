"use client";

import { useEffect } from "react";
import {
  initialiseMarketingAttribution,
  recordEnquiryOrigin,
  recordMarketingPageContext,
} from "./analytics-attribution";
import { hasAnalyticsConsent } from "./analytics-consent";
import { trackEvent } from "./analytics-events";

const aiSources = [
  ["chatgpt", ["chatgpt.com", "chat.openai.com", "openai.com"]],
  ["perplexity", ["perplexity.ai"]],
  ["copilot", ["copilot.microsoft.com"]],
  ["gemini", ["gemini.google.com"]],
  ["claude", ["claude.ai"]],
] as const;

function detectAiSource() {
  const campaignSource = new URLSearchParams(window.location.search).get("utm_source")?.toLowerCase() ?? "";
  let referrerHost = "";

  try {
    referrerHost = document.referrer ? new URL(document.referrer).hostname.toLowerCase() : "";
  } catch {
    referrerHost = "";
  }

  return aiSources.find(([, signals]) => signals.some((signal) => campaignSource.includes(signal) || referrerHost.includes(signal)))?.[0];
}

export function AnalyticsTracker() {
  useEffect(() => {
    function recordAiReferral() {
      const source = detectAiSource();
      if (!hasAnalyticsConsent() || !source || window.sessionStorage.getItem("rr-ai-referral-recorded") === "true") return;
      if (trackEvent("ai_referral_landing", { ai_source: source, landing_page: window.location.pathname })) {
        window.sessionStorage.setItem("rr-ai-referral-recorded", "true");
      }
    }

    function recordCaseStudyView() {
      if (!window.location.pathname.startsWith("/results/") || window.sessionStorage.getItem("rr-case-study-view-recorded") === window.location.pathname) return;
      if (trackEvent("results_case_study_view", { case_study_path: window.location.pathname })) {
        window.sessionStorage.setItem("rr-case-study-view-recorded", window.location.pathname);
      }
    }

    function recordClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest("a[href]");
      if (!(link instanceof HTMLAnchorElement)) return;

      const href = link.getAttribute("href") ?? "";
      const linkText = link.textContent?.trim().replace(/\s+/g, " ").slice(0, 100) ?? "";
      const currentPath = window.location.pathname;
      recordMarketingPageContext(currentPath);

      function recordContactNavigation(name: "email_click" | "phone_click") {
        if (!hasAnalyticsConsent() || !window.gtag) return;

        event.preventDefault();
        let hasNavigated = false;
        const navigate = () => {
          if (hasNavigated) return;
          hasNavigated = true;
          window.location.assign(href);
        };

        trackEvent(name, {
          link_text: linkText,
          transport_type: "beacon",
          event_callback: navigate,
          event_timeout: 500,
        });
        window.setTimeout(navigate, 600);
      }

      if (href.startsWith("mailto:")) {
        recordContactNavigation("email_click");
      } else if (href.startsWith("tel:")) {
        recordContactNavigation("phone_click");
      } else if (href === "/start-a-project" || href.startsWith("/start-a-project?")) {
        recordEnquiryOrigin(currentPath);
        trackEvent(currentPath.startsWith("/services/") ? "service_page_enquiry" : "start_project_cta", {
          source_page: currentPath,
          link_text: linkText,
        });
      } else if (href.startsWith("/who-we-help/")) {
        trackEvent("audience_route_selection", { destination: href, link_text: linkText });
      } else {
        try {
          const destination = new URL(link.href, window.location.href);
          if (destination.hostname !== window.location.hostname) {
            trackEvent("outbound_link", { destination_host: destination.hostname, link_text: linkText });
          }
        } catch {
          // Ignore malformed or non-navigation href values.
        }
      }
    }

    initialiseMarketingAttribution();
    recordMarketingPageContext();
    recordAiReferral();
    recordCaseStudyView();
    window.addEventListener("rr:analytics-ready", recordAiReferral);
    window.addEventListener("rr:analytics-ready", recordCaseStudyView);
    document.addEventListener("click", recordClick);

    return () => {
      window.removeEventListener("rr:analytics-ready", recordAiReferral);
      window.removeEventListener("rr:analytics-ready", recordCaseStudyView);
      document.removeEventListener("click", recordClick);
    };
  }, []);

  return null;
}
