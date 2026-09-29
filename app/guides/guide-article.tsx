import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { InternalPage, Arrow } from "../internal-page";
import { JsonLd } from "../json-ld";
import { articleJsonLd, pageMetadata } from "../seo";
import { guidePages } from "./guides";

type GuideImage = { src: string; width: number; height: number };

export type GuideData = {
  path: string;
  title: string;
  h1: string;
  navLabel: string;
  description: string;
  intro: string;
  published: string;
  publishedLabel: string;
  modified?: string;
  modifiedLabel?: string;
  images: { alt: string; landscape: GuideImage; fourThree: GuideImage; square: GuideImage };
};

type GuideLink = readonly [label: string, href: string];

export function guideMetadata(guide: GuideData) {
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

export function GuideArticle({
  guide,
  children,
  eyebrow = "Guides / Music PR",
  heroCta = { label: "Talk through Music PR", href: "/services/music-pr" },
  related,
  relatedLabel = "Related Music PR reading",
}: {
  guide: GuideData;
  children: ReactNode;
  eyebrow?: string;
  heroCta?: { label: string; href: string };
  related?: readonly GuideLink[];
  relatedLabel?: string;
}) {
  const relatedLinks: readonly GuideLink[] = related ?? [
    ["Music PR campaigns", "/services/music-pr"],
    ...guidePages.filter((item) => item.path !== guide.path).map((item): GuideLink => [item.navLabel, item.path]),
  ];
  const articleImages = [guide.images.landscape, guide.images.fourThree, guide.images.square].map((image) => ({
    url: image.src,
    width: image.width,
    height: image.height,
    alt: guide.images.alt,
  }));

  return (
    <InternalPage
      className="guide-page"
      eyebrow={eyebrow}
      title={<>{guide.h1}</>}
      intro={guide.intro}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Guides", path: "/guides" },
        { name: guide.title, path: guide.path },
      ]}
      heroCta={heroCta}
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
          {guide.modified && guide.modifiedLabel && (
            <>
              {" · "}
              Updated <time dateTime={guide.modified}>{guide.modifiedLabel}</time>
            </>
          )}
        </p>
        {children}
      </article>
      <nav className="related-links" aria-label={relatedLabel}>
        <h2>KEEP READING.</h2>
        {relatedLinks.map(([label, href]) => (
          <Link href={href} key={href}>{label} <Arrow /></Link>
        ))}
      </nav>
    </InternalPage>
  );
}
