import type { Metadata } from "next";

export const SITE_URL = "https://rolodexrebels.co.uk";
export const SITE_NAME = "Rolodex Rebels";
export const DEFAULT_SOCIAL_IMAGE = {
  url: "/rolodex-rebels-social.jpg",
  width: 1200,
  height: 630,
  alt: "Rolodex Rebels — Get Seen, Get Heard, Get Results!",
};

type SocialImage = {
  url: string;
  width?: number;
  height?: number;
  alt: string;
};

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
  image?: string | SocialImage;
  openGraphType?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

export function pageMetadata({
  title,
  description,
  path,
  noIndex = false,
  image,
  openGraphType = "website",
  publishedTime,
  modifiedTime,
}: PageMetadataOptions): Metadata {
  const socialImage: SocialImage = !image
    ? DEFAULT_SOCIAL_IMAGE
    : typeof image === "string"
      ? { url: image, alt: title }
      : image;
  const openGraph = openGraphType === "article"
    ? {
        title,
        description,
        url: path,
        siteName: SITE_NAME,
        locale: "en_GB" as const,
        type: "article" as const,
        ...(publishedTime ? { publishedTime } : {}),
        ...(modifiedTime ? { modifiedTime } : {}),
        images: [socialImage],
      }
    : {
        title,
        description,
        url: path,
        siteName: SITE_NAME,
        locale: "en_GB" as const,
        type: "website" as const,
        images: [socialImage],
      };
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: noIndex
      ? { index: false, follow: true, googleBot: { index: false, follow: true } }
      : { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage.url],
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/rolodex-rebels-mark.png`,
    width: 1254,
    height: 1254,
  },
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
    "@id": `${SITE_URL}${path}#service`,
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
  images,
}: {
  type: "Article" | "BlogPosting";
  headline: string;
  description: string;
  path: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  images?: readonly { url: string; width: number; height: number; alt?: string }[];
}) {
  const pageUrl = `${SITE_URL}${path}`;
  const imageNodes = images && images.length > 0
    ? images.map((item) => ({
        "@type": "ImageObject",
        url: new URL(item.url, SITE_URL).toString(),
        width: item.width,
        height: item.height,
        ...(item.alt ? { caption: item.alt } : {}),
      }))
    : new URL(image, SITE_URL).toString();
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${pageUrl}#article`,
    headline,
    description,
    url: pageUrl,
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
    image: imageNodes,
    author: author === SITE_NAME
      ? { "@id": `${SITE_URL}/#organization` }
      : { "@type": "Organization", name: author, url: `${SITE_URL}/` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    datePublished,
    ...(dateModified ? { dateModified } : {}),
    inLanguage: "en-GB",
  };
}

export function faqJsonLd(items: readonly { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
