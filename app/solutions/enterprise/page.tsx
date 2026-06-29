import type { Metadata } from "next";
import { FooterExperienceRoute } from "@/components/pages/FooterExperienceRoute";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services for Enterprises | PDR COURT",
  description:
    "Manage commercial disputes at scale with PDR Court's enterprise ADR platform — online arbitration, mediation, and conciliation with certified neutrals and enforceable outcomes.",
  path: "/enterprise",
});

export default function Page() {
  return <FooterExperienceRoute route="/solutions/enterprise" />;
}
