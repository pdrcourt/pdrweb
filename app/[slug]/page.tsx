import { Metadata } from "next";
import { notFound } from "next/navigation";
import MigratedDetailTemplate from "@/components/pages/MigratedDetailTemplate";
import {
  getBySlug,
  getRelated,
  getPrevNext,
  getAllUrlSlugs,
  RESERVED_ROUTES,
  categoryRoute,
} from "@/lib/migrated-content";

// Statically generate every pvtweb URL slug not already covered by a reserved route
export function generateStaticParams() {
  const all = getAllUrlSlugs();
  return all
    .filter((slug) => !RESERVED_ROUTES.has(slug))
    .map((slug) => ({ slug }));
}

// Don't render dynamic params at runtime — every slug must be in the static list
export const dynamicParams = false;

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const page = getBySlug("any", params.slug);
  if (!page) return { title: "Page Not Found | PDR COURT" };
  return {
    title: `${page.title} | PDR COURT`,
    description: page.description || page.excerpt,
    keywords: page.keywords || undefined,
  };
}

export default function CatchAllPage({ params }: { params: { slug: string } }) {
  const page = getBySlug("any", params.slug);
  if (!page) return notFound();

  const route = categoryRoute(page.category) || "/";
  const label =
    page.category === "articles"
      ? "Articles"
      : page.category === "news"
        ? "Newsroom"
        : page.category === "case-studies"
          ? "Case Studies"
          : "Home";

  const related = getRelated(page.category, page.slug, 3);
  const { prev, next } = getPrevNext(page.category, page.slug);

  return (
    <MigratedDetailTemplate
      page={page}
      related={related}
      prev={prev}
      next={next}
      indexHref={route || "/"}
      indexLabel={label}
    />
  );
}
