import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, InternalPage } from "../../internal-page";
import { JsonLd } from "../../json-ld";
import { pageMetadata, serviceJsonLd } from "../../seo";

const path = "/services/event-festival-websites";
const title = "Event & Festival Website Design | Rolodex Rebels";
const description = "Event and festival websites built around discovery, tickets, programme content, visitor information, audience journeys and ongoing campaign growth.";

export const metadata: Metadata = pageMetadata({ title, description, path });

const journey = ["Audience", "Goals", "Site plan", "Content", "Discovery", "Ticket journey", "Visitor experience", "Audience relationship", "Publish", "Improve"];

const lifecycle = [
  ["Before the event", ["Announcement and on-sale", "Tickets, line-up and programme", "Artist and campaign pages", "Travel and practical information", "Search visibility and audience capture"]],
  ["During the event", ["Mobile visitor information", "Programme and schedule", "Directions and venue details", "Practical updates and useful content", "Confirmed accessibility information"]],
  ["After the event", ["Galleries and retained content", "Next-event discovery", "Ongoing search value", "Permission-based communication", "A stronger next campaign"]],
] as const;

const contentCapabilities = ["Event overview", "Tickets", "Programme", "Schedule", "Line-up", "Artist profiles", "Venue", "Travel", "Accommodation", "Food & drink", "Vendors & exhibitors", "Accessibility", "FAQs", "Sponsors & partners", "Announcements"];

const focusedCampaigns = ["Announcement", "On-sale", "Tour", "Release", "RSVP", "Competition", "Sponsor activation", "Ticket push"];

const managedWork = ["Content and line-up updates", "Programme and visitor information", "New campaign pages", "Ticket links and audience journeys", "Search and conversion improvements", "Post-event transition and next-campaign preparation"];

export default function EventFestivalWebsitesPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Digital & Creative", path: "/services/digital-creative" },
    { name: "Event & Festival Websites", path },
  ];

  return (
    <InternalPage
      className="event-websites-page"
      eyebrow="Digital & Creative / Event & Festival Websites"
      title={<>BUILD THE DIGITAL HOME YOUR EVENT ACTUALLY NEEDS.</>}
      intro="Websites for music events, festivals, venues and live campaigns — built around what audiences need to discover, understand and do."
      heroCta={{ label: "Build my event site", href: "/start-a-project" }}
      breadcrumbs={breadcrumbs}
    >
      <JsonLd data={serviceJsonLd({ name: "Event & Festival Website Design", description, path })} />

      <section className="inner-split commercial-intro">
        <div><p className="eyebrow pink">Audience first</p><h2>DON&apos;T START WITH THE TEMPLATE. START WITH THE AUDIENCE.</h2></div>
        <div className="body-copy">
          <p>Who is coming? What do they need to know? What should they do next? What changes as the campaign moves from announcement to on-sale, event day and beyond?</p>
          <p>We plan the site around those questions so it can carry the campaign from first announcement to event day — and give people a reason to come back afterwards.</p>
          <p><strong>The outcome:</strong><br />A clear digital home for discovery, tickets, programme content, practical visitor information and permission-based audience sign-up.</p>
          <Link className="text-link" href="/start-a-project">Build my event site <Arrow /></Link>
        </div>
      </section>

      <section className="journey-panel event-journey" aria-labelledby="event-site-journey">
        <div><p className="eyebrow light">How the work moves</p><h2 id="event-site-journey">FROM AUDIENCE TO IMPROVEMENT.</h2><p>The site plan follows the campaign, the content and the action the audience needs to take.</p></div>
        <ol className="journey-track">
          {journey.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong></li>)}
        </ol>
      </section>

      <section className="event-lifecycle" aria-labelledby="event-lifecycle-title">
        <div className="event-section-heading"><p className="eyebrow pink">A live campaign needs a live digital home</p><h2 id="event-lifecycle-title">BEFORE. DURING. AFTER.</h2><p>What someone needs six months out is different from what they need at the gate. Line-up and tickets matter early; travel, timings, access and practical information become critical as event day approaches.</p></div>
        <div className="event-lifecycle-grid">
          {lifecycle.map(([stage, items], index) => <article key={stage}><span>{String(index + 1).padStart(2, "0")}</span><h3>{stage}</h3><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}
        </div>
      </section>

      <section className="event-content-map" aria-labelledby="event-content-title">
        <div><p className="eyebrow light">Content that earns its place</p><h2 id="event-content-title">BUILD THE INFORMATION PEOPLE ACTUALLY NEED.</h2><p>An event or festival site can support the content that fits its audience, scale and operating reality. Not every site needs every section.</p></div>
        <ul>{contentCapabilities.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>

      <section className="event-outcomes" aria-label="Event website outcomes">
        <article><p className="eyebrow pink">Built to sell the event</p><h2>MOVE THE RIGHT PERSON TOWARDS THE RIGHT ACTION.</h2><p>Clear ticket buttons, mobile-first pages and focused campaign destinations reduce the distance between interest and the ticket page. Where available, consent-aware analytics can show which pages and calls to action need attention.</p></article>
        <article><p className="eyebrow pink">Search and discovery</p><h2>MAKE THE EVENT EASIER TO FIND AND UNDERSTAND.</h2><p>We build crawlable page structures, useful metadata, structured information, clear event and artist content and meaningful internal links. These foundations support search and AI-assisted discovery readiness without promising rankings or citations.</p></article>
      </section>

      <section className="event-audience-path" aria-labelledby="event-audience-path-title">
        <div><p className="eyebrow">From website to audience</p><h2 id="event-audience-path-title">DON&apos;T LET THE RELATIONSHIP END AT THE TICKET LINK.</h2><p>Where it fits the campaign, the site can invite people to sign up for line-up news, event updates or what comes next — clearly, consensually and on terms they understand.</p></div>
        <ol>
          {['Discovery', 'Useful experience', 'Action', 'Permission-based relationship', 'Next campaign'].map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span>{step}</li>)}
        </ol>
      </section>

      <section className="event-campaign-sites inner-split">
        <div><p className="eyebrow pink">A focused alternative</p><h2>ONE CAMPAIGN. ONE AUDIENCE. ONE CLEAR JOB.</h2></div>
        <div className="body-copy">
          <p>A full website is not always the answer. Some campaigns need one focused destination built around the announcement, on-sale, release or ticket push.</p>
          <ul className="compact-tag-list">{focusedCampaigns.map((item) => <li key={item}>{item}</li>)}</ul>
          <p>A campaign site can explain the moment, direct the audience and connect the next action without adding unnecessary structure.</p>
        </div>
      </section>

      <section className="managed-digital-panel" aria-labelledby="managed-digital-title">
        <div><p className="eyebrow light">Managed digital growth</p><h2 id="managed-digital-title">BUILD IT. RUN IT. IMPROVE IT.</h2><p>A launch is not always the finish line. Where useful, Rolodex Rebels can keep the digital work moving as the campaign changes. Ongoing support is available, not compulsory.</p></div>
        <ul>{managedWork.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ul>
      </section>

      <aside className="commercial-assurance">
        <p className="eyebrow">Campaign principle</p><h2>THE SITE SHOULD WORK AS HARD AS THE CAMPAIGN.</h2><p>Scope follows the audience, content, actions and event timetable. We recommend only the pages and ongoing support the brief can genuinely use.</p>
      </aside>

      <nav className="related-links" aria-label="Related event and festival services">
        <h2>KEEP BUILDING THE CAMPAIGN.</h2>
        <Link href="/services/festival-marketing">Festival Marketing <Arrow /></Link>
        <Link href="/services/sell-the-show">Sell The Show <Arrow /></Link>
        <Link href="/services/build-your-audience">Build Your Audience <Arrow /></Link>
      </nav>
      <Link className="back-link" href="/services/digital-creative">← Back to Digital &amp; Creative</Link>
    </InternalPage>
  );
}
