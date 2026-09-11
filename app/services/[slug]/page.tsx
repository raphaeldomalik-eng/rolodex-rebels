import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InternalPage } from "../../internal-page";
import { JsonLd } from "../../json-ld";
import { pageMetadata, serviceJsonLd } from "../../seo";

const serviceData = {
  "get-heard": {
    name: "Get Heard",
    seoTitle: "Music PR & Release Marketing | Rolodex Rebels",
    title: "MUSIC PR, RELEASES & COMMUNICATIONS.",
    description: "Music PR and release marketing that connects artist stories, earned attention, content and useful audience follow-up.",
    intro: "Make the story clear, credible and worth carrying — then give earned attention somewhere useful to go.",
    outcome: "A stronger campaign story, relevant earned attention and more useful follow-through from announcement to what comes next.",
    answer: "PR remains central to Get Heard. We connect positioning, campaign narrative, media outreach, creator activity, content and fan communications around one release plan. The mix depends on the artist, audience, timing and goal; coverage is never guaranteed.",
    modelTitle: "FROM STORY TO MOMENTUM.",
    modelIntro: "Attention works harder when the story, destination and follow-up are connected.",
    model: ["Position", "Story", "Earn attention", "Direct response", "Follow up", "Learn"],
    items: [
      ["PR & release campaigns", "Shape the angle, targets and timing around a release or campaign people can understand."],
      ["Storytelling & messaging", "Build a clear campaign narrative that holds together across media, social, web and fan communication."],
      ["Creator activity", "Work with relevant voices and formats where they can add genuine context, reach or response."],
      ["Content & fan communications", "Turn campaign moments into useful content and direct communication that keeps the audience moving."],
    ],
    offers: "Rebel Launch · Rebel Artist Growth",
    deeper: [["Explore Music PR", "/services/music-pr"]],
    related: [["Music marketing for artists", "/who-we-help/artists"], ["Build a music audience", "/services/build-your-audience"], ["Improve digital visibility", "/services/get-seen"]],
  },
  "get-seen": {
    name: "Get Seen",
    seoTitle: "Digital Music Marketing & Promotion | Rolodex Rebels",
    title: "BE FOUND BY PEOPLE WHO MATTER.",
    description: "Digital music marketing that creates relevant discovery through search, paid, social, creator and grassroots activity.",
    intro: "Be found by people who matter — and give that attention somewhere useful to go.",
    outcome: "More relevant discovery and a clearer journey from first impression to stream, sign-up, ticket action or enquiry.",
    answer: "Get Seen is about relevant discovery, not empty reach. We identify where the right audience is likely to look, listen and move, then connect search, social, paid media, content, creators and grassroots exposure around a useful destination.",
    modelTitle: "DISCOVERY WITH A JOB TO DO.",
    modelIntro: "Every channel should help the right audience find, understand and act on the campaign.",
    model: ["Audience", "Discovery", "Relevance", "Destination", "Response", "Learning"],
    items: [
      ["Search & AI discovery", "Create clear, structured and useful content that helps artists, releases and events be understood when people search."],
      ["Paid media", "Use targeted campaigns to support a defined audience action, with channel and creative response guiding the next move."],
      ["Social & creator visibility", "Put the campaign into relevant feeds, formats and conversations without chasing attention for its own sake."],
      ["Grassroots exposure", "Connect digital discovery with real places and moments where the audience already moves."],
    ],
    offers: "Rebel Launch · Search & Discovery Review · Campaign Intelligence",
    related: [["Music marketing for labels and managers", "/who-we-help/labels-managers"], ["Music PR and release marketing", "/services/get-heard"], ["Digital and creative services", "/services/digital-creative"]],
  },
  "build-your-audience": {
    name: "Build Your Audience",
    seoTitle: "Music Audience Growth & Fan Marketing | Rolodex Rebels",
    title: "STOP STARTING FROM ZERO.",
    description: "Music audience growth built around permission-based fan capture, understanding, communication, activation and retention.",
    intro: "Turn fragmented attention into fan relationships you can understand, activate and grow over time.",
    outcome: "A clearer audience picture, more relevant fan communication and relationships that carry into the next release, show or announcement.",
    answer: "Audience growth is more than finding new people. It means creating permission-based ways for fans to stay connected, understanding available response signals and communicating with greater relevance. The goal is momentum you can carry forward — not a fresh start every campaign.",
    modelTitle: "BUILD THE RELATIONSHIP.",
    modelIntro: "A useful fan lifecycle keeps attention moving and turns every campaign into learning for the next one.",
    model: ["Capture", "Understand", "Communicate", "Activate", "Retain", "Learn"],
    items: [
      ["Audience Intelligence", "Bring available audience, channel and campaign signals together to see who responded and what deserves attention next."],
      ["Fan CRM & segmentation", "Organise permission-based fan relationships into useful groups for more relevant communication."],
      ["Email & retargeting", "Reconnect with audiences through permitted channels when the timing, message and platform make sense."],
      ["Acquisition & retention", "Balance finding new fans with giving existing ones reasons to stay active between campaign moments."],
    ],
    offers: "Rebel Artist Growth · Audience Growth Programme · Campaign Intelligence",
    related: [["Music marketing for artists", "/who-we-help/artists"], ["Ticket and tour marketing", "/services/sell-the-show"], ["Search and digital visibility", "/services/get-seen"]],
  },
  "sell-the-show": {
    name: "Sell The Show",
    seoTitle: "Concert, Tour & Ticket Marketing | Rolodex Rebels",
    title: "BUILD DEMAND. SELL TICKETS. GROW THE NEXT CROWD.",
    description: "Concert, tour and festival marketing that connects demand, audience response, ticket conversion and retention.",
    intro: "Connect live demand to ticket action, useful audience learning and momentum for the next show.",
    outcome: "A clearer route from discovery to ticket action, with useful audience relationships and learning that can strengthen future campaigns.",
    answer: "Sell more tickets is an outcome. It is not a channel strategy. We work backwards from the event, audience and sales position to connect announcement, search, paid and organic activity, fan communication, guests and grassroots promotion. Where data is available, sales pace, time, geography, audience, channel, creative, email and landing-page behaviour can guide the next move.",
    modelTitle: "TURN LIVE DEMAND INTO GROWTH.",
    modelIntro: "A connected live campaign keeps working after the first announcement — and after doors.",
    model: ["Demand", "Response", "Conversion", "Audience", "Retention"],
    items: [
      ["Ticket growth", "Shape the channel, message and timing around the sales position rather than treating promotion as a fixed media plan."],
      ["Tour marketing", "Connect local demand, artist audiences, content, search and grassroots activity across the moments that matter."],
      ["Promoter & festival campaigns", "Build demand around the programme, audience and place, with partnerships considered where they add genuine value."],
      ["Guest & industry campaigns", "Plan invitations, RSVP, reminders and follow-up as part of the wider campaign — not an isolated admin task."],
    ],
    offers: "Rebel Tour · Promoter Growth · Festival Growth · Guest & Industry Campaigns",
    deeper: [["Explore Festival Marketing", "/services/festival-marketing"]],
    related: [["Marketing for promoters, venues and festivals", "/who-we-help/promoters-venues-festivals"], ["Grassroots music promotion", "/services/grassroots"], ["Build your audience", "/services/build-your-audience"]],
  },
  grassroots: {
    name: "Grassroots",
    seoTitle: "Grassroots Music Promotion & Street Teams | Rolodex Rebels",
    title: "GRASSROOTS MUSIC PROMOTION. LOCAL. LOUD. EFFECTIVE.",
    description: "Grassroots music promotion through street teams, leaflet drops, poster runs, hand-to-hand flyering, campuses and local activation.",
    intro: "Put the campaign in the real places and moments where the audience already moves.",
    outcome: "Relevant physical visibility, credible local activation and a campaign presence built around audience, place and timing.",
    answer: "Grassroots is a current strategic advantage, not a legacy footnote. We plan physical activity around the audience, location, moment and wider campaign objective. Where useful, an activation can create a digital response or learning opportunity — without forcing technology into every interaction.",
    modelTitle: "PLAN FOR THE PLACE AND MOMENT.",
    modelIntro: "The strongest field campaigns start with audience behaviour, not a pile of materials.",
    model: ["Audience", "Place", "Moment", "Activation", "Optional digital response", "Learning"],
    items: [
      ["Street teams", "Staffed activation in London, surrounding areas and Kent, planned around the audience and campaign moment."],
      ["Leaflet drops", "Targeted distribution planned around relevant locations, timings and audience movement."],
      ["Poster runs", "Physical visibility in agreed locations where the campaign can earn attention in context."],
      ["Hand-to-hand flyering", "Direct audience contact around venues, events and relevant footfall moments."],
      ["Campus campaigns", "Student-facing activity shaped around the campus, calendar and audience fit."],
      ["Local activation", "Place-based campaign support connected to launches, shows, openings and cultural moments."],
    ],
    offers: "Grassroots Activation",
    deeper: [["Explore Music Street Teams", "/services/grassroots/music-street-teams"], ["Explore Flyer Distribution", "/services/grassroots/flyer-distribution"]],
    areaServed: "London, surrounding areas and Kent",
    related: [["Ticket and tour marketing", "/services/sell-the-show"], ["Marketing for promoters, venues and festivals", "/who-we-help/promoters-venues-festivals"], ["Digital music promotion", "/services/get-seen"]],
  },
  "digital-creative": {
    name: "Digital & Creative",
    seoTitle: "Music Websites, Digital & Creative Services | Rolodex Rebels",
    title: "THE DIGITAL INFRASTRUCTURE BEHIND AUDIENCE GROWTH.",
    description: "Websites, campaign sites, audience journeys, search foundations, content and creative for artists, events, festivals, venues and promoters.",
    intro: "Build clear digital destinations that help people find the campaign, understand it, take action and stay connected.",
    outcome: "A stronger digital presence, clearer audience journeys and infrastructure that can improve with the campaign.",
    answer: "Digital & Creative is broader than artist websites. We shape websites, campaign sites, microsites, landing pages, content systems and creative assets for artists, bands, events, festivals, venues, promoters and organisations. Everything starts with the audience need and the next useful action. We can build it, run it and improve it with you.",
    modelTitle: "BUILD A USEFUL DIGITAL JOURNEY.",
    modelIntro: "Make every touchpoint easier to understand, act on and learn from.",
    model: ["Audience", "Need", "Experience", "Content", "Action", "Relationship", "Learning"],
    items: [
      ["Websites", "Audience-first websites for artists, bands, events, festivals, venues, promoters and music organisations."],
      ["Campaign sites & microsites", "Focused destinations for launches, programmes, tours and moments that need room to explain and convert."],
      ["Landing pages & journeys", "Clear routes from campaign attention to stream, sign-up, RSVP, ticket action or enquiry."],
      ["Content infrastructure", "Structured content that is easier to publish, maintain, understand and reuse across campaign moments."],
      ["Search & AI discovery readiness", "Clear information architecture, useful copy and technical foundations that help people and search systems understand the offer."],
      ["Creative assets", "Campaign visuals and content formats designed for the message, channel and action required."],
      ["Measurement", "Useful consent-aware measurement focused on decisions rather than dashboard volume."],
      ["Managed improvement", "Ongoing content, campaign and experience support where the engagement calls for it."],
    ],
    offers: "Digital Presence · Campaign Sites · Audience Journey Review · Managed Improvement",
    deeper: [["Explore Artist Website Design", "/services/artist-website-design"]],
    related: [["Music marketing for artists", "/who-we-help/artists"], ["Search and digital visibility", "/services/get-seen"], ["Build a music audience", "/services/build-your-audience"]],
  },
} as const;

type ServiceSlug = keyof typeof serviceData;

export function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceData[slug as ServiceSlug];
  if (!service) return pageMetadata({ title: "Music Marketing Services | Rolodex Rebels", description: "Explore Rolodex Rebels music marketing services.", path: "/services" });
  return pageMetadata({ title: service.seoTitle, description: service.description, path: `/services/${slug}` });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceData[slug as ServiceSlug];
  if (!service) notFound();
  const path = `/services/${slug}`;
  const areaServed = "areaServed" in service ? service.areaServed : undefined;
  const deeper = "deeper" in service ? service.deeper : [];

  return (
    <InternalPage
      eyebrow={`Services / ${service.name}`}
      title={<>{service.title}</>}
      intro={service.intro}
      breadcrumbs={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: service.name, path }]}
    >
      <JsonLd data={serviceJsonLd({ name: service.name, description: service.description, path, areaServed })} />
      <section className="inner-split">
        <div><p className="eyebrow pink">What it means</p><h2>A CONNECTED CAMPAIGN.</h2></div>
        <div className="body-copy"><p>{service.answer}</p><p><strong>The outcome:</strong><br />{service.outcome}</p><p><strong>Ways to work with us:</strong><br />{service.offers}</p></div>
      </section>
      <section className="journey-panel" aria-labelledby={`${slug}-journey`}>
        <div><p className="eyebrow light">How the work moves</p><h2 id={`${slug}-journey`}>{service.modelTitle}</h2><p>{service.modelIntro}</p></div>
        <ol className="journey-track">
          {service.model.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong></li>)}
        </ol>
      </section>
      <section className="feature-grid">
        {service.items.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}
      </section>
      {deeper.length > 0 && <section className="deeper-service-links">
        <div><p className="eyebrow light">Specialist service</p><h2>GO DEEPER ON THIS BRIEF.</h2></div>
        <nav aria-label={`Specialist ${service.name} services`}>
          {deeper.map(([label, href]) => <Link href={href} key={href}>{label} <span aria-hidden="true">↗</span></Link>)}
        </nav>
      </section>}
      <nav className="related-links" aria-label="Related services and audiences">
        <h2>KEEP BUILDING THE CAMPAIGN.</h2>
        {service.related.map(([label, href]) => <Link href={href} key={href}>{label} ↗</Link>)}
      </nav>
      <Link className="back-link" href="/services">← Back to all services</Link>
    </InternalPage>
  );
}
