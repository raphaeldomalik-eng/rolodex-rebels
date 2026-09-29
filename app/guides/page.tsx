import type { Metadata } from "next";
import Link from "next/link";
import { InternalPage, Arrow } from "../internal-page";
import { pageMetadata } from "../seo";
import { guidePages } from "./guides";

export const metadata: Metadata = pageMetadata({
  title: "Music PR Guides | Rolodex Rebels",
  description: "Practical Music PR guidance from Rolodex Rebels: independent artists, UK campaign cost, and the difference between PR and promotion.",
  path: "/guides",
});

export default function GuidesPage() {
  return (
    <InternalPage
      className="guide-index-page"
      eyebrow="Guides"
      title={<>PRACTICAL GUIDANCE<br /><span>ON MUSIC PR.</span></>}
      intro="Specific answers for people deciding whether a press campaign belongs in the plan. Written from the way music campaigns actually run."
      breadcrumbs={[{ name: "Home", path: "/" }, { name: "Guides", path: "/guides" }]}
      heroCta={{ label: "Talk through Music PR", href: "/services/music-pr" }}
    >
      <section className="route-grid three-up" aria-label="Music PR guides">
        {guidePages.map((guide, index) => (
          <Link href={guide.path} key={guide.path}>
            <span>0{index + 1}</span>
            <h2>{guide.cardTitle}</h2>
            <p>{guide.card}</p>
            <strong>Read the guide <Arrow /></strong>
          </Link>
        ))}
      </section>
      <p className="guide-index-note">
        These notes sit beside the <Link href="/services/music-pr">Music PR service</Link>. The guides are for the decision. The service page is for commissioning the work.
      </p>
    </InternalPage>
  );
}
