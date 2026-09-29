export const guideIndexPath = "/guides";

export const guidePages = [
  {
    path: "/guides/music-pr-for-independent-artists",
    title: "Music PR for Independent Artists",
    h1: "MUSIC PR FOR INDEPENDENT ARTISTS.",
    navLabel: "Music PR for independent artists",
    description: "When music PR is useful for an independent or self-releasing artist, what has to be ready, and what the artist still needs to do.",
    intro: "Independent and self-releasing artists usually meet PR as a quote, not a department. The useful question is whether this release has a story the right people can use, and whether the timing still allows them to use it.",
    cardTitle: "For independent artists",
    card: "Who PR is useful for, when to wait, and what has to be ready before anyone is pitched.",
    published: "2026-09-29",
    publishedLabel: "29 September 2026",
  },
  {
    path: "/guides/how-much-does-music-pr-cost-uk",
    title: "How Much Does Music PR Cost in the UK?",
    h1: "HOW MUCH DOES MUSIC PR COST?",
    navLabel: "What music PR costs in the UK",
    description: "What drives the cost of a music PR campaign in the UK, what a professional quote should include, and why the cheapest offer is not automatically the best value.",
    intro: "Music PR does not have one public price, because a short news push and a multi-week album campaign are different jobs. A useful quote shows the scope before it shows the fee.",
    cardTitle: "What a campaign costs",
    card: "What changes the fee, what a professional campaign should include, and how to read a quote.",
    published: "2026-09-29",
    publishedLabel: "29 September 2026",
  },
  {
    path: "/guides/music-pr-vs-music-promotion",
    title: "Music PR vs Music Promotion",
    h1: "MUSIC PR IS NOT THE SAME AS PROMOTION.",
    navLabel: "Music PR and music promotion",
    description: "How music PR differs from promotion, advertising, social media, playlist pitching and grassroots work, and when a campaign needs one or several of them.",
    intro: "People use “PR” and “promotion” as if they were the same invoice. They are not. Knowing which job you actually need stops a campaign buying press when it needs an audience, or buying ads when it needs a story.",
    cardTitle: "PR and promotion",
    card: "What press, advertising, social, playlists and grassroots promotion each do — and when they belong together.",
    published: "2026-09-29",
    publishedLabel: "29 September 2026",
  },
] as const;

export type GuidePage = (typeof guidePages)[number];

export function guideByPath(path: GuidePage["path"]) {
  const guide = guidePages.find((item) => item.path === path);
  if (!guide) throw new Error(`Missing guide: ${path}`);
  return guide;
}
