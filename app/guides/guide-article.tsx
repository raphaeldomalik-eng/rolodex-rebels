import type { ReactNode } from "react";
import Image from "next/image";
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
    modifiedTime: guide.modified,
    image: {
      url: guide.images.landscape.src,
      width: guide.images.landscape.width,
      height: guide.images.landscape.height,
      alt: guide.images.alt,
    },
  });
}

export function GuideArticle({ guide, children }: { guide: GuidePage; children: ReactNode }) {
  const others = guidePages.filter((item) => item.path !== guide.path);
  const articleImages = [guide.images.landscape, guide.images.fourThree, guide.images.square].map((image) => ({
    url: image.src,
    width: image.width,
    height: image.height,
    alt: guide.images.alt,
  }));

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
          dateModified: guide.modified,
          images: articleImages,
        })}
      />
      <article className="guide-copy">
        <figure className="guide-figure">
          <Image
            src={guide.images.landscape.src}
            alt={guide.images.alt}
            width={guide.images.landscape.width}
            height={guide.images.landscape.height}
            sizes="(max-width: 800px) 100vw, 720px"
            priority
          />
        </figure>
        <p className="guide-meta">
          <Link href="/"><strong>Rolodex Rebels</strong></Link>
          <br />
          Published <time dateTime={guide.published}>{guide.publishedLabel}</time>
          {" · "}
          Updated <time dateTime={guide.modified}>{guide.modifiedLabel}</time>
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
