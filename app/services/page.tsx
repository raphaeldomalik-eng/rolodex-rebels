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
  ["Get Heard", "PR, release campaigns, storytelling, creator activity, content and fan communications.", "/services/get-heard"],
  ["Get Seen", "Digital visibility, search and discovery, paid media, social visibility and grassroots exposure.", "/services/get-seen"],
  ["Build Your Audience", "Audience intelligence, fan acquisition, segmentation, email, retargeting and retention.", "/services/build-your-audience"],
  ["Sell The Show", "Ticket growth, tour marketing, promoter and festival campaigns, RSVP and guest campaigns.", "/services/sell-the-show"],
  ["Grassroots", "Street teams, leaflet drops, poster runs, hand-to-hand flyering, campus campaigns and local activation.", "/services/grassroots"],
  ["Digital & Creative", "Websites, campaign landing pages, SEO, content, creative assets and campaign infrastructure.", "/services/digital-creative"],
];

export default function Services() {
  return (
    <InternalPage eyebrow="What we do" title={<>MUSIC MARKETING.<br /><span>EVERYTHING WORKING TOGETHER.</span></>} intro="Choose the outcome you need. We build the right mix of strategy, creative, digital, PR and real-world activation around it." breadcrumbs={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]}>
      <section className="route-grid">
        {services.map(([title, copy, href], index) => <Link href={href} key={title}><span>0{index + 1}</span><h2>{title}</h2><p>{copy}</p><strong>Explore service <Arrow /></strong></Link>)}
      </section>
      <section className="pink-panel"><p className="eyebrow">Ways to work with us</p><h2>LAUNCH. GROW. SELL. ACTIVATE.</h2><p>Rebel Launch, Rebel Artist Growth, Rebel Tour, Promoter Growth, Festival Growth, Guest &amp; Industry Campaigns and Campaign Intelligence all sit within these six connected pillars.</p></section>
    </InternalPage>
  );
}
