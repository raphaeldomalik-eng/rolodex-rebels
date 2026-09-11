import type { Metadata } from "next";
import { InternalPage } from "../internal-page";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({
  title: "Why Rolodex Rebels | Music Marketing Agency",
  description: "Discover how Rolodex Rebels combines decades of PR and grassroots experience with digital, audience and campaign expertise for joined-up music marketing.",
  path: "/why-us",
});

const strengths = [
  ["Audience Before Channel", "We do not start with ‘run some ads’ or ‘send a press release’. We start with who needs to respond and what needs to happen."],
  ["Online And On The Ground", "Some audiences are in search, social, email and media. Others are outside the venue, in the queue or moving through the campus. We work across both."],
  ["One Objective. Not Six Suppliers.", "PR, paid media, audience, creative, live and grassroots work better when each specialist knows what the others are doing."],
  ["Local. Loud. Effective.", "We know the venues, streets and audience moments that make physical promotion feel timely rather than random."],
];

export default function WhyUs() {
  return (
    <InternalPage eyebrow="Why Rolodex Rebels?" title={<>FROM THE STREETS<br />TO THE <span>SCREENS.</span></>} intro="Decades of PR and grassroots experience, now working across media, digital, audiences and live campaigns without losing sight of the people the campaign needs to reach." breadcrumbs={[{ name: "Home", path: "/" }, { name: "Why Us", path: "/why-us" }]}>
      <section className="inner-split">
        <div><p className="eyebrow pink">Grassroots heritage</p><h2>WE KNOW HOW ATTENTION REALLY STARTS.</h2></div>
        <div className="body-copy"><p>Before dashboards and discovery feeds, there were venues, high streets, campuses and queues. They still matter. We know how to put a release, show or festival in front of people face to face — and how to carry that attention into search, social, PR, content and fan communication.</p><p>That is what “From the streets to the screens” means: reach the audience wherever the moment calls for it, then give them a clear reason to act.</p></div>
      </section>
      <section className="feature-grid four-up">
        {strengths.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}
      </section>
      <section className="dark-panel">
        <div><p className="eyebrow light">More than the campaign report</p><h2>BUILD SOMETHING THAT LASTS.</h2></div>
        <p>A release, show or festival should leave behind more than a list of tasks completed. Where the brief allows, it should leave a larger mailing list, better audience insight, a sharper ticket path, stronger digital assets or a clear lesson for the next campaign.</p>
      </section>
    </InternalPage>
  );
}
