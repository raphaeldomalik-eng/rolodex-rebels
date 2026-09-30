import Link from "next/link";
import { GuideArticle, guideMetadata } from "../guide-article";
import { distributionGuideArticleProps, distributionGuideByPath, distributionGuideRelated } from "../distribution-guides";

const guide = distributionGuideByPath("/guides/how-to-plan-a-flyer-poster-distribution-campaign");

export const metadata = guideMetadata(guide);

export default function PlanDistributionCampaignPage() {
  return (
    <GuideArticle guide={guide} {...distributionGuideArticleProps} related={distributionGuideRelated(guide.path)}>
      <section>
        <h2 id="start-with-the-audience">Start with the audience, not the print run</h2>
        <p>
          Most flyer and poster campaigns go wrong at the first question. Someone orders a box of flyers, then works out where to put them. The quantity was fixed before anyone knew who it was for.
        </p>
        <p>
          The order below fixes that: who, where, when, format, message, quantity, action, learn. Each answer narrows the next one. By the time you reach quantity, it is usually obvious.
        </p>
      </section>

      <div className="guide-steps">
      <section>
        <h2 id="who">1. Who</h2>
        <p>
          Name the people the campaign needs. Not &ldquo;everyone in the area&rdquo;, but the regulars at a particular venue, the crowd for a certain kind of night, people who already buy tickets for similar shows. If you cannot describe them, you cannot choose where to find them.
        </p>
      </section>

      <section>
        <h2 id="where">2. Where</h2>
        <p>
          Work out where those people actually are, at the times that matter: outside the venue, in the queue, in a nightlife area, on a high street, around a related show. For posters, the question is where they keep returning — shops, music stores and other suitable places they pass regularly.
        </p>
        <p>
          A local campaign is usually one catchment, not a whole region. In Kent, that tends to mean a venue, a show or a town-centre moment rather than the county; <Link href="/services/grassroots/flyer-distribution/kent">flyer distribution in Kent</Link> goes into how that brief is shaped.
        </p>
      </section>

      <section>
        <h2 id="when">3. When</h2>
        <p>
          Decide when the message has to land. Before the on-sale, in the fortnight before a show, on the night itself. The date shapes the rest of the plan. A flyer handed out after people have already made their weekend plans is doing a different, weaker job.
        </p>
      </section>

      <section>
        <h2 id="format">4. Format</h2>
        <p>
          Now choose the format. A flyer suits a moment when people gather and there is a chance to hand something over. A poster suits a place the audience returns to, where the message can be seen more than once. Some campaigns need both at different points; <Link href="/guides/flyer-vs-poster-distribution">flyer vs poster distribution</Link> sets out the trade-offs.
        </p>
        <p>
          Size matters too. A small flyer is quick to take and easy to pocket. A poster has to be legible from a distance.
        </p>
      </section>

      <section>
        <h2 id="message">5. Message</h2>
        <p>
          Write for three seconds. What is it, when is it, where is it, and what should the person do next. Everything else belongs on the page the flyer or poster points to. A poster with a paragraph on it is a poster nobody finishes.
        </p>
      </section>

      <section>
        <h2 id="quantity">6. Quantity</h2>
        <p>
          Only now decide how many. The answer follows from the places, the sessions and how many of the right people will be there. If the number feels arbitrary, one of the earlier answers is still vague. Quantity is also the main driver of cost alongside geography and method; <Link href="/guides/how-much-does-flyer-distribution-cost">what flyer distribution costs</Link> covers the rest.
        </p>
      </section>

      <section>
        <h2 id="action">7. Action</h2>
        <p>
          Decide what the flyer or poster should make happen: buy a ticket, RSVP, listen to a release, visit a website, book a table, join a mailing list. One action is better than four. A QR code or short URL is the bridge from paper to that next step.
        </p>
        <p>
          The destination has to be ready for it. A scan that lands on a slow page or a homepage with no mention of the event is wasted. If the page does not exist yet, that is <Link href="/services/digital-creative">website and landing-page work</Link>; if the job is getting people through an on-sale, it sits with <Link href="/services/sell-the-show">ticket campaigns</Link>.
        </p>
      </section>

      <section>
        <h2 id="learn">8. Learn</h2>
        <p>
          Agree before the campaign what you will look at afterwards. A scan or a visit to a dedicated URL can be counted, and ticket, RSVP or sign-up numbers around the dates add context. That tells you something real. It does not prove every downstream sale was caused by the flyer, and nobody should pretend it does.
        </p>
        <p>
          The most useful thing a campaign can leave behind is a way to reach the same people next time. A mailing-list sign-up on the landing page turns a single scan into <Link href="/services/build-your-audience">an audience you can come back to</Link>.
        </p>
      </section>
      </div>

      <aside className="guide-callout">
        <p>
          <strong>Quantity is question six.</strong>
          If the conversation starts with how many flyers, go back to who. Every answer before quantity makes the number more useful and the money better spent.
        </p>
      </aside>

      <section>
        <h2 id="putting-it-together">Putting it together</h2>
        <p>
          A finished plan fits on a page: the audience, the places, the dates, the format, the message, the quantity, the next step and how you will read the result. Rolodex Rebels plans and runs <Link href="/services/grassroots/flyer-distribution">hand-to-hand flyer and leaflet distribution</Link> and <Link href="/services/grassroots/poster-distribution">poster distribution</Link> in London and Kent around exactly that page.
        </p>
      </section>
    </GuideArticle>
  );
}
