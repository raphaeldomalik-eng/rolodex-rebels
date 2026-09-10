import type { Metadata } from "next";
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
      {(study.context || study.location || study.timeframe || study.lessons || study.next) && <section className="policy-copy">
        {study.context && <><h2>Campaign context</h2><p>{study.context}</p></>}
        {study.location && <><h2>Location</h2><p>{study.location}</p></>}
        {study.timeframe && <><h2>Timeframe</h2><p>{study.timeframe}</p></>}
        {study.lessons && <><h2>What we learned</h2><p>{study.lessons}</p></>}
        {study.next && <><h2>What happened next</h2><p>{study.next}</p></>}
      </section>}
      <nav className="related-links" aria-label="Related pages"><h2>EXPLORE THE CAMPAIGN.</h2><Link href={study.service.path}>{study.service.name} ↗</Link><Link href={study.audience.path}>{study.audience.name} ↗</Link><Link href="/start-a-project">Start a project ↗</Link></nav>
    </InternalPage>
  );
}
