import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rolodexrebels.co.uk"),
  title: "Rolodex Rebels | PR & Grassroots Marketing",
  description: "Powerful PR and grassroots marketing for the music industry. Get seen, get heard, get results.",
  alternates: { canonical: "/" },
  openGraph: { title: "Rolodex Rebels | PR & Grassroots Marketing", description: "Powerful PR and grassroots marketing for the music industry.", url: "/", siteName: "Rolodex Rebels", type: "website", images: [{ url: "/images/13.jpg", width: 2500, height: 1667 }] },
  twitter: { card: "summary_large_image", title: "Rolodex Rebels | PR & Grassroots Marketing", description: "Powerful PR and grassroots marketing for the music industry.", images: ["/images/13.jpg"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-GB"><body>{children}</body>
    <Script src="https://www.googletagmanager.com/gtag/js?id=G-EZSJL5TG8N" strategy="afterInteractive" />
    <Script id="google-analytics" strategy="afterInteractive">
      {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-EZSJL5TG8N');`}
    </Script>
  </html>;
}
