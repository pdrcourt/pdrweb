import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import MediaCenterPageClient from "./MediaCenterPageClient";

export const metadata: Metadata = buildMetadata({
  title: "Media Center | PDR COURT",
  description:
    "The PDR COURT Media Center — newsroom headlines, ADR articles, press releases, media kit and FAQs for the global business community.",
  path: "/media-center",
});

export default function MediaCenterPage() {
  return <MediaCenterPageClient />;
}
