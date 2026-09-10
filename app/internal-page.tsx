import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "./site-chrome";
import rebelsMark from "../public/rolodex-rebels-mark.png";

export function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export function InternalPage({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  children: ReactNode;
}) {
  return (
    <main className="inner-site">
      <SiteHeader />
      <section className="inner-hero">
        <div className="inner-hero-copy">
          <p className="eyebrow light">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
        <div className="inner-logo-slab">
          <Image src={rebelsMark} alt="Rolodex Rebels" sizes="(max-width: 640px) 82vw, (max-width: 980px) 360px, 26vw" fetchPriority="high" />
          <span>LOCAL. LOUD. EFFECTIVE.</span>
        </div>
      </section>
      <div className="inner-content">{children}</div>
      <section className="inner-cta">
        <p className="eyebrow">Ready to make some noise?</p>
        <h2>LET&apos;S GET YOUR <span>MESSAGE OUT!</span></h2>
        <Link className="button button-dark" href="/start-a-project">Start a project <Arrow /></Link>
      </section>
      <SiteFooter />
    </main>
  );
}
