import type { Metadata } from "next";
import { InternalPage } from "../internal-page";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({
  title: "Why Rolodex Rebels | Music Marketing Agency",
  description: "How Rolodex Rebels combines PR, grassroots, digital and live promotion for artists, venues, promoters and festivals — from the streets to the screens.",
  path: "/why-us",
});

const strengths = [
  ["Start With Who You Want To Reach", "Tell us who you're trying to reach and what you want them to do. We'll work out the best way to get there."],
  ["Online And On The Ground", "We promote campaigns online, through the media and out in the real world — outside venues, on high streets and where the audience actually is."],
  ["One Team. Less Running Around.", "PR, social media, websites, ticket campaigns, flyers and posters can work together instead of being handled separately."],
  ["Local. Loud. Effective.", "We know how to put music and events in front of people in the places and moments that matter."],
];

export default function WhyUs() {
  return (
    <InternalPage eyebrow="Why Rolodex Rebels?" title={<>FROM THE STREETS<br />TO THE <span>SCREENS.</span></>} intro="We promote music and events online, through the media and out in the real world — so the campaign reaches people where they actually are." breadcrumbs={[{ name: "Home", path: "/" }, { name: "Why Us", path: "/why-us" }]}>
      <section className="inner-split">
        <div><p className="eyebrow pink">Grassroots heritage</p><h2>WE KNOW HOW ATTENTION REALLY STARTS.</h2></div>
        <div className="body-copy"><p>Before dashboards and discovery feeds, there were venues, high streets and queues. They still matter. We know how to put a release, show or festival in front of people face to face — and how to carry that into PR, social media, websites and ticket campaigns.</p><p>That is what “From the streets to the screens” means: reach people wherever the campaign needs to be, then give them a clear reason to act.</p></div>
      </section>
      <section className="feature-grid four-up">
        {strengths.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}
      </section>
      <section className="dark-panel">
        <div><p className="eyebrow light">More than the campaign report</p><h2>LEAVE SOMETHING USEFUL BEHIND.</h2></div>
        <p>A release, show or festival should leave more than a list of tasks completed. Where it fits, it should leave a larger mailing list, a clearer ticket page, a stronger website or a clear lesson for next time.</p>
      </section>
    </InternalPage>
  );
}
