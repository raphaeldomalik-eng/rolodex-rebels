import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InternalPage } from "../../internal-page";
import { JsonLd } from "../../json-ld";
import { pageMetadata, serviceJsonLd } from "../../seo";

const serviceData = {
  "get-heard": {
    name: "Get Heard",
    seoTitle: "Music PR & Release Marketing | Rolodex Rebels",
    title: "MUSIC PR, RELEASES & COMMUNICATIONS.",
    description: "Music PR and release marketing that turns artist stories into joined-up campaigns across media, creators, content and fan communications.",
    intro: "Build the story, content and communications that turn a release or campaign into something people notice, remember and share.",
    outcome: "Stronger stories. More meaningful attention. A campaign voice that stays consistent from first announcement to follow-up.",
    answer: "A Rolodex Rebels music release campaign can connect positioning, messaging, PR, creator activity, content and fan communications around one release plan. The mix depends on the artist, audience, timing and goal.",
    items: ["PR & release campaigns", "Storytelling & messaging", "Creator and influencer activity", "Content & fan communications"],
    offers: "Rebel Launch · Rebel Artist Growth",
    related: [["Music marketing for artists", "/who-we-help/artists"], ["Build a music audience", "/services/build-your-audience"], ["Improve digital visibility", "/services/get-seen"]],
  },
  "get-seen": {
    name: "Get Seen",
    seoTitle: "Digital Music Marketing & Promotion | Rolodex Rebels",
    title: "DIGITAL MUSIC MARKETING THAT GETS FOUND.",
    description: "Build music visibility through search and discovery, paid campaigns, social activity and targeted grassroots exposure working together.",
    intro: "Grow visibility across search, social, paid media and the real world—without scattering activity across disconnected channels.",
    outcome: "More discovery, more relevant reach and a clearer path from first impression to meaningful action.",
    answer: "Music digital marketing helps the right audience discover an artist, release or event and gives that attention somewhere useful to go. We connect search visibility, social activity, paid reach and grassroots exposure around one campaign goal.",
    items: ["Search & discovery", "Paid media", "Social visibility", "Grassroots exposure"],
    offers: "Rebel Launch · Campaign Intelligence",
    related: [["Music marketing for labels and managers", "/who-we-help/labels-managers"], ["Music PR and release marketing", "/services/get-heard"], ["Digital and creative services", "/services/digital-creative"]],
  },
  "build-your-audience": {
    name: "Build Your Audience",
    seoTitle: "Music Audience Growth & Fan Marketing | Rolodex Rebels",
    title: "TURN ATTENTION INTO FAN RELATIONSHIPS.",
    description: "Grow a music audience through insight, fan acquisition, segmentation, email, retargeting and retention built around lasting relationships.",
    intro: "Understand who your audience is, find more of the right people and build permission-based fan relationships you can grow over time.",
    outcome: "A clearer audience picture, stronger fan acquisition and relationships that carry from one campaign to the next.",
    answer: "Audience growth means learning who responds, reaching more of the right people and building permission-based fan relationships that last beyond a single release or show. Insight, acquisition, email and retargeting work together to strengthen the next campaign.",
    items: ["Audience Intelligence", "Fan CRM & segmentation", "Email & retargeting", "Acquisition & retention"],
    offers: "Rebel Artist Growth · Campaign Intelligence",
    related: [["Music marketing for artists", "/who-we-help/artists"], ["Ticket and tour marketing", "/services/sell-the-show"], ["Search and digital visibility", "/services/get-seen"]],
  },
  "sell-the-show": {
    name: "Sell The Show",
    seoTitle: "Concert, Tour & Ticket Marketing | Rolodex Rebels",
    title: "BUILD DEMAND. SELL TICKETS. GROW THE NEXT CROWD.",
    description: "Concert, tour and festival marketing that connects audience insight, campaign activity, guest communications and ticket conversion.",
    intro: "Build demand, convert attention and keep momentum moving from announcement to doors for tours, venues, festivals and promoters.",
    outcome: "Sharper ticket campaigns, stronger conversion and a growing audience you can reach for the next show.",
    answer: "A ticket-growth campaign works backwards from the event, audience and sales position. We connect announcement, search, paid and organic activity, fan communications, guest campaigns and grassroots promotion, then use response and sales signals to guide the next move.",
    items: ["Ticket growth", "Tour marketing", "Promoter & festival campaigns", "RSVP, guest & industry campaigns"],
    offers: "Rebel Tour · Promoter Growth · Festival Growth",
    related: [["Marketing for promoters, venues and festivals", "/who-we-help/promoters-venues-festivals"], ["Grassroots music promotion", "/services/grassroots"], ["Build your audience", "/services/build-your-audience"]],
  },
  grassroots: {
    name: "Grassroots",
    seoTitle: "Grassroots Music Promotion & Street Teams | Rolodex Rebels",
    title: "GRASSROOTS MUSIC PROMOTION. LOCAL. LOUD. EFFECTIVE.",
    description: "Grassroots music promotion delivered through street teams, leaflet drops, poster runs, hand-to-hand flyering, campuses and local activation.",
    intro: "Experienced teams put your campaign in the right streets, queues, campuses, venues and local communities—with accountable delivery.",
    outcome: "Real visibility in real places, delivered by people who understand the audience, the area and the moment.",
    answer: "Grassroots music marketing puts trained people and physical campaign materials into the places where an audience already moves. Street teams, posters, leaflets, campus activity and local activation can build awareness and support digital and ticket campaigns when timing, location and audience fit are right.",
    items: ["Street teams", "Leaflet drops", "Poster runs", "Hand-to-hand flyering", "Campus campaigns", "Local activation"],
    offers: "Grassroots Activation",
    related: [["Ticket and tour marketing", "/services/sell-the-show"], ["Marketing for promoters, venues and festivals", "/who-we-help/promoters-venues-festivals"], ["Digital music promotion", "/services/get-seen"]],
  },
  "digital-creative": {
    name: "Digital & Creative",
    seoTitle: "Music Websites, SEO & Creative | Rolodex Rebels",
    title: "MUSIC WEBSITES, SEO & CREATIVE THAT CONVERT.",
    description: "Websites, landing pages, music SEO, content and campaign assets that make artists and events easier to discover and act on.",
    intro: "Create the digital presence, campaign assets and conversion journey that make attention useful and keep every touchpoint on-message.",
    outcome: "A stronger digital presence, easier discovery and clearer journeys from interest to stream, sign-up, enquiry or sale.",
    answer: "A strong digital presence gives every campaign a clear destination. We build artist and music websites, landing pages, search foundations, content and creative assets that help audiences understand the message and take the next step.",
    items: ["Websites & landing pages", "SEO", "Content & creative assets", "Campaign infrastructure"],
    offers: "Digital Presence · Campaign Intelligence",
    related: [["Music marketing for artists", "/who-we-help/artists"], ["Search and digital visibility", "/services/get-seen"], ["Build a music audience", "/services/build-your-audience"]],
  },
} as const;

type ServiceSlug = keyof typeof serviceData;

export function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceData[slug as ServiceSlug];
  if (!service) return pageMetadata({ title: "Music Marketing Services | Rolodex Rebels", description: "Explore Rolodex Rebels music marketing services.", path: "/services" });
  return pageMetadata({ title: service.seoTitle, description: service.description, path: `/services/${slug}` });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceData[slug as ServiceSlug];
  if (!service) notFound();
  const path = `/services/${slug}`;

  return (
    <InternalPage
      eyebrow={`Services / ${service.name}`}
      title={<>{service.title}</>}
      intro={service.intro}
      breadcrumbs={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: service.name, path }]}
    >
      <JsonLd data={serviceJsonLd({ name: service.name, description: service.description, path })} />
      <section className="inner-split">
        <div><p className="eyebrow pink">What it means</p><h2>A CONNECTED CAMPAIGN.</h2></div>
        <div className="body-copy"><p>{service.answer}</p><p><strong>The outcome:</strong><br />{service.outcome}</p><p><strong>Ways to work with us:</strong><br />{service.offers}</p></div>
      </section>
      <section className="feature-grid">
        {service.items.map((item, index) => <article key={item}><span>0{index + 1}</span><h3>{item}</h3><p>Built into one connected campaign around your audience and goal.</p></article>)}
      </section>
      <nav className="related-links" aria-label="Related services and audiences">
        <h2>KEEP BUILDING THE CAMPAIGN.</h2>
        {service.related.map(([label, href]) => <Link href={href} key={href}>{label} ↗</Link>)}
      </nav>
      <Link className="back-link" href="/services">← Back to all services</Link>
    </InternalPage>
  );
}
