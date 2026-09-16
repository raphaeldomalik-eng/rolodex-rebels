import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ClientProof } from "./client-proof";
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
    copy: "Get your music, event or campaign in front of the right people — online, through the media and out in the real world.",
  },
  {
    number: "02",
    title: "Get Heard",
    copy: "Give journalists, creators and fans a clear reason to pay attention.",
  },
  {
    number: "03",
    title: "Get Results",
    copy: "Turn attention into streams, sign-ups, enquiries and ticket sales.",
  },
];

const audiences = [
  ["Artists", "Launch releases, grow your audience and promote live shows.", "/who-we-help/artists"],
  ["Labels & Managers", "Bring PR, social, digital and live promotion together around the release plan.", "/who-we-help/labels-managers"],
  ["Promoters, Venues & Festivals", "Build demand, sell tickets and give people a reason to come back.", "/who-we-help/promoters-venues-festivals"],
];

const pillars = [
  ["Get Heard", "PR and release campaigns that put your story in front of the right media and people.", "/services/get-heard"],
  ["Get Seen", "SEO, social media, paid ads and online promotion that help the right people find you.", "/services/get-seen"],
  ["Build Your Audience", "Turn listeners, followers and ticket buyers into people you can stay in touch with.", "/services/build-your-audience"],
  ["Sell The Show", "Ticket campaigns for gigs, tours and festivals — from announcement and on-sale to the final push.", "/services/sell-the-show"],
  ["Grassroots", "Leaflet and flyer distribution, poster distribution, campaign print and local promotion.", "/services/grassroots"],
  ["Digital & Creative", "Websites, campaign pages, content, creative work and ongoing website support.", "/services/digital-creative"],
];

const smartServices = [
  ["See What's Working", "See which audiences, channels and places are getting a response so you know where to put your time and money."],
  ["Keep In Touch", "Give fans a reason to sign up so you can reach them again for the next release or show."],
  ["Help People Find You", "Make your music, event or website easier to find online."],
  ["See What Needs Changing", "Ticket sales slow? Ads not working? Lots of clicks but no action? Look at the problem before spending more."],
];

const ways = [
  ["Launch My Music", "A campaign for your next single, EP or album.", "Rebel Launch"],
  ["Build My Audience", "Find the right fans and stay in touch with them.", "Audience Growth"],
  ["Improve My Digital Presence", "Build the artist, event or campaign site people need to find you.", "Digital & Creative"],
  ["Sell More Tickets", "Ticket campaigns from announcement to the final push.", "Sell The Show"],
  ["Guest & Industry Campaigns", "Handle invitations, RSVP, reminders and follow-up.", "Guest Campaigns"],
  ["Promote On The Ground", "Put flyers and posters where the audience actually is.", "Grassroots"],
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
            PR, social media, websites, SEO, ticket campaigns, flyers and posters for artists, venues, promoters and festivals.
            Need one service or a full campaign? We can help with both.
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
        <div>PR • SEO • SOCIAL • WEBSITES • TICKETS • FLYERS • POSTERS • PR • SEO • SOCIAL • WEBSITES • TICKETS • FLYERS • POSTERS •</div>
      </div>

      <section className="meaning section-pad" aria-labelledby="meaning-title">
        <div className="section-lead">
          <p className="eyebrow">The promise hasn&apos;t changed</p>
          <h2 id="meaning-title">The way we deliver it has.</h2>
          <p>The channels have changed. The job hasn&apos;t: get the right people to notice, care and act. That might mean PR, a search result, a social campaign, an email, a ticket page or flyers outside the venue — all working towards the same result.</p>
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

      <ClientProof />

      <section className="audience section-pad" aria-labelledby="audience-title">
        <div className="audience-photo media-frame">
          <Image src={artistStage} alt="Guitarist performing on a dark stage" fill sizes="(max-width: 760px) 100vw, 38vw" placeholder="blur" />
          <span className="photo-label">Music is the starting point</span>
        </div>
        <div className="audience-copy">
          <p className="eyebrow light">Built for the music industry</p>
          <h2 id="audience-title">You bring the music. We help people find it.</h2>
          <p className="large-copy">Whether you are launching a release, filling a venue or growing a festival, we start with who you want to reach and what you want them to do.</p>
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
              "Sell more tickets", "Market my tour", "Promote on the ground",
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
          <p>Start with what you want to achieve. We&apos;ll bring the right mix of PR, social, websites, ticket campaigns, flyers and posters around it.</p>
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
          <p className="eyebrow light">Online and on the ground</p>
          <h2 id="streets-title">From the streets<br />to the <span>screens.</span></h2>
        </div>
        <div className="streets-body">
          <p className="large-copy">Real momentum rarely comes from one channel.</p>
          <p>A release might need PR and SEO. A tour date might need ads, email and flyers outside the venue. We make each part serve the same goal — then use what happened to decide what comes next.</p>
          <Link className="text-link light-link" href="/why-us">See how we work <Arrow /></Link>
        </div>
        <div className="campaign-flow" role="list" aria-label="Campaign journey">
          {[
            ["Find", "Be found"], ["Engage", "Give a reason"], ["Sign up", "Stay in touch"],
            ["Act", "Streams, tickets, enquiries"], ["Learn", "See what worked"], ["Grow", "Use it again"],
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
          <p>Good grassroots promotion starts before anyone picks up a stack of flyers. We work out who needs to see the message, where they will actually be and when it will matter — outside venues, in queues, on high streets and around the show.</p>
          <div className="service-tags">
            {[
              "Leaflet and flyer distribution", "Poster distribution", "Hand-to-hand flyering", "Campaign print", "Local promotion",
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
            <div><span>02</span><strong>What we did</strong><p>The campaign we built and delivered — PR, digital and on the ground.</p></div>
            <div><span>03</span><strong>Result</strong><p>The verified outcome, learning and next move.</p></div>
          </div>
          <small>Client names, testimonials and metrics are published only with approval.</small>
        </div>
      </section>}

      <section className="final-cta section-pad" aria-labelledby="final-title">
        <Image src={rebelsMark} alt="" sizes="(max-width: 760px) 50vw, 480px" />
        <p className="eyebrow">Ready to be heard?</p>
        <h2 id="final-title">Let&apos;s get your<br /><span>message out!</span></h2>
        <p>Tell us what you&apos;re promoting, who you want to reach and what you need help with.</p>
        <div className="button-row center">
          <Link className="button button-dark" href="/start-a-project">Start a project</Link>
          <a className="text-link" href="mailto:joanne@rolodexrebels.co.uk">Email Rolodex Rebels <Arrow /></a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
