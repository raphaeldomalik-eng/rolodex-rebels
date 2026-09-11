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
    answer: "A release can earn streams, coverage and attention and still leave the artist starting from scratch three months later. We connect positioning, music PR, discovery, fan growth, the artist’s digital home and live marketing around what the campaign can build as well as what it can achieve on release day. We are a marketing partner, not artist management.",
    modelTitle: "BUILD THE ARTIST JOURNEY.",
    modelIntro: "Each single, EP, album and live date should leave the next campaign with more to work from.",
    model: ["Position", "Audience", "Discovery", "Release", "Capture", "Live", "Commercial opportunity", "Retain", "Grow"],
    principles: [
      ["Momentum beyond release day", "Use the campaign to grow the mailing list, sharpen the artist story, build search presence or create assets the next release can use."],
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
    answer: "Release dates move quickly. Assets arrive late. PR, paid media, content, audience and live activity often sit with different suppliers. We help bring those strands around one objective without taking control away from the label or manager. We add specialist delivery; we do not replace management or label functions.",
    modelTitle: "ADD DEPTH. KEEP CONTROL.",
    modelIntro: "One agreed release plan keeps deadlines, assets, specialists and decisions visible to the people who own them.",
    model: ["Align", "Connect", "Deliver", "Understand", "Improve"],
    principles: [
      ["An extension of the team", "Add focused strategy and delivery around the existing label or management plan."],
      ["Specialists around one plan", "Keep PR, paid media, audience, digital, live and grassroots activity aligned to the same dates and priorities."],
      ["Clearer campaign decisions", "Use the evidence available to see what landed, what stalled and what the next release needs from the team."],
    ],
    links: [["Music PR", "/services/music-pr"], ["Build artist audiences", "/services/build-your-audience"], ["Artist website design", "/services/artist-website-design"], ["Digital music marketing", "/services/get-seen"]],
  },
  "promoters-venues-festivals": {
    name: "Promoters, Venues & Festivals",
    seoTitle: "Marketing for Promoters, Venues & Festivals | Rolodex Rebels",
    title: "MARKETING FOR PROMOTERS, VENUES & FESTIVALS. BUILD DEMAND.",
    description: "Marketing for promoters, venues and festivals that connects ticket growth, audience insight, digital campaigns, guests and grassroots activity.",
    intro: "Build demand, turn attention into ticket action and give today’s audience a reason to return.",
    answer: "One successful show matters. Building an audience you can reach again makes the next one easier to grow. We connect announcement, ticket campaigns, guest lists and RSVP, audience communication, event websites and grassroots activity around the live programme and sales position. Where the data is available, ticket pace, geography, creative, email and landing-page behaviour help us decide what needs to change.",
    modelTitle: "GROW MORE THAN ONE EVENT.",
    modelIntro: "Plan the announcement, on-sale and final push with the next date, season or festival edition in mind.",
    model: ["Build demand", "Sell", "Capture", "Retain", "Grow"],
    principles: [
      ["Work from the sales position", "Read the ticket pace and time to event before choosing whether the next move is reach, new creative, PR, email or local activity."],
      ["Connect online and on the ground", "Join search, social, email and the ticket page with street teams, flyers or posters where the audience and place fit."],
      ["Give people a reason to return", "Use permission-based sign-up and post-event communication to support the next date, season or programme."],
    ],
    links: [["Festival marketing", "/services/festival-marketing"], ["Event & Festival Websites", "/services/event-festival-websites"], ["Concert, tour and ticket marketing", "/services/sell-the-show"], ["Build your audience", "/services/build-your-audience"], ["Music Street Teams", "/services/grassroots/music-street-teams"], ["Flyer distribution", "/services/grassroots/flyer-distribution"]],
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
