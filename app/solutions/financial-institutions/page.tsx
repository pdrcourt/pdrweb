import type { Metadata } from "next";
import { FooterExperienceRoute } from "@/components/pages/FooterExperienceRoute";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services for Financial Institutions | PDR COURT",
  description:
    "Scale loan and NPA recovery with PDR Court's online dispute resolution for banks and NBFCs — bulk case handling, certified neutrals, and enforceable digital settlements.",
  path: "/financial-institutions",
});

export default function Page() {
  return <FooterExperienceRoute route="/solutions/financial-institutions" />;
}
