import { notFound } from "next/navigation";
import MigratedDetailTemplate from "@/components/pages/MigratedDetailTemplate";
import {
  getBySlug,
  getRelated,
  getPrevNext,
  categoryRoute,
  type MigratedCategory,
} from "@/lib/migrated-content";

const LABELS: Record<MigratedCategory, string> = {
  articles: "Articles",
  news: "Newsroom",
  "case-studies": "Case Studies",
  core: "Home",
};

/**
 * Renders a fixed top-level route (e.g. /about, /services, /rules) using the
 * full-fidelity migrated pvtweb content for the given slug.
 */
export default function MigratedRoutePage({ slug }: { slug: string }) {
  const page = getBySlug("any", slug);
  if (!page) return notFound();

  const indexHref = categoryRoute(page.category) || "/";
  const indexLabel = LABELS[page.category];
  const related = getRelated(page.category, page.slug, 3);
  const { prev, next } = getPrevNext(page.category, page.slug);

  return (
    <MigratedDetailTemplate
      page={page}
      related={related}
      prev={prev}
      next={next}
      indexHref={indexHref}
      indexLabel={indexLabel}
    />
  );
}
