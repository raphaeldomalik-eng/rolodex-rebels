import type { Metadata } from "next";
import Link from "next/link";
import { InternalPage, Arrow, DistributionHeroImage } from "../../../../internal-page";
import { JsonLd } from "../../../../json-ld";
import { pageMetadata, serviceJsonLd } from "../../../../seo";

const path = "/services/grassroots/flyer-distribution/kent";
const description = "Hand-to-hand flyer and leaflet distribution in Kent for venues, events and local campaigns, planned around a local catchment, a date and one clear next step.";

export const metadata: Metadata = pageMetadata({
  title: "Flyer & Leaflet Distribution Kent | Rolodex Rebels",
  description,
  path,
});

const briefQuestions = [
  ["Who needs to see it?", "Regulars at one venue, people in a town centre on a particular evening, a festival or event audience, families near an attraction. Name the people before naming the places."],
  ["Where will they be?", "A catchment around the venue, event or moment — agreed on the brief. Being in the right few places at the right time beats being spread thinly across the county."],
  ["When does it have to land?", "Before the on-sale, in the week of the show, on the night itself. The date usually decides more about the plan than the quantity does."],
  ["What will someone read in three seconds?", "The format and the message: what it is, when, where, and the one thing to do next. Anything else belongs on the page the flyer points to."],
  ["How many, over how many sessions?", "Quantity comes last, once the audience, place, timing and message are clear. It follows the plan rather than leading it."],
  ["What should happen next, and how will we know?", "A ticket page, an RSVP, a sign-up or a website. A QR code or short URL gives a countable signal. It does not prove every sale came from the flyer."],
] as const;

const contexts = [
  ["Venues & live shows", "A specific date to sell, a regular crowd to reach, or a programme that needs more people to know about it."],
  ["Events & festivals", "Awareness in the surrounding area before the event, and a clear route to tickets or information."],
  ["Pubs & hospitality", "A live night, a launch or a seasonal programme that depends on local people turning up."],
  ["Theatres & attractions", "A show, season or event where the audience is local and the date matters."],
  ["Promoters", "One-off shows and series that need people in the area to hear about them in time."],
  ["Local businesses", "An opening, an offer or an event where a person-to-person moment makes sense."],
] as const;

export default function KentFlyerDistributionPage() {
  return (
    <InternalPage
      eyebrow="Grassroots / Flyer Distribution / Kent"
      title={<>FLYER AND LEAFLET DISTRIBUTION ACROSS KENT.</>}
      intro="Hand-to-hand flyer and leaflet distribution in Kent, planned around who you need to reach, where they will be, and what you need them to do next."
      heroCta={{ label: "Plan a Kent campaign", href: "/start-a-project" }}
      heroMedia={<DistributionHeroImage />}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Grassroots", path: "/services/grassroots" },
        { name: "Flyer & Leaflet Distribution", path: "/services/grassroots/flyer-distribution" },
        { name: "Kent", path },
      ]}
    >
      <JsonLd data={serviceJsonLd({ name: "Flyer and Leaflet Distribution in Kent", description, path, areaServed: "Kent" })} />

      <section className="inner-split commercial-intro">
        <div><p className="eyebrow pink">What a Kent brief looks like</p><h2>A CATCHMENT AND A DATE. NOT THE WHOLE COUNTY.</h2></div>
        <div className="body-copy">
          <p>Most Kent flyer campaigns are local. There is a venue, a show, an opening or a town-centre moment, and a date it has to land before. The useful question is who lives, drinks, shops or queues near that moment — not how to put paper into every corner of the county.</p>
          <p>That is why a Kent brief usually centres on one town or local catchment rather than the county as a whole. The exact places are agreed on the brief, once we know the audience, the date and what the flyer is asking people to do. The plan stays tied to the campaign rather than to a map.</p>
          <p>The method is hand-to-hand: flyers and leaflets given to people outside venues, in queues, in nightlife areas, on high streets and around shows. It is not a letterbox drop and it is not a county-wide blanket.</p>
          <p>The main <Link href="/services/grassroots/flyer-distribution">flyer and leaflet distribution</Link> page defines the service across London and Kent. This page is about how a Kent brief is usually shaped.</p>
          <Link className="text-link" href="/start-a-project">Plan a Kent campaign <Arrow /></Link>
        </div>
      </section>

      <section className="inner-split commercial-secondary">
        <div><p className="eyebrow pink">Kent&apos;s principal catchments</p><h2>FLYER DISTRIBUTION ACROSS KENT&apos;S MAIN TOWNS.</h2></div>
        <div className="body-copy">
          <p>Kent is not one audience. A campaign is planned around an individual town or local catchment and a date, rather than trying to reach the whole county in one drop. These are the principal places a Kent flyer or leaflet brief can centre on.</p>
          <p>In mid and west Kent, that might be an event audience in Maidstone, a show night in Tunbridge Wells, or a town-centre launch in Tonbridge or Sevenoaks. In north Kent, it could be Dartford or Gravesend ahead of a local date, or Medway, with Rochester at its historic centre.</p>
          <p>In east Kent and on the coast, a brief might centre on Canterbury, Ashford or Folkestone, or on Margate and the wider Thanet catchment when a seaside venue or event needs people to turn up.</p>
          <p>Naming a town does not mean every street in it. The exact places, times and sessions are agreed on the brief, around where the audience will actually be.</p>
        </div>
      </section>

      <section className="service-questions" aria-labelledby="kent-coverage-question">
        <article className="service-question">
          <h3 id="kent-coverage-question">Which parts of Kent do you cover?</h3>
          <div><p>Campaigns are planned around Kent&apos;s principal towns and catchments: Maidstone, Canterbury, Tunbridge Wells, Tonbridge, Sevenoaks, Ashford, Dartford, Gravesend, Folkestone, Margate and Thanet, and Medway. Each brief is shaped around one of these places, or a small group of them, and the date it has to land. It is not a promise to cover every street in a town, or the whole county at once.</p></div>
        </article>
      </section>

      <section className="service-questions" aria-labelledby="kent-brief-questions">
        <h2 id="kent-brief-questions">Six questions before any flyers.</h2>
        <p className="service-questions-intro">Every Kent brief gets answered in this order. Quantity is near the end on purpose.</p>
        {briefQuestions.map(([question, answer]) => (
          <article className="service-question" key={question}>
            <h3>{question}</h3>
            <div><p>{answer}</p></div>
          </article>
        ))}
      </section>

      <section className="inner-split commercial-secondary">
        <div><p className="eyebrow pink">Where the plan can fit</p><h2>KENT CAMPAIGNS WITH A LOCAL AUDIENCE.</h2></div>
        <div className="body-copy">
          <p>These are the kinds of briefs a Kent flyer plan can fit. They are campaign contexts, not a client list. What they share is a local audience and a moment worth being told about in person.</p>
        </div>
      </section>
      <section className="feature-grid commercial-feature-grid" aria-label="Kent flyer campaign contexts">
        {contexts.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}
      </section>

      <section className="inner-split commercial-secondary">
        <div><p className="eyebrow pink">After the flyer</p><h2>WHAT HAPPENS AFTER SOMEONE SEES THE FLYER.</h2></div>
        <div className="body-copy">
          <p>A flyer is a short moment. What it points to decides whether that moment turns into anything. A Kent flyer campaign can stand alone; these are the places it most often connects to other work.</p>
          <p>If the flyer sends people to buy a ticket, the ticket page has to work on a phone in the street. That on-sale and ticket work sits with <Link href="/services/sell-the-show">Sell The Show</Link>.</p>
          <p>If it sends people to a venue, event or artist website, the date, the place and the next step should be on the first screen. That is <Link href="/services/digital-creative">Digital &amp; Creative</Link> work.</p>
          <p>If people search the name after taking a flyer, they should find it. That is <Link href="/services/get-seen">search and digital visibility</Link>.</p>
          <p>If the aim is to reach the same people again next time, a sign-up on the landing page does more than the flyer can on its own. That is <Link href="/services/build-your-audience">audience building</Link>.</p>
        </div>
      </section>

      <aside className="commercial-assurance">
        <p className="eyebrow">Campaign principle</p>
        <h2>LOCAL AUDIENCE. AGREED PLACES. ONE CLEAR ACTION.</h2>
        <p>One town or catchment at a time, not a county-wide promise. The plan follows the audience, the date and what the flyer needs people to do.</p>
      </aside>

      <nav className="related-links" aria-label="Related to flyer distribution in Kent">
        <h2>KEEP BUILDING THE CAMPAIGN.</h2>
        <Link href="/services/grassroots/flyer-distribution">Flyer &amp; leaflet distribution <Arrow /></Link>
        <Link href="/services/grassroots/poster-distribution">Poster distribution <Arrow /></Link>
        <Link href="/guides/how-much-does-flyer-distribution-cost">What flyer distribution costs <Arrow /></Link>
        <Link href="/guides/how-to-plan-a-flyer-poster-distribution-campaign">Plan a flyer or poster campaign <Arrow /></Link>
      </nav>
      <Link className="back-link" href="/services/grassroots">← Back to grassroots</Link>
    </InternalPage>
  );
}
