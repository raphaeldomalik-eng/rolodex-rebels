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
    copy: "Music PR and release campaigns for artists, labels and managers — from positioning and press materials to targeted outreach and campaign follow-up.",
    href: "/services/music-pr",
  },
  {
    name: "SEO & Search Discovery",
    copy: "Search strategy, site structure, metadata and content clarity that help music, events and organisations become easier to find and understand.",
    href: "/services/get-seen#seo-search-discovery",
  },
  {
    name: "Social Media Campaigns",
    copy: "Paid and organic social campaigns built around a defined audience, message and action — rather than posting simply to stay busy.",
    href: "/services/get-seen#social-media-campaigns",
  },
  {
    name: "Website Design & Digital Builds",
    copy: "Websites and campaign destinations for artists, events, festivals, venues, promoters and music businesses — built around what audiences need to find, understand and do.",
    href: "/services/digital-creative#website-design-digital-builds",
  },
  {
    name: "Leaflet & Flyer Distribution",
    copy: "Audience-led leaflet and flyer distribution for gigs, festivals, tours, venues and music campaigns.",
    href: "/services/grassroots/flyer-distribution",
  },
  {
    name: "Poster Campaigns",
    copy: "Targeted poster activity around relevant venues, music areas, campuses and agreed campaign locations.",
    href: "/services/grassroots#poster-campaigns",
  },
  {
    name: "Print & Campaign Materials",
    copy: "Flyers, leaflets, posters and event materials coordinated as part of a music or event campaign.",
    href: "/services/grassroots#print-campaign-materials",
  },
  {
    name: "Venue & Promoter Support",
    copy: "Practical support for live programmes — ticketing and on-sale support, event diary and listings, websites, campaigns and grassroots promotion.",
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
    copy: "Ticket campaign support, on-sale planning, ticket journeys and sales-position activity around the live programme.",
    href: "/services/sell-the-show",
  },
  {
    name: "Event Diary & Listings",
    copy: "Keep event listings, programme pages, on-sale information, artist details and campaign links current as the diary moves.",
    href: "/services/event-festival-websites",
  },
  {
    name: "Event & Venue Websites",
    copy: "Websites, event pages and campaign landing pages for venues, promoters and festivals.",
    href: "/services/event-festival-websites",
  },
  {
    name: "Marketing Campaigns",
    copy: "Announcement, on-sale, programme and ticket-pace campaigns across digital, PR and connected live marketing.",
    href: "/services/festival-marketing",
  },
  {
    name: "Audience Growth",
    copy: "Permission-based capture, communication and retention so today’s ticket buyers can be reached for the next date.",
    href: "/services/build-your-audience",
  },
  {
    name: "Guest & Industry",
    copy: "Invitations, RSVP, reminders and follow-up as part of the wider campaign — not an isolated admin task.",
    href: "/services/sell-the-show",
  },
  {
    name: "Grassroots Promotion",
    copy: "Street teams, leaflet and flyer distribution, poster campaigns and local activation where the audience and place fit.",
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
