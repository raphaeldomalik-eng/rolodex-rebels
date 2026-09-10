export type CaseStudy = {
  slug: string;
  title: string;
  description: string;
  challenge: string;
  work: string;
  result: string;
  service: { name: string; path: string };
  audience: { name: string; path: string };
  published: string;
  modified?: string;
  image?: string;
  context?: string;
  location?: string;
  timeframe?: string;
  lessons?: string;
  next?: string;
};

export type InsightArticle = {
  slug: string;
  title: string;
  description: string;
  author: string;
  published: string;
  modified?: string;
  image?: string;
  sections: { heading: string; copy: string }[];
  relatedService: { name: string; path: string };
};

// Publish only verified, approved original content. Sitemap and page generation update automatically.
export const caseStudies: CaseStudy[] = [];
export const insightArticles: InsightArticle[] = [];
