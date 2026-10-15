import Link from "next/link";
import { GuideArticle, guideMetadata } from "../guide-article";
import { guideByPath } from "../guides";

const guide = guideByPath("/guides/music-pr-vs-music-promotion");

export const metadata = guideMetadata(guide);

export default function MusicPrVsPromotionPage() {
  return (
    <GuideArticle guide={guide}>
      <section>
        <h2 id="music-pr">Music PR</h2>
        <p>
          Music PR is earned media. Someone pitches a story, a record or a live moment to editors, journalists, producers and creators who can ignore it. The work is the angle, the materials, the choice of who to approach, the outreach, the follow-up, and an honest report of what happened.
        </p>
        <p>
          It is not a payment for coverage. A premiere, a feature, a review or a radio play is the outlet’s decision. <Link href="/services/music-pr">Music PR at Rolodex Rebels</Link> is that job: targeted press for artists, releases and relevant live projects, including independent artists when the record and the timing support it.
        </p>
      </section>

      <section>
        <h2 id="promotion">Promotion</h2>
        <p>
          Promotion is the wider act of putting the music, the show or the campaign in front of people. PR can be one part of it. So can a paid post, a mailing-list note, a flyer outside the right venue, or a ticket page that makes the next step obvious. “We need promotion” is not yet a brief. It is a prompt to ask which of those jobs is actually missing.
        </p>
        <p>
          <Link href="/services/get-heard">Release marketing and communications</Link> is the broader Rolodex Rebels brief around a release: the story, the public moments, the content and the fan updates. Music PR sits inside that when press is required. It does not replace the rest.
        </p>
      </section>

      <section>
        <h2 id="advertising">Advertising</h2>
        <p>
          Advertising is paid placement. You pay for the space or the impression, within the rules of that platform, and you control the message more directly than you ever will with a journalist. It can be the right tool when you know who you need to reach and you have somewhere useful to send them.
        </p>
        <p>
          It fails when the destination is weak, the audience is a guess, or the spend is being used to compensate for a story that has not been worked out. Ads do not become PR because the caption sounds editorial. They are still ads, and they should be planned as ads. On this site that work lives with <Link href="/services/get-seen">search, social and paid visibility</Link>, not on the Music PR page.
        </p>
      </section>

      <section>
        <h2 id="social">Social media</h2>
        <p>
          Social is where a lot of music is discovered, and where an artist talks to people in their own voice. Organic posts, stories, short video and paid social are distribution and conversation. They are not a press campaign, even when a journalist happens to see them.
        </p>
        <p>
          PR can give social something real to share — a feature, an interview, a review with a link. Social cannot manufacture that coverage by posting the press release to the artist’s own account. Use social to talk to fans and to point at the work. Use PR when you need a third party to decide the story is worth their audience.
        </p>
      </section>

      <section>
        <h2 id="playlists">Playlist pitching</h2>
        <p>
          Playlist pitching asks a curator, an editor or a DSP contact to add a track to a playlist. Some of that is editorial and some of it is a commercial or in-house process. It is adjacent to PR when a music writer also programs a playlist. It is not the same job as securing a feature, and a fee that blurs the two should say which one you are buying.
        </p>
        <p>
          Rolodex Rebels does not treat playlist placement as a thing that can be promised inside a PR campaign. If a pitch list includes playlist curators, that should be named as its own activity, with the same rule as press: the other person decides.
        </p>
      </section>

      <section>
        <h2 id="grassroots">Grassroots promotion</h2>
        <p>
          Grassroots promotion puts a leaflet, flyer or poster where the audience already is: outside a venue, in a queue, on a high street, or around a show. It is often the right physical tool for a gig, club night, festival or local release, and <Link href="/services/grassroots/flyer-distribution">hand-to-hand flyer distribution</Link> is the most direct version of it.
        </p>
        <p>
          It does not write the feature. A flyer can carry a QR code to the music or the tickets. It cannot make a magazine care. Where place and moment matter, that work is <Link href="/services/grassroots">grassroots promotion</Link> — leaflets, flyers, posters and local distribution — planned separately from the press list and sometimes run in the same week. Street teams and campus campaigns are a different job, and not one Rolodex Rebels currently offers.
        </p>
      </section>

      <section>
        <h2 id="together">How these pieces work together</h2>
        <p>
          A release week often wants more than one of these, in a deliberate order. Press needs a story and a lead time. Ads and social need a destination and a reason to click. Street work needs the right pavement and the right night. Fan email needs people who have already agreed to hear from you — that relationship is <Link href="/services/build-your-audience">audience building</Link>, and it outlasts a single review.
        </p>
        <p>
          The waste is running all of them because a menu exists. The useful version is one objective — a release people can find, a show that sells, a story that makes sense — and only the activities that move that objective.
        </p>
      </section>

      <aside className="guide-callout">
        <p>
          <strong>One job or several.</strong>
          Buy PR when you need earned media and the assets and dates can support it. Buy promotion around it when people who see the story still need a path to listen, sign up or buy a ticket. Do not buy five channels to avoid choosing.
        </p>
      </aside>

      <section>
        <h2 id="one-or-several">When a campaign needs one, and when it needs several</h2>
        <ul>
          <li><strong>Press alone</strong> can be enough when the goal is a specific story, the music is ready, and there is already a simple place for a new listener to go.</li>
          <li><strong>Promotion without PR</strong> can be enough for a ticket push, a local show or a release aimed at people you can already reach. Not every record needs a journalist.</li>
          <li><strong>PR plus a destination</strong> matters when coverage would otherwise land on a dead link, an empty bio, or no mailing-list option.</li>
          <li><strong>PR plus grassroots</strong> matters when the story is a live moment and the people you need are in a place, not only on a site.</li>
          <li><strong>Ads on top</strong> make sense once the message and the page are good enough that paying to show them is rational. They are a poor fix for an unclear release.</li>
        </ul>
        <p>
          If you are still deciding whether an independent project is ready for the press part, start with <Link href="/guides/music-pr-for-independent-artists">music PR for independent artists</Link>. If the question is the fee rather than the channel, read <Link href="/guides/how-much-does-music-pr-cost-uk">what music PR costs in the UK</Link>. If you already know you need the press campaign, go to <Link href="/services/music-pr">Music PR</Link>.
        </p>
      </section>
    </GuideArticle>
  );
}
