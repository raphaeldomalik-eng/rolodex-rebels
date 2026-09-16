import Image, { type StaticImageData } from "next/image";
import stickUpLogo from "../public/clients/stick-up-media.jpg";

type Client =
  | { name: string }
  | {
      name: string;
      src: StaticImageData | string;
      width?: number;
      height?: number;
      unoptimized?: boolean;
    };

const clients: readonly Client[] = [
  { name: "SJM" },
  { name: "DMPUK" },
  { name: "Live Nation", src: "/clients/live-nation.svg", width: 184, height: 40, unoptimized: true },
  { name: "Communion Music", src: "/clients/communion-music.svg", width: 385, height: 170, unoptimized: true },
  { name: "Kilimanjaro" },
  { name: "Stick-Up Media", src: stickUpLogo },
  { name: "Metropolis Music", src: "/clients/metropolis-music.svg", width: 143, height: 48, unoptimized: true },
];

export function ClientProof({
  heading = "Current clients include",
  theme = "light",
}: {
  heading?: string;
  theme?: "light" | "dark";
}) {
  const headingId = "current-clients-include";

  return (
    <section className={`client-proof client-proof-${theme}`} aria-labelledby={headingId}>
      <h2 id={headingId}>{heading}</h2>
      <ul className="client-proof-list">
        {clients.map((client) => (
          <li key={client.name} className="client-proof-item">
            {"src" in client ? (
              <Image
                src={client.src}
                alt={client.name}
                width={client.width}
                height={client.height}
                unoptimized={client.unoptimized}
                sizes="140px"
              />
            ) : (
              <span className="client-proof-name">{client.name}</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
