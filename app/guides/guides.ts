export const guideIndexPath = "/guides";

const published = "2026-09-29";
const publishedLabel = "29 September 2026";
const modified = "2026-09-29";
const modifiedLabel = "29 September 2026";

export const guidePages = [
  {
    path: "/guides/music-pr-for-independent-artists",
    title: "Music PR for Independent Artists",
    h1: "MUSIC PR FOR INDEPENDENT ARTISTS.",
    navLabel: "Music PR for independent artists",
    description: "When music PR is worth paying for, what independent artists need ready, realistic campaign lead times and what professional PR should include.",
    intro: "Music PR can work for an independent artist when the record, the release date, the assets and the story are ready. It is usually poor value when those foundations are still missing.",
    cardTitle: "For independent artists",
    card: "Who PR is useful for, when to wait, and what has to be ready before anyone is pitched.",
    published,
    publishedLabel,
    modified,
    modifiedLabel,
    images: {
      alt: "A musician with a guitar on a dim stage, ready to play.",
      landscape: { src: "/guides/music-pr-for-independent-artists-16x9.jpg", width: 2400, height: 1350 },
      fourThree: { src: "/guides/music-pr-for-independent-artists-4x3.jpg", width: 2400, height: 1800 },
      square: { src: "/guides/music-pr-for-independent-artists-1x1.jpg", width: 2400, height: 2400 },
    },
  },
  {
    path: "/guides/how-much-does-music-pr-cost-uk",
    title: "How Much Does Music PR Cost in the UK?",
    h1: "HOW MUCH DOES MUSIC PR COST IN THE UK?",
    navLabel: "What music PR costs in the UK",
    description: "What drives UK music PR fees, what a professional campaign quote should include and the warning signs to look for when comparing PR agencies.",
    intro: "There is no single standard UK music PR price. Campaign fees depend on how long the work runs, how many releases are in the plan, which media are in scope, how much preparation is still required, and how specialist the outreach is.",
    cardTitle: "What a campaign costs",
    card: "What changes the fee, what a professional campaign should include, and how to read a quote.",
    published,
    publishedLabel,
    modified,
    modifiedLabel,
    images: {
      alt: "A closed folder, a pen and studio headphones on a dark table.",
      landscape: { src: "/guides/music-pr-cost-uk-16x9.jpg", width: 1920, height: 1080 },
      fourThree: { src: "/guides/music-pr-cost-uk-4x3.jpg", width: 1440, height: 1080 },
      square: { src: "/guides/music-pr-cost-uk-1x1.jpg", width: 1080, height: 1080 },
    },
  },
  {
    path: "/guides/music-pr-vs-music-promotion",
    title: "Music PR vs Music Promotion",
    h1: "MUSIC PR VS MUSIC PROMOTION.",
    navLabel: "Music PR and music promotion",
    description: "The difference between music PR, advertising, social media, playlist pitching and grassroots promotion — and when a release needs one or several.",
    intro: "Music PR is earned-media outreach. Music promotion is broader and can include PR, advertising, social, playlist activity, direct-to-fan communication and grassroots marketing. They are not the same job.",
    cardTitle: "PR and promotion",
    card: "What press, advertising, social, playlists and grassroots promotion each do — and when they belong together.",
    published,
    publishedLabel,
    modified,
    modifiedLabel,
    images: {
      alt: "A crowd facing a brightly lit stage at a live show.",
      landscape: { src: "/guides/music-pr-vs-music-promotion-16x9.jpg", width: 2400, height: 1350 },
      fourThree: { src: "/guides/music-pr-vs-music-promotion-4x3.jpg", width: 2133, height: 1600 },
      square: { src: "/guides/music-pr-vs-music-promotion-1x1.jpg", width: 1600, height: 1600 },
    },
  },
] as const;

export type GuidePage = (typeof guidePages)[number];

export function guideByPath(path: GuidePage["path"]) {
  const guide = guidePages.find((item) => item.path === path);
  if (!guide) throw new Error(`Missing guide: ${path}`);
  return guide;
}
