import type { Metadata } from "next";
import Link from "next/link";
import { InternalPage, Arrow } from "../internal-page";
import { PracticalServiceList, practicalServices, specialistServiceLinks } from "../practical-services";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({
  title: "Music Marketing Services | Rolodex Rebels",
  description: "Explore six connected music marketing services spanning PR, digital visibility, audience growth, ticket campaigns, grassroots activation and creative.",
  path: "/services",
});

const services = [
  ["Get Heard", "Music PR, release stories, creator activity, content and fan communication that keep attention moving.", "/services/get-heard"],
  ["Get Seen", "SEO and search discovery, social media campaigns, paid media, creators and grassroots exposure.", "/services/get-seen"],
  ["Build Your Audience", "Permission-based capture, audience understanding, segmentation, communication, activation and retention.", "/services/build-your-audience"],
  ["Sell The Show", "Demand, ticket response, tour and festival campaigns, guests and audience retention beyond doors.", "/services/sell-the-show"],
  ["Grassroots", "Street teams, leaflet and flyer distribution, poster campaigns, campaign print, campuses and place-based activation.", "/services/grassroots"],
  ["Digital & Creative", "Website design, campaign sites, landing pages, search foundations, content, creative and ongoing support.", "/services/digital-creative"],
];

export default function Services() {
  return (
    <InternalPage className="services-index-page" eyebrow="What we do" title={<>MUSIC MARKETING.<br /><span>EVERYTHING WORKING TOGETHER.</span></>} intro="Tell us what needs to move — a release, an audience, a ticket campaign, a digital presence or activity on the ground. We will build the right mix around it." breadcrumbs={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]}>
      <section className="route-grid">
        {services.map(([title, copy, href], index) => <Link href={href} key={title}><span>0{index + 1}</span><h2>{title}</h2><p>{copy}</p><strong>Explore service <Arrow /></strong></Link>)}
      </section>
      <section className="practical-service-index" aria-labelledby="practical-services-title">
        <div>
          <p className="eyebrow pink">Looking for something specific?</p>
          <h2 id="practical-services-title">KNOW WHAT YOU NEED? START HERE.</h2>
          <p>The six pillars are how we work. These are the practical things a client can ask us to do.</p>
        </div>
        <PracticalServiceList items={practicalServices} labelledBy="practical-services-title" />
        <nav className="specialist-service-strip" aria-label="Specialist service pages">
          <p className="eyebrow">Specialist pages</p>
          <div>
            {specialistServiceLinks.map(([label, href]) => <Link href={href} key={href}>{label} <Arrow /></Link>)}
          </div>
        </nav>
      </section>
      <section className="pink-panel"><p className="eyebrow">Ways to work with us</p><h2>LAUNCH. GROW. SELL. ACTIVATE.</h2><p>Rebel Launch, Rebel Artist Growth, Rebel Tour, Promoter Growth, Festival Growth, Guest &amp; Industry Campaigns and Campaign Intelligence sit within these six connected pillars — keeping the plan clear while the delivery goes deep.</p></section>
    </InternalPage>
  );
}
