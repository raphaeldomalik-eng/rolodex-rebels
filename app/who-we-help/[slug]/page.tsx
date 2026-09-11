import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InternalPage } from "../../internal-page";
import { pageMetadata } from "../../seo";

const audienceData = {
  artists: {
    name: "Artists",
    seoTitle: "Music Marketing for Artists | Rolodex Rebels",
    title: "MUSIC MARKETING FOR ARTISTS. BUILD MOMENTUM THAT LASTS.",
    description: "Music marketing for artists who want to launch releases, reach the right listeners, build fan relationships and sell more tickets.",
    intro: "Don’t just promote the next release. Build momentum for what comes after.",
    answer: "Rolodex Rebels connects positioning, music PR, relevant discovery, audience growth, digital presence and live marketing around the artist journey. We are a specialist marketing partner — not artist management — and shape the work around the release, audience, opportunity and next meaningful move.",
    modelTitle: "BUILD THE ARTIST JOURNEY.",
    modelIntro: "Each release and live moment should create something useful for the one that follows.",
    model: ["Position", "Audience", "Discovery", "Release", "Capture", "Live", "Commercial opportunity", "Retain", "Grow"],
    principles: [
      ["Momentum beyond release day", "Connect each campaign moment to an audience, asset or learning that carries forward."],
      ["A direct fan relationship", "Create permission-based ways for the right people to stay connected between releases and shows."],
      ["Marketing that fits the artist", "Build the mix around the music, stage, audience and ambition — not a fixed channel package."],
    ],
    links: [["Music PR", "/services/music-pr"], ["Build your audience", "/services/build-your-audience"], ["Artist website design", "/services/artist-website-design"], ["Ticket and tour marketing", "/services/sell-the-show"]],
  },
  "labels-managers": {
    name: "Labels & Managers",
    seoTitle: "Music Marketing for Labels & Managers | Rolodex Rebels",
    title: "MUSIC MARKETING FOR LABELS & MANAGERS. LESS FRAGMENTATION.",
    description: "Joined-up music marketing for labels and artist managers, combining release PR, audience growth, digital visibility and specialist delivery.",
    intro: "Add specialist depth without adding another disconnected campaign strand.",
    answer: "Rolodex Rebels works as an extension of label and management teams, not a replacement for them. We bring the right specialists around the artist, objective and timetable so PR, discovery, audience, live and digital work move together and campaign learning is easier to use.",
    modelTitle: "ADD DEPTH. KEEP CONTROL.",
    modelIntro: "A shared objective and connected delivery reduce hand-offs, duplicated effort and missed learning.",
    model: ["Align", "Connect", "Deliver", "Understand", "Improve"],
    principles: [
      ["An extension of the team", "Add focused strategy and delivery around the existing label or management plan."],
      ["Connected specialists", "Bring PR, audience, digital, live and grassroots thinking together around one campaign objective."],
      ["Learning that travels", "Use available response and campaign signals to make the next decision stronger."],
    ],
    links: [["Music PR", "/services/music-pr"], ["Build artist audiences", "/services/build-your-audience"], ["Artist website design", "/services/artist-website-design"], ["Digital music marketing", "/services/get-seen"]],
  },
  "promoters-venues-festivals": {
    name: "Promoters, Venues & Festivals",
    seoTitle: "Marketing for Promoters, Venues & Festivals | Rolodex Rebels",
    title: "MARKETING FOR PROMOTERS, VENUES & FESTIVALS. BUILD DEMAND.",
    description: "Marketing for promoters, venues and festivals that connects ticket growth, audience insight, digital campaigns, guests and grassroots activity.",
    intro: "Build demand, turn attention into ticket action and keep more of the audience relationship for what comes next.",
    answer: "Rolodex Rebels connects discovery, digital campaigns, fan communication, guest activity and grassroots activation around the live programme and sales position. Where useful data is available, audience, geography, channel, creative, email, landing-page and sales response can inform the next move.",
    modelTitle: "GROW MORE THAN ONE EVENT.",
    modelIntro: "A live campaign is stronger when demand, ticket action and future audience value are planned together.",
    model: ["Build demand", "Sell", "Capture", "Retain", "Grow"],
    principles: [
      ["Work from the sales position", "Shape timing and activity around the event, audience and response rather than a fixed channel list."],
      ["Connect online and on the ground", "Join digital discovery and ticket journeys with credible place-based activation where it adds value."],
      ["Keep the relationship moving", "Use permission-based audience connections and learning to support the next date, season or programme."],
    ],
    links: [["Festival marketing", "/services/festival-marketing"], ["Music Street Teams", "/services/grassroots/music-street-teams"], ["Flyer distribution", "/services/grassroots/flyer-distribution"], ["Concert, tour and ticket marketing", "/services/sell-the-show"]],
  },
} as const;

type AudienceSlug = keyof typeof audienceData;

export function generateStaticParams() {
  return Object.keys(audienceData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const audience = audienceData[slug as AudienceSlug];
  if (!audience) return pageMetadata({ title: "Who We Help | Rolodex Rebels", description: "Music marketing for artists and music-industry teams.", path: "/who-we-help" });
  return pageMetadata({ title: audience.seoTitle, description: audience.description, path: `/who-we-help/${slug}` });
}

export default async function AudiencePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const audience = audienceData[slug as AudienceSlug];
  if (!audience) notFound();
  const path = `/who-we-help/${slug}`;

  return (
    <InternalPage
      eyebrow={`For ${audience.name}`}
      title={<>{audience.title}</>}
      intro={audience.intro}
      breadcrumbs={[{ name: "Home", path: "/" }, { name: "Who We Help", path: "/who-we-help" }, { name: audience.name, path }]}
    >
      <section className="inner-split">
        <div><p className="eyebrow pink">How we work</p><h2>ONE GOAL. ONE CONNECTED CAMPAIGN.</h2></div>
        <div className="body-copy"><p>{audience.answer}</p></div>
      </section>
      <section className="journey-panel" aria-labelledby={`${slug}-journey`}>
        <div><p className="eyebrow light">The growth journey</p><h2 id={`${slug}-journey`}>{audience.modelTitle}</h2><p>{audience.modelIntro}</p></div>
        <ol className="journey-track">
          {audience.model.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong></li>)}
        </ol>
      </section>
      <section className="feature-grid">
        {audience.principles.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}
      </section>
      <nav className="related-links related-links-grid" aria-label={`Services for ${audience.name}`}>
        <h2>CHOOSE THE RESULT YOU NEED.</h2>
        {audience.links.map(([label, href], index) => <Link href={href} key={href}><span>{String(index + 1).padStart(2, "0")}</span>{label} ↗</Link>)}
      </nav>
      <Link className="back-link" href="/who-we-help">← Back to who we help</Link>
    </InternalPage>
  );
}
