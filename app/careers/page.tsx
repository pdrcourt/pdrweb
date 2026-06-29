import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { FooterExperienceRoute } from "@/components/pages/FooterExperienceRoute";

export const metadata: Metadata = buildMetadata({
  title: "Careers | PDR COURT",
  description:
    "Build your career at PDR COURT — explore openings for arbitrators, conciliators, case managers, ERP specialists, and IT developers in India's leading ADR platform.",
  path: "/careers",
});

export default function Page() {
  return <FooterExperienceRoute route="/join-us" />;
}
