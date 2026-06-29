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
  return getAllSlugs("case-studies").map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const page = getBySlug("case-studies", params.slug);
  if (!page) return { title: "Case Study Not Found | PDR COURT" };
  return buildMetadata({
    title: `${page.title} | PDR COURT`,
    description: page.description || page.excerpt,
    path: `/case-studies/${params.slug}`,
    noindex: true,
  });
}

export default function CaseStudyDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const page = getBySlug("case-studies", params.slug);
  if (!page) return notFound();
  const related = getRelated("case-studies", page.slug, 3);
  const { prev, next } = getPrevNext("case-studies", page.slug);
  return (
    <MigratedDetailTemplate
      page={page}
      related={related}
      prev={prev}
      next={next}
      indexHref="/case-studies"
      indexLabel="Case Studies"
    />
  );
}
