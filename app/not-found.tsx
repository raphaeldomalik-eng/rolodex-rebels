import Link from "next/link";
import { SiteFooter, SiteHeader } from "./site-chrome";

export default function NotFound() {
  return (
    <main className="inner-site">
      <SiteHeader />
      <section className="inner-hero">
        <div className="inner-hero-copy">
          <p className="eyebrow light">404 / Track not found</p>
          <h1>WRONG TURN.<br /><span>RIGHT ENERGY.</span></h1>
          <p>That page has moved, never existed or is not ready for the crowd yet.</p>
          <Link className="button button-pink" href="/">Back to Rolodex Rebels</Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
