import type { Metadata } from "next";
import { InternalPage } from "../internal-page";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({
  title: "Why Rolodex Rebels | Music Marketing Agency",
  description: "Discover how Rolodex Rebels combines decades of PR and grassroots experience with digital, audience and campaign expertise for joined-up music marketing.",
  path: "/why-us",
});

const strengths = [
  ["Targeted Exposure", "We put your message in front of the people most likely to care, act and come back."],
  ["Proven Results", "We agree the outcome, track the campaign and use what we learn to make the next move stronger."],
  ["Creative & Reliable", "Fresh thinking, straight answers and delivery you can count on when timings get tight."],
  ["Local. Loud. Effective.", "Real local knowledge, experienced teams and activity that earns attention where it matters."],
];

export default function WhyUs() {
  return (
    <InternalPage eyebrow="Why Rolodex Rebels?" title={<>FROM THE STREETS<br />TO THE <span>SCREENS.</span></>} intro="Decades of PR and grassroots experience, now joined with audience, digital and campaign intelligence to make every part of your marketing work harder." breadcrumbs={[{ name: "Home", path: "/" }, { name: "Why Us", path: "/why-us" }]}>
      <section className="inner-split">
        <div><p className="eyebrow pink">Grassroots heritage</p><h2>WE KNOW HOW ATTENTION REALLY STARTS.</h2></div>
        <div className="body-copy"><p>Before dashboards and discovery feeds, there were venues, high streets, campuses and queues. That work still matters. We know how to build visibility face to face—and how to carry that energy into search, social, PR, content and fan relationships.</p><p>That is what “From the streets to the screens” means: one campaign, built around the audience rather than the channel.</p></div>
      </section>
      <section className="feature-grid four-up">
        {strengths.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}
      </section>
      <section className="dark-panel">
        <div><p className="eyebrow light">One connected team</p><h2>THE RIGHT SPECIALISTS. ONE CAMPAIGN.</h2></div>
        <p>Strategy, PR, audience growth, paid media, search, creative, web and street-level activation are brought together around one goal. You get joined-up thinking without the hand-offs, gaps and mixed messages.</p>
      </section>
    </InternalPage>
  );
}
