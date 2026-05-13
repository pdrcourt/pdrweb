import type { Metadata, Viewport } from "next";
import { Cinzel } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PDR Court | Online Dispute Resolution Platform — Fast, Secure & Legally Binding",
  description:
    "PDR Court is India's most advanced Online Dispute Resolution (ODR) platform offering Arbitration, Mediation, Negotiation and Conciliation. Resolve disputes 80% faster and at a fraction of the cost.",
  keywords: [
    "Online Dispute Resolution",
    "ODR",
    "Arbitration",
    "Mediation",
    "Dispute Resolution India",
    "Legal Tech",
    "ADR Platform",
    "PDR Court",
  ],
  authors: [{ name: "PDR Court Technologies" }],
  openGraph: {
    title: "PDR Court | Online Dispute Resolution Platform",
    description:
      "Fast, secure, and legally binding dispute resolution — entirely online. Join 500+ enterprises already using PDR Court.",
    url: "https://www.pdrcourt.in",
    siteName: "PDR Court",
    type: "website",
    images: [
      {
        url: "/images/hero-illustration.png",
        width: 1280,
        height: 720,
        alt: "PDR Court Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PDR Court | Online Dispute Resolution Platform",
    description: "India's most advanced ODR platform. Fast. Secure. Legally Binding.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://www.pdrcourt.in"),
  icons: {
    icon: "/images/PDR-Court_logo_without_text-removebg-preview.png",
    shortcut: "/images/PDR-Court_logo_without_text-removebg-preview.png",
    apple: "/images/PDR-Court_logo_without_text-removebg-preview.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${cinzel.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
