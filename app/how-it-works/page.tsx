import type { Metadata } from "next";
import HowItWorksPageClient from "./HowItWorksPageClient";

export const metadata: Metadata = {
  title: "How It Works | PDR COURT",
  description:
    "See how PDR COURT works — five simple steps from purchasing an agreement to an enforceable award, all within one quick, secure ADR platform.",
};

export default function HowItWorksPage() {
  return <HowItWorksPageClient />;
}
