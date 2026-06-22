import React from "react";
import { Metadata } from "next";
import ArticlesClientPage from "./ArticlesClientPage";
import { getAllByCategory } from "@/lib/migrated-content";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Articles & Resources | PDR COURT",
  description:
    "PDR COURT articles & resources illuminate Alternate Dispute Resolution — the most cost-effective method to resolve legal matters.",
};

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
