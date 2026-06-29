import React from "react";
import { Metadata } from "next";
import NewsroomClientPage, { NewsItem } from "./NewsroomClientPage";
import { getAllByCategory } from "@/lib/migrated-content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Newsroom | PDR COURT",
  description:
    "Explore the latest headlines, legal updates, Supreme Court judgments, and strategic announcements regarding ODR and arbitration from PDR COURT.",
  path: "/newsroom",
  noindex: true,
});

function categorize(title: string, slug: string): string {
  const s = (title + " " + slug).toLowerCase();
  if (/policy|cabinet|amendment|bill|reform|ministry|notification/.test(s)) return "Policy";
  if (/pdr|pdrcourt|pdr-court|company|launches|introduces|joins|unveils|commends|news-/.test(s)) return "PDR Court";
  if (/global|pca|singapore|new york|international|uk-|us-|usa-/.test(s)) return "Global";
  return "Judgments";
}

export default function NewsroomPage() {
  const newsItems: NewsItem[] = getAllByCategory("news").map((n) => ({
    title: n.title,
    excerpt: n.excerpt,
    date: "",
    category: categorize(n.title, n.slug),
    image: n.heroImage || "/images/arbitration-hero.png",
    href: `/newsroom/${n.slug}`,
  }));

  return <NewsroomClientPage newsItems={newsItems} />;
}
