import type { Metadata } from "next";
import AppointmentPageClient from "./AppointmentPageClient";

export const metadata: Metadata = {
  title: "Appointment | PDR COURT",
  description:
    "Appoint an arbitrator or conciliator from PDR COURT's empanelled neutrals — a private, confidential resolution reached by mutual agreement.",
};

export default function AppointmentPage() {
  return <AppointmentPageClient />;
}
