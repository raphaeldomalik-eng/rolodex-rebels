import Image from "next/image";
import { SiteFooter, SiteHeader } from "./site-chrome";
import liveCrowd from "../public/live-crowd.jpg";
import artistStage from "../public/artist-stage.jpg";
import grassrootsFlyering from "../public/grassroots-flyering.jpg";
import rebelsMark from "../public/rolodex-rebels-mark.png";

const meanings = [
  {
    number: "01",
    title: "Get Seen",
    copy: "Reach the right people through search, paid media, digital campaigns, social visibility and activity on the ground.",
  },
  {
    number: "02",
    title: "Get Heard",
    copy: "Turn your story into PR, content, creator activity and communications that people notice, remember and respond to.",
  },
  {
    number: "03",
    title: "Get Results",
    copy: "Grow your audience, strengthen fan relationships, sell tickets and learn what drives the next move.",
  },
];

const audiences = [
  ["Artists", "Launch your music, grow a real fanbase and keep moving between releases and shows.", "/who-we-help/artists"],
  ["Labels & Managers", "Give every campaign the strategy, reach, creative thinking and follow-through it deserves.", "/who-we-help/labels-managers"],
  ["Promoters, Venues & Festivals", "Build demand, sell tickets and turn today’s crowd into tomorrow’s audience.", "/who-we-help/live-music"],
];

const pillars = [
  ["Get Heard", "PR, release campaigns, storytelling, creators, content and fan communications."],
  ["Get Seen", "Search, paid media, digital campaigns, social visibility and targeted exposure."],
  ["Build Your Audience", "Audience insight, fan acquisition, segmentation, email and retention."],
  ["Sell The Show", "Ticket growth, tour marketing, promoter and festival campaigns, RSVP and guests."],
  ["Grassroots", "Street teams, leaflets, posters, hand-to-hand flyering, campus and local activation."],
  ["Digital & Creative", "Websites, landing pages, SEO, content, campaign assets and infrastructure."],
];

const smartServices = [
  ["Audience Intelligence", "Understand where your audience is, how they behave and which campaigns move them."],
  ["Fan Relationships", "Build permission-based fan relationships you can reach again for the next release, show or announcement."],
  ["Search & Discovery", "Make your music, events and digital presence easier to find when people are actively looking."],
  ["Campaign Insight", "Understand what worked, why it mattered and where the next opportunity lies."],
];

const ways = [
  ["Launch My Music", "A joined-up campaign for your next single, EP or album.", "Rebel Launch"],
  ["Build My Audience", "Find the right fans and create relationships you can grow.", "Audience Growth"],
  ["Improve My Digital Presence", "Build a stronger website, sharper discovery and clearer conversion.", "Digital & Creative"],
  ["Sell More Tickets", "Turn campaign activity into demand, buyers and attendance.", "Sell The Show"],
  ["Guest & Industry Campaigns", "Handle invitations, RSVP, reminders and follow-up professionally.", "Guest Campaigns"],
  ["Activate People On The Ground", "Put real teams in the right places with accountable local activation.", "Grassroots"],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
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
            Built on decades of PR and grassroots experience, we create joined-up
            campaigns for artists, releases and live music — from the streets to the screens.
          </p>
          <div className="hero-actions">
            <a className="button button-pink" href="/start-a-project">Let&apos;s make some noise</a>
            <a className="text-link light-link" href="/results">See our results <Arrow /></a>
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
        <div className="proof-strip" aria-label="Why Rolodex Rebels">
          <span>Targeted Exposure</span><span>Proven Results</span><span>Creative &amp; Reliable</span><span>Local. Loud. Effective.</span>
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
              <a href={href} className="audience-row" key={title}>
                <span className="row-number">0{index + 1}</span>
                <span><strong>{title}</strong><small>{copy}</small></span>
                <Arrow />
              </a>
            ))}
          </div>
          <div className="goal-cloud" aria-label="Choose your goal">
            {[
              "Launch my music", "Build my audience", "Improve my digital presence",
              "Sell more tickets", "Market my tour", "Activate on the ground",
            ].map((goal) => <a href="/start-a-project" key={goal}>{goal}</a>)}
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
          {pillars.map(([title, copy], index) => (
            <a className="pillar-card" href={`/services/${title.toLowerCase().replace(/ /g, "-").replace("&", "and")}`} key={title}>
              <span className="pillar-number">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <Arrow />
            </a>
          ))}
        </div>
        <a className="button button-dark" href="/services">See everything we do</a>
      </section>

      <section className="streets section-pad" aria-labelledby="streets-title">
        <div className="streets-title-wrap">
          <p className="eyebrow light">Joined-up music marketing</p>
          <h2 id="streets-title">From the streets<br />to the <span>screens.</span></h2>
        </div>
        <div className="streets-body">
          <p className="large-copy">Real momentum rarely comes from one channel.</p>
          <p>We connect PR, creative, digital discovery, audience growth, ticket campaigns and grassroots activation around one objective. Every part has a job. Every response teaches us something. Every campaign should make the next one stronger.</p>
          <a className="text-link light-link" href="/why-us">See how we work <Arrow /></a>
        </div>
        <div className="campaign-flow" aria-label="Campaign journey">
          {[
            ["Discover", "Be found"], ["Engage", "Give a reason"], ["Capture", "Build a link"],
            ["Convert", "Create action"], ["Learn", "See what moved"], ["Grow", "Go again"],
          ].map(([step, note], index) => (
            <div key={step}><span>0{index + 1}</span><strong>{step}</strong><small>{note}</small></div>
          ))}
        </div>
      </section>

      <section className="grassroots section-pad" aria-labelledby="grassroots-title">
        <div className="grassroots-copy">
          <p className="eyebrow">Built from the ground up</p>
          <h2 id="grassroots-title">Local.<br />Loud.<br /><span>Effective.</span></h2>
          <p className="large-copy">Grassroots is not a legacy service or a bolt-on. It is part of who we are.</p>
          <p>Our teams put campaigns into the real world — properly planned, professionally delivered and connected to the wider objective.</p>
          <div className="service-tags">
            {[
              "Street teams", "Leaflet drops", "Poster runs", "Hand-to-hand flyering", "Campus campaigns", "Local activation",
            ].map((item) => <span key={item}>{item}</span>)}
          </div>
          <div className="button-row">
            <a className="button button-dark" href="/start-a-project">Plan a grassroots campaign</a>
            <a className="text-link" href="/services/grassroots">Explore grassroots <Arrow /></a>
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
          <strong>Just better decisions, stronger campaigns and audiences that keep growing.</strong>
          <a className="button button-pink" href="/start-a-project">Build a smarter campaign</a>
        </div>
      </section>

      <section className="ways section-pad" aria-labelledby="ways-title">
        <div className="ways-head">
          <p className="eyebrow">Start with the goal</p>
          <h2 id="ways-title">Tell us where you want to go.<br />We&apos;ll build the campaign.</h2>
        </div>
        <div className="ways-grid">
          {ways.map(([title, copy, label], index) => (
            <a href="/start-a-project" className="way-card" key={title}>
              <div><span>0{index + 1}</span><small>{label}</small></div>
              <h3>{title}</h3>
              <p>{copy}</p>
              <Arrow />
            </a>
          ))}
        </div>
        <a className="text-link" href="/services">View all services <Arrow /></a>
      </section>

      <section className="results section-pad" aria-labelledby="results-title">
        <div className="results-lead">
          <p className="eyebrow light">Proven results</p>
          <h2 id="results-title">Noise is good.<br /><span>Results are better.</span></h2>
          <p>The strongest campaigns do more than generate activity. They change what happens next.</p>
          <a className="button button-pink" href="/results">See the results</a>
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
      </section>

      <section className="final-cta section-pad" aria-labelledby="final-title">
        <Image src={rebelsMark} alt="" sizes="(max-width: 760px) 50vw, 480px" />
        <p className="eyebrow">Ready to be heard?</p>
        <h2 id="final-title">Let&apos;s get your<br /><span>message out!</span></h2>
        <p>Tell us what you&apos;re launching, growing or trying to sell. We&apos;ll help shape the right campaign — without making you decode a long menu of services.</p>
        <div className="button-row center">
          <a className="button button-dark" href="/start-a-project">Start a project</a>
          <a className="text-link" href="mailto:joanne@rolodexrebels.co.uk">Email Rolodex Rebels <Arrow /></a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
