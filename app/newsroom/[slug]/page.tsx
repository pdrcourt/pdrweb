import { Metadata } from "next";
import { notFound } from "next/navigation";
import MigratedDetailTemplate from "@/components/pages/MigratedDetailTemplate";
import {
  getAllSlugs,
  getBySlug,
  getRelated,
  getPrevNext,
} from "@/lib/migrated-content";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllSlugs("news").map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const page = getBySlug("news", params.slug);
  if (!page) return { title: "Article Not Found | PDR COURT" };
  return buildMetadata({
    title: `${page.title} | PDR COURT`,
    description: page.description || page.excerpt,
    path: `/newsroom/${params.slug}`,
    noindex: true,
  });
}

export default function NewsroomDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const page = getBySlug("news", params.slug);
  if (!page) return notFound();
  const related = getRelated("news", page.slug, 3);
  const { prev, next } = getPrevNext("news", page.slug);
  return (
    <MigratedDetailTemplate
      page={page}
      related={related}
      prev={prev}
      next={next}
      indexHref="/newsroom"
      indexLabel="Newsroom"
    />
  );
}
