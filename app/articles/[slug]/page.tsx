import { Metadata } from "next";
import { notFound } from "next/navigation";
import MigratedDetailTemplate from "@/components/pages/MigratedDetailTemplate";
import {
  getAllSlugs,
  getBySlug,
  getRelated,
  getPrevNext,
} from "@/lib/migrated-content";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllSlugs("articles").map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const page = getBySlug("articles", params.slug);
  if (!page) return { title: "Article Not Found | PDR COURT" };
  return {
    robots: { index: false, follow: false },
    title: `${page.title} | PDR COURT`,
    description: page.description || page.excerpt,
  };
}

export default function ArticleDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const page = getBySlug("articles", params.slug);
  if (!page) return notFound();
  const related = getRelated("articles", page.slug, 3);
  const { prev, next } = getPrevNext("articles", page.slug);
  return (
    <MigratedDetailTemplate
      page={page}
      related={related}
      prev={prev}
      next={next}
      indexHref="/articles"
      indexLabel="Articles"
    />
  );
}
