import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import HowItWorksPageClient from "./HowItWorksPageClient";

export const metadata: Metadata = buildMetadata({
  title: "How It Works | PDR COURT",
  description:
    "See how PDR COURT works — five simple steps from purchasing an agreement to an enforceable award, all within one quick, secure ADR platform.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return <HowItWorksPageClient />;
}
