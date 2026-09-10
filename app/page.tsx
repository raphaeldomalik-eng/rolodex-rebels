import Image from "next/image";

const reasons = [
  ["TARGETED EXPOSURE", "We put your message in front of the right people."],
  ["PROVEN RESULTS", "Affordable campaigns that deliver real impact."],
  ["CREATIVE & RELIABLE", "Fresh ideas, professional service, every time."],
  ["LOCAL. LOUD. EFFECTIVE.", "From the streets to the screens we make noise that matters."],
];
const services = [
  ["PRESS RELEASES", "Get your story out there with professional press release distribution.", "from £100"],
  ["SOCIAL MEDIA PLACEMENTS", "Boost your brand with strategic social media shoutouts and placements.", "from £100"],
  ["LEAFLET DROPS", "Targeted leaflet distribution to get your message straight to your target audience.", "from £130"],
  ["POSTER RUNS", "High-traffic poster campaigns in popular locations.", "from £130"],
  ["HAND TO HAND FLYERING", "Direct, personal, and highly effective street marketing.", "from £47"],
];

export default function Home() {
  return <main>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="site-header"><a className="header-logo" href="#top" aria-label="Rolodex Rebels home">ROLODEX REBELS</a><nav aria-label="Primary navigation"><a href="#about">Why us</a><a href="#services">Services</a><a href="#contact">Contact</a></nav></header>
    <section id="top" className="hero" aria-labelledby="hero-heading"><Image className="hero-image" src="/images/13.jpg" alt="A crowd at a live music event" fill priority sizes="100vw" /><div className="hero-overlay" /><div id="main-content" className="hero-content content-width"><Image src="/images/03.png" alt="Rolodex Rebels PR Marketing" width={700} height={844} className="hero-mark" priority /><div><p className="eyebrow">PR & GRASSROOTS MARKETING</p><h1 id="hero-heading">Get Seen, Get Heard, <span>Get Results!</span></h1><p className="hero-copy">We help the music industry get the exposure they deserve through powerful PR and grassroots marketing that delivers real results.</p><a className="button button-light" href="#contact">Let&apos;s make some noise <span aria-hidden="true">↘</span></a></div></div></section>
    <section id="about" className="section section-light" aria-labelledby="about-heading"><div className="content-width split-layout"><div><p className="eyebrow eyebrow-pink">WHY ROLODEX REBELS?</p><h2 id="about-heading">Why work with us?</h2><p className="lead">BIG OR SMALL, WE GET YOU NOTICED.</p></div><div className="reason-grid">{reasons.map(([title, copy]) => <article className="reason" key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
    <section id="services" className="section section-pink" aria-labelledby="services-heading"><div className="content-width"><p className="eyebrow">WHAT WE DO</p><h2 id="services-heading">Our Services.</h2><div className="service-grid">{services.map(([title, copy, price], index) => <article className="service" key={title}><span className="service-number">0{index + 1}</span><h3>{title}</h3><p>{copy}</p><strong>{price}</strong></article>)}</div></div></section>
    <section id="contact" className="contact" aria-labelledby="contact-heading"><div className="content-width contact-inner"><p className="eyebrow eyebrow-pink">READY TO BE HEARD?</p><h2 id="contact-heading">Let&apos;s get your <span>message out!</span></h2><div className="contact-links"><a href="tel:+447934419997"><small>CALL US</small><strong>07934 419 997</strong></a><a href="mailto:joanne@rolodexrebels.co.uk"><small>EMAIL US</small><strong>joanne@rolodexrebels.co.uk</strong></a><a href="https://www.facebook.com/rolodexrebels.co.uk" target="_blank" rel="noreferrer"><small>FOLLOW US</small><strong>facebook.com/rolodexrebels.co.uk</strong></a></div></div></section>
    <footer className="site-footer"><Image src="/images/03.png" alt="Rolodex Rebels PR Marketing" width={280} height={338} className="footer-mark" /><p>Copyright Rolodex Rebels 2026<br /><a href="/privacy">Privacy & cookies</a><br />Website created by <a href="https://parkerscreative.co.uk/" target="_blank" rel="noreferrer">Parkers Creative</a></p></footer>
  </main>;
}
