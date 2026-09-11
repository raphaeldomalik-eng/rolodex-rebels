import type { MetadataRoute } from "next";
import { caseStudies, insightArticles } from "./content";
import { indexableRoutes } from "./indexable-routes";
import { SITE_URL } from "./seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = indexableRoutes.map(([path, changeFrequency, priority]) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency,
    priority,
  }));

  if (caseStudies.length > 0) {
    routes.push({ url: `${SITE_URL}/results`, changeFrequency: "monthly", priority: 0.8 });
    routes.push(...caseStudies.map((item) => ({ url: `${SITE_URL}/results/${item.slug}`, lastModified: item.modified ?? item.published, changeFrequency: "monthly" as const, priority: 0.7 })));
  }

  if (insightArticles.length > 0) {
    routes.push({ url: `${SITE_URL}/insights`, changeFrequency: "weekly", priority: 0.7 });
    routes.push(...insightArticles.map((item) => ({ url: `${SITE_URL}/insights/${item.slug}`, lastModified: item.modified ?? item.published, changeFrequency: "monthly" as const, priority: 0.6 })));
  }

  return routes;
}
