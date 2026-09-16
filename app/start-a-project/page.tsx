import type { Metadata } from "next";
import { InternalPage, Arrow } from "../internal-page";
import { pageMetadata } from "../seo";
import { ProjectBriefForm } from "./project-brief-form";

export const metadata: Metadata = pageMetadata({
  title: "Start a Music Marketing Project | Rolodex Rebels",
  description: "Tell Rolodex Rebels what you are promoting, who you want to reach and what you need help with — PR, social media, websites, ticket campaigns or grassroots.",
  path: "/start-a-project",
});

export default function StartProject() {
  return (
    <InternalPage eyebrow="Start a project" title={<>LET&apos;S MAKE<br /><span>SOME NOISE.</span></>} intro="Tell us what you're promoting, who you want to reach and what you need help with." breadcrumbs={[{ name: "Home", path: "/" }, { name: "Start a Project", path: "/start-a-project" }]}>
      <section className="contact-grid">
        <div className="contact-card"><p className="eyebrow pink">Email us</p><h2>JOANNE@ROLODEXREBELS.CO.UK</h2><p>Share what you&apos;re promoting, key dates, location, budget range and anything already live. We will come back with the clearest next step.</p><a className="button button-dark" href="mailto:joanne@rolodexrebels.co.uk?subject=Start%20a%20Rolodex%20Rebels%20project">Email Rolodex Rebels <Arrow /></a></div>
        <div className="contact-card"><p className="eyebrow pink">Call us</p><h2>07934 419 997</h2><p>Need to move quickly? Call to talk through a release, live show, street campaign or website.</p><a className="text-link" href="tel:+447934419997">Call now <Arrow /></a></div>
      </section>
      <ProjectBriefForm />
    </InternalPage>
  );
}
