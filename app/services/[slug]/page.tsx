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
    meaningTitle: "MAKE THE STORY WORTH CARRYING.",
    outcome: "A campaign story the right editor, journalist, broadcaster, creator and fan can understand — supported from first pitch to follow-up.",
    answer: "PR is not a mailing list. The job is to give the right editor, journalist, broadcaster or creator a genuine reason to care about this artist, this release and this moment. We connect positioning, press materials, targeted outreach, content and fan communication around one release plan. Coverage is never guaranteed.",
    modelTitle: "FROM STORY TO MOMENTUM.",
    modelIntro: "A feature, interview or radio play should support the release plan rather than sit apart from it.",
    model: ["Position", "Story", "Earn attention", "Direct response", "Follow up", "Learn"],
    items: [
      ["PR & release campaigns", "Shape the angle, targets and timing around a release or campaign people can understand."],
      ["Storytelling & messaging", "Build a clear campaign narrative that holds together across media, social, web and fan communication."],
      ["Creator activity", "Work with relevant voices and formats where they can add genuine context, reach or response."],
      ["Content & fan communications", "Turn announcements, release day and media moments into content fans can follow and share."],
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
    meaningTitle: "BEING VISIBLE TO THE WRONG PEOPLE IS JUST NOISE.",
    outcome: "More of the right people finding the artist, release or event — with a clear route to listen, sign up, buy a ticket or enquire.",
    answer: "Search, paid media, social, creators and grassroots can all create visibility. The question is whether the right person notices — and whether there is a clear next step when they do. We choose the channels around how that audience is likely to discover the campaign, not around an impressions target.",
    modelTitle: "DISCOVERY WITH A JOB TO DO.",
    modelIntro: "A search result, creator post, advert or flyer earns its place by helping the right person find and act on the campaign.",
    model: ["Audience", "Discovery", "Relevance", "Destination", "Response", "Learning"],
    items: [
      ["Search & AI discovery", "Create clear pages and structured information that help people and search systems understand the artist, release or event."],
      ["Paid media", "Aim spend at a defined audience and action, then change the audience, creative or timing when the evidence points that way."],
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
    intro: "You worked to earn the stream, click, ticket sale or sign-up. Give the right people a reason — and permission — to stay connected.",
    meaningTitle: "YOU EARNED THE ATTENTION. KEEP THE RELATIONSHIP.",
    outcome: "A permission-based audience you can understand and bring back for the next release, show or announcement.",
    answer: "A release or show can get attention and still leave the next campaign starting cold. We create clear reasons for fans to sign up, organise the information that is genuinely available and shape email, retargeting and follow-up around what different parts of the audience care about.",
    modelTitle: "BUILD THE RELATIONSHIP.",
    modelIntro: "The goal is simple: earn permission, communicate well and give people a reason to return.",
    model: ["Capture", "Understand", "Communicate", "Activate", "Retain", "Learn"],
    items: [
      ["Capture", "Give fans a clear reason to stay connected through sign-up, RSVP or another permission-based route."],
      ["Understand", "See what the audience, location, campaign and behaviour data that is genuinely available can tell us."],
      ["Communicate", "Use email and other permitted channels to speak to different parts of the audience about what matters to them."],
      ["Activate", "Bring that audience back when the next release, tour date or campaign arrives."],
      ["Retain", "Keep the relationship alive between release days, shows and announcements."],
      ["Learn", "Carry what worked — and what did not — into the next campaign."],
    ],
    offers: "Rebel Artist Growth · Audience Growth Programme · Campaign Intelligence",
    related: [["Music marketing for artists", "/who-we-help/artists"], ["Ticket and tour marketing", "/services/sell-the-show"], ["Search and digital visibility", "/services/get-seen"]],
  },
  "sell-the-show": {
    name: "Sell The Show",
    seoTitle: "Concert, Tour & Ticket Marketing | Rolodex Rebels",
    title: "BUILD DEMAND. SELL TICKETS. GROW THE NEXT CROWD.",
    description: "Concert, tour and festival marketing that connects demand, audience response, ticket conversion and retention.",
    intro: "Work from the on-sale, audience and ticket position — then build the campaign the show actually needs.",
    meaningTitle: "FIND THE PROBLEM BEFORE YOU BUY MORE REACH.",
    outcome: "A live campaign that moves from announcement to on-sale and final push with the message, audience and activity matched to the ticket position.",
    answer: "Sell more tickets is an outcome. It is not a channel strategy. If sales slow, more spend is not automatically the answer. Is awareness too low? Has the creative gone flat? Are we reaching the wrong audience? Did the campaign peak too early? Is the ticket path losing people? Where the evidence is available, we find the problem first. The fix might be new creative, a different audience, a PR moment, local activation, retargeting, clearer communication, a ticket-page improvement or a better-timed final push.",
    modelTitle: "TURN LIVE DEMAND INTO GROWTH.",
    modelIntro: "Announcement, on-sale, a mid-campaign plateau and the final push are different jobs. The plan should move with them.",
    model: ["Demand", "Response", "Conversion", "Audience", "Retention"],
    items: [
      ["Ticket growth", "Change the audience, creative, timing, communication or ticket path when the sales picture shows what needs attention."],
      ["Tour marketing", "Connect local demand, artist audiences, content, search and grassroots activity across the moments that matter."],
      ["Promoter & festival campaigns", "Build demand around the announcement, programme, audience, place and ticket pace."],
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
    meaningTitle: "START WITH WHO, WHERE AND WHEN.",
    outcome: "A physical campaign presence in the venues, queues, campuses, nightlife areas and local moments where the message belongs.",
    answer: "Good grassroots promotion starts before anyone picks up a stack of flyers. Who are we trying to reach? Where will they actually be? When will the message matter? We plan the people, materials, locations and priority dates around those answers. A QR code or campaign URL is optional — the audience and place come first.",
    modelTitle: "PLAN FOR THE PLACE AND MOMENT.",
    modelIntro: "The team, flyer or poster should meet the audience where the campaign makes sense — not simply where the footfall is highest.",
    model: ["Audience", "Place", "Moment", "Activation", "Optional digital response", "Learning"],
    items: [
      ["Street teams", "Staffed activation in London, surrounding areas and Kent, planned around the audience and campaign moment."],
      ["Leaflet drops", "Distribution planned around the venues, queues, campuses, nightlife areas and dates that fit the audience."],
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
    meaningTitle: "BUILD THE THING THE AUDIENCE NEEDS.",
    outcome: "A clear place for people to discover the artist or event, find the right information and move towards tickets, listening, sign-up or enquiry.",
    answer: "Sometimes the answer is a new website. Sometimes it is one campaign page, a better ticket path or a clearer place for fans to sign up. We start with what the audience needs to do, then build the right site, landing page, content or creative around it. We can build it, run it and improve it with you.",
    modelTitle: "BUILD A USEFUL DIGITAL JOURNEY.",
    modelIntro: "Plan the pages, content and calls to action around the person arriving — and the job they came to do.",
    model: ["Audience", "Need", "Experience", "Content", "Action", "Relationship", "Learning"],
    items: [
      ["Websites", "Audience-first sites for artists and bands, events and festivals, venues and promoters, and music organisations."],
      ["Campaign experiences", "Campaign sites, microsites, release pages, tour destinations and landing pages with one clear job."],
      ["Audience journeys", "Clear, permission-based routes to sign up, RSVP, get event information or hear about what comes next."],
      ["Discovery", "Search foundations, structured information and AI discovery readiness that help people and systems understand the offer."],
      ["Content infrastructure", "Useful structures for artists, events, schedules, programmes, releases and visitor information."],
      ["Conversion", "Clear journeys towards tickets, listening, registration, enquiry or an appropriate commerce destination."],
      ["Measurement & improvement", "Use available, consent-aware evidence from visits and calls to action to decide what to keep, change or remove."],
      ["Managed digital", "Ongoing content, campaign updates, search improvement, audience journeys and conversion refinement where useful."],
    ],
    offers: "Websites · Campaign Experiences · Audience Journeys · Discovery · Managed Digital",
    deeper: [["Explore Artist Website Design", "/services/artist-website-design"], ["Explore Event & Festival Websites", "/services/event-festival-websites"]],
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
        <div><p className="eyebrow pink">What it means</p><h2>{service.meaningTitle}</h2></div>
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
