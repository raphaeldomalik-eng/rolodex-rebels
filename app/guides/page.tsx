import type { Metadata } from "next";
import Link from "next/link";
import { InternalPage, Arrow } from "../internal-page";
import { pageMetadata } from "../seo";
import { distributionGuidePages } from "./distribution-guides";
import { guidePages } from "./guides";

export const metadata: Metadata = pageMetadata({
  title: "Music PR Guides | Rolodex Rebels",
  description: "Practical Music PR guidance from Rolodex Rebels: independent artists, UK campaign cost, and the difference between PR and promotion — plus flyer and poster distribution.",
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

      <section className="guide-index-section" aria-labelledby="distribution-guides-title">
        <h2 id="distribution-guides-title">FLYERS AND POSTERS.</h2>
        <p className="guide-index-note">
          For campaigns that need to reach people in a place as well as online. These sit beside <Link href="/services/grassroots/flyer-distribution">flyer and leaflet distribution</Link> and <Link href="/services/grassroots/poster-distribution">poster distribution</Link>.
        </p>
        <div className="route-grid three-up">
          {distributionGuidePages.map((guide, index) => (
            <Link href={guide.path} key={guide.path}>
              <span>0{index + 1}</span>
              <h3>{guide.cardTitle}</h3>
              <p>{guide.card}</p>
              <strong>Read the guide <Arrow /></strong>
            </Link>
          ))}
        </div>
      </section>
    </InternalPage>
  );
}
