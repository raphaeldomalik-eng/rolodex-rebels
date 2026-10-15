import type { Metadata } from "next";
import Link from "next/link";
import { InternalPage, Arrow, DistributionHeroImage } from "./internal-page";
import { JsonLd } from "./json-ld";
import { guidePages } from "./guides/guides";
import { faqJsonLd, pageMetadata, serviceJsonLd } from "./seo";

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
  distributionHero?: boolean;
  questionsTitle?: string;
  questionsIntro?: string;
  questions?: readonly {
    question: string;
    answer: string;
    link?: LinkItem;
  }[];
};

const baseBreadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
];

export const commercialServices: Record<string, CommercialServiceData> = {
  musicPr: {
    name: "Music PR",
    seoTitle: "Music PR Agency UK for Artists & Releases | Rolodex Rebels",
    description: "UK music PR for independent artists, labels and managers. Targeted press for releases, artists and live projects — not a mass-email list.",
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
      "Rolodex Rebels brings positioning, campaign story, release strategy, media targeting, materials, content and timing into one plan. The work is music PR for independent artists and established projects in the UK, across releases, artists and live campaigns. It can stand alone or sit inside a wider plan.",
    ],
    outcome: "A clear story, focused outreach and press that supports the wider artist or release campaign.",
    serves: "Independent artists, labels and managers, including established projects where a targeted campaign fits.",
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
      ["Reporting & next moves", "Show who was approached, what landed, where interest developed and what the team should carry into the next stage."],
    ],
    connectionEyebrow: "Attention needs a destination",
    connectionTitle: "WHEN THE PRESS LANDS, GIVE PEOPLE SOMEWHERE TO GO.",
    connectionCopy: "A feature, interview or review can point people towards the release, live dates, an artist page or a mailing list. That gives the press moment somewhere to go instead of letting it disappear.",
    connectionPoints: ["Artist and release destinations", "Fan sign-up and communication", "Digital discovery and live dates", "Retargeting where appropriate", "Learning for future campaigns"],
    secondaryTitle: "WHAT WE CONTROL — AND WHAT WE DON'T.",
    secondaryCopy: [
      "Rolodex Rebels controls the strategy, story, targeting, materials, outreach, follow-up and how PR connects to the wider campaign.",
      "Editors, journalists and broadcasters make their own editorial decisions. Coverage can never be guaranteed, and we will not pretend otherwise.",
    ],
    assuranceTitle: "THE RIGHT FIT, NOT THE BIGGEST LIST.",
    assuranceCopy: "Every PR campaign is shaped around the music, stage, audience and objective. Not every campaign needs every capability listed here.",
    related: [["Release marketing and communications", "/services/get-heard"], ["Marketing for artists", "/who-we-help/artists"], ["Artist website design", "/services/artist-website-design"], ["Build your audience", "/services/build-your-audience"]],
    questions: [
      {
        question: "What does a music PR campaign actually do?",
        answer: "It decides what is worth saying about an artist, release or live project, prepares the materials, and approaches the editors, journalists, broadcasters and creators who have a reason to care. The outreach is targeted, with follow-up. It is not a blast to every address on a list, and coverage is never guaranteed.",
      },
      {
        question: "Does music PR work for independent artists?",
        answer: "It can, when the music is ready, the story is specific and the targets match the stage of the project. It is a poor use of money when the release is unfinished, the assets are missing, or the only aim is national coverage with no reason those desks would run the story.",
        link: ["Music PR for independent artists", "/guides/music-pr-for-independent-artists"],
      },
      {
        question: "When should a PR campaign start before a release?",
        answer: "Most editorial outlets need the story before release week. A standard single often wants several weeks of active outreach — commonly six to eight where the targets are specialist and online — with longer for albums, tours or features. A campaign that starts days before release has fewer realistic options.",
        link: ["Release lead times for independent artists", "/guides/music-pr-for-independent-artists#release-lead-times"],
      },
      {
        question: "How much does music PR cost?",
        answer: "There is no single public price. Cost follows the length of the campaign, how many releases are in the plan, how specialist the media is, and how much of the story and the assets still need building. A professional quote shows that scope before you compare it with another fee.",
        link: ["What music PR costs in the UK", "/guides/how-much-does-music-pr-cost-uk"],
      },
      {
        question: "What is the difference between music PR and music promotion?",
        answer: "Music PR is earned media: a story pitched to people who choose whether to cover it. Promotion is the wider job of getting the music or event in front of people, which can include advertising, social, playlist pitching and grassroots work. They can run together. They are not the same job.",
        link: ["Music PR compared with music promotion", "/guides/music-pr-vs-music-promotion"],
      },
    ],
  },
  flyerDistribution: {
    name: "Flyer and Leaflet Distribution",
    seoTitle: "Flyer & Leaflet Distribution London & Kent | Rolodex Rebels",
    description: "Hand-to-hand flyer and leaflet distribution in London and Kent for gigs, events, venues and local campaigns, planned around audience, place and timing.",
    path: "/services/grassroots/flyer-distribution",
    eyebrow: "Grassroots / Flyer & Leaflet Distribution",
    title: "FLYER AND LEAFLET DISTRIBUTION, PLANNED AROUND THE AUDIENCE.",
    intro: "Hand-to-hand flyer and leaflet distribution across London and Kent for gigs, festivals, tours, releases, venues and local campaigns.",
    heroCta: "Plan a distribution campaign",
    breadcrumbs: [...baseBreadcrumbs, { name: "Grassroots", path: "/services/grassroots" }, { name: "Flyer & Leaflet Distribution", path: "/services/grassroots/flyer-distribution" }],
    problemEyebrow: "Plan before print meets pavement",
    problemTitle: "WE START WITH THE AUDIENCE. NOT THE BOX OF FLYERS.",
    problemCopy: [
      "Useful distribution begins with who the campaign needs to reach, where those people move, when the message will be relevant and what action the leaflet or flyer should support.",
      "Our flyering campaigns are hand-to-hand: flyers and leaflets given to people around relevant events, venues, queues, nightlife areas and high streets. Quantity matters only after audience, location, timing, format, message and campaign role are clear. We plan leaflet and flyer distribution to support the wider objective rather than competing on volume alone.",
      "The service runs in London and Kent. It is not a letterbox drop or a nationwide print run.",
    ],
    outcome: "Physical campaign reach planned around audience relevance, timing and a clear next action.",
    serves: "Promoters, venues, festivals, tours, artists, labels and other music and event campaigns with a credible physical audience opportunity in London or Kent.",
    journeyTitle: "MAKE EVERY FLYER WORK HARDER.",
    journeyIntro: "The plan connects the audience to the place, the moment, the message and the action — and quantity comes after all of that.",
    journey: ["Who", "Where", "When", "Format", "Message", "Quantity", "Action", "Learn"],
    capabilities: [
      ["Flyering Campaigns", "Direct distribution around relevant events, venues and queues, taking your campaign straight to your target audience, where one of our skilled flyerers can add value."],
      ["Targeted distribution", "Plan distribution around agreed locations, timings and audience contexts rather than the busiest pavement."],
      ["Gig & tour campaigns", "Support priority dates and local demand with distribution shaped around the event and audience."],
      ["Festival & venue campaigns", "Build awareness around programmes, on-sales and seasonal moments in relevant physical environments."],
      ["Release campaigns", "Connect a physical piece of the artist campaign to listening, content, live dates or another useful destination."],
      ["Print coordination", "Flyers and leaflets can be coordinated as part of the campaign — production and supply, not a print shop."],
    ],
    connectionEyebrow: "Physical to digital — where useful",
    connectionTitle: "GIVE THE MESSAGE A NEXT STEP.",
    connectionCopy: "Where it helps, a QR code or dedicated campaign URL can give the leaflet or flyer a clear digital next step — tickets, a release, RSVP, content or sign-up — and provide additional response signals where measurable. A scan can be counted. It does not prove that every ticket or stream came from the flyer.",
    connectionPoints: ["QR code or dedicated URL", "Ticket destination", "Release or content destination", "RSVP or landing page", "Mailing list sign-up, where it fits"],
    secondaryTitle: "DISTRIBUTION THAT FITS THE CAMPAIGN.",
    secondaryCopy: [
      "Flyer distribution can work independently or as part of a connected PR, digital, poster, ticket or grassroots campaign. Leaflet and flyer activity is scoped to the brief — not treated as unrestricted flyposting or a nationwide print drop.",
      "London and Kent are the two territories for this service. Exact places are agreed for each brief based on the audience and operational fit, so no fixed list of locations is published. In Kent, a brief is usually one local catchment and one date rather than the whole county.",
      "Posters are a separate job. A flyer is handed to a person; a poster stays in a permitted place. Poster distribution has its own page.",
    ],
    assuranceTitle: "AUDIENCE. PLACE. TIMING. ACTION.",
    assuranceCopy: "We scope the right distribution approach after understanding the campaign, materials, quantity, audience and practical delivery area.",
    related: [
      ["Flyer distribution in Kent", "/services/grassroots/flyer-distribution/kent"],
      ["Poster distribution", "/services/grassroots/poster-distribution"],
      ["What flyer distribution costs", "/guides/how-much-does-flyer-distribution-cost"],
      ["Flyer vs poster distribution", "/guides/flyer-vs-poster-distribution"],
      ["Plan a flyer or poster campaign", "/guides/how-to-plan-a-flyer-poster-distribution-campaign"],
    ],
    areaServed: "London and Kent",
    distributionHero: true,
    questionsTitle: "Questions about flyer distribution?",
    questionsIntro: "Short answers. The longer versions live in the guides, where a distribution decision needs more than a paragraph.",
    questions: [
      {
        question: "Where do you distribute flyers and leaflets?",
        answer: "In London and Kent. The exact places are agreed on the brief, around where the audience will actually be: outside venues, in queues, in nightlife areas, on high streets and around the show. We do not publish a fixed list of locations, because the right places depend on the campaign.",
        link: ["Flyer distribution in Kent", "/services/grassroots/flyer-distribution/kent"],
      },
      {
        question: "Do you deliver leaflets door to door?",
        answer: "No. The service is hand-to-hand distribution in agreed places, where a person takes a flyer at a moment that makes sense for the campaign. A letterbox drop is a different job with different costs, and it is not what this service offers.",
      },
      {
        question: "How much does flyer distribution cost?",
        answer: "There is no useful price without the quantity, the geography and the method. Timing, duration, the size of the flyer and how tightly the audience is targeted change it too. A professional quote shows those assumptions before you compare it with anything else.",
        link: ["What flyer distribution costs", "/guides/how-much-does-flyer-distribution-cost"],
      },
      {
        question: "Should I use flyers or posters?",
        answer: "Flyers travel with the person who takes one. Posters stay visible in a permitted place for whoever passes. A show night with a queue suits flyers; somewhere the audience keeps returning to can suit a poster. Some campaigns use both.",
        link: ["Flyer vs poster distribution", "/guides/flyer-vs-poster-distribution"],
      },
      {
        question: "How will I know whether the flyers worked?",
        answer: "Decide that before the flyers are printed. A QR code or dedicated URL gives a countable signal, and ticket or sign-up numbers around the dates add context. None of that proves every sale came from the flyer. Any reporting or campaign evidence is agreed on the brief.",
        link: ["Plan a flyer or poster campaign", "/guides/how-to-plan-a-flyer-poster-distribution-campaign"],
      },
    ],
  },
  posterDistribution: {
    name: "Poster Distribution",
    seoTitle: "Poster Distribution London & Kent | Rolodex Rebels",
    description: "Poster distribution for music and event campaigns in London and Kent — posters placed in shops, music stores and other suitable locations agreed per brief.",
    path: "/services/grassroots/poster-distribution",
    eyebrow: "Grassroots / Poster Distribution",
    title: "POSTER DISTRIBUTION THAT STAYS IN THE RIGHT PLACE.",
    intro: "Targeted poster campaigns across London and Kent — placed in shops, music stores and other suitable locations agreed around the brief.",
    heroCta: "Plan a poster campaign",
    breadcrumbs: [...baseBreadcrumbs, { name: "Grassroots", path: "/services/grassroots" }, { name: "Poster Distribution", path: "/services/grassroots/poster-distribution" }],
    problemEyebrow: "A flyer travels. A poster stays.",
    problemTitle: "THE POSTER HAS TO EARN ITS SPACE.",
    problemCopy: [
      "A flyer is handed to a person and goes wherever they go. A poster stays in one permitted place and is seen by whoever passes it. That changes the job: the location, the message and who walks past matter more than how many posters are printed.",
      "Rolodex Rebels places posters in shops, music stores and other suitable locations where the campaign has a reason to be seen. Locations are agreed for each brief across London and Kent. We do not publish a fixed list of sites, and this is not an exclusive poster network.",
    ],
    outcome: "Posters placed in relevant, permitted locations where the right audience has a reason to look.",
    serves: "Promoters, venues, festivals, artists, labels and other music and event campaigns with a local audience to reach in London or Kent.",
    journeyTitle: "FROM AUDIENCE TO PLACEMENT.",
    journeyIntro: "Choose the location because of who sees it, not because there is space on a wall.",
    journey: ["Who", "Where", "When", "Format", "Message", "Placement", "Action", "Learn"],
    capabilities: [
      ["Poster campaigns", "Targeted poster placement for gigs, tours, festivals, releases and venue programmes."],
      ["Shops & music stores", "Posters placed in shops, music stores and other suitable locations where the audience has a reason to look."],
      ["Location planning", "Agree the locations around the audience, the area and the date — not around how many spaces happen to be free."],
      ["Message for a fixed site", "A poster is read in passing. Keep the name, date, place and next step legible from a distance."],
      ["Print coordination", "Posters can be coordinated as part of the campaign — production and supply, not a print shop."],
      ["Alongside flyers", "Leaflet and flyer distribution can be added where a person-to-person moment would help the same campaign."],
    ],
    connectionEyebrow: "Physical to digital — where useful",
    connectionTitle: "A POSTER CAN STILL POINT SOMEWHERE.",
    connectionCopy: "A QR code or short campaign URL can give a poster a next step — tickets, a release, RSVP or sign-up. A scan is a countable signal. It does not prove that every ticket sold came from the poster.",
    connectionPoints: ["QR code or short URL", "Ticket destination", "Release or content destination", "RSVP or landing page", "Mailing list sign-up, where it fits"],
    secondaryTitle: "PERMITTED PLACES ONLY.",
    secondaryCopy: [
      "Poster distribution here means posters displayed where they are allowed to be — shops, music stores and other suitable locations agreed on the brief. It is not unauthorised flyposting.",
      "Placement depends on each location agreeing to display the poster. Rules on advertising and fly-posting vary by area; this page describes the service and is not legal advice.",
    ],
    assuranceTitle: "RIGHT PLACE. RIGHT MESSAGE. RIGHT MOMENT.",
    assuranceCopy: "We scope placements after understanding the campaign, the audience, the materials and the practical area across London and Kent.",
    related: [
      ["Flyer & leaflet distribution", "/services/grassroots/flyer-distribution"],
      ["Flyer distribution in Kent", "/services/grassroots/flyer-distribution/kent"],
      ["Flyer vs poster distribution", "/guides/flyer-vs-poster-distribution"],
      ["Plan a flyer or poster campaign", "/guides/how-to-plan-a-flyer-poster-distribution-campaign"],
    ],
    areaServed: "London and Kent",
    distributionHero: true,
    questionsTitle: "Questions about poster distribution?",
    questionsIntro: "Short answers. The guides cover the choice between posters and flyers in more detail.",
    questions: [
      {
        question: "Where do you put posters?",
        answer: "In shops, music stores and other suitable locations across London and Kent, agreed for each brief around the audience and the date. There is no published list of sites and no exclusive network — the locations follow the campaign.",
      },
      {
        question: "Is poster distribution the same as flyposting?",
        answer: "No. Posters go where a location has agreed to display them. Unauthorised flyposting is not part of this service.",
      },
      {
        question: "Should I use posters or flyers?",
        answer: "A poster suits a place the audience keeps returning to, with a message short enough to read in passing. A flyer suits a moment when people gather, like a queue or a show night. Many live campaigns use both at different points.",
        link: ["Flyer vs poster distribution", "/guides/flyer-vs-poster-distribution"],
      },
    ],
  },
  festivalMarketing: {
    name: "Festival Marketing",
    seoTitle: "Festival Marketing Agency | Ticket & Audience Growth | Rolodex Rebels",
    description: "Festival marketing that connects positioning, PR, digital discovery, grassroots activity, ticket sales and long-term audience growth.",
    path: "/services/festival-marketing",
    eyebrow: "Sell The Show / Festival Marketing",
    title: "BUILD THE CROWD BEFORE THE GATES OPEN.",
    intro: "Festival marketing that connects audience strategy, PR, digital discovery, grassroots activity, ticket sales and long-term audience growth.",
    heroCta: "Market my festival",
    breadcrumbs: [...baseBreadcrumbs, { name: "Sell The Show", path: "/services/sell-the-show" }, { name: "Festival Marketing", path: "/services/festival-marketing" }],
    problemEyebrow: "More than a media plan",
    problemTitle: "THE CAMPAIGN SHOULD CHANGE WHEN THE SALES PICTURE CHANGES.",
    problemCopy: [
      "A first line-up announcement, on-sale, mid-campaign plateau and final two-week push are different problems. They should not all get the same media plan.",
      "Rolodex Rebels can connect audience strategy, PR, content, search, paid and organic digital, email, grassroots, guests and ticket activity around the sales position and the moment. The right mix depends on the festival, audience, timetable and available evidence.",
    ],
    outcome: "A festival campaign that moves with the ticket picture and leaves an audience you can stay in touch with after the gates close.",
    serves: "Independent festivals, promoters and live teams that need campaign strategy, specialist delivery or extra growth support.",
    journeyTitle: "FROM POSITIONING TO THE NEXT EVENT.",
    journeyIntro: "Each stage has a different job — and each should make the next one stronger.",
    journey: ["Position", "Announce", "On sale", "Build", "Accelerate", "Final push", "Experience", "Retain", "Grow"],
    capabilities: [
      ["Positioning & campaign strategy", "Clarify the festival proposition, audience priorities, commercial goal and role of each campaign stage."],
      ["Announcement & on-sale", "Give line-up, launch and ticket moments the right story, destinations, content and media support."],
      ["PR, content & discovery", "Connect publicity, organic content, search and audience communication around what people need to know and do."],
      ["Paid digital & ticket pages", "Use paid activity and landing pages to support a defined ticket action, with the response guiding the next move."],
      ["Grassroots promotion", "Put the festival into relevant physical places through flyer and poster distribution and local activity where it adds value."],
      ["Guests & industry", "Connect invitations, RSVP, reminders and follow-up to the wider campaign and live experience."],
      ["Audience growth", "Give people a reason to stay in touch before and after the festival."],
      ["See what's working", "Use available audience, channel, creative, landing-page and ticket signals to decide what the campaign needs next."],
      ["Partnership thinking", "Consider relevant brand, sponsorship or cultural collaboration opportunities where they fit the festival and audience."],
    ],
    connectionEyebrow: "Ticket intelligence",
    connectionTitle: "SELL MORE TICKETS IS AN OUTCOME. NOT A CHANNEL STRATEGY.",
    connectionCopy: "Where the data is available, ticket sales behind plan does not automatically mean ‘spend more’. The audience may be wrong, the creative may have gone flat, the story may need another moment, or the ticket path may be creating friction. The answer could be new creative, a different audience, PR, local promotion, retargeting, clearer communication, a ticket-page improvement or a timing change.",
    connectionPoints: ["Sales pace and time to event", "Audience and geography", "Channel and creative response", "Ticket and landing-page response", "Returning audiences"],
    secondaryTitle: "DON'T START FROM ZERO NEXT YEAR.",
    secondaryCopy: [
      "A festival can turn discovery into attendance, a mailing list and a stronger starting point for the next event. Sign-up must always be clear, consensual and genuinely useful to the audience.",
      "That can connect to the festival website, ticket paths, campaign pages, line-up and programme content, visitor information, landing pages and post-event communication. Rolodex Rebels' wider digital capability supports festivals, events, venues and promoters — not only artist websites.",
    ],
    assuranceTitle: "ONE FESTIVAL. A CAMPAIGN THAT CHANGES WITH THE MOMENT.",
    assuranceCopy: "Not every festival needs every capability. We build the mix around the proposition, sales position, audience, internal team and budget.",
    related: [["Explore Sell The Show", "/services/sell-the-show"], ["Event & Festival Websites", "/services/event-festival-websites"], ["Leaflet & flyer distribution", "/services/grassroots/flyer-distribution"], ["For promoters, venues & festivals", "/who-we-help/promoters-venues-festivals"]],
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
      "Social platforms and streaming services are essential, but they are rented space. An artist website is where the story, releases, live dates, press, fan sign-up and campaign destinations can live together on terms the artist controls.",
      "We start with the audience and the job the site needs to do. That could mean helping new listeners understand the artist, giving media a useful press destination, moving fans towards live dates or giving people a mailing list so they can stay in touch.",
    ],
    outcome: "An owned artist destination that supports discovery, releases, live activity, fan relationships and future campaigns.",
    serves: "Solo artists, bands, emerging projects and established teams that need a focused digital home rather than another disconnected profile.",
    journeyTitle: "FROM DISCOVERY TO THE NEXT CAMPAIGN.",
    journeyIntro: "Build it once as an artist home. Keep using it for every release, tour date and campaign that follows.",
    journey: ["Discovery", "Artist", "Music", "Live", "Fan relationship", "Next campaign"],
    capabilities: [
      ["Identity & story", "Create a clear digital expression of who the artist is and why the music matters."],
      ["Releases, music & video", "Give current and catalogue work useful context with clear ways to listen and watch."],
      ["Live dates & tickets", "Make upcoming shows easy to find and connect fans to the right ticket destination."],
      ["EPK & press", "Give media and industry contacts a focused place to find approved information and assets."],
      ["Fan capture & mailing list", "Give listeners a clear way to join the mailing list and stay in touch beyond the first visit."],
      ["Content & campaigns", "Support news, editorial content, release pages, tour moments and focused campaign landing pages."],
      ["Merch & partner links", "Connect to suitable merchandise, commerce or partner destinations where the project requires it."],
      ["Search & measurement", "Build clear technical foundations and useful measurement around discovery and audience action."],
    ],
    connectionEyebrow: "Part of the campaign",
    connectionTitle: "MAKE THE SITE PART OF THE CAMPAIGN.",
    connectionCopy: "The artist website can support releases, PR, tour activity, fan communication, sign-up and focused landing pages. Instead of rebuilding everything for every announcement, the next campaign already has a home.",
    connectionPoints: ["Release and PR destinations", "Live dates and ticket links", "Fan sign-up and communication", "Campaign landing pages", "Search discovery and learning"],
    secondaryTitle: "BEYOND ARTIST WEBSITES.",
    secondaryCopy: [
      "Artist Website Design is one focused entry point into Rolodex Rebels' broader Digital & Creative capability.",
      "We can also support websites and digital experiences for events, festivals, promoters, venues and campaigns, including landing pages and microsites. Where useful, we can build it, run it and improve it with you. Hosting, maintenance and ongoing support can be included where required; ongoing support is available, not compulsory.",
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
  const pathId = data.path.slice(1).replaceAll("/", "-");
  const journeyId = `${pathId}-journey`;
  const questionsId = data.path === "/services/music-pr" ? "music-pr-questions" : `${pathId}-questions`;

  return (
    <InternalPage
      eyebrow={data.eyebrow}
      title={<>{data.title}</>}
      intro={data.intro}
      heroCta={{ label: data.heroCta, href: "/start-a-project" }}
      heroMedia={data.distributionHero ? <DistributionHeroImage /> : undefined}
      breadcrumbs={data.breadcrumbs}
    >
      <JsonLd data={serviceJsonLd({ name: data.name, description: data.description, path: data.path, areaServed: data.areaServed })} />
      {data.questions && <JsonLd data={faqJsonLd(data.questions)} />}

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

      {data.questions && (
        <section className="service-questions" aria-labelledby={questionsId}>
          <h2 id={questionsId}>{data.questionsTitle ?? "Questions about music PR?"}</h2>
          <p className="service-questions-intro">{data.questionsIntro ?? "Short answers. The longer versions live in the guides, where a campaign decision needs more than a paragraph."}</p>
          {data.questions.map((item) => (
            <article className="service-question" key={item.question}>
              <h3>{item.question}</h3>
              <div>
                <p>{item.answer}</p>
                {item.link && <Link href={item.link[1]}>{item.link[0]} <Arrow /></Link>}
              </div>
            </article>
          ))}
        </section>
      )}

      {data.path === "/services/music-pr" && (
        <nav className="related-links" aria-label="Music PR guides">
          <h2>READ THE GUIDES.</h2>
          {guidePages.map((guide) => <Link href={guide.path} key={guide.path}>{guide.navLabel} <Arrow /></Link>)}
        </nav>
      )}

      <nav className="related-links" aria-label={`Related to ${data.name}`}>
        <h2>KEEP BUILDING THE CAMPAIGN.</h2>
        {data.related.map(([label, href]) => <Link href={href} key={href}>{label} <Arrow /></Link>)}
      </nav>
      <Link className="back-link" href="/services">← Back to all services</Link>
    </InternalPage>
  );
}
