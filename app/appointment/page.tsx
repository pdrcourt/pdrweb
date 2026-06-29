import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import AppointmentPageClient from "./AppointmentPageClient";

export const metadata: Metadata = buildMetadata({
  title: "Appointment | PDR COURT",
  description:
    "Appoint an arbitrator or conciliator from PDR COURT's empanelled neutrals — a private, confidential resolution reached by mutual agreement.",
  path: "/appointment",
});

export default function AppointmentPage() {
  return <AppointmentPageClient />;
}
