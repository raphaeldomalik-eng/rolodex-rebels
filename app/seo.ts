import type { Metadata } from "next";

export const SITE_URL = "https://rolodexrebels.co.uk";
export const SITE_NAME = "Rolodex Rebels";
export const DEFAULT_SOCIAL_IMAGE = {
  url: "/rolodex-rebels-social.jpg",
  width: 1200,
  height: 630,
  alt: "Rolodex Rebels — Get Seen, Get Heard, Get Results!",
};

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
  image?: string;
};

export function pageMetadata({ title, description, path, noIndex = false, image }: PageMetadataOptions): Metadata {
  const socialImages = image ? [{ url: image, alt: title }] : [DEFAULT_SOCIAL_IMAGE];
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: noIndex
      ? { index: false, follow: true, googleBot: { index: false, follow: true } }
      : { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "en_GB",
      type: "website",
      images: socialImages,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image ?? DEFAULT_SOCIAL_IMAGE.url],
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/rolodex-rebels-logo-transparent.png`,
  description: "A UK music marketing agency helping artists, labels, managers, promoters, venues and festivals grow audiences, launch music, increase visibility and sell tickets.",
  email: "joanne@rolodexrebels.co.uk",
  telephone: "+44 7934 419997",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "new business enquiries",
    email: "joanne@rolodexrebels.co.uk",
    telephone: "+44 7934 419997",
    areaServed: "GB",
    availableLanguage: "English",
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  description: "Full-service music marketing built on decades of PR and grassroots experience.",
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-GB",
};

export type BreadcrumbItem = { name: string; path: string };

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function serviceJsonLd({
  name,
  description,
  path,
  areaServed,
}: {
  name: string;
  description: string;
  path: string;
  areaServed?: string | false;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${path}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    ...(areaServed === false
      ? {}
      : { areaServed: areaServed
        ? { "@type": "Place", name: areaServed }
        : { "@type": "Country", name: "United Kingdom" } }),
    audience: { "@type": "Audience", audienceType: "Music industry" },
  };
}

export function articleJsonLd({
  type,
  headline,
  description,
  path,
  author,
  datePublished,
  dateModified,
  image = DEFAULT_SOCIAL_IMAGE.url,
}: {
  type: "Article" | "BlogPosting";
  headline: string;
  description: string;
  path: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    headline,
    description,
    url: `${SITE_URL}${path}`,
    mainEntityOfPage: `${SITE_URL}${path}`,
    image: new URL(image, SITE_URL).toString(),
    author: { "@type": "Organization", name: author, url: `${SITE_URL}/` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    datePublished,
    dateModified: dateModified ?? datePublished,
    inLanguage: "en-GB",
  };
}
