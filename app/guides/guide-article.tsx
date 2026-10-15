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
  closingLabel = "Music PR",
  closingCopy = "PR and release campaigns for artists, labels and managers — built around the story, the music, the audience and the moment.",
}: {
  guide: GuideData;
  children: ReactNode;
  eyebrow?: string;
  heroCta?: { label: string; href: string };
  related?: readonly GuideLink[];
  relatedLabel?: string;
  closingLabel?: string;
  closingCopy?: string;
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
      variant="editorial"
      eyebrow={eyebrow}
      title={<>{guide.h1}</>}
      intro={guide.intro}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Guides", path: "/guides" },
        { name: guide.title, path: guide.path },
      ]}
      heroCta={heroCta}
      heroMeta={
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
      }
      heroMedia={
        <figure className="guide-figure">
          <Image
            src={guide.images.landscape.src}
            alt={guide.images.alt}
            width={guide.images.landscape.width}
            height={guide.images.landscape.height}
            sizes="(max-width: 980px) calc(100vw - 44px), 560px"
            priority
          />
        </figure>
      }
      closing={
        <section className="guide-closing" aria-labelledby="guide-closing-title">
          <div>
            <p className="eyebrow">{closingLabel}</p>
            <h2 id="guide-closing-title">{`${heroCta.label}.`}</h2>
            <p>{closingCopy}</p>
          </div>
          <Link className="button button-pink" href="/start-a-project">Start a project <Arrow /></Link>
        </section>
      }
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
      <article className="guide-copy">{children}</article>
      <nav className="guide-related" aria-label={relatedLabel}>
        <h2>KEEP READING.</h2>
        <ul>
          {relatedLinks.map(([label, href]) => (
            <li key={href}><Link href={href}>{label} <Arrow /></Link></li>
          ))}
        </ul>
      </nav>
    </InternalPage>
  );
}
