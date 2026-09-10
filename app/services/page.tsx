import type { Metadata } from "next";
import { InternalPage, Arrow } from "../internal-page";

export const metadata: Metadata = { title: "Services | Rolodex Rebels" };

const services = [
  ["Get Heard", "PR, release campaigns, storytelling, creator activity, content and fan communications.", "/services/get-heard"],
  ["Get Seen", "Digital visibility, search and discovery, paid media, social visibility and grassroots exposure.", "/services/get-seen"],
  ["Build Your Audience", "Audience intelligence, fan acquisition, segmentation, email, retargeting and retention.", "/services/build-your-audience"],
  ["Sell The Show", "Ticket growth, tour marketing, promoter and festival campaigns, RSVP and guest campaigns.", "/services/sell-the-show"],
  ["Grassroots", "Street teams, leaflet drops, poster runs, hand-to-hand flyering, campus campaigns and local activation.", "/services/grassroots"],
  ["Digital & Creative", "Websites, campaign landing pages, SEO, content, creative assets and campaign infrastructure.", "/services/digital-and-creative"],
];

export default function Services() {
  return (
    <InternalPage eyebrow="What we do" title={<>ONE GOAL.<br /><span>EVERYTHING WORKING TOGETHER.</span></>} intro="Choose the outcome you need. We build the right mix of strategy, creative, digital, PR and real-world activation around it.">
      <section className="route-grid">
        {services.map(([title, copy, href], index) => <a href={href} key={title}><span>0{index + 1}</span><h2>{title}</h2><p>{copy}</p><strong>Explore service <Arrow /></strong></a>)}
      </section>
      <section className="pink-panel"><p className="eyebrow">Ways to work with us</p><h2>LAUNCH. GROW. SELL. ACTIVATE.</h2><p>Rebel Launch, Rebel Artist Growth, Rebel Tour, Promoter Growth, Festival Growth, Guest &amp; Industry Campaigns and Campaign Intelligence all sit within these six connected pillars.</p></section>
    </InternalPage>
  );
}
