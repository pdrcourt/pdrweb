import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import BuyPageClient from "./BuyPageClient";

export const metadata: Metadata = buildMetadata({
  title: "Buy | PDR COURT",
  description:
    "Convert your paper into an executable contract — buy the PDR COURT Dispute Resolution Paper online, at a branch, or through a partner.",
  path: "/buy",
});

export default function BuyPage() {
  return <BuyPageClient />;
}
