import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PDR Court — Online Dispute Resolution Platform",
    short_name: "PDR Court",
    description:
      "India's most advanced Online Dispute Resolution platform — Arbitration, Mediation, Conciliation and Negotiation, resolved faster and more affordably.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf8f5",
    theme_color: "#834009",
    lang: "en-IN",
    categories: ["business", "legal", "productivity"],
    icons: [
      {
        src: "/images/PDR_LOGO_WITH_BG_-_Color_Dark-removebg-preview.png",
        sizes: "any",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
