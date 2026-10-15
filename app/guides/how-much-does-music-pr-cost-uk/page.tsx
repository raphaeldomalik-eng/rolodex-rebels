import Link from "next/link";
import { GuideArticle, guideMetadata } from "../guide-article";
import { guideByPath } from "../guides";

const guide = guideByPath("/guides/how-much-does-music-pr-cost-uk");

export const metadata = guideMetadata(guide);

export default function MusicPrCostPage() {
  return (
    <GuideArticle guide={guide}>
      <section>
        <h2 id="no-single-price">There is no single public price</h2>
        <p>
          Rolodex Rebels does not publish a fixed Music PR fee. A one-track announcement and an album campaign with interviews, regional angles and a tour are not the same amount of work, and a quote that pretends they are is not comparable with anything. If you need a number for this release, <Link href="/start-a-project">send the brief</Link> — the music, the dates, what already exists, and what you want press to do.
        </p>
        <p>
          What follows is how UK music PR fees are usually built, so a quote can be compared with another quote rather than with a rumour.
        </p>
      </section>

      <section>
        <h2 id="what-drives-cost">What drives the cost</h2>
        <p>These are the factors that change the work, and therefore the fee.</p>
        <ul>
          <li><strong>Duration.</strong> A two-week push around release day is a different job from six or eight weeks of outreach, follow-up and interview handling. Longer is not automatically better. It is more time on the desk.</li>
          <li><strong>How many releases.</strong> A single, a single plus a video, or an EP rolled out track by track each add pitch cycles. Album campaigns often include more than one public moment. Price a campaign, not “PR” as a vague monthly extra.</li>
          <li><strong>Media scope.</strong> Specialist online titles, regional press, radio, long-lead features and broadcast are different relationships. A wider or more senior target list takes more research and more follow-up. A longer list of irrelevant contacts does not justify a higher fee.</li>
          <li><strong>Complexity.</strong> Embargoes, multiple territories, sensitive claims, several spokespeople, or a story that has to be rebuilt from a messy biography all add hours before the first pitch.</li>
          <li><strong>Assets and preparation.</strong> If photos, credits, a biography and a listenable link already exist, the campaign can start on the story. If they do not, someone is being paid to assemble them. That should be visible in the quote, not hidden inside “PR”.</li>
          <li><strong>Specialist versus broad outreach.</strong> A tightly aimed campaign at the desks that cover this music can cost serious money because the judgement is the work. A cheap blast to hundreds of addresses is a different product. Do not compare them as two prices for the same thing.</li>
        </ul>
      </section>

      <section>
        <h2 id="what-a-campaign-includes">What a professional campaign should include</h2>
        <p>Before you compare fees, check that each quote is describing the same job. A workable Music PR campaign usually states:</p>
        <ul>
          <li>The release or live project, and the dates the work covers.</li>
          <li>The angle, or the process for agreeing it with you.</li>
          <li>The kind of media in scope, and anything deliberately left out.</li>
          <li>Who supplies the assets, and what happens if they are late.</li>
          <li>Outreach and follow-up, including how interview requests will be handled.</li>
          <li>What you will be told afterwards: who was approached, who responded, what ran, and what did not.</li>
          <li>A plain statement that coverage cannot be guaranteed.</li>
        </ul>
        <p>
          Strategy, targeting and reporting are part of the fee. They are not a deluxe add-on you only get if the campaign “goes well”.
        </p>
      </section>

      <aside className="guide-callout">
        <p>
          <strong>A low number with no scope is not a saving.</strong>
          If the quote does not say how long the work runs, what media it covers, or what you receive at the end, you cannot tell whether it is inexpensive or simply unfinished.
        </p>
      </aside>

      <section className="guide-warnings">
        <h2 id="warning-signs">Warning signs when you compare quotes</h2>
        <ul>
          <li>Guaranteed features, premieres, playlists or radio play. Those decisions are not the publicist’s to sell.</li>
          <li>A target described only as a number of emails. Volume is not a media strategy.</li>
          <li>No questions about the music, the date, the assets or the audience.</li>
          <li>Playlist pitching, ads or street distribution folded into “PR” without saying which is which. Those are different jobs, set out in <Link href="/guides/music-pr-vs-music-promotion">music PR versus music promotion</Link>.</li>
          <li>A fee that assumes national coverage for a project that is not in a position to support it. Paying for the wrong ceiling is expensive even when the invoice looks small.</li>
          <li>No named person responsible for the outreach. “The team” is not a contact when a journalist replies.</li>
        </ul>
      </section>

      <section>
        <h2 id="cheapest-is-not-the-value">Why the cheapest offer is not automatically the best value</h2>
        <p>
          The cheapest quote wins only if it buys the campaign you need. A low fee that starts late, uses a generic list, or reports nothing leaves the next release no better informed. A higher fee can still be poor value if it is aimed at media the project cannot realistically reach.
        </p>
        <p>
          Value is the fit between the music, the timing, the targets and the time being bought. Readiness changes that sum. An artist who still needs the story, the photos and a realistic target list should read <Link href="/guides/music-pr-for-independent-artists">music PR for independent artists</Link> before treating a fee as the only decision.
        </p>
        <p>
          Rolodex Rebels will say if PR is the wrong spend. The <Link href="/services/music-pr">Music PR</Link> page is the place to start that conversation. Bring the release date, what is already finished, and the result you actually need. We would rather scope a smaller, accurate campaign than invent a price for a job that has not been described.
        </p>
      </section>
    </GuideArticle>
  );
}
