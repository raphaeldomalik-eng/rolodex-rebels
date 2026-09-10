import type { Metadata } from "next";
import { InternalPage } from "../internal-page";

export const metadata: Metadata = { title: "Insights | Rolodex Rebels" };

const themes = ["Release & Artist Growth", "Audience & Fan Relationships", "Ticket & Live Growth", "Search & Digital Discovery", "Grassroots Campaign Planning"];

export default function Insights() {
  return (
    <InternalPage eyebrow="Insights" title={<>USEFUL THINKING.<br /><span>ZERO INDUSTRY FOG.</span></>} intro="Practical ideas for artists, teams and live music businesses that want sharper campaigns, stronger audiences and better results.">
      <section className="insight-list">
        {themes.map((theme, index) => <article key={theme}><span>0{index + 1}</span><h2>{theme}</h2><p>Clear advice, campaign lessons and practical planning tools from the Rolodex Rebels network.</p></article>)}
      </section>
      <section className="dark-panel"><div><p className="eyebrow light">The Rebel Briefing</p><h2>FIRST EDITIONS LANDING SOON.</h2></div><p>Insights are part of the site architecture from launch, without holding up the work that matters now. For immediate advice on a live campaign, talk to us directly.</p></section>
    </InternalPage>
  );
}
