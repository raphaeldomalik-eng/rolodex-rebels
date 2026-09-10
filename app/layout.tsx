import type { Metadata, Viewport } from "next";
import { CookieConsent } from "./cookie-consent";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rolodexrebels.co.uk"),
  applicationName: "Rolodex Rebels",
  title: "Rolodex Rebels | Full-Service Music Marketing",
  description: "Joined-up music marketing for artists, releases and live music — from the streets to the screens.",
  alternates: { canonical: "/" },
  openGraph: { title: "Rolodex Rebels | Full-Service Music Marketing", description: "Joined-up music marketing for artists, releases and live music — from the streets to the screens.", url: "/", siteName: "Rolodex Rebels", type: "website", images: [{ url: "/images/13.jpg", width: 2500, height: 1667 }] },
  twitter: { card: "summary_large_image", title: "Rolodex Rebels | Full-Service Music Marketing", description: "Joined-up music marketing for artists, releases and live music — from the streets to the screens.", images: ["/images/13.jpg"] },
};

export const viewport: Viewport = {
  themeColor: "#090909",
  colorScheme: "dark light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-GB"><body>{children}<CookieConsent /></body></html>;
}
