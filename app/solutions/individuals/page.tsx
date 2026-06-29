import type { Metadata } from "next";
import { FooterExperienceRoute } from "@/components/pages/FooterExperienceRoute";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services for Individuals | PDR COURT",
  description:
    "Resolve loan, contract, and consumer disputes online as an individual or sole proprietor with PDR Court — fast, affordable, legally enforceable ADR without going to court.",
  path: "/individuals",
});

export default function Page() {
  return <FooterExperienceRoute route="/solutions/individuals" />;
}
