import React from "react";
import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import SimplePageTemplate from "@/components/pages/SimplePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: "Dispute Resolution via Negotiation — Book Launch | PDR COURT",
  description:
    "Explore the official PDR COURT companion book on Negotiation, Mediation, Conciliation, and Alternate Dispute Resolution.",
  path: "/book-launch",
});

export default function BookLaunchPage() {
  return (
    <SimplePageTemplate
      eyebrow="Companion book"
      heading="Dispute Resolution via Negotiation"
      intro="A comprehensive, practitioner-oriented guide to Negotiation, Mediation, Conciliation, and Alternate Dispute Resolution — the structured pathways that resolve commercial conflicts without the cost and delay of conventional litigation."
      iconName="BookOpen"
      ctaLabel="Buy on Amazon"
      ctaHref="https://www.amazon.in/dp/B0BGQ1GQQ1"
      highlights={[
        {
          title: "Practitioner-grade depth",
          description:
            "Detailed walkthroughs of negotiation strategy, mediation techniques, and conciliation procedure — drawn from real cases.",
          iconName: "BookOpen",
        },
        {
          title: "Crafted by the team",
          description:
            "Compiled by PDR COURT's panel of certified arbitrators and ADR specialists. Endorsed by industry leaders.",
          iconName: "Award",
        },
        {
          title: "For every reader",
          description:
            "Designed for individuals, MSMEs, in-house counsel, and finance teams who handle commercial disputes regularly.",
          iconName: "Users",
        },
      ]}
      sections={[
        {
          heading: "What you'll learn",
          paragraphs: [
            "How to identify the right ADR pathway — negotiation, mediation, conciliation, or arbitration — for any commercial dispute, with checklists and decision frameworks.",
            "The mindset and techniques of effective negotiators — from opening positioning to closing leverage — backed by case studies across NBFC recoveries, MSME disputes, and freelance contract conflicts.",
            "How the Indian legal framework supports ADR: the Arbitration & Conciliation Act 1996, recent Supreme Court rulings, and the procedural mechanics of enforcing an award.",
          ],
        },
      ]}
    />
  );
}
