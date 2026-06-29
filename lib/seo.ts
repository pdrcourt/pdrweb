import type { Metadata } from "next";

// ─────────────────────────────────────────────────────────────────────────
// Central metadata builder. Every page calls buildMetadata() so that each
// route gets:
//   • a self-referencing canonical (relative → resolved against metadataBase)
//   • per-page Open Graph + Twitter tags (title/description that actually vary)
//   • optional noindex for thin / blog pages
// Keeping this in one place means OG/canonical stay consistent site-wide.
// ─────────────────────────────────────────────────────────────────────────

export const SITE_URL = "https://pdrcourt.com";
export const SITE_NAME = "PDR Court";
const DEFAULT_OG_IMAGE = "/images/hero-illustration.png";

export interface PageMetaInput {
  /** Full <title> text, e.g. "About Us | PDR COURT". */
  title: string;
  description?: string;
  /** Route path beginning with "/", e.g. "/about" or "/". */
  path: string;
  keywords?: string[] | string;
  /** Site-relative or absolute OG/Twitter image. */
  image?: string;
  /** Set true for thin / duplicate / blog pages. */
  noindex?: boolean;
}

export function buildMetadata({
  title,
  description,
  path,
  keywords,
  image = DEFAULT_OG_IMAGE,
  noindex = false,
}: PageMetaInput): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    ...(noindex ? { robots: { index: false, follow: false } } : {}),
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "en_IN",
      type: "website",
      images: [{ url: image, width: 1280, height: 720, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
