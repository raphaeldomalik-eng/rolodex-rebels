import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "./json-ld";
import { pageMetadata, websiteJsonLd } from "./seo";
import { SiteFooter, SiteHeader } from "./site-chrome";
import liveCrowd from "../public/live-crowd.jpg";
import artistStage from "../public/artist-stage.jpg";
import grassrootsFlyering from "../public/grassroots-flyering.jpg";
import rebelsMark from "../public/rolodex-rebels-mark.png";

export const metadata: Metadata = pageMetadata({
  title: "Music Marketing Agency UK | Rolodex Rebels",
  description: "Rolodex Rebels is a UK music marketing agency helping artists, labels, managers, promoters, venues and festivals grow audiences, launch music and sell tickets.",
  path: "/",
});

const meanings = [
  {
    number: "01",
    title: "Get Seen",
    copy: "Put the campaign where the right audience is already looking — in search, feeds, media, venues, queues and streets.",
  },
  {
    number: "02",
    title: "Get Heard",
    copy: "Give journalists, editors, broadcasters, creators and fans a clear reason to care about this artist, release or live moment.",
  },
  {
    number: "03",
    title: "Get Results",
    copy: "Turn attention into streams, sign-ups, ticket action and an audience you can reach when the next campaign lands.",
  },
];

const audiences = [
  ["Artists", "Launch the next release — and build momentum for what comes after.", "/who-we-help/artists"],
  ["Labels & Managers", "Keep PR, paid, content, audience and live specialists moving around the same release plan.", "/who-we-help/labels-managers"],
  ["Promoters, Venues & Festivals", "Build demand, protect ticket pace and turn today’s ticket buyers into a returning audience.", "/who-we-help/promoters-venues-festivals"],
];

const pillars = [
  ["Get Heard", "Music PR, release stories, creator activity, content and fan communications built around the moment.", "/services/get-heard"],
  ["Get Seen", "Search, paid media, social, creators and grassroots exposure aimed at the audience that matters.", "/services/get-seen"],
  ["Build Your Audience", "Fan sign-up, audience insight, email, segmentation and retention between campaign moments.", "/services/build-your-audience"],
  ["Sell The Show", "Announcement, on-sale, ticket campaigns, tour marketing, guests and the final push.", "/services/sell-the-show"],
  ["Grassroots", "Street teams, leaflet drops, poster runs, hand-to-hand flyering, campuses and local activation.", "/services/grassroots"],
  ["Digital & Creative", "Artist, event and campaign websites, landing pages, content, search and creative assets.", "/services/digital-creative"],
];

const smartServices = [
  ["Audience Intelligence", "See which audiences, channels, places and campaign moments are getting a response — then put more effort behind what is working."],
  ["Fan Relationships", "Give fans a reason and permission to stay connected, then bring them back for the next release, date or announcement."],
  ["Search & Discovery", "Make your music, events and digital presence easier to find, understand and act on when people are actively looking."],
  ["Campaign Insight", "Ticket sales slowing? Creative not landing? Plenty of clicks but little action? Use the signals available to find the problem before simply spending more."],
];

const ways = [
  ["Launch My Music", "A joined-up campaign for your next single, EP or album.", "Rebel Launch"],
  ["Build My Audience", "Find the right fans and create relationships you can grow.", "Audience Growth"],
  ["Improve My Digital Presence", "Build the artist, event or campaign site people need to find, understand and act on.", "Digital & Creative"],
  ["Sell More Tickets", "Build demand from announcement to final push and remove friction on the way to the ticket page.", "Sell The Show"],
  ["Guest & Industry Campaigns", "Handle invitations, RSVP, reminders and follow-up professionally.", "Guest Campaigns"],
  ["Activate People On The Ground", "Put street teams, flyers and posters into the places and moments that fit the audience.", "Grassroots"],
];

// Keep the evidence-led Results section recoverable while approved case studies are prepared.
const showResults = false;

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <JsonLd data={websiteJsonLd} />
      <SiteHeader />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-noise" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow light">Full-service music marketing</p>
          <h1 id="hero-title">
            <span>Get seen,</span>
            <span>get heard,</span>
            <span className="pink">get results!</span>
          </h1>
          <p className="hero-intro">
            Music marketing for artists, labels, managers and live music teams who need more than noise.
            PR, digital, audience growth and grassroots execution — from the streets to the screens.
          </p>
          <div className="hero-actions">
            <Link className="button button-pink" href="/start-a-project">Let&apos;s make some noise</Link>
            <Link className="text-link light-link" href="/services">Explore our services <Arrow /></Link>
          </div>
        </div>
        <div className="hero-art">
          <figure className="hero-photo">
            <Image
              src={liveCrowd}
              alt="Crowd facing a brightly lit live music stage"
              fill
              sizes="(max-width: 760px) 62vw, (max-width: 1100px) 42vw, 36vw"
              fetchPriority="high"
              loading="eager"
              placeholder="blur"
            />
            <figcaption>Live music / real connection</figcaption>
          </figure>
          <Image className="hero-mark" src={rebelsMark} alt="" sizes="(max-width: 760px) 27vw, 16vw" />
          <span className="stamp stamp-one">Independent</span>
          <span className="stamp stamp-two">Music first</span>
          <div className="slash slash-one" aria-hidden="true" />
        </div>
        <div className="hero-index" aria-hidden="true">
          <span>01</span><span>London / UK</span><span>Scroll to make noise ↓</span>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div>PR • DIGITAL • AUDIENCE • LIVE • GRASSROOTS • CREATIVE • PR • DIGITAL • AUDIENCE • LIVE • GRASSROOTS • CREATIVE •</div>
      </div>

      <section className="meaning section-pad" aria-labelledby="meaning-title">
        <div className="section-lead">
          <p className="eyebrow">The promise hasn&apos;t changed</p>
          <h2 id="meaning-title">The way we deliver it has.</h2>
          <p>The channels have changed. The job hasn&apos;t: get the right people to notice, care and act. Today that might mean a press story, a search result, a paid campaign, an email, a ticket page or a team outside the right venue — all working towards the same result.</p>
        </div>
        <div className="meaning-grid">
          {meanings.map((item) => (
            <article className="meaning-card" key={item.title}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
        <div className="proof-strip" role="list" aria-label="Why Rolodex Rebels">
          <span role="listitem">Targeted Exposure</span><span role="listitem">Built Around Outcomes</span><span role="listitem">Creative &amp; Reliable</span><span role="listitem">Local. Loud. Effective.</span>
        </div>
      </section>

      <section className="audience section-pad" aria-labelledby="audience-title">
        <div className="audience-photo media-frame">
          <Image src={artistStage} alt="Guitarist performing on a dark stage" fill sizes="(max-width: 760px) 100vw, 38vw" placeholder="blur" />
          <span className="photo-label">Music is the starting point</span>
        </div>
        <div className="audience-copy">
          <p className="eyebrow light">Built for the music industry</p>
          <h2 id="audience-title">You bring the music. We build the momentum.</h2>
          <p className="large-copy">Whether you are launching a release, building an artist, filling a venue or growing a festival, we shape the campaign around the result you need.</p>
          <div className="audience-list">
            {audiences.map(([title, copy, href], index) => (
              <Link href={href} className="audience-row" key={title}>
                <span className="row-number">0{index + 1}</span>
                <span><strong>{title}</strong><small>{copy}</small></span>
                <Arrow />
              </Link>
            ))}
          </div>
          <div className="goal-cloud" aria-label="Choose your goal">
            {[
              "Launch my music", "Build my audience", "Improve my digital presence",
              "Sell more tickets", "Market my tour", "Activate on the ground",
            ].map((goal) => <Link href="/start-a-project" key={goal}>{goal}</Link>)}
          </div>
        </div>
      </section>

      <section className="services section-pad" aria-labelledby="services-title">
        <div className="services-heading">
          <div>
            <p className="eyebrow">What we do</p>
            <h2 id="services-title">One goal. Everything working together.</h2>
          </div>
          <p>Start with what you want to achieve. We&apos;ll build the right mix of strategy, creativity, reach and activation around it.</p>
        </div>
        <div className="pillar-grid">
          {pillars.map(([title, copy, href], index) => (
            <Link className="pillar-card" href={href} key={title}>
              <span className="pillar-number">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <Arrow />
            </Link>
          ))}
        </div>
        <Link className="button button-dark" href="/services">See everything we do</Link>
      </section>

      <section className="streets section-pad" aria-labelledby="streets-title">
        <div className="streets-title-wrap">
          <p className="eyebrow light">Joined-up music marketing</p>
          <h2 id="streets-title">From the streets<br />to the <span>screens.</span></h2>
        </div>
        <div className="streets-body">
          <p className="large-copy">Real momentum rarely comes from one channel.</p>
          <p>A release might need PR and search. A tour date might need paid media, email and a team outside the venue. We make each part serve the same objective — then use what happened to sharpen what comes next.</p>
          <Link className="text-link light-link" href="/why-us">See how we work <Arrow /></Link>
        </div>
        <div className="campaign-flow" role="list" aria-label="Campaign journey">
          {[
            ["Discover", "Be found"], ["Engage", "Give a reason"], ["Capture", "Earn permission"],
            ["Convert", "Create action"], ["Learn", "Find what worked"], ["Grow", "Use it again"],
          ].map(([step, note], index) => (
            <div role="listitem" key={step}><span>0{index + 1}</span><strong>{step}</strong><small>{note}</small></div>
          ))}
        </div>
      </section>

      <section className="grassroots section-pad" aria-labelledby="grassroots-title">
        <div className="grassroots-copy">
          <p className="eyebrow">Built from the ground up</p>
          <h2 id="grassroots-title">Local.<br />Loud.<br /><span>Effective.</span></h2>
          <p className="large-copy">Grassroots is not a legacy service or a bolt-on. It is part of who we are.</p>
          <p>Good grassroots promotion starts before anyone picks up a stack of flyers. We work out who needs to see the message, where they will actually be and when it will matter — outside relevant venues, in queues, on campuses and across the local areas around a show.</p>
          <div className="service-tags">
            {[
              "Street teams", "Leaflet drops", "Poster runs", "Hand-to-hand flyering", "Campus campaigns", "Local activation",
            ].map((item) => <span key={item}>{item}</span>)}
          </div>
          <div className="button-row">
            <Link className="button button-dark" href="/start-a-project">Plan a grassroots campaign</Link>
            <Link className="text-link" href="/services/grassroots">Explore grassroots <Arrow /></Link>
          </div>
        </div>
        <figure className="grassroots-photo media-frame">
          <Image src={grassrootsFlyering} alt="Street promoter holding a stack of flyers" fill sizes="(max-width: 760px) 100vw, 44vw" placeholder="blur" />
          <figcaption>
            <strong>Real people. Real places.</strong>
            <span>Reporting and campaign evidence agreed around the brief.</span>
          </figcaption>
        </figure>
      </section>

      <section className="smart section-pad" aria-labelledby="smart-title">
        <div className="smart-head">
          <p className="eyebrow light">More than reach</p>
          <h2 id="smart-title">Smarter marketing.<br /><span>Measurable growth.</span></h2>
          <p>Getting attention matters. Knowing who responded — and what to do next — matters more.</p>
        </div>
        <div className="smart-grid">
          {smartServices.map(([title, copy], index) => (
            <article key={title}>
              <span className="smart-number">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
        <div className="no-jargon">
          <p>No data theatre. No jargon.</p>
          <strong>Just a clearer view of what to keep, change or stop.</strong>
          <Link className="button button-pink" href="/start-a-project">Build a smarter campaign</Link>
        </div>
      </section>

      <section className="ways section-pad" aria-labelledby="ways-title">
        <div className="ways-head">
          <p className="eyebrow">Start with the goal</p>
          <h2 id="ways-title">Tell us where you want to go.<br />We&apos;ll build the campaign.</h2>
        </div>
        <div className="ways-grid">
          {ways.map(([title, copy, label], index) => (
            <Link href="/start-a-project" className="way-card" key={title}>
              <div><span>0{index + 1}</span><small>{label}</small></div>
              <h3>{title}</h3>
              <p>{copy}</p>
              <Arrow />
            </Link>
          ))}
        </div>
        <Link className="text-link" href="/services">View all services <Arrow /></Link>
      </section>

      {showResults && <section className="results section-pad" aria-labelledby="results-title">
        <div className="results-lead">
          <p className="eyebrow light">Proven results</p>
          <h2 id="results-title">Noise is good.<br /><span>Results are better.</span></h2>
          <p>The strongest campaigns do more than generate activity. They change what happens next.</p>
          <Link className="button button-pink" href="/start-a-project">Start a project</Link>
        </div>
        <div className="results-standard">
          <p className="eyebrow light">Our evidence standard</p>
          <h3>Real campaigns.<br />Real evidence.<br />No inflated numbers.</h3>
          <div className="case-structure">
            <div><span>01</span><strong>Challenge</strong><p>The commercial problem we were asked to solve.</p></div>
            <div><span>02</span><strong>What we did</strong><p>The joined-up campaign we built and delivered.</p></div>
            <div><span>03</span><strong>Result</strong><p>The verified outcome, learning and next move.</p></div>
          </div>
          <small>Client names, testimonials and metrics are published only with approval.</small>
        </div>
      </section>}

      <section className="final-cta section-pad" aria-labelledby="final-title">
        <Image src={rebelsMark} alt="" sizes="(max-width: 760px) 50vw, 480px" />
        <p className="eyebrow">Ready to be heard?</p>
        <h2 id="final-title">Let&apos;s get your<br /><span>message out!</span></h2>
        <p>Tell us what you&apos;re launching, growing or trying to sell. We&apos;ll help shape the right campaign — without making you decode a long menu of services.</p>
        <div className="button-row center">
          <Link className="button button-dark" href="/start-a-project">Start a project</Link>
          <a className="text-link" href="mailto:joanne@rolodexrebels.co.uk">Email Rolodex Rebels <Arrow /></a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
