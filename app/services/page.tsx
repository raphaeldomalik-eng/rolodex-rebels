import type { Metadata } from "next";
import Link from "next/link";
import { InternalPage, Arrow } from "../internal-page";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({
  title: "Music Marketing Services | Rolodex Rebels",
  description: "Explore six connected music marketing services spanning PR, digital visibility, audience growth, ticket campaigns, grassroots activation and creative.",
  path: "/services",
});

const services = [
  ["Get Heard", "Music PR, release stories, creator activity, content and fan communication that keep attention moving.", "/services/get-heard"],
  ["Get Seen", "Relevant discovery through search, paid media, social visibility, creators and grassroots exposure.", "/services/get-seen"],
  ["Build Your Audience", "Permission-based capture, audience understanding, segmentation, communication, activation and retention.", "/services/build-your-audience"],
  ["Sell The Show", "Demand, ticket response, tour and festival campaigns, guests and audience retention beyond doors.", "/services/sell-the-show"],
  ["Grassroots", "Street teams, leaflet drops, poster runs, hand-to-hand flyering, campus campaigns and place-based activation.", "/services/grassroots"],
  ["Digital & Creative", "Websites, campaign sites, audience journeys, search foundations, content, creative and managed improvement.", "/services/digital-creative"],
];

const deeperServices = [
  { pillar: "Get Heard", links: [["Music PR", "/services/music-pr"]] },
  { pillar: "Grassroots", links: [["Music Street Teams", "/services/grassroots/music-street-teams"], ["Flyer Distribution", "/services/grassroots/flyer-distribution"]] },
  { pillar: "Sell The Show", links: [["Festival Marketing", "/services/festival-marketing"]] },
  { pillar: "Digital & Creative", links: [["Artist Website Design", "/services/artist-website-design"]] },
];

export default function Services() {
  return (
    <InternalPage eyebrow="What we do" title={<>MUSIC MARKETING.<br /><span>EVERYTHING WORKING TOGETHER.</span></>} intro="Choose the outcome you need. We build the right mix of strategy, creative, digital, PR and real-world activation around it." breadcrumbs={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]}>
      <section className="route-grid">
        {services.map(([title, copy, href], index) => <Link href={href} key={title}><span>0{index + 1}</span><h2>{title}</h2><p>{copy}</p><strong>Explore service <Arrow /></strong></Link>)}
      </section>
      <section className="deep-service-index" aria-labelledby="specialist-services-title">
        <div>
          <div><p className="eyebrow pink">Go deeper</p><h2 id="specialist-services-title">SPECIALIST SERVICES FOR A CLEAR CAMPAIGN NEED.</h2></div>
          <p>The six pillars stay at the centre of how we work. These focused services give you a direct route when the brief is already clear.</p>
        </div>
        <div className="deep-service-grid">
          {deeperServices.map(({ pillar, links }) => <article key={pillar}><h3>{pillar}</h3>{links.map(([label, href]) => <Link href={href} key={href}>{label} <Arrow /></Link>)}</article>)}
        </div>
      </section>
      <section className="pink-panel"><p className="eyebrow">Ways to work with us</p><h2>LAUNCH. GROW. SELL. ACTIVATE.</h2><p>Rebel Launch, Rebel Artist Growth, Rebel Tour, Promoter Growth, Festival Growth, Guest &amp; Industry Campaigns and Campaign Intelligence sit within these six connected pillars — keeping the plan clear while the delivery goes deep.</p></section>
    </InternalPage>
  );
}
