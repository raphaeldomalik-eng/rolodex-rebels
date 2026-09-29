import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "./site-chrome";
import { JsonLd } from "./json-ld";
import { breadcrumbJsonLd, type BreadcrumbItem } from "./seo";
import rebelsMark from "../public/rolodex-rebels-mark.png";
import grassrootsFlyering from "../public/grassroots-flyering.jpg";

export function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export function InternalPage({
  className,
  variant = "commercial",
  eyebrow,
  title,
  intro,
  heroCta,
  heroMeta,
  heroMedia,
  closing,
  breadcrumbs,
  children,
}: {
  className?: string;
  variant?: "commercial" | "editorial";
  eyebrow: string;
  title: ReactNode;
  intro: string;
  heroCta?: { label: string; href: string };
  heroMeta?: ReactNode;
  heroMedia?: ReactNode;
  closing?: ReactNode;
  breadcrumbs: BreadcrumbItem[];
  children: ReactNode;
}) {
  const editorial = variant === "editorial";

  return (
    <main className={["inner-site", editorial && "inner-site-editorial", className].filter(Boolean).join(" ")}>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <SiteHeader />
      <section className={editorial ? "inner-hero editorial-hero" : "inner-hero"}>
        <div className="inner-hero-copy">
          <p className="eyebrow light">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
          {heroMeta}
          {heroCta && (editorial
            ? <Link className="editorial-hero-link" href={heroCta.href}>{heroCta.label} <Arrow /></Link>
            : <Link className="button button-pink" href={heroCta.href}>{heroCta.label} <Arrow /></Link>)}
        </div>
        {heroMedia ?? (!editorial && (
          <div className="inner-logo-slab">
            <Image src={rebelsMark} alt="Rolodex Rebels" sizes="(max-width: 640px) 82vw, (max-width: 980px) 360px, 26vw" fetchPriority="high" loading="eager" />
            <span>LOCAL. LOUD. EFFECTIVE.</span>
          </div>
        ))}
      </section>
      <div className="inner-content">{children}</div>
      {closing ?? (
        <section className="inner-cta">
          <p className="eyebrow">Ready to make some noise?</p>
          <h2>LET&apos;S GET YOUR <span>MESSAGE OUT!</span></h2>
          <Link className="button button-dark" href="/start-a-project">Start a project <Arrow /></Link>
        </section>
      )}
      <SiteFooter />
    </main>
  );
}

export function DistributionHeroImage() {
  return (
    <figure className="inner-photo-slab">
      <Image src={grassrootsFlyering} alt="Street promoter holding a stack of flyers" sizes="(max-width: 640px) 90vw, (max-width: 980px) 440px, 34vw" placeholder="blur" fetchPriority="high" loading="eager" />
      <figcaption>LOCAL. LOUD. EFFECTIVE.</figcaption>
    </figure>
  );
}
