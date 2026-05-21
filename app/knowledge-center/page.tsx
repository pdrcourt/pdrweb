import React from "react";
import { Metadata } from "next";
import KnowledgeCenterClient from "./KnowledgeCenterClient";
import { getAllByCategory } from "@/lib/migrated-content";

export const metadata: Metadata = {
  title: "Knowledge Center | PDR COURT",
  description:
    "Explore ADR fundamentals, Indian arbitration law, mediation playbooks, and curated learning paths in the PDR COURT Knowledge Center.",
};

export default function KnowledgeCenterPage() {
  const topArticles = getAllByCategory("articles")
    .slice(0, 9)
    .map((a) => ({ slug: a.slug, title: a.title, excerpt: a.excerpt, image: a.heroImage }));
  const recentNews = getAllByCategory("news")
    .slice(0, 6)
    .map((n) => ({ slug: n.slug, title: n.title, excerpt: n.excerpt, image: n.heroImage }));

  return <KnowledgeCenterClient topArticles={topArticles} recentNews={recentNews} />;
}
