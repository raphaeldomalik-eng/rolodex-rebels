import type { MetadataRoute } from "next";
import { caseStudies, insightArticles } from "./content";
import { SITE_URL } from "./seo";

const staticRoutes = [
  ["/", "weekly", 1],
  ["/why-us", "monthly", 0.8],
  ["/services", "monthly", 0.9],
  ["/services/get-heard", "monthly", 0.8],
  ["/services/get-seen", "monthly", 0.8],
  ["/services/build-your-audience", "monthly", 0.8],
  ["/services/sell-the-show", "monthly", 0.8],
  ["/services/grassroots", "monthly", 0.8],
  ["/services/digital-creative", "monthly", 0.8],
  ["/who-we-help", "monthly", 0.8],
  ["/who-we-help/artists", "monthly", 0.8],
  ["/who-we-help/labels-managers", "monthly", 0.8],
  ["/who-we-help/promoters-venues-festivals", "monthly", 0.8],
  ["/start-a-project", "monthly", 0.8],
  ["/privacy", "yearly", 0.2],
  ["/cookies", "yearly", 0.2],
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = staticRoutes.map(([path, changeFrequency, priority]) => ({
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
