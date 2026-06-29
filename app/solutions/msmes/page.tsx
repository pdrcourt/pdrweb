import type { Metadata } from "next";
import { FooterExperienceRoute } from "@/components/pages/FooterExperienceRoute";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services for MSMEs | PDR COURT",
  description:
    "Recover unpaid invoices and settle commercial disputes online with PDR Court — affordable, time-bound ADR built for MSMEs and small businesses, enforceable without litigation.",
  path: "/msmes",
});

export default function Page() {
  return <FooterExperienceRoute route="/solutions/msmes" />;
}
