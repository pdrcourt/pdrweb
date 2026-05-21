import footerDataJson from "../data/footer-data.json";

// Cast to unknown to bypass TS strict typing on the JSON structure for now
const footerData: Record<string, unknown> = footerDataJson;

export type FooterPageKind =
  | "services"
  | "join"
  | "legal"
  | "about"
  | "information"
  | "media";

export interface FooterPageLink {
  title: string;
  route: string;
  description: string;
}

export interface ContentSection {
  heading?: string;
  content: string[];
}

export interface FooterExperiencePage {
  kind: FooterPageKind;
  title: string;
  eyebrow: string;
  route: string;
  parentRoute?: string;
  description: string;
  lines: string[];
  paragraphs: string[];
  highlights: string[];
  sections: ContentSection[];
  siblingLinks: FooterPageLink[];
  image: string;
  accent: string;
  icon: string;
  variant: number;
}

interface PageDefinition {
  key: string;
  title: string;
  route: string;
  description?: string;
  image?: string;
  icon?: string;
}

interface SectionDefinition {
  kind: FooterPageKind;
  key: string;
  title: string;
  route: string;
  eyebrow: string;
  description: string;
  image: string;
  accent: string;
  icon: string;
  children: PageDefinition[];
}

const sections: SectionDefinition[] = [
  {
    kind: "services",
    key: "services",
    title: "Services",
    route: "/services",
    eyebrow: "Digital ADR services",
    description:
      "Technology-powered dispute resolution services for individuals, MSMEs, enterprises, and financial institutions.",
    image: "/images/hero-illustration.png",
    accent: "from-primary-500 via-primary-400 to-amber-300",
    icon: "Scale",
    children: [
      { key: "pricing", title: "Pricing", route: "/pricing", image: "/images/feature_speed.png", icon: "BadgeDollarSign" },
      { key: "enterprise", title: "Services for Enterprises", route: "/solutions/enterprise", image: "/images/features_main.png", icon: "Building2" },
      { key: "financialinstitutions", title: "Services for Financial Institutions", route: "/solutions/financial-institutions", image: "/images/arbitration-hero.png", icon: "Landmark" },
      { key: "msmes", title: "Services for MSMEs", route: "/solutions/msmes", image: "/images/mediation-hero.png", icon: "Briefcase" },
      { key: "individuals", title: "Services for Individuals", route: "/solutions/individuals", image: "/images/negotiation-hero.png", icon: "Users" },
    ],
  },
  {
    kind: "join",
    key: "joinus",
    title: "Join Us",
    route: "/join-us",
    eyebrow: "Careers and member network",
    description:
      "Join the PDR COURT mission as a technology builder, case professional, conciliator, or arbitrator.",
    image: "/images/about-team.png",
    accent: "from-stone-900 via-primary-700 to-primary-400",
    icon: "UserPlus",
    children: [
      { key: "it-developers", title: "IT Developers", route: "/careers/it-developers", image: "/images/features_main.png", icon: "Zap" },
      { key: "erp-management", title: "ERP Management", route: "/careers/erp-manager", image: "/images/process.png", icon: "FolderOpen" },
      { key: "case-manager", title: "Case Manager", route: "/careers/case-manager", image: "/images/about-mission.png", icon: "FileCheck" },
      { key: "conciliator", title: "Conciliator", route: "/careers/conciliator", image: "/images/offer_conciliation.png", icon: "Handshake" },
      { key: "arbitrator", title: "Arbitrator", route: "/careers/arbitrator", image: "/images/offer_arbitration.png", icon: "Scale" },
    ],
  },
  {
    kind: "legal",
    key: "resources",
    title: "Resources & Legal",
    route: "/resources-legal",
    eyebrow: "Policies, rules and compliance",
    description:
      "Rules, policies, terms, legal disclaimers, privacy practices, and cookie notices for the PDR COURT platform.",
    image: "/images/arbitration.png",
    accent: "from-primary-800 via-stone-800 to-stone-950",
    icon: "ShieldCheck",
    children: [
      { key: "cookie-policy", title: "Cookie Policy", route: "/cookies", image: "/images/offer_negotiation.png", icon: "Lock" },
      { key: "disclaimer", title: "Disclaimer", route: "/disclaimer", image: "/images/about-stats-bg.png", icon: "Shield" },
      { key: "privacy-policy", title: "Privacy Policy", route: "/privacy", image: "/images/mediation.png", icon: "Lock" },
      { key: "terms-conditions", title: "Terms & Conditions", route: "/terms", image: "/images/arbitration-hero.png", icon: "FileText" },
      { key: "pdrcourt-rules", title: "Rules", route: "/rules", image: "/images/process.png", icon: "Scale" },
    ],
  },
  {
    kind: "about",
    key: "about",
    title: "About",
    route: "/about",
    eyebrow: "Company, people and presence",
    description:
      "Learn about PDR COURT, our growth story, offices, partners, neutral panel, investors, and company philosophy.",
    image: "/images/about-team.png",
    accent: "from-primary-500 via-stone-700 to-stone-950",
    icon: "Building2",
    children: [
      { key: "partners", title: "Partners", route: "/partners", image: "/images/about-team.png", icon: "Handshake" },
      { key: "neutrals", title: "Neutrals", route: "/neutrals", image: "/images/about-team.png", icon: "Users" },
      { key: "offices", title: "Offices", route: "/offices", image: "/images/about-mission.png", icon: "MapPin" },
      { key: "investors", title: "Investors", route: "/investors", image: "/images/about-stats-bg.png", icon: "TrendingUp" },
      { key: "company", title: "Company", route: "/company", image: "/images/hero_slide_1.png", icon: "Landmark" },
    ],
  },
  {
    kind: "information",
    key: "information",
    title: "Information",
    route: "/information",
    eyebrow: "Guides, stories and operating model",
    description:
      "Explore member stories, case studies, ethos, beginner guidance, and how PDR COURT works.",
    image: "/images/hero_slide_2.png",
    accent: "from-primary-600 via-amber-500 to-stone-900",
    icon: "Lightbulb",
    children: [
      { key: "member-stories", title: "Member Stories", route: "/member-stories", image: "/images/about-team.png", icon: "Star" },
      { key: "case-studies", title: "Case Studies", route: "/case-studies", image: "/images/process.png", icon: "FileCheck" },
      { key: "our-ethos", title: "Our Ethos", route: "/ethos", image: "/images/about-mission.png", icon: "Heart" },
      { key: "beginners-guide", title: "Beginner Guide", route: "/beginner-guide", image: "/images/hero-illustration.png", icon: "Lightbulb" },
      { key: "how-it-works", title: "How It Works", route: "/how-it-works", image: "/images/features_main.png", icon: "RefreshCw" },
    ],
  },
  {
    kind: "media",
    key: "mediacenter",
    title: "Media Center",
    route: "/media-center",
    eyebrow: "News, press and knowledge hub",
    description:
      "Press releases, media kit, articles, newsroom updates, and frequently asked questions from PDR COURT.",
    image: "/images/hero_slide_3.png",
    accent: "from-stone-950 via-primary-700 to-primary-300",
    icon: "Video",
    children: [
      { key: "faqs", title: "FAQ", route: "/faq", image: "/images/offer_mediation.png", icon: "MessageSquare" },
      { key: "press-release", title: "Press Release", route: "/press-release", image: "/images/hero_slide_1.png", icon: "Share2" },
      { key: "mediakit", title: "Media Kit", route: "/media-kit", image: "/images/PDR_logo_final.png", icon: "FolderOpen" },
      { key: "articles", title: "Articles", route: "/articles", image: "/images/hero_slide_2.png", icon: "FileText" },
      { key: "news", title: "Newsroom", route: "/newsroom", image: "/images/hero_slide_3.png", icon: "Globe" },
    ],
  },
];

export function allFooterPages(): FooterExperiencePage[] {
  return sections.flatMap((section, sectionIndex) => {
    
    // Parent page mapping
    const parentData = (footerData[section.key] as Record<string, unknown>) || { sections: [] };
    const parentSections = parentData.sections as ContentSection[];
    const parentParagraphs = parentSections.flatMap(s => s.content);
    
    const siblingLinks = section.children.map((child) => {
      const childData = (footerData[child.key] as Record<string, unknown>) || { sections: [] };
      const childParagraphs = (childData.sections as ContentSection[]).flatMap(s => s.content);
      return {
        title: child.title,
        route: child.route,
        description: child.description ?? (childParagraphs[0] || ""),
      };
    });

    const parent: FooterExperiencePage = {
      kind: section.kind,
      title: section.title,
      eyebrow: section.eyebrow,
      route: section.route,
      description: section.description,
      lines: parentParagraphs,
      paragraphs: parentParagraphs.slice(0, 5),
      highlights: parentParagraphs.slice(5, 10),
      sections: parentSections,
      siblingLinks,
      image: section.image,
      accent: section.accent,
      icon: section.icon,
      variant: sectionIndex,
    };

    const children = section.children.map((child, childIndex) => {
      const data = (footerData[child.key] as Record<string, unknown>) || { sections: [] };
      const sections = data.sections as ContentSection[];
      const paragraphs = sections.flatMap(s => s.content);
      
      return {
        kind: section.kind,
        title: (data.title as string) || child.title,
        eyebrow: section.eyebrow,
        route: child.route,
        parentRoute: section.route,
        description: child.description ?? (paragraphs[0] || ""),
        lines: paragraphs,
        paragraphs: paragraphs.slice(0, 5),
        highlights: paragraphs.slice(5, 10),
        sections,
        siblingLinks,
        image: child.image ?? section.image,
        accent: section.accent,
        icon: child.icon ?? section.icon,
        variant: sectionIndex + childIndex + 1,
      } satisfies FooterExperiencePage;
    });

    return [parent, ...children];
  });
}

export function getFooterPage(route: string) {
  const normalizedRoute = route === "/" ? route : route.replace(/\/$/, "");
  return allFooterPages().find((page) => page.route === normalizedRoute);
}

export function getFooterPageLinks(kind?: FooterPageKind) {
  return allFooterPages()
    .filter((page) => !kind || page.kind === kind)
    .map(({ title, route, description }) => ({ title, route, description }));
}
