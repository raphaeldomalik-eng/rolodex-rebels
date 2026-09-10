import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { insightArticles } from "../../content";
import { InternalPage } from "../../internal-page";
import { JsonLd } from "../../json-ld";
import { articleJsonLd, pageMetadata } from "../../seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return insightArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = insightArticles.find((item) => item.slug === slug);
  if (!article) return { robots: { index: false, follow: false } };
  return pageMetadata({ title: `${article.title} | Rolodex Rebels`, description: article.description, path: `/insights/${slug}`, image: article.image });
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = insightArticles.find((item) => item.slug === slug);
  if (!article) notFound();
  const path = `/insights/${slug}`;

  return (
    <InternalPage eyebrow="Insights" title={<>{article.title}</>} intro={article.description} breadcrumbs={[{ name: "Home", path: "/" }, { name: "Insights", path: "/insights" }, { name: article.title, path }]}>
      <JsonLd data={articleJsonLd({ type: "BlogPosting", headline: article.title, description: article.description, path, author: article.author, datePublished: article.published, dateModified: article.modified, image: article.image })} />
      <article className="policy-copy">
        <p><strong>By {article.author}</strong><br />Published <time dateTime={article.published}>{article.published}</time>{article.modified && <> · Updated <time dateTime={article.modified}>{article.modified}</time></>}</p>
        {article.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2><p>{section.copy}</p></section>)}
      </article>
      <nav className="related-links" aria-label="Related pages"><h2>PUT THE THINKING TO WORK.</h2><Link href={article.relatedService.path}>{article.relatedService.name} ↗</Link><Link href="/services">Explore all services ↗</Link><Link href="/start-a-project">Start a project ↗</Link></nav>
    </InternalPage>
  );
}
