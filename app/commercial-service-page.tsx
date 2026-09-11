import type { Metadata } from "next";
import Link from "next/link";
import { InternalPage, Arrow } from "./internal-page";
import { JsonLd } from "./json-ld";
import { pageMetadata, serviceJsonLd } from "./seo";

type LinkItem = readonly [label: string, href: string];
type ContentItem = readonly [title: string, copy: string];

export type CommercialServiceData = {
  name: string;
  seoTitle: string;
  description: string;
  path: string;
  eyebrow: string;
  title: string;
  intro: string;
  heroCta: string;
  breadcrumbs: { name: string; path: string }[];
  problemEyebrow: string;
  problemTitle: string;
  problemCopy: string[];
  outcome: string;
  serves: string;
  journeyTitle: string;
  journeyIntro: string;
  journey: string[];
  capabilities: ContentItem[];
  connectionEyebrow: string;
  connectionTitle: string;
  connectionCopy: string;
  connectionPoints: string[];
  secondaryTitle: string;
  secondaryCopy: string[];
  assuranceTitle: string;
  assuranceCopy: string;
  related: LinkItem[];
  areaServed?: string | false;
};

const baseBreadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
];

export const commercialServices: Record<string, CommercialServiceData> = {
  musicPr: {
    name: "Music PR",
    seoTitle: "Music PR Agency UK | Artist & Release Publicity | Rolodex Rebels",
    description: "Music PR and release publicity for artists, labels and managers, combining strategy, targeted media outreach, content and connected audience journeys.",
    path: "/services/music-pr",
    eyebrow: "Get Heard / Music PR",
    title: "MUSIC PR THAT GETS THE RIGHT PEOPLE LISTENING.",
    intro: "PR and release campaigns for artists, labels and managers — built around the story, the music, the audience and the moment.",
    heroCta: "Start a PR campaign",
    breadcrumbs: [...baseBreadcrumbs, { name: "Get Heard", path: "/services/get-heard" }, { name: "Music PR", path: "/services/music-pr" }],
    problemEyebrow: "More than a press release",
    problemTitle: "MAKE THE STORY WORTH CARRYING.",
    problemCopy: [
      "Music PR is not simply sending a press release to the biggest possible list. It starts with why this artist, release or live moment matters — and which editors, journalists, broadcasters and creators have a genuine reason to care.",
      "Rolodex Rebels brings positioning, campaign story, release strategy, media targeting, materials, content and timing into one plan. The work can stand alone or connect to the wider release, audience and live campaign.",
    ],
    outcome: "A clear story, focused outreach and earned attention that supports the wider artist or release journey.",
    serves: "Artists, labels and managers working across singles, EPs, albums, tours and live campaigns.",
    journeyTitle: "FROM STORY TO MOMENTUM.",
    journeyIntro: "Build the campaign around relevance, then make each moment of attention useful.",
    journey: ["Position", "Shape the story", "Build materials", "Target media", "Outreach", "Follow up", "Learn"],
    capabilities: [
      ["PR & release strategy", "Set the campaign angle, priorities, timing and role of PR within the wider release plan."],
      ["Positioning & messaging", "Clarify the artist story and the message that should hold together across press, content and fan communication."],
      ["Press materials", "Create clear campaign information and usable assets that help media understand the story quickly."],
      ["Media research & targeting", "Identify relevant regional and national outlets, journalists, broadcasters and opportunities rather than relying on volume."],
      ["Targeted outreach", "Pitch the campaign with context, follow up professionally and respond to genuine editorial interest."],
      ["Creators & communications", "Bring in creator activity, content or fan communication where it strengthens the campaign rather than distracting from it."],
      ["Interviews, features & reviews", "Support suitable editorial opportunities when media interest and campaign fit align."],
      ["Reporting & next moves", "Keep the team clear on activity, response and what the campaign has taught us for the next stage."],
    ],
    connectionEyebrow: "Attention needs a destination",
    connectionTitle: "EARNED ATTENTION SHOULD HAVE SOMEWHERE USEFUL TO GO.",
    connectionCopy: "Where useful, PR can connect to an artist or release page, live dates, a campaign destination or a permission-based fan relationship. That can make a feature, interview or review part of a longer audience journey rather than a moment that disappears.",
    connectionPoints: ["Artist and release destinations", "Fan sign-up and communication", "Digital discovery and live dates", "Retargeting where appropriate", "Learning for future campaigns"],
    secondaryTitle: "WHAT WE CONTROL — AND WHAT WE DON'T.",
    secondaryCopy: [
      "Rolodex Rebels controls the strategy, story, targeting, materials, outreach, follow-up and how PR connects to the wider campaign.",
      "Editors, journalists and broadcasters make their own editorial decisions. Coverage can never be guaranteed, and we will not pretend otherwise.",
    ],
    assuranceTitle: "THE RIGHT FIT, NOT THE BIGGEST LIST.",
    assuranceCopy: "Every PR campaign is shaped around the music, stage, audience and objective. Not every campaign needs every capability listed here.",
    related: [["Explore Get Heard", "/services/get-heard"], ["Marketing for artists", "/who-we-help/artists"], ["Build your audience", "/services/build-your-audience"]],
  },
  streetTeams: {
    name: "Music Street Teams",
    seoTitle: "Music Street Teams London & Kent | Rolodex Rebels",
    description: "Professional music and event street teams across London, surrounding areas and Kent, planned around audience, place, timing and campaign goals.",
    path: "/services/grassroots/music-street-teams",
    eyebrow: "Grassroots / Music Street Teams",
    title: "PUT YOUR CAMPAIGN ON THE STREETS.",
    intro: "Professional music and event street teams across London, surrounding areas and Kent.",
    heroCta: "Plan a street campaign",
    breadcrumbs: [...baseBreadcrumbs, { name: "Grassroots", path: "/services/grassroots" }, { name: "Music Street Teams", path: "/services/grassroots/music-street-teams" }],
    problemEyebrow: "Audience first",
    problemTitle: "THE RIGHT PEOPLE. THE RIGHT PLACE. THE RIGHT MOMENT.",
    problemCopy: [
      "Street promotion works when the people, location, context and timing match the campaign objective. It is not simply about putting a team outside the busiest place or distributing the highest quantity.",
      "We plan around where the audience already moves and what the campaign needs them to notice or do. Teams are briefed on the music, event, message and moment before activation begins.",
    ],
    outcome: "A credible physical campaign presence built around relevant audience movement and a clear objective.",
    serves: "Gigs, concerts, tours, festivals, releases, venues, campuses, nightlife and targeted hand-to-hand campaigns.",
    journeyTitle: "PLAN IT. PUT IT LIVE. LEARN.",
    journeyIntro: "Good street activity begins before the team reaches the location.",
    journey: ["Plan", "Brief", "Activate", "Evidence", "Learn"],
    capabilities: [
      ["Gig & concert promotion", "Reach relevant audiences around venues, transport routes, queues and cultural moments where the context makes sense."],
      ["Tour activity", "Support selected dates with local planning rather than treating every market as the same."],
      ["Festival promotion", "Build local awareness and ticket attention around audience behaviour, timing and place."],
      ["Release activity", "Put a new single, EP or album into physical spaces that connect naturally to the artist and audience."],
      ["Venue campaigns", "Support programmes, openings and priority dates with activity shaped around the surrounding area and footfall."],
      ["Campus & nightlife activation", "Plan student and nightlife activity around the calendar, venue ecology and likely audience fit."],
    ],
    connectionEyebrow: "From the streets to the screens",
    connectionTitle: "PHYSICAL ATTENTION CAN CREATE A USEFUL NEXT MOVE.",
    connectionCopy: "Grassroots activity remains valuable on its own. Where it helps the campaign, the interaction can point to a QR code or dedicated URL leading to tickets, a release, RSVP, content or an optional permission-based sign-up.",
    connectionPoints: ["Street interaction", "QR code or campaign URL", "Ticket, release, RSVP or content", "Optional audience capture", "Campaign response where measurable"],
    secondaryTitle: "LONDON. SURROUNDING AREAS. KENT.",
    secondaryCopy: [
      "That is the approved staffed Street Team coverage. We plan and staff this service only within these areas.",
      "Evidence and reporting are agreed to suit the campaign. We do not promise GPS tracking, perfect attribution or scanning infrastructure that is not part of the delivery.",
    ],
    assuranceTitle: "REAL PEOPLE. CLEAR BRIEF. RELEVANT PLACES.",
    assuranceCopy: "Every activation is scoped around the audience, materials, locations, timings and practical delivery required.",
    related: [["Explore Grassroots", "/services/grassroots"], ["Flyer distribution", "/services/grassroots/flyer-distribution"], ["Festival marketing", "/services/festival-marketing"]],
    areaServed: "London, surrounding areas and Kent",
  },
  flyerDistribution: {
    name: "Music & Event Flyer Distribution",
    seoTitle: "Music & Event Flyer Distribution | Rolodex Rebels",
    description: "Audience-led flyer distribution for music and event campaigns, including hand-to-hand and targeted campaign support connected to wider marketing.",
    path: "/services/grassroots/flyer-distribution",
    eyebrow: "Grassroots / Flyer Distribution",
    title: "PUT THE MESSAGE WHERE THE AUDIENCE IS.",
    intro: "Audience-led flyer distribution for gigs, festivals, tours, releases, venues and music campaigns.",
    heroCta: "Plan a distribution campaign",
    breadcrumbs: [...baseBreadcrumbs, { name: "Grassroots", path: "/services/grassroots" }, { name: "Flyer Distribution", path: "/services/grassroots/flyer-distribution" }],
    problemEyebrow: "Plan before print meets pavement",
    problemTitle: "WE START WITH THE AUDIENCE. NOT THE BOX OF FLYERS.",
    problemCopy: [
      "Useful distribution begins with who the campaign needs to reach, where those people move, when the message will be relevant and what action the flyer should support.",
      "Quantity matters only after audience, location, timing, message and campaign role are clear. We plan distribution to support the wider objective rather than competing on volume alone.",
    ],
    outcome: "Physical campaign reach planned around audience relevance, timing and a clear next action.",
    serves: "Promoters, venues, festivals, tours, artists, labels and other music campaigns with a credible physical audience opportunity.",
    journeyTitle: "MAKE EVERY FLYER WORK HARDER.",
    journeyIntro: "The plan connects the audience to the place, message and action.",
    journey: ["Who", "Where", "When", "Message", "Quantity", "Action"],
    capabilities: [
      ["Hand-to-hand", "Direct distribution around relevant events, venues, queues and audience movement where an informed human interaction adds value."],
      ["Targeted distribution", "Plan placement and distribution around agreed locations, timings and audience contexts."],
      ["Campaign support", "Use flyers alongside posters, PR, digital activity, ticket campaigns and wider grassroots activation."],
      ["Gig & tour campaigns", "Support priority dates and local demand with distribution shaped around the event and audience."],
      ["Festival & venue campaigns", "Build awareness around programmes, on-sales and seasonal moments in relevant physical environments."],
      ["Release campaigns", "Connect a physical piece of the artist campaign to listening, content, live dates or another useful destination."],
    ],
    connectionEyebrow: "Physical to digital — where useful",
    connectionTitle: "GIVE THE MESSAGE A NEXT STEP.",
    connectionCopy: "A flyer can point to a QR code or dedicated URL leading to a ticket page, release, RSVP, landing page or optional fan sign-up. This is a campaign design choice, not a compulsory technology layer, and it does not create perfect attribution.",
    connectionPoints: ["QR code or dedicated URL", "Ticket destination", "Release or content destination", "RSVP or landing page", "Permission-based audience capture"],
    secondaryTitle: "DISTRIBUTION THAT FITS THE CAMPAIGN.",
    secondaryCopy: [
      "Flyer distribution can work independently or as part of a connected PR, digital, poster, ticket or grassroots campaign.",
      "Coverage and delivery geography are agreed for each brief based on operational fit.",
    ],
    assuranceTitle: "AUDIENCE. PLACE. TIMING. ACTION.",
    assuranceCopy: "We scope the right distribution approach after understanding the campaign, materials, quantity, audience and practical delivery area.",
    related: [["Explore Grassroots", "/services/grassroots"], ["Music Street Teams", "/services/grassroots/music-street-teams"], ["Sell the show", "/services/sell-the-show"]],
    areaServed: false,
  },
  festivalMarketing: {
    name: "Festival Marketing",
    seoTitle: "Festival Marketing Agency | Ticket & Audience Growth | Rolodex Rebels",
    description: "Joined-up festival marketing connecting positioning, PR, digital discovery, grassroots activity, ticket conversion and long-term audience growth.",
    path: "/services/festival-marketing",
    eyebrow: "Sell The Show / Festival Marketing",
    title: "BUILD THE CROWD BEFORE THE GATES OPEN.",
    intro: "Joined-up festival marketing connecting audience strategy, PR, digital discovery, grassroots activity, ticket conversion and long-term audience growth.",
    heroCta: "Market my festival",
    breadcrumbs: [...baseBreadcrumbs, { name: "Sell The Show", path: "/services/sell-the-show" }, { name: "Festival Marketing", path: "/services/festival-marketing" }],
    problemEyebrow: "More than a media plan",
    problemTitle: "BUILD DEMAND ACROSS THE WHOLE FESTIVAL JOURNEY.",
    problemCopy: [
      "Festival demand changes from positioning and first announcement through on-sale, line-up moments, final push and the live experience. The campaign needs to change with it.",
      "Rolodex Rebels can connect audience strategy, PR, content, search, paid and organic digital, email, grassroots, guests and ticket activity around the sales position and the moment. The right mix depends on the festival, audience, timetable and available evidence.",
    ],
    outcome: "A festival campaign that responds to the moment, supports ticket action and creates useful audience momentum beyond the event.",
    serves: "Independent festivals, promoters and live teams that need campaign strategy, specialist delivery or joined-up growth support.",
    journeyTitle: "FROM POSITIONING TO THE NEXT EVENT.",
    journeyIntro: "Each stage has a different job — and each should make the next one stronger.",
    journey: ["Position", "Announce", "On sale", "Build", "Accelerate", "Final push", "Experience", "Retain", "Grow"],
    capabilities: [
      ["Positioning & campaign strategy", "Clarify the festival proposition, audience priorities, commercial goal and role of each campaign stage."],
      ["Announcement & on-sale", "Give line-up, launch and ticket moments the right story, destinations, content and media support."],
      ["PR, content & discovery", "Connect publicity, organic content, search and audience communication around what people need to know and do."],
      ["Paid digital & conversion", "Use paid activity and landing journeys to support defined ticket actions, with response guiding the next move."],
      ["Grassroots activation", "Put the festival into relevant physical places through planned teams, distribution and local activity where it adds value."],
      ["Guests & industry", "Connect invitations, RSVP, reminders and follow-up to the wider campaign and live experience."],
      ["Audience growth & retention", "Create permission-based opportunities for people to stay connected before and after the festival."],
      ["Campaign intelligence", "Use available audience, channel, creative, landing-page and ticket signals to decide what the campaign needs next."],
      ["Partnership thinking", "Consider relevant brand, sponsorship or cultural collaboration opportunities where they fit the festival and audience."],
    ],
    connectionEyebrow: "Ticket intelligence",
    connectionTitle: "SELL MORE TICKETS IS AN OUTCOME. NOT A CHANNEL STRATEGY.",
    connectionCopy: "Where the data is available, decisions can consider sales pace, time to event, audience, geography, channel response, creative response, ticket response and returning audiences. The next move may be reach, creative, PR, grassroots, retargeting, audience work, conversion improvement or a timing change.",
    connectionPoints: ["Sales pace and time to event", "Audience and geography", "Channel and creative response", "Ticket and landing-page response", "Returning audiences"],
    secondaryTitle: "DON'T START FROM ZERO NEXT YEAR.",
    secondaryCopy: [
      "A festival can turn discovery into attendance, permission-based audience relationships and a stronger starting point for the next event. Capture must always be clear, consensual and genuinely useful to the audience.",
      "That journey may connect to the festival website, ticket paths, campaign pages, line-up and programme content, visitor information, landing pages and post-event communication. Rolodex Rebels' wider digital capability supports festivals, events, venues and promoters — not only artist websites.",
    ],
    assuranceTitle: "ONE FESTIVAL. A CAMPAIGN THAT CHANGES WITH THE MOMENT.",
    assuranceCopy: "Not every festival needs every capability. We build the mix around the proposition, sales position, audience, internal team and budget.",
    related: [["Explore Sell The Show", "/services/sell-the-show"], ["Event & Festival Websites", "/services/event-festival-websites"], ["For promoters, venues & festivals", "/who-we-help/promoters-venues-festivals"]],
  },
  artistWebsiteDesign: {
    name: "Artist Website Design",
    seoTitle: "Artist Website Design | Websites for Musicians | Rolodex Rebels",
    description: "Artist website design for musicians and bands, built around discovery, releases, live dates, fan relationships and future campaigns.",
    path: "/services/artist-website-design",
    eyebrow: "Digital & Creative / Artist Websites",
    title: "GIVE THE MUSIC A HOME OF ITS OWN.",
    intro: "Artist websites built around discovery, releases, live dates, fan relationships and the campaigns that come next.",
    heroCta: "Build my artist site",
    breadcrumbs: [...baseBreadcrumbs, { name: "Digital & Creative", path: "/services/digital-creative" }, { name: "Artist Website Design", path: "/services/artist-website-design" }],
    problemEyebrow: "More than a link in bio",
    problemTitle: "BUILD A DIGITAL HOME YOU OWN.",
    problemCopy: [
      "Social and streaming platforms matter, but they decide the format, visibility and rules. An artist website gives the music, story, releases and live activity a clear home that can connect every campaign moment.",
      "We start with the audience and the job the site needs to do. That could mean helping new listeners understand the artist, giving media a useful press destination, moving fans towards live dates or creating a permission-based way to stay connected.",
    ],
    outcome: "An owned artist destination that supports discovery, releases, live activity, fan relationships and future campaigns.",
    serves: "Solo artists, bands, emerging projects and established teams that need a focused digital home rather than another disconnected profile.",
    journeyTitle: "FROM DISCOVERY TO THE NEXT CAMPAIGN.",
    journeyIntro: "A useful artist site connects identity and music to a fan relationship that can keep moving.",
    journey: ["Discovery", "Artist", "Music", "Live", "Fan relationship", "Next campaign"],
    capabilities: [
      ["Identity & story", "Create a clear digital expression of who the artist is and why the music matters."],
      ["Releases, music & video", "Give current and catalogue work useful context with clear listening and viewing journeys."],
      ["Live dates & tickets", "Make upcoming shows easy to find and connect fans to the right ticket destination."],
      ["EPK & press", "Give media and industry contacts a focused place to find approved information and assets."],
      ["Fan capture & mailing list", "Create clear, permission-based ways for listeners to stay connected beyond the first visit."],
      ["Content & campaigns", "Support news, editorial content, release pages, tour moments and focused campaign landing pages."],
      ["Merch & external journeys", "Connect to suitable merchandise, commerce or partner destinations where the project requires it."],
      ["Search & measurement", "Build clear technical foundations and useful measurement around discovery and audience action."],
    ],
    connectionEyebrow: "Growth infrastructure",
    connectionTitle: "MAKE THE SITE PART OF THE CAMPAIGN.",
    connectionCopy: "The artist website can support releases, PR, tour activity, fan communication, audience capture and focused landing pages. Instead of rebuilding the journey for every announcement, the site becomes infrastructure the next campaign can use.",
    connectionPoints: ["Release and PR destinations", "Live dates and ticket journeys", "Fan sign-up and communication", "Campaign landing pages", "Search discovery and learning"],
    secondaryTitle: "BEYOND ARTIST WEBSITES.",
    secondaryCopy: [
      "Artist Website Design is one focused entry point into Rolodex Rebels' broader Digital & Creative capability.",
      "We can also support websites and digital experiences for events, festivals, promoters, venues and campaigns, including landing pages and microsites. Where useful, we can build it, run it and improve it with you; ongoing support is available, not compulsory.",
    ],
    assuranceTitle: "AUDIENCE FIRST. BUILD SECOND.",
    assuranceCopy: "The right scope follows the audience need, content, actions and campaign role — not a fixed website template or mandatory retainer.",
    related: [["Explore Digital & Creative", "/services/digital-creative"], ["Marketing for artists", "/who-we-help/artists"], ["Build your audience", "/services/build-your-audience"]],
  },
};

export function commercialServiceMetadata(data: CommercialServiceData): Metadata {
  return pageMetadata({ title: data.seoTitle, description: data.description, path: data.path });
}

export function CommercialServicePage({ data }: { data: CommercialServiceData }) {
  const journeyId = `${data.path.slice(1).replaceAll("/", "-")}-journey`;

  return (
    <InternalPage
      eyebrow={data.eyebrow}
      title={<>{data.title}</>}
      intro={data.intro}
      heroCta={{ label: data.heroCta, href: "/start-a-project" }}
      breadcrumbs={data.breadcrumbs}
    >
      <JsonLd data={serviceJsonLd({ name: data.name, description: data.description, path: data.path, areaServed: data.areaServed })} />

      <section className="inner-split commercial-intro">
        <div><p className="eyebrow pink">{data.problemEyebrow}</p><h2>{data.problemTitle}</h2></div>
        <div className="body-copy">
          {data.problemCopy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <p><strong>The outcome:</strong><br />{data.outcome}</p>
          <p><strong>Who it is for:</strong><br />{data.serves}</p>
          <Link className="text-link" href="/start-a-project">{data.heroCta} <Arrow /></Link>
        </div>
      </section>

      <section className="journey-panel" aria-labelledby={journeyId}>
        <div><p className="eyebrow light">How the work moves</p><h2 id={journeyId}>{data.journeyTitle}</h2><p>{data.journeyIntro}</p></div>
        <ol className="journey-track">
          {data.journey.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong></li>)}
        </ol>
      </section>

      <section className="feature-grid commercial-feature-grid" aria-label={`${data.name} capabilities`}>
        {data.capabilities.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}
      </section>

      <section className="commercial-connection">
        <div>
          <p className="eyebrow light">{data.connectionEyebrow}</p>
          <h2>{data.connectionTitle}</h2>
          <p>{data.connectionCopy}</p>
          <Link className="button button-pink" href="/start-a-project">Talk through the campaign <Arrow /></Link>
        </div>
        <ul>
          {data.connectionPoints.map((point, index) => <li key={point}><span>{String(index + 1).padStart(2, "0")}</span>{point}</li>)}
        </ul>
      </section>

      <section className="inner-split commercial-secondary">
        <div><p className="eyebrow pink">Connected thinking</p><h2>{data.secondaryTitle}</h2></div>
        <div className="body-copy">{data.secondaryCopy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      </section>

      <aside className="commercial-assurance">
        <p className="eyebrow">Campaign principle</p>
        <h2>{data.assuranceTitle}</h2>
        <p>{data.assuranceCopy}</p>
      </aside>

      <nav className="related-links" aria-label={`Related to ${data.name}`}>
        <h2>KEEP BUILDING THE CAMPAIGN.</h2>
        {data.related.map(([label, href]) => <Link href={href} key={href}>{label} <Arrow /></Link>)}
      </nav>
      <Link className="back-link" href="/services">← Back to all services</Link>
    </InternalPage>
  );
}
