import type { Metadata } from "next";
import { InternalPage } from "../internal-page";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({
  title: "Music Marketing Results & Case Studies | Rolodex Rebels",
  description: "See how Rolodex Rebels structures music marketing evidence around the challenge, the campaign delivered and the verified result.",
  path: "/results",
  noIndex: true,
});

export default function Results() {
  return (
    <InternalPage eyebrow="Results" title={<>NOISE IS GOOD.<br /><span>RESULTS ARE BETTER.</span></>} intro="We judge campaigns by what changed: stronger discovery, deeper fan relationships, more ticket demand and clearer decisions about what comes next." breadcrumbs={[{ name: "Home", path: "/" }, { name: "Results", path: "/results" }]}>
      <section className="evidence-grid">
        <article><span>01</span><h2>Challenge</h2><p>The commercial problem, audience gap or campaign pressure we were asked to solve.</p></article>
        <article><span>02</span><h2>What Rolodex Rebels did</h2><p>The joined-up strategy, channels, creative and on-the-ground work used to move it.</p></article>
        <article><span>03</span><h2>Result</h2><p>The verified outcome, what we learned and how that evidence shaped the next move.</p></article>
      </section>
      <section className="pink-panel"><p className="eyebrow">Our evidence standard</p><h2>REAL CAMPAIGNS. REAL EVIDENCE.</h2><p>Client names, testimonials and metrics are published only with approval. No inflated numbers. No vanity reporting. Just proof that helps people make better marketing decisions.</p></section>
    </InternalPage>
  );
}
