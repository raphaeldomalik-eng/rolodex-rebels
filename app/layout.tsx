import type { Metadata, Viewport } from "next";
import { AnalyticsTracker } from "./analytics-tracker";
import { CookieConsent } from "./cookie-consent";
import { JsonLd } from "./json-ld";
import { organizationJsonLd, SITE_URL } from "./seo";
import "./globals.css";

const googleVerification = process.env.GOOGLE_SITE_VERIFICATION;
const bingVerification = process.env.BING_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "Rolodex Rebels",
  title: "Music Marketing Agency UK | Rolodex Rebels",
  description: "Rolodex Rebels is a UK music marketing agency helping artists, labels, managers, promoters, venues and festivals grow audiences, launch music and sell tickets.",
  category: "Music marketing",
  verification: {
    ...(googleVerification ? { google: googleVerification } : {}),
    ...(bingVerification ? { other: { "msvalidate.01": bingVerification } } : {}),
  },
};

export const viewport: Viewport = {
  themeColor: "#090909",
  colorScheme: "dark light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-GB"><body><JsonLd data={organizationJsonLd} />{children}<AnalyticsTracker /><CookieConsent /></body></html>;
}
