import type { Metadata } from "next";
import Link from "next/link";
import { InternalPage, Arrow } from "../internal-page";
import { PracticalServiceList, practicalServices, specialistServiceLinks } from "../practical-services";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({
  title: "Music Marketing Services | Rolodex Rebels",
  description: "Music marketing services including PR, SEO, social media, websites, ticket campaigns, street teams, flyers and posters for artists, venues, promoters and festivals.",
  path: "/services",
});

const services = [
  ["Get Heard", "PR and release campaigns that put your story in front of the right media and people.", "/services/get-heard"],
  ["Get Seen", "SEO, social media, paid ads and online promotion that help the right people find you.", "/services/get-seen"],
  ["Build Your Audience", "Turn listeners, followers and ticket buyers into people you can stay in touch with.", "/services/build-your-audience"],
  ["Sell The Show", "Ticket campaigns for gigs, tours and festivals — from announcement and on-sale to the final push.", "/services/sell-the-show"],
  ["Grassroots", "Street teams, leaflet and flyer distribution, poster campaigns, campuses and local promotion.", "/services/grassroots"],
  ["Digital & Creative", "Websites, campaign pages, content, creative work and ongoing website support.", "/services/digital-creative"],
];

export default function Services() {
  return (
    <InternalPage className="services-index-page" eyebrow="What we do" title={<>MUSIC MARKETING.<br /><span>EVERYTHING WORKING TOGETHER.</span></>} intro="PR, SEO, social media, websites, ticket campaigns, street teams, flyers and posters for artists, venues, promoters and festivals." breadcrumbs={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]}>
      <section className="practical-service-index" aria-labelledby="practical-services-title">
        <div>
          <p className="eyebrow pink">Looking for something specific?</p>
          <h2 id="practical-services-title">KNOW WHAT YOU NEED? START HERE.</h2>
          <p>Looking for PR, social media, websites, flyers, posters or venue support? Start here.</p>
        </div>
        <PracticalServiceList items={practicalServices} labelledBy="practical-services-title" />
      </section>
      <section className="pillar-index" aria-labelledby="pillar-index-title">
        <div>
          <p className="eyebrow pink">Need more than one thing?</p>
          <h2 id="pillar-index-title">HERE&apos;S HOW WE PUT IT TOGETHER.</h2>
          <p>Most campaigns need more than one service. We bring the right parts together around what you&apos;re trying to achieve.</p>
        </div>
        <div className="route-grid">
          {services.map(([title, copy, href], index) => <Link href={href} key={title}><span>0{index + 1}</span><h2>{title}</h2><p>{copy}</p><strong>Explore service <Arrow /></strong></Link>)}
        </div>
      </section>
      <nav className="specialist-service-strip" aria-label="Specialist service pages">
        <p className="eyebrow">Specialist pages</p>
        <div>
          {specialistServiceLinks.map(([label, href]) => <Link href={href} key={href}>{label} <Arrow /></Link>)}
        </div>
      </nav>
      <section className="pink-panel"><p className="eyebrow">Ways to work with us</p><h2>LAUNCH. GROW. SELL. ACTIVATE.</h2><p>Need a release campaign, artist growth, a tour, promoter or festival support, or a guest list handled properly? Those sit inside the six services above.</p></section>
    </InternalPage>
  );
}
