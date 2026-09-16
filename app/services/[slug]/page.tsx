import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ClientProof } from "../../client-proof";
import { InternalPage } from "../../internal-page";
import { JsonLd } from "../../json-ld";
import { pageMetadata, serviceJsonLd } from "../../seo";

const serviceData = {
  "get-heard": {
    name: "Get Heard",
    seoTitle: "Music PR & Release Marketing | Rolodex Rebels",
    title: "MUSIC PR, RELEASES & COMMUNICATIONS.",
    description: "Music PR and release marketing for artists, labels and managers — story, press materials, media outreach and follow-up.",
    intro: "Need PR for a release, artist or live campaign? We help shape the story, prepare the material, find the right media and handle the outreach.",
    meaningTitle: "MAKE THE STORY WORTH CARRYING.",
    outcome: "A clear story, focused media outreach and follow-up that supports the release or live campaign.",
    answer: "PR is not a mailing list. The job is to give the right editor, journalist, broadcaster or creator a genuine reason to care about this artist, this release and this moment. We shape the story, prepare the materials, find the right media and handle the outreach. Coverage is never guaranteed.",
    modelTitle: "FROM STORY TO FOLLOW-UP.",
    modelIntro: "A feature, interview or radio play should support the release plan rather than sit apart from it.",
    model: ["Story", "Materials", "Media", "Outreach", "Follow up", "Learn"],
    items: [
      ["PR Campaigns", "PR for artists, releases and live campaigns — from the story and press materials to media outreach and follow-up."],
      ["Release Marketing", "Shape the angle, targets and timing around a release people can understand."],
      ["Story & messaging", "Build a clear story that holds together across media, social, web and fan communication."],
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
    description: "Digital music marketing through SEO, social media, paid campaigns and online promotion that help the right people find you.",
    intro: "SEO, social media, paid campaigns and online promotion that help the right people find you.",
    meaningTitle: "BEING VISIBLE TO THE WRONG PEOPLE IS JUST NOISE.",
    outcome: "More of the right people finding the artist, release or event — with a clear route to listen, sign up, buy a ticket or enquire.",
    answer: "SEO, social media campaigns, paid ads and online promotion can all create visibility. The question is whether the right person notices — and whether there is a clear next step when they do. We choose the channels around how that audience is likely to find the campaign, not around an impressions target.",
    modelTitle: "HELP THE RIGHT PEOPLE FIND YOU.",
    modelIntro: "A search result, social post, advert or flyer earns its place by helping the right person find the campaign and know what to do next.",
    model: ["Audience", "Find", "Relevance", "Next step", "Response", "Learn"],
    items: [
      ["SEO & Search Discovery", "Help people find your music, event or business online through better websites, content and search setup."],
      ["Social Media Campaigns", "Paid and organic social campaigns built around who you want to reach and what you want them to do."],
      ["Paid Media", "Paid ads aligned to who you want to reach, the creative and what the campaign needs to achieve."],
      ["Creators & Digital Reach", "Work with relevant voices and channels where they can help the right people find you."],
    ],
    offers: "Rebel Launch · Search & Discovery Review",
    related: [["Music marketing for labels and managers", "/who-we-help/labels-managers"], ["Music PR and release marketing", "/services/get-heard"], ["Digital and creative services", "/services/digital-creative"]],
  },
  "build-your-audience": {
    name: "Build Your Audience",
    seoTitle: "Music Audience Growth & Fan Marketing | Rolodex Rebels",
    title: "STOP STARTING FROM ZERO.",
    description: "Music audience growth through fan sign-up, email, mailing lists and staying in touch between campaigns.",
    intro: "You worked hard to get someone to listen, follow, sign up or buy a ticket. Give them a reason to stay in touch so you don't have to find them from scratch next time.",
    meaningTitle: "YOU EARNED THE ATTENTION. KEEP THE RELATIONSHIP.",
    outcome: "An audience you can stay in touch with and bring back for the next release, show or announcement.",
    answer: "A release or show can get attention and still leave the next campaign starting cold. Give people a reason to sign up, learn who they are, stay in touch and bring them back when the next release or date arrives.",
    modelTitle: "STAY IN TOUCH.",
    modelIntro: "The goal is simple: get people to sign up, stay in touch and give them a reason to come back.",
    model: ["Get them to sign up", "Learn who they are", "Stay in touch", "Bring them back", "See what worked"],
    items: [
      ["Get them to sign up", "Give fans a clear reason to join the mailing list, RSVP or stay in touch another way."],
      ["Learn who they are", "See what the audience, location and campaign data that is genuinely available can tell us."],
      ["Stay in touch", "Use email and other permitted channels to speak to people about what matters to them."],
      ["Bring them back", "Reach that audience again when the next release, tour date or campaign arrives."],
      ["See what worked", "Carry what worked — and what did not — into the next campaign."],
    ],
    offers: "Rebel Artist Growth · Audience Growth Programme",
    related: [["Music marketing for artists", "/who-we-help/artists"], ["Ticket and tour marketing", "/services/sell-the-show"], ["Search and digital visibility", "/services/get-seen"]],
  },
  "sell-the-show": {
    name: "Sell The Show",
    seoTitle: "Concert, Tour & Ticket Marketing | Rolodex Rebels",
    title: "BUILD DEMAND. SELL TICKETS. GROW THE NEXT CROWD.",
    description: "Concert, tour and festival marketing that helps sell tickets from announcement and on-sale through to the final push.",
    intro: "Ticket campaigns for gigs, tours and festivals — from announcement and on-sale to the final push.",
    meaningTitle: "FIND THE PROBLEM BEFORE YOU BUY MORE REACH.",
    outcome: "A live campaign that moves from announcement to on-sale and final push with the message, audience and activity matched to the ticket picture.",
    answer: "Sell more tickets is an outcome. It is not a channel plan. If sales slow, more spend is not automatically the answer. Is awareness too low? Has the creative gone flat? Are we reaching the wrong audience? Did the campaign peak too early? Is the ticket page losing people? Where the evidence is available, we find the problem first. The fix might be new creative, a different audience, a PR moment, flyers and posters, retargeting, clearer communication, a ticket-page improvement or a better-timed final push.",
    modelTitle: "TURN INTEREST INTO TICKETS.",
    modelIntro: "Announcement, on-sale, a quiet middle period and the final push are different jobs. The plan should move with them.",
    model: ["Build interest", "Get people to the ticket page", "Sell", "Bring them back"],
    items: [
      ["Ticket marketing", "Change the audience, creative, timing, communication or ticket page when the sales picture shows what needs attention."],
      ["Tour marketing", "Connect local demand, artist audiences, content, search and grassroots activity across the dates that matter."],
      ["Festival marketing", "Build demand around the announcement, programme, audience, place and ticket pace."],
      ["Guest & industry campaigns", "Plan invitations, RSVP, reminders and follow-up as part of the campaign — not an isolated admin task."],
    ],
    offers: "Rebel Tour · Promoter Growth · Festival Growth · Guest & Industry Campaigns",
    deeper: [["Explore Festival Marketing", "/services/festival-marketing"]],
    related: [["Marketing for promoters, venues and festivals", "/who-we-help/promoters-venues-festivals"], ["Grassroots music promotion", "/services/grassroots"], ["Build your audience", "/services/build-your-audience"]],
  },
  grassroots: {
    name: "Grassroots",
    seoTitle: "Grassroots Music Promotion | Rolodex Rebels",
    title: "GRASSROOTS MUSIC PROMOTION. LOCAL. LOUD. EFFECTIVE.",
    description: "Grassroots music promotion through leaflet and flyer distribution, poster distribution, campaign print and local promotion.",
    intro: "Leaflets, flyers and posters — planned around where your audience actually is.",
    meaningTitle: "START WITH WHO, WHERE AND WHEN.",
    outcome: "Leaflets, flyers and posters in the venues, queues, nightlife areas and streets where the message belongs.",
    answer: "Tell us what you're promoting, who you're trying to reach, where and when. We'll plan the locations, materials and timing. A QR code or campaign URL is optional — the audience and place come first.",
    modelTitle: "PLAN FOR THE PLACE AND MOMENT.",
    modelIntro: "The leaflet, flyer or poster should meet the audience where the campaign makes sense — not simply where the footfall is highest.",
    model: ["Audience", "Place", "Moment", "Promotion", "Optional next step", "Learn"],
    items: [
      ["Leaflet & Flyer Distribution", "Hand-to-hand leaflet and flyer distribution planned around venues, queues, nightlife areas and dates that fit the audience."],
      ["Poster Distribution", "Targeted poster campaigns in London. Posters are placed in shops, music stores and anywhere we can get you in front of the right audience. Leaflet distribution can also be used to enhance your campaign."],
      ["Print & Campaign Materials", "Flyers, leaflets, posters and event materials coordinated as part of the campaign — production and supply, not a print shop."],
      ["Local Promotion", "Local promotion connected to launches, shows, openings and cultural moments."],
    ],
    offers: "Grassroots Promotion",
    deeper: [["Explore Leaflet & Flyer Distribution", "/services/grassroots/flyer-distribution"]],
    related: [["Ticket and tour marketing", "/services/sell-the-show"], ["Marketing for promoters, venues and festivals", "/who-we-help/promoters-venues-festivals"], ["Digital music promotion", "/services/get-seen"]],
  },
  "digital-creative": {
    name: "Digital & Creative",
    seoTitle: "Music Websites, Digital & Creative Services | Rolodex Rebels",
    title: "WEBSITES AND DIGITAL CAMPAIGNS THAT DO A JOB.",
    description: "Websites, campaign sites, landing pages, search foundations, content and creative for artists, events, festivals, venues and promoters.",
    intro: "Need a website, campaign page, ticket landing page or somewhere for fans to sign up? We build the digital pieces your campaign actually needs.",
    meaningTitle: "BUILD THE THING THE AUDIENCE NEEDS.",
    outcome: "A clear place for people to find the artist or event, get the right information and move towards tickets, listening, sign-up or enquiry.",
    answer: "Sometimes the answer is a new website. Sometimes it is a campaign page, a better ticket page or a clearer place for fans to sign up. We start with what people need to do, then build the right thing. We can build it, run it and improve it with you. Need us to stay involved after launch? Ongoing hosting, updates and support can be included as part of the website service.",
    modelTitle: "BUILD A USEFUL DIGITAL HOME.",
    modelIntro: "Plan the pages, content and next steps around the person arriving — and the job they came to do.",
    model: ["Audience", "Need", "Pages", "Content", "Action", "Stay in touch"],
    items: [
      ["Website Design & Digital Builds", "Websites and campaign pages for artists, events, festivals, venues and promoters."],
      ["Artist Websites", "Artist and band sites for music, releases, live dates, press and sign-up."],
      ["Event & Festival Websites", "Websites for events, festivals, venues and promoters — tickets, programme content, visitor information and campaign pages."],
      ["Campaign Sites", "Focused destinations for a release, on-sale, tour, RSVP or ticket push with one clear job."],
      ["Landing Pages", "Straightforward pages that give people a next step: listen, sign up, enquire or buy a ticket."],
      ["SEO & Search Foundations", "Site structure, metadata and content that help people find the artist or event online."],
      ["Content & Creative", "Useful structures and campaign assets for artists, events, programmes, releases and visitor information."],
      ["Hosting, Maintenance & Support", "Hosting, maintenance and ongoing support can be included where required — as part of the website service, not a separate hosting offer."],
    ],
    offers: "Website Design · Campaign Sites · Search Foundations · Hosting & Support",
    deeper: [["Explore Artist Website Design", "/services/artist-website-design"], ["Explore Event & Festival Websites", "/services/event-festival-websites"]],
    related: [["Music marketing for artists", "/who-we-help/artists"], ["Search and digital visibility", "/services/get-seen"], ["Build a music audience", "/services/build-your-audience"]],
  },
} as const;

type ServiceSlug = keyof typeof serviceData;

function itemId(title: string) {
  return title.toLowerCase().replace(/&/g, " ").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

const hashAliases: Record<string, string> = {
  "poster-distribution": "poster-campaigns",
};

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
  const deeper = "deeper" in service ? service.deeper : [];

  return (
    <InternalPage
      eyebrow={`Services / ${service.name}`}
      title={<>{service.title}</>}
      intro={service.intro}
      breadcrumbs={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: service.name, path }]}
    >
      <JsonLd data={serviceJsonLd({ name: service.name, description: service.description, path })} />
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
        {service.items.map(([title, copy], index) => {
          const id = itemId(title);
          return (
            <article key={title} id={id}>
              {hashAliases[id] ? <span id={hashAliases[id]} className="hash-alias" aria-hidden="true" /> : null}
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          );
        })}
      </section>
      {slug === "grassroots" && <ClientProof />}
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
