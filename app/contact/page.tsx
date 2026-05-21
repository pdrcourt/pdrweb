import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us | PDR COURT",
  description:
    "Get in touch with PDR COURT — raise a support ticket, call our helpline, email us, or visit one of our offices across India.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
