import React from "react";
import { Metadata } from "next";
import ArticlesClientPage from "./ArticlesClientPage";
import { getAllByCategory } from "@/lib/migrated-content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Articles & Resources | PDR COURT",
  description:
    "PDR COURT articles & resources illuminate Alternate Dispute Resolution — the most cost-effective method to resolve legal matters.",
  path: "/articles",
  noindex: true,
});

export default function ArticlesPage() {
  const articles = getAllByCategory("articles").map((a) => ({
    title: a.title,
    excerpt: a.excerpt,
    date: "",
    image: a.heroImage || "/images/about-mission.png",
    href: `/articles/${a.slug}`,
  }));

  return <ArticlesClientPage articles={articles} />;
}
