import type { ReactNode } from "react";
import Link from "next/link";
import { InternalPage, Arrow } from "../internal-page";
import { JsonLd } from "../json-ld";
import { articleJsonLd, pageMetadata } from "../seo";
import { guidePages, type GuidePage } from "./guides";

export function guideMetadata(guide: GuidePage) {
  return pageMetadata({
    title: `${guide.title} | Rolodex Rebels`,
    description: guide.description,
    path: guide.path,
    openGraphType: "article",
    publishedTime: guide.published,
  });
}

export function GuideArticle({ guide, children }: { guide: GuidePage; children: ReactNode }) {
  const others = guidePages.filter((item) => item.path !== guide.path);

  return (
    <InternalPage
      className="guide-page"
      eyebrow="Guides / Music PR"
      title={<>{guide.h1}</>}
      intro={guide.intro}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Guides", path: "/guides" },
        { name: guide.title, path: guide.path },
      ]}
      heroCta={{ label: "Talk through Music PR", href: "/services/music-pr" }}
    >
      <JsonLd
        data={articleJsonLd({
          type: "Article",
          headline: guide.title,
          description: guide.description,
          path: guide.path,
          author: "Rolodex Rebels",
          datePublished: guide.published,
        })}
      />
      <article className="guide-copy">
        <p className="guide-meta">
          <strong>Rolodex Rebels</strong>
          <br />
          Published <time dateTime={guide.published}>{guide.publishedLabel}</time>
        </p>
        {children}
      </article>
      <nav className="related-links" aria-label="Related Music PR reading">
        <h2>KEEP READING.</h2>
        <Link href="/services/music-pr">Music PR campaigns <Arrow /></Link>
        {others.map((item) => (
          <Link href={item.path} key={item.path}>{item.navLabel} <Arrow /></Link>
        ))}
      </nav>
    </InternalPage>
  );
}
