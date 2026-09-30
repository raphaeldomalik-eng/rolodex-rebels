import Link from "next/link";
import { GuideArticle, guideMetadata } from "../guide-article";
import { distributionGuideArticleProps, distributionGuideByPath, distributionGuideRelated } from "../distribution-guides";

const guide = distributionGuideByPath("/guides/how-much-does-flyer-distribution-cost");

export const metadata = guideMetadata(guide);

export default function FlyerDistributionCostPage() {
  return (
    <GuideArticle guide={guide} {...distributionGuideArticleProps} related={distributionGuideRelated(guide.path)}>
      <section>
        <h2 id="short-answer">The short answer</h2>
        <p>
          A flyer distribution price means nothing until three things are fixed: the quantity, the geography and the method. Five thousand flyers handed out in one venue queue over one night is a different job from the same five thousand spread across several areas over a month. Anyone who gives you a number before asking those questions is guessing.
        </p>
        <p>
          Rolodex Rebels does not publish a price list for that reason. The method we describe is hand-to-hand distribution in agreed places — outside venues, in queues, in nightlife areas, on high streets and around shows — across <Link href="/services/grassroots/flyer-distribution">London and Kent</Link>. A letterbox drop is a different job, priced on different factors, and it is not what we offer.
        </p>
      </section>

      <section>
        <h2 id="what-changes-the-cost">What changes the cost</h2>
        <ul>
          <li><strong>Quantity.</strong> How many flyers or leaflets need to reach people. It matters, but it should be the result of the plan, not the starting point.</li>
          <li><strong>Geography.</strong> One catchment around one venue, or several areas. Travel between places costs time before a single flyer is handed over.</li>
          <li><strong>Density.</strong> How many of the right people are in the place at the time. A busy queue for the right show moves flyers faster than a quiet street, and to better-matched people.</li>
          <li><strong>Method.</strong> Hand-to-hand in agreed places is a person spending time with the audience. Other methods have other costs, and a quote should say which method it assumes.</li>
          <li><strong>Size and weight.</strong> A small card is quick to hand over and easy to carry. A folded leaflet or a heavier piece takes longer and limits how many one person can carry.</li>
          <li><strong>Timing.</strong> Evenings, weekends and the specific night of a show are when many audiences are out. Those are the sessions that matter, and they are not interchangeable with a weekday afternoon.</li>
          <li><strong>Duration.</strong> One session, several sessions in one week, or activity spread across the weeks before an event.</li>
          <li><strong>Targeting complexity.</strong> Reaching one venue&apos;s crowd is simpler than matching several audiences in several places. The more specific the audience, the more planning the quote should include.</li>
        </ul>
      </section>

      <section>
        <h2 id="print">If the quote includes print</h2>
        <p>
          If the quote includes coordinated print, that should be visible as its own part, so you can see what is paper and what is distribution. Rolodex Rebels can coordinate flyers and leaflets as part of a campaign — production and supply, not a print shop. If you are supplying your own print, the quote should say when and where it needs to arrive.
        </p>
      </section>

      <section>
        <h2 id="reporting">Reporting and evidence</h2>
        <p>
          If evidence is agreed on the brief, the quote should say what it is. Do not assume a particular kind of reporting is included because another supplier mentioned it. Ask what you will receive at the end, and get it written down.
        </p>
        <p>
          A QR code or dedicated URL on the flyer gives a countable signal: people scanned it or typed it in. That is useful. It does not prove every ticket or stream that followed came from the flyer, and a quote that promises that is overselling.
        </p>
      </section>

      <aside className="guide-callout">
        <p>
          <strong>Compare the assumptions first.</strong>
          Two quotes for &ldquo;5,000 flyers&rdquo; can be for completely different jobs. Put the quantity, places, method, sessions and print side by side before you compare the totals.
        </p>
      </aside>

      <section className="guide-warnings">
        <h2 id="warning-signs">Warning signs in a quote</h2>
        <ul>
          <li><strong>The method is not defined.</strong> &ldquo;Distribution&rdquo; with no account of how the flyers reach people.</li>
          <li><strong>The geography is vague.</strong> &ldquo;Across the area&rdquo; or &ldquo;county-wide&rdquo; without saying where, or why those places suit the audience.</li>
          <li><strong>There is no quantity, or no reason for it.</strong> A round number that does not connect to the audience, the places or the sessions.</li>
          <li><strong>Nothing about leftovers or impossible locations.</strong> Plans meet reality: a venue changes its night, a place turns out not to allow it, the weather turns. A good quote says what happens to unused flyers and how locations get changed.</li>
          <li><strong>Impossible certainty.</strong> Guaranteed ticket sales, guaranteed response rates, or proof that every sale came from the flyer. Physical distribution does not work like that, and nobody can promise it does.</li>
        </ul>
      </section>

      <section>
        <h2 id="getting-a-useful-quote">Getting a useful quote</h2>
        <p>
          Send what you are promoting, the date, who the audience is, whether the campaign is in London or Kent, a rough quantity if you have one, whether print is needed, and what you want people to do after they take a flyer. That is enough to scope the job properly.
        </p>
        <p>
          For a Kent campaign, <Link href="/services/grassroots/flyer-distribution/kent">flyer distribution in Kent</Link> explains how a local brief is usually shaped. If you are still working out the plan itself, start with <Link href="/guides/how-to-plan-a-flyer-poster-distribution-campaign">how to plan a flyer or poster campaign</Link>.
        </p>
      </section>
    </GuideArticle>
  );
}
