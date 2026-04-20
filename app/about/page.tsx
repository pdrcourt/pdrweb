import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutPageClient } from "@/components/pages/AboutPageClient";

export const metadata: Metadata = {
  title: "About Us | PDR Court — Our Story, Mission & Team",
  description:
    "Learn about PDR Court — India's most advanced Online Dispute Resolution platform. Our mission, values, leadership team, and journey to democratize access to justice.",
  openGraph: {
    title: "About PDR Court | Our Mission to Democratize Justice",
    description: "Meet the team behind India's most advanced ODR platform. Our story, values, and commitment to accessible justice.",
    url: "https://www.pdrcourt.in/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutPageClient />
      <Footer />
    </>
  );
}
