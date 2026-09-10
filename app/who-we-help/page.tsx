import type { Metadata } from "next";
import Link from "next/link";
import { InternalPage, Arrow } from "../internal-page";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({
  title: "Music Marketing for Artists & Live Music | Rolodex Rebels",
  description: "Music marketing campaigns shaped for artists, labels, managers, promoters, venues and festivals — from releases and audience growth to ticket sales.",
  path: "/who-we-help",
});

const audiences = [
  ["Artists", "Launch music, grow a real fanbase and build momentum between releases and shows.", "/who-we-help/artists"],
  ["Labels & Managers", "Give every campaign the strategy, reach, creative thinking and follow-through it deserves.", "/who-we-help/labels-managers"],
  ["Promoters, Venues & Festivals", "Build demand, sell tickets and turn today’s crowd into tomorrow’s audience.", "/who-we-help/promoters-venues-festivals"],
];

export default function WhoWeHelp() {
  return (
    <InternalPage eyebrow="Who we help" title={<>MUSIC MARKETING.<br /><span>BUILT AROUND YOUR GOAL.</span></>} intro="Different parts of the music industry face different pressures. Start with where you are, what you need to move and what success must look like." breadcrumbs={[{ name: "Home", path: "/" }, { name: "Who We Help", path: "/who-we-help" }]}>
      <section className="route-grid three-up">
        {audiences.map(([title, copy, href], index) => <Link href={href} key={title}><span>0{index + 1}</span><h2>{title}</h2><p>{copy}</p><strong>Choose this route <Arrow /></strong></Link>)}
      </section>
      <section className="dark-panel"><div><p className="eyebrow light">No fixed channel list</p><h2>START WITH THE OUTCOME.</h2></div><p>We shape the campaign around the audience, timing, budget and commercial goal—then bring in the right mix of PR, digital, audience growth and grassroots activation.</p></section>
    </InternalPage>
  );
}
