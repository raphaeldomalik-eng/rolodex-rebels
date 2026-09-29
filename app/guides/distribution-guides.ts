import type { GuideData } from "./guide-article";

export type DistributionGuide = GuideData & { cardTitle: string; card: string };

const published = "2026-09-29";
const publishedLabel = "29 September 2026";
const alt = "A person holding a stack of printed flyers on a street.";

export const distributionGuidePages: readonly DistributionGuide[] = [
  {
    path: "/guides/how-much-does-flyer-distribution-cost",
    title: "How Much Does Flyer Distribution Cost?",
    h1: "HOW MUCH DOES FLYER DISTRIBUTION COST?",
    navLabel: "What flyer distribution costs",
    description: "What drives the cost of flyer distribution — quantity, geography, method, timing and targeting — what a useful quote shows, and the warning signs to look for.",
    intro: "There is no meaningful flyer distribution quote without three things: how many flyers, where they are going, and how they will be distributed. Everything else adjusts the number from there.",
    cardTitle: "What distribution costs",
    card: "What changes the price of a flyer campaign, what a useful quote shows, and the warning signs in one that does not.",
    published,
    publishedLabel,
    images: {
      alt,
      landscape: { src: "/guides/flyer-distribution-cost-16x9.jpg", width: 2400, height: 1350 },
      fourThree: { src: "/guides/flyer-distribution-cost-4x3.jpg", width: 2000, height: 1500 },
      square: { src: "/guides/flyer-distribution-cost-1x1.jpg", width: 1500, height: 1500 },
    },
  },
  {
    path: "/guides/flyer-vs-poster-distribution",
    title: "Flyer vs Poster Distribution",
    h1: "FLYER VS POSTER DISTRIBUTION.",
    navLabel: "Flyer vs poster distribution",
    description: "Flyers travel with the person; posters stay in a permitted place. How interaction, dwell, message, timing and QR follow-up decide which a campaign needs.",
    intro: "A flyer travels with the person who takes it. A poster stays visible in a permitted place for whoever passes. Neither is better in general. They do different jobs.",
    cardTitle: "Flyers or posters",
    card: "What a handed flyer does that a poster cannot, what a poster does that a flyer cannot, and when to use both.",
    published,
    publishedLabel,
    images: {
      alt,
      landscape: { src: "/guides/flyer-vs-poster-distribution-16x9.jpg", width: 1920, height: 1080 },
      fourThree: { src: "/guides/flyer-vs-poster-distribution-4x3.jpg", width: 1600, height: 1200 },
      square: { src: "/guides/flyer-vs-poster-distribution-1x1.jpg", width: 1200, height: 1200 },
    },
  },
  {
    path: "/guides/how-to-plan-a-flyer-poster-distribution-campaign",
    title: "How to Plan a Flyer or Poster Campaign",
    h1: "HOW TO PLAN A FLYER OR POSTER CAMPAIGN.",
    navLabel: "Plan a flyer or poster campaign",
    description: "A practical method for flyer and poster campaigns: who, where, when, format, message, quantity, action and learn — and how a scan connects to the next step.",
    intro: "Start with who needs to see it, not with how many to print. Work through where, when, format, message and quantity in that order, then decide what the flyer or poster should make happen and how you will learn from it.",
    cardTitle: "Planning a campaign",
    card: "Who, where, when, format, message, quantity, action and learn — in that order, and why quantity is not first.",
    published,
    publishedLabel,
    images: {
      alt,
      landscape: { src: "/guides/plan-flyer-poster-campaign-16x9.jpg", width: 2134, height: 1200 },
      fourThree: { src: "/guides/plan-flyer-poster-campaign-4x3.jpg", width: 1800, height: 1350 },
      square: { src: "/guides/plan-flyer-poster-campaign-1x1.jpg", width: 1400, height: 1400 },
    },
  },
];

export function distributionGuideByPath(path: string) {
  const guide = distributionGuidePages.find((item) => item.path === path);
  if (!guide) throw new Error(`Missing distribution guide: ${path}`);
  return guide;
}

export const distributionGuideArticleProps = {
  eyebrow: "Guides / Flyers & Posters",
  heroCta: { label: "Plan a distribution campaign", href: "/services/grassroots/flyer-distribution" },
  relatedLabel: "Related flyer and poster reading",
} as const;

export function distributionGuideRelated(path: string) {
  return [
    ["Flyer & leaflet distribution", "/services/grassroots/flyer-distribution"],
    ["Poster distribution", "/services/grassroots/poster-distribution"],
    ...distributionGuidePages.filter((item) => item.path !== path).map((item) => [item.navLabel, item.path] as const),
  ] as const;
}
