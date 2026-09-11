import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "../../content";
import { InternalPage } from "../../internal-page";
import { JsonLd } from "../../json-ld";
import { articleJsonLd, pageMetadata } from "../../seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) return { robots: { index: false, follow: false } };
  return pageMetadata({ title: `${study.title} | Rolodex Rebels Results`, description: study.description, path: `/results/${slug}`, image: study.image });
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) notFound();
  const path = `/results/${slug}`;

  return (
    <InternalPage eyebrow="Results / Case study" title={<>{study.title}</>} intro={study.description} breadcrumbs={[{ name: "Home", path: "/" }, { name: "Results", path: "/results" }, { name: study.title, path }]}>
      <JsonLd data={articleJsonLd({ type: "Article", headline: study.title, description: study.description, path, author: "Rolodex Rebels", datePublished: study.published, dateModified: study.modified, image: study.image })} />
      <section className="evidence-grid">
        <article><span>01</span><h2>Challenge</h2><p>{study.challenge}</p></article>
        <article><span>02</span><h2>What Rolodex Rebels did</h2><p>{study.work}</p></article>
        <article><span>03</span><h2>Result</h2><p>{study.result}</p></article>
      </section>
      {(study.clientType || study.campaignType || study.context || study.location || study.timeframe || study.objective || study.channels?.length || study.grassrootsActivity || study.digitalActivity || study.audienceActivity || study.verifiedMetrics?.length || study.lessons || study.next || study.testimonial) && <section className="policy-copy">
        {study.clientType && <><h2>Client type</h2><p>{study.clientType}</p></>}
        {study.campaignType && <><h2>Campaign type</h2><p>{study.campaignType}</p></>}
        {study.context && <><h2>Campaign context</h2><p>{study.context}</p></>}
        {study.location && <><h2>Location</h2><p>{study.location}</p></>}
        {study.timeframe && <><h2>Timeframe</h2><p>{study.timeframe}</p></>}
        {study.objective && <><h2>Objective</h2><p>{study.objective}</p></>}
        {Boolean(study.channels?.length) && <><h2>Channels used</h2><p>{study.channels?.join(", ")}</p></>}
        {study.grassrootsActivity && <><h2>Grassroots activity</h2><p>{study.grassrootsActivity}</p></>}
        {study.digitalActivity && <><h2>Digital activity</h2><p>{study.digitalActivity}</p></>}
        {study.audienceActivity && <><h2>Audience activity</h2><p>{study.audienceActivity}</p></>}
        {Boolean(study.verifiedMetrics?.length) && <><h2>Verified metrics</h2>{study.verifiedMetrics?.map((metric) => <p key={metric.label}><strong>{metric.label}:</strong> {metric.value}</p>)}</>}
        {study.lessons && <><h2>What we learned</h2><p>{study.lessons}</p></>}
        {study.next && <><h2>What happened next</h2><p>{study.next}</p></>}
        {study.testimonial && <><h2>Testimonial</h2><blockquote><p>“{study.testimonial.quote}”</p><cite>{study.testimonial.attribution}</cite></blockquote></>}
      </section>}
      {Boolean(study.images?.length) && <section className="case-gallery" aria-label="Campaign imagery">
        {study.images?.map((image) => <figure key={image.src}>
          <Image src={image.src} alt={image.alt} width={1600} height={1000} sizes="(max-width: 760px) 100vw, 50vw" />
          {image.caption && <figcaption>{image.caption}</figcaption>}
        </figure>)}
      </section>}
      <nav className="related-links" aria-label="Related pages"><h2>EXPLORE THE CAMPAIGN.</h2><Link href={study.service.path}>{study.service.name} ↗</Link><Link href={study.audience.path}>{study.audience.name} ↗</Link><Link href="/start-a-project">Start a project ↗</Link></nav>
    </InternalPage>
  );
}
