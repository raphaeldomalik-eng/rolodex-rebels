import type { Metadata } from "next";
import { InternalPage, Arrow } from "../internal-page";
import { ProjectBriefForm } from "./project-brief-form";

export const metadata: Metadata = { title: "Start a Project | Rolodex Rebels" };

export default function StartProject() {
  return (
    <InternalPage eyebrow="Start a project" title={<>LET&apos;S MAKE<br /><span>SOME NOISE.</span></>} intro="Tell us what you’re launching, growing or trying to sell. We’ll help shape the right campaign around your audience, timing and ambition.">
      <section className="contact-grid">
        <div className="contact-card"><p className="eyebrow pink">Email us</p><h2>JOANNE@ROLODEXREBELS.CO.UK</h2><p>Share your goal, timing, location and what is already in motion. We’ll come back with the clearest next step.</p><a className="button button-dark" href="mailto:joanne@rolodexrebels.co.uk?subject=Start%20a%20Rolodex%20Rebels%20project">Email Rolodex Rebels <Arrow /></a></div>
        <div className="contact-card"><p className="eyebrow pink">Call us</p><h2>07934 419 997</h2><p>Need to move quickly? Call to talk through a release, live campaign, grassroots activation or broader growth plan.</p><a className="text-link" href="tel:+447934419997">Call now <Arrow /></a></div>
      </section>
      <ProjectBriefForm />
    </InternalPage>
  );
}
