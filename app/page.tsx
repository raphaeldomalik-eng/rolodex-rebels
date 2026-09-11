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
    copy: "Be found by the people who matter through relevant search, paid, social, creator and on-the-ground discovery.",
  },
  {
    number: "02",
    title: "Get Heard",
    copy: "Turn your story into PR, content, creator activity and communications — with somewhere useful for earned attention to go.",
  },
  {
    number: "03",
    title: "Get Results",
    copy: "Turn response into audience growth, stronger fan relationships, ticket action and learning for the next move.",
  },
];

const audiences = [
  ["Artists", "Launch the next release — and build momentum for what comes after.", "/who-we-help/artists"],
  ["Labels & Managers", "Add specialist depth, reduce fragmentation and keep every campaign strand moving together.", "/who-we-help/labels-managers"],
  ["Promoters, Venues & Festivals", "Build demand, sell tickets and retain more of today’s audience for tomorrow.", "/who-we-help/promoters-venues-festivals"],
];

const pillars = [
  ["Get Heard", "Music PR, release stories, creators, content and fan communication that keep attention moving.", "/services/get-heard"],
  ["Get Seen", "Relevant discovery across search, paid, social, creators and targeted grassroots exposure.", "/services/get-seen"],
  ["Build Your Audience", "Permission-based capture, audience understanding, communication, activation and retention.", "/services/build-your-audience"],
  ["Sell The Show", "Demand, ticket response, live audience growth, guest campaigns and retention beyond doors.", "/services/sell-the-show"],
  ["Grassroots", "Street teams, leaflets, posters, hand-to-hand flyering, campuses and place-based activation.", "/services/grassroots"],
  ["Digital & Creative", "The websites, campaign destinations, content and audience journeys behind growth.", "/services/digital-creative"],
];

const smartServices = [
  ["Audience Intelligence", "Bring available audience, channel and campaign signals together to see who responded and what deserves attention next."],
  ["Fan Relationships", "Build permission-based fan connections, organise them usefully and communicate with greater relevance between campaign moments."],
  ["Search & Discovery", "Make your music, events and digital presence easier to find, understand and act on when people are actively looking."],
  ["Campaign Insight", "Connect response, sales and journey signals where available so the next decision is based on learning, not noise."],
];

const ways = [
  ["Launch My Music", "A joined-up campaign for your next single, EP or album.", "Rebel Launch"],
  ["Build My Audience", "Find the right fans and create relationships you can grow.", "Audience Growth"],
  ["Improve My Digital Presence", "Build a stronger website or campaign destination, sharper discovery and a clearer audience journey.", "Digital & Creative"],
  ["Sell More Tickets", "Turn campaign activity into demand, buyers and attendance.", "Sell The Show"],
  ["Guest & Industry Campaigns", "Handle invitations, RSVP, reminders and follow-up professionally.", "Guest Campaigns"],
  ["Activate People On The Ground", "Put real teams in the right places with accountable local activation.", "Grassroots"],
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
            Rolodex Rebels is a UK music marketing agency helping artists, labels, managers,
            promoters, venues and festivals grow audiences, launch music, increase visibility
            and sell tickets. Built on decades of PR and grassroots experience — from the streets to the screens.
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
          <p>Rolodex Rebels has grown into a full-service music marketing agency — without losing the attitude, relationships or grassroots experience that built the business.</p>
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
          <p>We connect PR, creative, digital discovery, audience growth, ticket campaigns and grassroots activation around one objective. Every part has a job. Every response teaches us something. Every campaign should make the next one stronger.</p>
          <Link className="text-link light-link" href="/why-us">See how we work <Arrow /></Link>
        </div>
        <div className="campaign-flow" role="list" aria-label="Campaign journey">
          {[
            ["Discover", "Be found"], ["Engage", "Give a reason"], ["Capture", "Build a link"],
            ["Convert", "Create action"], ["Learn", "See what moved"], ["Grow", "Go again"],
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
          <p>Our teams put campaigns into the real world — planned around the audience, place and moment, professionally delivered and connected to the wider objective. Where useful, physical response can feed the next digital move.</p>
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
            <span>Field evidence and campaign coverage where available.</span>
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
          <strong>Just better decisions, stronger campaigns and audience relationships you can keep building.</strong>
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
