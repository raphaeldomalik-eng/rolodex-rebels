import Link from "next/link";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export type PracticalService = {
  name: string;
  copy: string;
  href: string;
};

export const practicalServices = [
  {
    name: "PR Campaigns",
    copy: "PR for artists, releases and live campaigns — from the story and press materials to media outreach and follow-up.",
    href: "/services/music-pr",
  },
  {
    name: "SEO & Search Discovery",
    copy: "Help people find your music, event or business online through better websites, content and search setup.",
    href: "/services/get-seen#seo-search-discovery",
  },
  {
    name: "Social Media Campaigns",
    copy: "Paid and organic social campaigns built around who you want to reach and what you want them to do.",
    href: "/services/get-seen#social-media-campaigns",
  },
  {
    name: "Website Design & Digital Builds",
    copy: "Websites and campaign pages for artists, events, festivals, venues and promoters.",
    href: "/services/digital-creative#website-design-digital-builds",
  },
  {
    name: "Leaflet & Flyer Distribution",
    copy: "Targeted leaflet and flyer distribution for gigs, festivals, tours, venues and music campaigns.",
    href: "/services/grassroots/flyer-distribution",
  },
  {
    name: "Poster Campaigns",
    copy: "Poster campaigns planned around the places and audiences that matter.",
    href: "/services/grassroots#poster-campaigns",
  },
  {
    name: "Print & Campaign Materials",
    copy: "Flyers, leaflets, posters and other materials for music and event campaigns.",
    href: "/services/grassroots#print-campaign-materials",
  },
  {
    name: "Venue & Promoter Support",
    copy: "Ticket campaigns, listings, websites, marketing and grassroots support for live programmes.",
    href: "/who-we-help/promoters-venues-festivals#venue-promoter-support",
  },
] as const satisfies readonly PracticalService[];

export const specialistServiceLinks = [
  ["Music Street Teams", "/services/grassroots/music-street-teams"],
  ["Festival Marketing", "/services/festival-marketing"],
  ["Artist Website Design", "/services/artist-website-design"],
  ["Event & Festival Websites", "/services/event-festival-websites"],
] as const;

export const venuePromoterSupport = [
  {
    name: "Ticketing & On-Sale Support",
    copy: "Help with on-sale planning, ticket pages, ticket links and the marketing around selling the show.",
    href: "/services/sell-the-show",
  },
  {
    name: "Event Diary & Listings",
    copy: "Keep your event listings, artist details, on-sale information and programme pages up to date.",
    href: "/services/event-festival-websites",
  },
  {
    name: "Event & Venue Websites",
    copy: "Websites, event pages and campaign pages for venues, promoters and festivals.",
    href: "/services/event-festival-websites",
  },
  {
    name: "Marketing Campaigns",
    copy: "Announcement, on-sale and ticket campaigns across PR, social, email and live promotion.",
    href: "/services/festival-marketing",
  },
  {
    name: "Audience Growth",
    copy: "Give people a reason to sign up so you can reach them again for the next date.",
    href: "/services/build-your-audience",
  },
  {
    name: "Guest & Industry",
    copy: "Invitations, RSVPs, reminders and follow-up for guests and industry, handled as part of the campaign.",
    href: "/services/sell-the-show",
  },
  {
    name: "Grassroots Promotion",
    copy: "Street teams, leaflet and flyer distribution, poster campaigns and local promotion where it fits.",
    href: "/services/grassroots",
  },
] as const satisfies readonly PracticalService[];

export function PracticalServiceList({
  items,
  labelledBy,
  label,
}: {
  items: readonly PracticalService[];
  labelledBy?: string;
  label?: string;
}) {
  return (
    <nav className="practical-service-list" aria-labelledby={labelledBy} aria-label={label}>
      {items.map((item) => (
        <Link href={item.href} key={item.name} data-service-label={item.name}>
          <span>
            <h3>{item.name}</h3>
            <p>{item.copy}</p>
          </span>
          <strong>Explore <Arrow /></strong>
        </Link>
      ))}
    </nav>
  );
}
