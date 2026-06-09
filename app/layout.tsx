import type { Metadata, Viewport } from "next";
import { Fraunces } from "next/font/google";
import "./globals.css";

// Fraunces — the single editorial serif used across the entire site:
// headings, body, navigation — everything shares this one family.
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const SITE_URL = "https://www.pdrcourt.in";
const SITE_NAME = "PDR Court";
const SITE_DESCRIPTION =
  "PDR Court is India's most advanced Online Dispute Resolution (ODR) platform offering Arbitration, Mediation, Negotiation and Conciliation. Resolve disputes faster and at a fraction of the cost.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "PDR Court | Online Dispute Resolution Platform — Fast, Secure & Legally Binding",
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Legal Technology",
  keywords: [
    "Online Dispute Resolution",
    "ODR",
    "ODR platform India",
    "Arbitration",
    "Online Arbitration",
    "Mediation",
    "Conciliation",
    "Negotiation",
    "Dispute Resolution India",
    "Alternative Dispute Resolution",
    "ADR Platform",
    "Legal Tech",
    "PDR Court",
  ],
  openGraph: {
    title: "PDR Court | Online Dispute Resolution Platform",
    description:
      "Fast, secure, and legally binding dispute resolution — entirely online. Arbitration, Mediation, Conciliation and Negotiation on one platform.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero-illustration.png",
        width: 1280,
        height: 720,
        alt: "PDR Court — Online Dispute Resolution Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PDR Court | Online Dispute Resolution Platform",
    description:
      "India's most advanced ODR platform. Fast. Secure. Legally Binding.",
    images: ["/images/hero-illustration.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/images/PDR_LOGO_WITH_BG_-_Color_Dark-removebg-preview.png",
    shortcut: "/images/PDR_LOGO_WITH_BG_-_Color_Dark-removebg-preview.png",
    apple: "/images/PDR_LOGO_WITH_BG_-_Color_Dark-removebg-preview.png",
  },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#834009",
};

// ─────────────────────────────────────────────────────────────────────────
// Structured data (JSON-LD) — Organization + WebSite. Helps Google build a
// rich knowledge entity for PDR Court across search results.
// ─────────────────────────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: "PDR COURT",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/PDR_LOGO_WITH_BG_-_Color_Dark-removebg-preview.png`,
      },
      description: SITE_DESCRIPTION,
      email: "legal@pdrcourt.com",
      telephone: "+91-8976955540",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-8976955540",
        email: "legal@pdrcourt.com",
        contactType: "customer support",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Unit No. 208, 2nd Floor, Globe Business Park, Khuntavali, Ambernath",
        addressLocality: "Thane",
        addressRegion: "Maharashtra",
        postalCode: "421501",
        addressCountry: "IN",
      },
      sameAs: [
        "https://www.facebook.com/pdrcourt",
        "https://www.instagram.com/pdrcourt/",
        "https://www.linkedin.com/company/pdrcourt",
        "https://x.com/pdrcourt",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: "en-IN",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className="scroll-smooth">
      <body
        className={`${fraunces.variable} font-sans`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
