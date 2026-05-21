import type { Metadata } from "next";
import MediaCenterPageClient from "./MediaCenterPageClient";

export const metadata: Metadata = {
  title: "Media Center | PDR COURT",
  description:
    "The PDR COURT Media Center — newsroom headlines, ADR articles, press releases, media kit and FAQs for the global business community.",
};

export default function MediaCenterPage() {
  return <MediaCenterPageClient />;
}
