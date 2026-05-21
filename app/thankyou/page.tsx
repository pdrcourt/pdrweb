import React from "react";
import { Metadata } from "next";
import SimplePageTemplate from "@/components/pages/SimplePageTemplate";

export const metadata: Metadata = {
  title: "Thank You | PDR COURT",
  description: "Thank you for reaching out to PDR COURT. Our team will respond within one business day.",
};

export default function ThankYouPage() {
  return (
    <SimplePageTemplate
      eyebrow="We're on it"
      heading="Thank you for reaching out"
      intro="Your message has been received. A PDR COURT specialist will respond within one business day. In the meantime, feel free to explore the platform."
      iconName="CheckCircle2"
      ctaLabel="Back to homepage"
      ctaHref="/"
      highlights={[
        {
          title: "Read case studies",
          description: "See how individuals, MSMEs, and NBFCs have resolved disputes on PDR COURT.",
        },
        {
          title: "Browse the newsroom",
          description: "Catch up on the latest court rulings, ODR policy moves, and platform announcements.",
        },
        {
          title: "Understand the process",
          description: "Step through the end-to-end ADR journey on the How It Works page.",
        },
      ]}
    />
  );
}
