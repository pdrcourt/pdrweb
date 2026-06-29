// =========================================================================
// Per-page "experience" configuration — situational styling for each
// top-level content page (hero mood, accent, icon, copy, side-panel).
// Consumed by components/pages/ExperiencePage.tsx.
// =========================================================================

export interface Highlight {
  icon: string; // LucideIcon name
  title: string;
  text: string;
}

export interface ExperienceConfig {
  hero: "light" | "dark";
  icon: string;
  eyebrow: string;
  headline: string;
  accent: string; // gold-highlighted tail of the headline
  intro?: string; // overrides the migrated excerpt when set
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
  panelTitle: string;
  panelLead: string;
  highlights: Highlight[];
  closeHeading: string;
  closeText: string;
}

// keyed by app route path (relative to /app)
export const EXPERIENCE_CONFIG: Record<string, ExperienceConfig> = {
  // ───────── CONNECT — warm, action-oriented ─────────
  buy: {
    hero: "light", icon: "FileText", eyebrow: "Purchase Agreements",
    headline: "Secure your deal", accent: "in minutes",
    primary: { label: "Talk to our team", href: "/contact" },
    secondary: { label: "See how it works", href: "/how-it-works" },
    panelTitle: "Why buy with us", panelLead: "Every agreement carries a built-in Dispute Resolution Clause.",
    highlights: [
      { icon: "FileText", title: "Single or bundled", text: "Buy one agreement or a volume pack for your business." },
      { icon: "ShieldCheck", title: "Legally enforceable", text: "Backed by the Arbitration & Conciliation Act, 1996." },
      { icon: "Banknote", title: "Transparent pricing", text: "Flat fees, no hidden charges, instant online payment." },
    ],
    closeHeading: "Ready to secure your next agreement?",
    closeText: "Purchase in minutes and bind every deal to fair, fast resolution.",
  },
  "lodge-dispute": {
    hero: "light", icon: "Scale", eyebrow: "Initiate a Case",
    headline: "Lodge your dispute", accent: "online",
    primary: { label: "Speak to a case manager", href: "/contact" },
    secondary: { label: "Book an appointment", href: "/appointment" },
    panelTitle: "Resolution, the modern way", panelLead: "No travel, no paperwork piles, no multi-year wait.",
    highlights: [
      { icon: "Clock", title: "60-day resolution", text: "Most cases close within 60 days, not years." },
      { icon: "ShieldCheck", title: "Legally binding", text: "Awards are enforceable under Indian law." },
      { icon: "Lock", title: "Fully confidential", text: "Private proceedings — your reputation stays intact." },
    ],
    closeHeading: "Have a dispute to resolve?",
    closeText: "Initiate proceedings online and reach a binding outcome on a fixed timeline.",
  },
  appointment: {
    hero: "light", icon: "Calendar", eyebrow: "Book a Session",
    headline: "Schedule an", accent: "appointment",
    primary: { label: "Request a slot", href: "/contact" },
    secondary: { label: "Talk to an expert", href: "/talk-to-us" },
    panelTitle: "A private consultation", panelLead: "A 30-minute session to map the right ADR pathway.",
    highlights: [
      { icon: "Video", title: "Video or audio", text: "Meet over secure video, or keep it voice-only." },
      { icon: "UserCheck", title: "Certified expert", text: "Hosted by an arbitrator or senior case manager." },
      { icon: "Clock", title: "No obligation", text: "The first consultation is free of cost." },
    ],
    closeHeading: "Pick a time that works for you",
    closeText: "Book a no-obligation consultation with a PDR COURT specialist.",
  },
  "talk-to-us": {
    hero: "light", icon: "MessageCircle", eyebrow: "Talk to an Expert",
    headline: "Answers from a", accent: "real human",
    primary: { label: "Send your query", href: "/contact" },
    secondary: { label: "Book appointment", href: "/appointment" },
    panelTitle: "No bots, no queues", panelLead: "Reach a certified ADR expert within minutes.",
    highlights: [
      { icon: "Lightbulb", title: "Practical guidance", text: "Know which ADR path fits your dispute." },
      { icon: "ShieldCheck", title: "Confidential", text: "Every conversation stays strictly private." },
      { icon: "MessageCircle", title: "First call free", text: "Pay only when you choose to lodge a case." },
    ],
    closeHeading: "Still have questions?",
    closeText: "Talk to a PDR COURT expert who has handled cases just like yours.",
  },
  contact: {
    hero: "light", icon: "Mail", eyebrow: "Get in Touch",
    headline: "Let's talk", accent: "resolution",
    primary: { label: "Lodge a dispute", href: "/lodge-dispute" },
    secondary: { label: "Book appointment", href: "/appointment" },
    panelTitle: "We respond fast", panelLead: "Enterprise, institution, MSME or individual — we reply within a day.",
    highlights: [
      { icon: "Mail", title: "Email us", text: "support@pdrcourt.com — routed to the right team." },
      { icon: "Phone", title: "Call us", text: "+91 8976955540, Mon–Sat, 10:00–19:00 IST." },
      { icon: "MapPin", title: "Visit us", text: "Offices in Mumbai, Delhi, Bengaluru & more." },
    ],
    closeHeading: "Reach out — we're listening",
    closeText: "Whatever your dispute, our team will route you to the right specialist.",
  },

  // ───────── INFORMATION — calm, educational ─────────
  information: {
    hero: "light", icon: "Lightbulb", eyebrow: "Knowledge & Information",
    headline: "Understand", accent: "dispute resolution",
    primary: { label: "How it works", href: "/how-it-works" },
    secondary: { label: "Beginner's guide", href: "/beginner-guide" },
    panelTitle: "Learn the essentials", panelLead: "Everything you need to navigate ADR with confidence.",
    highlights: [
      { icon: "BookOpen", title: "Beginner's guide", text: "Start with the building blocks of ADR." },
      { icon: "Scale", title: "How it works", text: "The end-to-end PDR COURT journey." },
      { icon: "Heart", title: "Our ethos", text: "The principles behind every resolution." },
    ],
    closeHeading: "Ready to go deeper?",
    closeText: "Explore the full library of guides, case studies, and resources.",
  },
  "how-it-works": {
    hero: "light", icon: "Scale", eyebrow: "The Process",
    headline: "How PDR COURT", accent: "works",
    primary: { label: "Lodge a dispute", href: "/lodge-dispute" },
    secondary: { label: "Talk to an expert", href: "/talk-to-us" },
    panelTitle: "Resolution, step by step", panelLead: "A clear, technology-driven path from filing to enforcement.",
    highlights: [
      { icon: "FileText", title: "File online", text: "Submit your dispute and supporting evidence." },
      { icon: "Users", title: "Neutral review", text: "A certified neutral conducts the proceedings." },
      { icon: "CheckCircle", title: "Binding outcome", text: "Receive an enforceable award or settlement." },
    ],
    closeHeading: "See the process in action",
    closeText: "Start your first case and experience resolution the modern way.",
  },
  "beginner-guide": {
    hero: "light", icon: "GraduationCap", eyebrow: "Beginner's Guide",
    headline: "New to ADR?", accent: "Start here",
    primary: { label: "Explore the process", href: "/how-it-works" },
    secondary: { label: "Read articles", href: "#" },
    panelTitle: "Your first 15 minutes", panelLead: "A gentle introduction to alternative dispute resolution.",
    highlights: [
      { icon: "BookOpen", title: "The basics", text: "What ADR is — and why it beats litigation." },
      { icon: "Scale", title: "The methods", text: "Arbitration, mediation, conciliation, negotiation." },
      { icon: "Lightbulb", title: "Choosing well", text: "Pick the right pathway for your situation." },
    ],
    closeHeading: "Take the next step",
    closeText: "Once you know the basics, see exactly how a case unfolds.",
  },
  ethos: {
    hero: "dark", icon: "Heart", eyebrow: "Our Ethos",
    headline: "The principles", accent: "behind every resolution",
    primary: { label: "About PDR COURT", href: "/about" },
    secondary: { label: "Our rules", href: "/rules" },
    panelTitle: "What we stand for", panelLead: "Trust is built on transparency, fairness, and justice.",
    highlights: [
      { icon: "Eye", title: "Transparency", text: "An open, honest environment for every party." },
      { icon: "Scale", title: "Fairness", text: "Outcomes free of bias, powered by technology." },
      { icon: "ShieldCheck", title: "Justice", text: "Standing firm on ethics to deliver fair results." },
    ],
    closeHeading: "Principles you can rely on",
    closeText: "Experience dispute resolution built on an unwavering ethical foundation.",
  },
  "member-stories": {
    hero: "light", icon: "Quote", eyebrow: "Member Stories",
    headline: "Real people,", accent: "real resolutions",
    primary: { label: "Read case studies", href: "#" },
    secondary: { label: "Start your case", href: "/lodge-dispute" },
    panelTitle: "Voices of our members", panelLead: "Hear from the people who trusted PDR COURT.",
    highlights: [
      { icon: "Users", title: "Every profile", text: "Individuals, freelancers, businesses and banks." },
      { icon: "Handshake", title: "Amicable endings", text: "Conflicts turned into fair settlements." },
      { icon: "Star", title: "Lasting trust", text: "Members who return and recommend us." },
    ],
    closeHeading: "Write your own story",
    closeText: "Join the members who resolved their disputes with PDR COURT.",
  },

  // ───────── DEVELOPER ─────────
  developer: {
    hero: "dark", icon: "Code2", eyebrow: "Developer Portal",
    headline: "Build on", accent: "PDR COURT",
    primary: { label: "Request API access", href: "/contact" },
    secondary: { label: "Talk to us", href: "/talk-to-us" },
    panelTitle: "Everything you need", panelLead: "APIs, SDKs, and tooling to embed ODR into your product.",
    highlights: [
      { icon: "Key", title: "Account & keys", text: "Sandbox account and API keys in minutes." },
      { icon: "BookOpen", title: "Guides & releases", text: "Quickstarts, release notes, and training." },
      { icon: "Bug", title: "Report bugs", text: "Confidential tickets, triaged within hours." },
    ],
    closeHeading: "Start building today",
    closeText: "Embed dispute resolution workflows directly into your platform.",
  },

  // ───────── MEDIA ─────────
  "media-kit": {
    hero: "light", icon: "Package", eyebrow: "Media Kit",
    headline: "Press & brand", accent: "assets",
    primary: { label: "Contact press team", href: "/contact" },
    secondary: { label: "Visit newsroom", href: "#" },
    panelTitle: "For journalists", panelLead: "Logos, brand guidelines, and company facts in one place.",
    highlights: [
      { icon: "Package", title: "Brand assets", text: "Logos, colours, and usage guidelines." },
      { icon: "FileText", title: "Company facts", text: "Key figures, milestones, and boilerplate." },
      { icon: "Newspaper", title: "Latest news", text: "Announcements and press coverage." },
    ],
    closeHeading: "Writing about PDR COURT?",
    closeText: "Get in touch with our press team for assets and interviews.",
  },
  "press-release": {
    hero: "light", icon: "Newspaper", eyebrow: "Press Releases",
    headline: "PDR COURT in", accent: "the news",
    primary: { label: "Visit newsroom", href: "#" },
    secondary: { label: "Contact press team", href: "/contact" },
    panelTitle: "Official announcements", panelLead: "Milestones, launches, and strategic updates.",
    highlights: [
      { icon: "Newspaper", title: "Announcements", text: "Official PDR COURT press statements." },
      { icon: "TrendingUp", title: "Milestones", text: "Growth, partnerships, and platform news." },
      { icon: "Package", title: "Media kit", text: "Download brand and press assets." },
    ],
    closeHeading: "Stay in the loop",
    closeText: "Follow the newsroom for the latest from PDR COURT.",
  },

  // ───────── SERVICES — confident, professional ─────────
  services: {
    hero: "light", icon: "Scale", eyebrow: "Our Services",
    headline: "Dispute resolution", accent: "for everyone",
    primary: { label: "Lodge a dispute", href: "/lodge-dispute" },
    secondary: { label: "View pricing", href: "/pricing" },
    panelTitle: "Built for every party", panelLead: "Technology-powered ADR for individuals to enterprises.",
    highlights: [
      { icon: "Users", title: "Individuals & MSMEs", text: "Accessible resolution for every scale." },
      { icon: "Landmark", title: "Financial institutions", text: "Recover dues faster, without litigation." },
      { icon: "Building2", title: "Enterprises", text: "Manage commercial disputes at scale." },
    ],
    closeHeading: "Find the right service for you",
    closeText: "Whatever your dispute, PDR COURT has a resolution pathway built for it.",
  },
  individuals: {
    hero: "light", icon: "Users", eyebrow: "For Individuals",
    headline: "Resolution made", accent: "accessible",
    primary: { label: "Lodge a dispute", href: "/lodge-dispute" },
    secondary: { label: "Talk to an expert", href: "/talk-to-us" },
    panelTitle: "Justice for everyone", panelLead: "Fast, affordable dispute resolution — no courtroom required.",
    highlights: [
      { icon: "Clock", title: "Quick & simple", text: "Resolve disputes without the years-long wait." },
      { icon: "Banknote", title: "Affordable", text: "A fraction of the cost of traditional litigation." },
      { icon: "Lock", title: "Confidential", text: "Private proceedings, handled with care." },
    ],
    closeHeading: "Resolve your dispute today",
    closeText: "Take the simple, affordable path to a fair outcome.",
  },
  msmes: {
    hero: "light", icon: "Briefcase", eyebrow: "MSME Dispute Resolution",
    headline: "Recover MSME dues", accent: "without litigation",
    intro:
      "PDR Court is an online dispute resolution platform built for MSMEs and small businesses to recover unpaid invoices and settle commercial payment disputes — fast, affordable, and enforceable, without the years-long wait of civil court.",
    primary: { label: "Lodge a dispute", href: "/lodge-dispute" },
    secondary: { label: "Guide: recover MSME delayed payments", href: "/guides/recover-msme-delayed-payments" },
    panelTitle: "Built for small business", panelLead: "Keep working capital moving with fast recovery.",
    highlights: [
      { icon: "Banknote", title: "Recover unpaid invoices", text: "Settle delayed-payment disputes in 60–90 days." },
      { icon: "TrendingUp", title: "Protect cash flow", text: "Stop bad debt from stalling your growth." },
      { icon: "ShieldCheck", title: "Legally enforceable", text: "Binding awards under the Arbitration & Conciliation Act, 1996." },
    ],
    closeHeading: "Keep your business moving",
    closeText: "Resolve MSME payment disputes quickly and protect your bottom line.",
  },
  "financial-institutions": {
    hero: "dark", icon: "Landmark", eyebrow: "Debt Recovery for Banks & NBFCs",
    headline: "Loan & debt recovery", accent: "without litigation",
    intro:
      "PDR Court gives banks and NBFCs an online dispute resolution platform for high-volume loan default and debt recovery — from cheque bounce and EMI defaults to commercial loan disputes — resolved digitally through conciliation and arbitration.",
    primary: { label: "Talk to our team", href: "/contact" },
    secondary: { label: "Guide: cheque bounce recovery", href: "/guides/cheque-bounce-recovery" },
    panelTitle: "Trusted by banks & NBFCs", panelLead: "Digital dispute resolution for high-volume recovery.",
    highlights: [
      { icon: "Landmark", title: "Loan & EMI defaults", text: "Recover dues from defaulting borrowers digitally." },
      { icon: "Zap", title: "High volume", text: "Thousands of recovery disputes, resolved online." },
      { icon: "ShieldCheck", title: "Compliant & binding", text: "Awards aligned with the regulatory framework." },
    ],
    closeHeading: "Scale your recovery operations",
    closeText: "Partner with PDR Court for fast, compliant, high-volume debt recovery.",
  },
  enterprise: {
    hero: "dark", icon: "Building2", eyebrow: "For Enterprises",
    headline: "Commercial disputes,", accent: "handled",
    primary: { label: "Talk to our team", href: "/contact" },
    secondary: { label: "View pricing", href: "/pricing" },
    panelTitle: "Enterprise-grade ADR", panelLead: "Manage contractual and commercial conflict with confidence.",
    highlights: [
      { icon: "Building2", title: "Any scale", text: "From single contracts to portfolio-wide disputes." },
      { icon: "Lock", title: "Confidential", text: "Protect reputation with private proceedings." },
      { icon: "Zap", title: "Fast & binding", text: "Definitive outcomes on a fixed timeline." },
    ],
    closeHeading: "Resolve enterprise disputes faster",
    closeText: "Bring speed, privacy, and finality to your commercial conflicts.",
  },
  pricing: {
    hero: "light", icon: "BadgeDollarSign", eyebrow: "Pricing",
    headline: "Transparent,", accent: "fair pricing",
    primary: { label: "Talk to our team", href: "/contact" },
    secondary: { label: "Lodge a dispute", href: "/lodge-dispute" },
    panelTitle: "No surprises", panelLead: "Clear fees designed around your scale and needs.",
    highlights: [
      { icon: "Banknote", title: "Flat fees", text: "Know the cost up front — no hidden charges." },
      { icon: "TrendingUp", title: "Volume plans", text: "Discounts that scale with your case volume." },
      { icon: "ShieldCheck", title: "Real value", text: "A fraction of the cost of litigation." },
    ],
    closeHeading: "Find a plan that fits",
    closeText: "Talk to our team for a pricing overview tailored to you.",
  },

  // ───────── JOIN US — aspirational, dark ─────────
  "join-us": {
    hero: "dark", icon: "UserPlus", eyebrow: "Join Us",
    headline: "Build the future of", accent: "dispute resolution",
    primary: { label: "Contact us", href: "/contact" },
    secondary: { label: "Meet our neutrals", href: "/neutrals" },
    panelTitle: "Roles across the platform", panelLead: "From technology builders to certified neutrals.",
    highlights: [
      { icon: "Scale", title: "Neutrals", text: "Arbitrators, conciliators, and case managers." },
      { icon: "Code2", title: "Technology", text: "Engineers building India's Indic Digital Court." },
      { icon: "FolderOpen", title: "Operations", text: "ERP and case-management professionals." },
    ],
    closeHeading: "Ready to make an impact?",
    closeText: "Join a team redefining how India resolves its disputes.",
  },
  "careers/arbitrator": {
    hero: "dark", icon: "Scale", eyebrow: "Careers · Arbitrator",
    headline: "Become an", accent: "Arbitrator",
    primary: { label: "Apply now", href: "/contact" },
    secondary: { label: "Explore all roles", href: "/join-us" },
    panelTitle: "Shape binding outcomes", panelLead: "Lend your legal expertise to a modern ADR platform.",
    highlights: [
      { icon: "Scale", title: "Decide fairly", text: "Render legally binding arbitral awards." },
      { icon: "Globe", title: "Work digitally", text: "Conduct proceedings from anywhere in India." },
      { icon: "Award", title: "Be recognised", text: "Join a respected panel of neutrals." },
    ],
    closeHeading: "Join our panel of arbitrators",
    closeText: "Apply your expertise where it shapes real resolutions.",
  },
  "careers/conciliator": {
    hero: "dark", icon: "Handshake", eyebrow: "Careers · Conciliator",
    headline: "Become a", accent: "Conciliator",
    primary: { label: "Apply now", href: "/contact" },
    secondary: { label: "Explore all roles", href: "/join-us" },
    panelTitle: "Guide parties to agreement", panelLead: "Help disputing parties find common ground.",
    highlights: [
      { icon: "Handshake", title: "Build consensus", text: "Facilitate amicable, lasting settlements." },
      { icon: "MessageSquare", title: "Communicate", text: "Lead structured, constructive dialogue." },
      { icon: "Globe", title: "Fully digital", text: "Conduct conciliation online, anywhere." },
    ],
    closeHeading: "Join our panel of conciliators",
    closeText: "Turn conflict into conversation — and conversation into resolution.",
  },
  "careers/case-manager": {
    hero: "dark", icon: "FileCheck", eyebrow: "Careers · Case Manager",
    headline: "Become a", accent: "Case Manager",
    primary: { label: "Apply now", href: "/contact" },
    secondary: { label: "Explore all roles", href: "/join-us" },
    panelTitle: "Keep cases moving", panelLead: "Orchestrate proceedings from filing to outcome.",
    highlights: [
      { icon: "FileCheck", title: "Own the process", text: "Manage cases end-to-end with precision." },
      { icon: "Users", title: "Coordinate parties", text: "Keep neutrals and parties in sync." },
      { icon: "Clock", title: "Hit timelines", text: "Drive resolutions to a fixed schedule." },
    ],
    closeHeading: "Join our case management team",
    closeText: "Be the engine that keeps every resolution on track.",
  },
  "careers/erp-manager": {
    hero: "dark", icon: "FolderOpen", eyebrow: "Careers · ERP Management",
    headline: "Lead", accent: "ERP Management",
    primary: { label: "Apply now", href: "/contact" },
    secondary: { label: "Explore all roles", href: "/join-us" },
    panelTitle: "Run the operational core", panelLead: "Keep the platform's systems efficient and reliable.",
    highlights: [
      { icon: "FolderOpen", title: "Streamline ops", text: "Optimise the systems behind every case." },
      { icon: "TrendingUp", title: "Drive efficiency", text: "Turn process into measurable performance." },
      { icon: "ShieldCheck", title: "Ensure reliability", text: "Keep operations resilient and compliant." },
    ],
    closeHeading: "Join our ERP team",
    closeText: "Build the operational backbone of a modern ADR platform.",
  },
  "careers/it-developers": {
    hero: "dark", icon: "Code2", eyebrow: "Careers · IT Developers",
    headline: "Become an", accent: "IT Developer",
    primary: { label: "Apply now", href: "/contact" },
    secondary: { label: "Explore all roles", href: "/join-us" },
    panelTitle: "Engineer the platform", panelLead: "Build the technology powering India's Indic Digital Court.",
    highlights: [
      { icon: "Code2", title: "Build the product", text: "Ship features used across the country." },
      { icon: "Zap", title: "Modern stack", text: "Work with cutting-edge tools and infrastructure." },
      { icon: "Globe", title: "Real impact", text: "Code that widens access to justice." },
    ],
    closeHeading: "Join our engineering team",
    closeText: "Write the code that makes dispute resolution accessible to all.",
  },
};
