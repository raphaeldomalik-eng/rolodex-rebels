import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InternalPage } from "../../internal-page";

const audienceData = {
  artists: {
    eyebrow: "For Artists",
    title: "BUILD MOMENTUM THAT LASTS.",
    intro: "Launch music, reach the right listeners and build fan relationships that stay active between releases, shows and announcements.",
    goals: ["Launch my music", "Build my audience", "Improve my digital presence", "Sell more tickets"],
    approach: "We connect story, discovery, fan growth and real-world activation so every part of the campaign builds on the last.",
  },
  "labels-managers": {
    eyebrow: "For Labels & Managers",
    title: "MORE CAMPAIGN. LESS FRAGMENTATION.",
    intro: "Add trusted strategy, specialist delivery and joined-up campaign thinking around the artists, releases and moments that matter.",
    goals: ["Strengthen a release campaign", "Grow an artist audience", "Improve campaign insight", "Add specialist delivery"],
    approach: "We work as an extension of your team, bringing the right specialists together around the artist, commercial goal and timetable.",
  },
  "live-music": {
    eyebrow: "For Promoters, Venues & Festivals",
    title: "BUILD DEMAND. SELL THE SHOW.",
    intro: "Reach the right audience, turn interest into ticket sales and build fan relationships that make the next event easier to grow.",
    goals: ["Sell more tickets", "Grow local awareness", "Run a guest campaign", "Activate audiences on the ground"],
    approach: "We join up paid, search, audience insight, guest communications and grassroots teams from announcement through to doors.",
  },
} as const;

type AudienceSlug = keyof typeof audienceData;

export function generateStaticParams() {
  return Object.keys(audienceData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const audience = audienceData[slug as AudienceSlug];
  return { title: audience ? `${audience.eyebrow} | Rolodex Rebels` : "Who We Help | Rolodex Rebels" };
}

export default async function AudiencePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const audience = audienceData[slug as AudienceSlug];
  if (!audience) notFound();
  return (
    <InternalPage eyebrow={audience.eyebrow} title={<>{audience.title}</>} intro={audience.intro}>
      <section className="inner-split">
        <div><p className="eyebrow pink">How we work</p><h2>ONE GOAL. ONE CONNECTED CAMPAIGN.</h2></div>
        <div className="body-copy"><p>{audience.approach}</p></div>
      </section>
      <section className="feature-grid four-up">
        {audience.goals.map((goal, index) => <article key={goal}><span>0{index + 1}</span><h3>{goal}</h3><p>Start with the outcome and we’ll shape the right route to it.</p></article>)}
      </section>
      <a className="back-link" href="/who-we-help">← Back to who we help</a>
    </InternalPage>
  );
}
