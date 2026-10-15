import Link from "next/link";
import { GuideArticle, guideMetadata } from "../guide-article";
import { distributionGuideArticleProps, distributionGuideByPath, distributionGuideRelated } from "../distribution-guides";

const guide = distributionGuideByPath("/guides/flyer-vs-poster-distribution");

export const metadata = guideMetadata(guide);

export default function FlyerVsPosterPage() {
  return (
    <GuideArticle guide={guide} {...distributionGuideArticleProps} related={distributionGuideRelated(guide.path)}>
      <section>
        <h2 id="the-difference">The difference in one line</h2>
        <p>
          A flyer is handed to a person and goes wherever they go: into a pocket, onto a fridge, into the bin at the end of the street. A poster stays where it was put, in a place that has agreed to display it, and works on whoever passes. That single difference explains most of what follows.
        </p>
        <p>
          Neither is universally better. The question is which one fits the audience, the place and the moment the campaign needs.
        </p>
      </section>

      <section>
        <h2 id="interaction">Interaction</h2>
        <p>
          A handed flyer involves a moment between two people. Someone offers it, the other person decides to take it, and for a second the campaign has their attention. That moment is the strength of <Link href="/services/grassroots/flyer-distribution">hand-to-hand flyer distribution</Link>, and it is why the person handing it over, and where they stand, matter so much.
        </p>
        <p>
          A poster has no such moment. It relies on being noticed. That makes the location and the design do all the work.
        </p>
      </section>

      <section>
        <h2 id="dwell">Dwell time</h2>
        <p>
          A flyer is read in seconds, then either kept or dropped. A poster in a shop or a music store can be seen repeatedly by the same regulars, and by anyone waiting at the counter. For an audience that keeps returning to the same places, a poster gets more than one look.
        </p>
      </section>

      <section>
        <h2 id="message">How much the message can carry</h2>
        <p>
          A flyer can carry more. It is held at reading distance, it has a back, and a QR code is already in someone&apos;s hand next to their phone. A poster is usually read in passing, from further away. It needs the name, the date, the place and one next step, and very little else.
        </p>
        <p>
          If the campaign needs a lot of explaining, a poster is the wrong place to do it. Put the detail on the page the poster or flyer points to.
        </p>
      </section>

      <section>
        <h2 id="events-and-fixed-sites">Events and fixed sites</h2>
        <p>
          Flyers suit moments when the audience gathers: a queue, a show night, a busy nightlife area, a festival crowd. Posters suit places the audience returns to over time: shops, music stores and other suitable locations. <Link href="/services/grassroots/poster-distribution">Poster distribution</Link> is planned around those fixed places, agreed for each brief.
        </p>
      </section>

      <section>
        <h2 id="duration">Duration</h2>
        <p>
          A flyer campaign happens in sessions. When the session ends, nothing new is handed out. A poster keeps working for as long as the location displays it — which is agreed with the location, not assumed. That makes posters useful for a build-up over several weeks, and flyers useful for hitting a specific night.
        </p>
      </section>

      <aside className="guide-callout">
        <p>
          <strong>Posters go where they are allowed.</strong>
          Poster distribution means permitted locations. Unauthorised flyposting is a different thing, and not part of the service described here. Rules vary by area; this guide is not legal advice.
        </p>
      </aside>

      <section>
        <h2 id="qr-codes">QR codes and what they prove</h2>
        <p>
          Both can carry a QR code or a short URL. A scan is useful because it can be counted: some people saw the flyer or poster and acted on it. It is not proof of a sale. People see a poster, hear about the show from a friend, and buy a ticket a week later on a laptop. The scan catches some of the response, not all of it, and it should be read that way.
        </p>
      </section>

      <section>
        <h2 id="using-both">When to use both</h2>
        <p>
          Many live campaigns use both at different points. Posters in shops and music stores near the venue in the weeks before a show, then flyers outside the venue and around the area in the final week, is a common shape. The poster builds familiarity; the flyer catches people at the moment they can act.
        </p>
        <p>
          For a Kent campaign, <Link href="/services/grassroots/flyer-distribution/kent">flyer distribution in Kent</Link> explains how a local brief is usually shaped. To plan either format from the start, read <Link href="/guides/how-to-plan-a-flyer-poster-distribution-campaign">how to plan a flyer or poster campaign</Link>.
        </p>
      </section>
    </GuideArticle>
  );
}
