import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getFooterPage } from "@/lib/footer-content";

// Import new premium components
import ServicesPageClient from "@/components/pages/ServicesPageClient";
import JoinUsPageClient from "@/components/pages/JoinUsPageClient";
import ResourcesLegalPageClient from "@/components/pages/ResourcesLegalPageClient";
import AboutPageNew from "@/components/pages/AboutPageNew";
import InformationPageClient from "@/components/pages/InformationPageClient";
import MediaCenterPageClient from "@/components/pages/MediaCenterPageClient";
import SubPageTemplate from "@/components/pages/SubPageTemplate";

export function metadataForFooterRoute(route: string): Metadata {
  const page = getFooterPage(route);
  if (!page) return {};

  return {
    title: `${page.title} | PDR COURT`,
    description: page.description,
    openGraph: {
      title: `${page.title} | PDR COURT`,
      description: page.description,
      url: `https://pdrcourt.com${page.route}`,
      images: [{ url: page.image, width: 1200, height: 630, alt: page.title }],
    },
  };
}

export function FooterExperienceRoute({ route }: { route: string }) {
  const page = getFooterPage(route);
  if (!page) notFound();

  // Dispatch to the specific premium main page templates
  switch (route) {
    case "/services":
      return <ServicesPageClient />;
    case "/join-us":
      return <JoinUsPageClient />;
    case "/resources-legal":
      return <ResourcesLegalPageClient />;
    case "/about":
      return <AboutPageNew />;
    case "/information":
      return <InformationPageClient />;
    case "/media-center":
      return <MediaCenterPageClient />;
    default:
      // Sub-pages use the dynamic SubPageTemplate
      return <SubPageTemplate page={page} />;
  }
}
