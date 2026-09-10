import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InternalPage } from "../../internal-page";

const serviceData = {
  "get-heard": {
    eyebrow: "Get Heard",
    title: "MAKE THE STORY LAND.",
    intro: "Build the story, content and communications that turn a release or campaign into something people notice, remember and share.",
    outcome: "Stronger stories. More meaningful attention. A campaign voice that stays consistent from first announcement to follow-up.",
    items: ["PR & release campaigns", "Storytelling & messaging", "Creator and influencer activity", "Content & fan communications"],
    offers: "Rebel Launch · Rebel Artist Growth",
  },
  "get-seen": {
    eyebrow: "Get Seen",
    title: "BE THERE WHEN PEOPLE LOOK.",
    intro: "Grow visibility across search, social, paid media and the real world—without scattering activity across disconnected channels.",
    outcome: "More discovery, more relevant reach and a clearer path from first impression to meaningful action.",
    items: ["Search & discovery", "Paid media", "Social visibility", "Grassroots exposure"],
    offers: "Rebel Launch · Campaign Intelligence",
  },
  "build-your-audience": {
    eyebrow: "Build Your Audience",
    title: "TURN ATTENTION INTO A RELATIONSHIP.",
    intro: "Understand who your audience is, find more of the right people and build permission-based fan relationships you can grow over time.",
    outcome: "A clearer audience picture, stronger fan acquisition and relationships that carry from one campaign to the next.",
    items: ["Audience Intelligence", "Fan CRM & segmentation", "Email & retargeting", "Acquisition & retention"],
    offers: "Rebel Artist Growth · Campaign Intelligence",
  },
  "sell-the-show": {
    eyebrow: "Sell The Show",
    title: "TURN INTEREST INTO ATTENDANCE.",
    intro: "Build demand, convert attention and keep momentum moving from announcement to doors for tours, venues, festivals and promoters.",
    outcome: "Sharper ticket campaigns, stronger conversion and a growing audience you can reach for the next show.",
    items: ["Ticket growth", "Tour marketing", "Promoter & festival campaigns", "RSVP, guest & industry campaigns"],
    offers: "Rebel Tour · Promoter Growth · Festival Growth",
  },
  grassroots: {
    eyebrow: "Grassroots",
    title: "LOCAL. LOUD. EFFECTIVE.",
    intro: "Experienced teams put your campaign in the right streets, queues, campuses, venues and local communities—with accountable delivery.",
    outcome: "Real visibility in real places, delivered by people who understand the audience, the area and the moment.",
    items: ["Street teams", "Leaflet drops", "Poster runs", "Hand-to-hand flyering", "Campus campaigns", "Local activation"],
    offers: "Grassroots Activation",
  },
  "digital-and-creative": {
    eyebrow: "Digital & Creative",
    title: "GIVE THE CAMPAIGN SOMEWHERE TO LAND.",
    intro: "Create the digital presence, campaign assets and conversion journey that make attention useful and keep every touchpoint on-message.",
    outcome: "A stronger digital presence, easier discovery and clearer journeys from interest to stream, sign-up, enquiry or sale.",
    items: ["Websites & landing pages", "SEO", "Content & creative assets", "Campaign infrastructure"],
    offers: "Digital Presence · Campaign Intelligence",
  },
} as const;

type ServiceSlug = keyof typeof serviceData;

export function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceData[slug as ServiceSlug];
  return { title: service ? `${service.eyebrow} | Rolodex Rebels` : "Services | Rolodex Rebels" };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceData[slug as ServiceSlug];
  if (!service) notFound();
  return (
    <InternalPage eyebrow={`Services / ${service.eyebrow}`} title={<>{service.title}</>} intro={service.intro}>
      <section className="inner-split">
        <div><p className="eyebrow pink">The outcome</p><h2>WHAT CHANGES.</h2></div>
        <div className="body-copy"><p>{service.outcome}</p><p><strong>Ways to work with us:</strong><br />{service.offers}</p></div>
      </section>
      <section className="feature-grid">
        {service.items.map((item, index) => <article key={item}><span>0{index + 1}</span><h3>{item}</h3><p>Built into one connected campaign around your audience and goal.</p></article>)}
      </section>
      <a className="back-link" href="/services">← Back to all services</a>
    </InternalPage>
  );
}
