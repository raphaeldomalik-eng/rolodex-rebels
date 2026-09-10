import type { Metadata } from "next";
import { InternalPage, Arrow } from "../internal-page";

export const metadata: Metadata = { title: "Who We Help | Rolodex Rebels" };

const audiences = [
  ["Artists", "Launch music, grow a real fanbase and build momentum between releases and shows.", "/who-we-help/artists"],
  ["Labels & Managers", "Give every campaign the strategy, reach, creative thinking and follow-through it deserves.", "/who-we-help/labels-managers"],
  ["Promoters, Venues & Festivals", "Build demand, sell tickets and turn today’s crowd into tomorrow’s audience.", "/who-we-help/live-music"],
];

export default function WhoWeHelp() {
  return (
    <InternalPage eyebrow="Who we help" title={<>YOUR GOAL.<br /><span>OUR CAMPAIGN.</span></>} intro="Different parts of the music industry face different pressures. Start with where you are, what you need to move and what success must look like.">
      <section className="route-grid three-up">
        {audiences.map(([title, copy, href], index) => <a href={href} key={title}><span>0{index + 1}</span><h2>{title}</h2><p>{copy}</p><strong>Choose this route <Arrow /></strong></a>)}
      </section>
      <section className="dark-panel"><div><p className="eyebrow light">No fixed channel list</p><h2>START WITH THE OUTCOME.</h2></div><p>We shape the campaign around the audience, timing, budget and commercial goal—then bring in the right mix of PR, digital, audience growth and grassroots activation.</p></section>
    </InternalPage>
  );
}
