import type { Metadata } from "next";
import BuyPageClient from "./BuyPageClient";

export const metadata: Metadata = {
  title: "Buy | PDR COURT",
  description:
    "Convert your paper into an executable contract — buy the PDR COURT Dispute Resolution Paper online, at a branch, or through a partner.",
};

export default function BuyPage() {
  return <BuyPageClient />;
}
