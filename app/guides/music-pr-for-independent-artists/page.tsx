import Link from "next/link";
import { GuideArticle, guideMetadata } from "../guide-article";
import { guideByPath } from "../guides";

const guide = guideByPath("/guides/music-pr-for-independent-artists");

export const metadata = guideMetadata(guide);

export default function MusicPrForIndependentArtistsPage() {
  return (
    <GuideArticle guide={guide}>
      <section>
        <h2 id="who-it-helps">Who music PR is useful for</h2>
        <p>
          Music PR is useful when there is something specific for a journalist, editor, producer or creator to respond to. That might be a debut with a clear point of view, a second record that shows a change, a collaboration, a tour that gives the story a date, or a project that sits naturally in a scene people already cover.
        </p>
        <p>
          Independent does not mean “too small for press”. It means there is often no label press officer, no radio plugger and no spare pair of hands. PR can fill that gap for a defined window. It cannot invent a career, a fanbase or a reason to write.
        </p>
        <p>
          It tends to earn its place for self-releasing artists, small-label projects and managers who need outside press support around one release or live run. It is a weaker fit when the only brief is “get us coverage” and nobody can say coverage of what.
        </p>
      </section>

      <section>
        <h2 id="when-to-wait">When PR may not yet be worthwhile</h2>
        <p>Waiting is sometimes the professional decision. PR is usually too early when:</p>
        <ul>
          <li>The recording is still being finished, or the mix you would send is not the mix you want judged.</li>
          <li>There is no release date, or the date moves every time someone asks.</li>
          <li>The artist cannot describe the record in a few concrete sentences.</li>
          <li>The only targets are national front covers, and nothing about the project gives those desks a reason to care yet.</li>
          <li>The budget would be better spent finishing the assets, the website or the live plan that the press would need to point to.</li>
        </ul>
        <p>
          A short campaign can still be right for a local story, a specialist blog or a scene title. What does not work is buying a national-shaped campaign for a project that is not ready to be written about.
        </p>
      </section>

      <section>
        <h2 id="what-needs-to-be-ready">What needs to be ready before outreach</h2>
        <p>Before anyone is pitched, a campaign needs a stable set of facts and a way for the recipient to hear the music. At minimum:</p>
        <ul>
          <li>A confirmed release date, or an honest embargo if the date cannot be public yet.</li>
          <li>The music itself, in a listenable form. A private stream is fine. A “link coming next week” is not.</li>
          <li>One clear angle. Not a biography of every gig since school. The thing that makes this release the one to write about now.</li>
          <li>Credits that are correct: who played, who produced, which label or distributor, which city the artist is actually based in.</li>
          <li>A destination. Streaming links, a pre-save, live dates, or a simple page where a curious reader can go next.</li>
        </ul>
        <p>
          If those pieces are still moving, the first week of a PR fee gets spent chasing them. That is preparation, not press.
        </p>
      </section>

      <section>
        <h2 id="release-lead-times">When a campaign should start</h2>
        <p>
          Editorial time is not the same as release-week time. Online news can move quickly. Features, specialist print, radio shows and longer interviews usually cannot. A practical single campaign often needs several weeks of active outreach before release day, commonly in the region of six to eight weeks where the targets are online and specialist rather than long-lead print.
        </p>
        <p>
          Albums, tours and anything aimed at features need longer, because the desk is planning further ahead and will want the full context, not a one-track teaser with missing artwork. If the music arrives ten days before release, the realistic options shrink to whatever can still turn around. Say that at the start. Do not pay for a feature campaign the calendar has already ruled out.
        </p>
        <p>
          Lead time also depends on what else is in market that week. A crowded Friday does not become quieter because the PR started late.
        </p>
      </section>

      <section>
        <h2 id="press-assets">Press assets that actually get used</h2>
        <p>Assets are not decoration. They are what lets someone publish without a second chase. Useful sets usually include:</p>
        <ul>
          <li>Two or three current photographs, credited, in a size a site or paper can actually use. Phone snaps from a dark room rarely survive contact with an art editor.</li>
          <li>A short biography and a shorter version. The short one is the one people paste.</li>
          <li>Artwork, a press release or one-sheet, and correct links.</li>
          <li>Quotes that sound like the artist, not like a template. One specific sentence beats a paragraph of adjectives.</li>
          <li>Live dates, if live activity is part of the story. A review with nowhere to see the artist is a missed step.</li>
        </ul>
        <p>
          Send a tidy link, not a folder of unnamed exports. If a picture cannot be used, or a claim in the biography is not true, take it out before the pitch goes.
        </p>
      </section>

      <section>
        <h2 id="music-and-positioning">Music quality and positioning</h2>
        <p>
          PR does not improve a mix. If the record is not ready, press will not kindly invent the missing bit. Positioning is different from hype: it is the honest frame that helps the right person hear the record in the right context. Genre, scene, city, collaborators and what changed since the last release are framing. “Unique sound” and “boundary-pushing” are not.
        </p>
        <p>
          A dance record and a folk record should not share a target list. Neither should a first single and a tenth album. The position has to match the music you are actually releasing, including the stage you are at. Over-claiming is easy for a journalist to check, and it burns the next pitch.
        </p>
      </section>

      <aside className="guide-callout">
        <p>
          <strong>What you can expect.</strong>
          A serious campaign can put the story in front of relevant people and follow up properly. It cannot promise a feature, a premiere, a playlist or a radio play. Editors decide. If a quote guarantees coverage, it is not describing PR.
        </p>
      </aside>

      <section>
        <h2 id="realistic-expectations">Realistic expectations</h2>
        <p>
          For many independent releases, a good result is a small number of relevant pieces: a specialist site, a local or scene story, a playlist or radio show that actually fits, an interview that gives the artist a sentence worth keeping. National coverage happens when the story and the timing support it. It is not the entry level of the service.
        </p>
        <p>
          Silence is also a result. A well-aimed campaign can come back with no coverage because the desks were full, the angle was not strong enough, or the record did not convince the person who heard it. The useful debrief says who was approached, who responded, and what that means for the next release. A report that only lists “emails sent” does not.
        </p>
      </section>

      <section>
        <h2 id="media-targeting">How media targeting works</h2>
        <p>
          Targeting starts from the music and the reader, not from a famous masthead. Relevant can mean a genre site, a city title, a show that plays this kind of record, or a writer who has already covered the scene. A long list of people who do not cover this music is not a stronger campaign. It is easier to count and harder to defend.
        </p>
        <p>
          UK campaigns often mix specialist, regional and national targets in different proportions. The mix should be agreed before outreach, including what is out of scope. If the artist cares about one city, one community or one format, that belongs in the brief. So does anything that must not be said.
        </p>
      </section>

      <section>
        <h2 id="what-you-still-do">What the artist still has to do</h2>
        <p>PR does not replace the artist’s own channels. During a campaign the artist, or their manager, still needs to:</p>
        <ul>
          <li>Answer questions quickly. A feature dies in the gap between “can you do Thursday?” and a reply on Monday.</li>
          <li>Approve facts, photos and quotes. Slow approvals are lost slots.</li>
          <li>Post the coverage when it lands, and point people to the music or the show.</li>
          <li>Keep the release date, links and live information accurate.</li>
          <li>Talk to the people who already care. Press is a poor substitute for a mailing list or a show.</li>
        </ul>
        <p>
          The publicist can draft, chase and advise. They cannot be the artist in an interview, and they should not be the only person telling fans the record exists. The difference between press and the rest of a campaign is covered in <Link href="/guides/music-pr-vs-music-promotion">music PR and music promotion</Link>.
        </p>
      </section>

      <section>
        <h2 id="how-we-approach-it">How Rolodex Rebels approaches independent campaigns</h2>
        <p>
          An independent Music PR campaign at Rolodex Rebels is scoped around the record, the dates and the media that could reasonably care. The work is the angle, the materials, a considered target list, outreach, follow-up, and a clear account of what happened. It is not a mass send, and coverage is not offered as a guarantee.
        </p>
        <p>
          The same company works across live music as well as releases. Current clients listed publicly include SJM, DMPUK, Live Nation, Communion Music, Kilimanjaro, Stick-Up Media and Metropolis Music. That is live-industry work. It is not a stack of press cuttings, and it is not a promise that an independent single will be pitched like an arena tour.
        </p>
        <p>
          If the music, the date and the assets are in place, the next step is a conversation about scope. Cost depends on that scope, which is why <Link href="/guides/how-much-does-music-pr-cost-uk">music PR cost in the UK</Link> is a separate question from whether PR is the right tool. When it is, the commercial page is <Link href="/services/music-pr">Music PR</Link>.
        </p>
      </section>
    </GuideArticle>
  );
}
