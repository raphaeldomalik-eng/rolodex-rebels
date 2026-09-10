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
    intro: "Launch music, reach the right listeners and build fan relationships that stay active between releases, shows and announcements.",
    answer: "Rolodex Rebels helps artists connect release strategy, music PR, digital discovery, audience growth, creative and live marketing around one goal. Every part of the campaign should build momentum for the next release or show.",
    links: [["Music PR and release marketing", "/services/get-heard"], ["Build your audience", "/services/build-your-audience"], ["Music websites, SEO and creative", "/services/digital-creative"], ["Ticket and tour marketing", "/services/sell-the-show"]],
  },
  "labels-managers": {
    name: "Labels & Managers",
    seoTitle: "Music Marketing for Labels & Managers | Rolodex Rebels",
    title: "MUSIC MARKETING FOR LABELS & MANAGERS. LESS FRAGMENTATION.",
    description: "Joined-up music marketing for labels and artist managers, combining release PR, audience growth, digital visibility and specialist delivery.",
    intro: "Add trusted strategy, specialist delivery and joined-up campaign thinking around the artists, releases and moments that matter.",
    answer: "Rolodex Rebels works as an extension of label and management teams, bringing the right specialists together around the artist, commercial goal and timetable. Strategy, delivery and campaign learning stay connected rather than split across isolated channels.",
    links: [["Music PR and release marketing", "/services/get-heard"], ["Build artist audiences", "/services/build-your-audience"], ["Digital music marketing and promotion", "/services/get-seen"], ["Start a project", "/start-a-project"]],
  },
  "promoters-venues-festivals": {
    name: "Promoters, Venues & Festivals",
    seoTitle: "Marketing for Promoters, Venues & Festivals | Rolodex Rebels",
    title: "MARKETING FOR PROMOTERS, VENUES & FESTIVALS. BUILD DEMAND.",
    description: "Marketing for promoters, venues and festivals that connects ticket growth, audience insight, digital campaigns, guest communications and grassroots activity.",
    intro: "Reach the right audience, turn interest into ticket sales and build fan relationships that make the next event easier to grow.",
    answer: "Rolodex Rebels helps live music teams work from the sales position and audience need, joining up ticket campaigns, search, paid and organic activity, guest communications and grassroots activation from announcement through to doors.",
    links: [["Concert, tour and ticket marketing", "/services/sell-the-show"], ["Grassroots music promotion", "/services/grassroots"], ["Build your audience", "/services/build-your-audience"], ["Music websites, SEO and creative", "/services/digital-creative"]],
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
      <nav className="related-links related-links-grid" aria-label={`Services for ${audience.name}`}>
        <h2>CHOOSE THE RESULT YOU NEED.</h2>
        {audience.links.map(([label, href], index) => <Link href={href} key={href}><span>0{index + 1}</span>{label} ↗</Link>)}
      </nav>
      <Link className="back-link" href="/who-we-help">← Back to who we help</Link>
    </InternalPage>
  );
}
