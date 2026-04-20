// ============================================================
// PDR Court — Central Content Data File
// All website content lives here. Components import from here.
// ============================================================

// ─── SHARED INTERFACES ───────────────────────────────────────

export interface Service {
  id: string;
  iconName: string; // Lucide icon name
  title: string;
  description: string;
  features: string[];
  image: string;
  href: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  iconName: string; // Lucide icon name
}

export interface Feature {
  iconName: string; // Lucide icon name
  title: string;
  description: string;
  metric?: string;
  metricLabel?: string;
  image?: string; // Optional image to show in the card
}

export interface Partner {
  name: string;
  logo?: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  avatar: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

export interface SolutionBenefit {
  iconName: string;
  title: string;
  description: string;
}

export interface Advisor {
  name: string;
  role: string;
  affiliation: string;
  bio: string;
  expertise: string[];
  avatar: string; // Initials or small avatar
  headshot?: string; // Larger high-quality headshot
}

// ─────────────────────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────────────────────
export const navContent = {
  brand: "PDR Court",
  links: [
    {
      label: "Solutions",
      href: "#",
      children: [
        { label: "Online Arbitration", href: "/solutions/arbitration" },
        { label: "Digital Mediation", href: "/solutions/mediation" },
        { label: "Structured Negotiation", href: "/solutions/negotiation" },
      ],
    },
    { label: "How It Works", href: "/#process" },
    { label: "Features", href: "/#features" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/#faq" },
  ],
  cta: { label: "Start a Case", href: "/#contact" },
};

// ─────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────
export const heroContent = {
  badge: "70+ Banks & NBFCs | 500+ Enterprises Trust Us",
  headline: "Resolve Disputes.",
  headlineAccent: "Faster. Smarter. Online.",
  subheading:
    "PDR Court is India's most advanced Online Dispute Resolution platform — combining legal expertise with cutting-edge technology to deliver fast, secure, and legally binding resolutions from anywhere.",
  primaryCta: { label: "Start Your Case", href: "/#contact" },
  secondaryCta: { label: "Watch How It Works", href: "/#process" },
  image: "/images/hero-illustration.png",
};

// ─────────────────────────────────────────────────────────────
// STATS
// ─────────────────────────────────────────────────────────────
export const statsContent = [
  { value: "500+", label: "Corporate Clients" },
  { value: "12000+", label: "PIN codes served" },
  { value: "65%", label: "savings in time and cost" },
  { value: "7X", label: "increase in participation" },
];

// ─────────────────────────────────────────────────────────────
// SLIDER
// ─────────────────────────────────────────────────────────────
export const sliderContent = {
  slides: [
    {
      id: 1,
      badge: "Trusted by 500+ Enterprises",
      headline: "Resolve Disputes.",
      headlineAccent: "Faster. Smarter. Online.",
      subheading:
        "PDR Court is India's most advanced Online Dispute Resolution platform — combining legal expertise with cutting-edge technology to deliver fast, secure, and legally binding resolutions from anywhere.",
      image: "/images/hero_slide_1.png",
    },
    {
      id: 2,
      badge: "Bank-Grade Security",
      headline: "Unbreakable. Fully",
      headlineAccent: "Confidential.",
      subheading:
        "Experience a pristine digital vault for all your documentation and resolution workflows. End-to-end 256-bit encryption ensures your most sensitive data remains completely secure.",
      image: "/images/hero_slide_2.png",
    },
    {
      id: 3,
      badge: "Global Reach",
      headline: "Global Resolution.",
      headlineAccent: "Local Precision.",
      subheading:
        "Resolve your multi-jurisdictional disputes efficiently through our expansive digital network. Connect globally without the delays and exorbitant costs of traditional litigation.",
      image: "/images/hero_slide_3.png",
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// SERVICES
// ─────────────────────────────────────────────────────────────
export const servicesContent: {
  badge: string;
  headline: string;
  subheading: string;
  items: Service[];
} = {
  badge: "Dispute Resolution",
  headline: "What we offer",
  subheading:
    "We provide end-to-end digital mechanisms that serve as an effective, legally recognized alternative to traditional courts.",
  items: [
    {
      id: "arbitration",
      iconName: "Scale",
      title: "Online Arbitration",
      description:
        "Legally binding decisions by certified arbitrators. Ideal for commercial, contractual, and financial disputes requiring a definitive ruling without court intervention.",
      features: [
        "Certified arbitrators",
        "Legally binding awards",
        "Confidential proceedings",
        "E-signed documentation",
      ],
      image: "/images/offer_arbitration.png",
      href: "/solutions/arbitration",
    },
    {
      id: "mediation",
      iconName: "Handshake",
      title: "Digital Mediation",
      description:
        "Collaborative resolution facilitated by a neutral mediator. Preserves relationships and reaches mutually agreeable outcomes through structured online dialogue.",
      features: [
        "Neutral mediators",
        "Relationship-preserving",
        "Flexible scheduling",
        "Mutual settlement drafts",
      ],
      image: "/images/offer_mediation.png",
      href: "/solutions/mediation",
    },
    {
      id: "negotiation",
      iconName: "MessageSquare",
      title: "Structured Negotiation",
      description:
        "Platform-guided direct negotiation between parties. Our proprietary framework structures communication to accelerate agreement with minimal friction.",
      features: [
        "Platform-guided flow",
        "Real-time messaging",
        "Document sharing",
        "Auto-generated agreements",
      ],
      image: "/images/offer_negotiation.png",
      href: "/solutions/negotiation",
    },
    {
      id: "conciliation",
      iconName: "Link2",
      title: "Online Conciliation",
      description:
        "A conciliator actively proposes solutions and bridges the gap between parties. Perfect for labor, consumer, and family disputes needing a proactive third party.",
      features: [
        "Proactive conciliator",
        "Solution proposals",
        "Legally recognized",
        "Cost-efficient",
      ],
      image: "/images/offer_conciliation.png",
      href: "/solutions/arbitration",
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// PROCESS STEPS
// ─────────────────────────────────────────────────────────────
export const processContent: {
  badge: string;
  headline: string;
  subheading: string;
  steps: ProcessStep[];
} = {
  badge: "How It Works",
  headline: "Four Steps to Full Resolution",
  subheading:
    "Our streamlined process removes friction at every stage — from initiating a case to receiving a legally binding outcome, all within a secure digital environment.",
  steps: [
    {
      step: 1,
      title: "Submit Your Case",
      description:
        "Upload case details, supporting documents, and choose the resolution mechanism. Our system validates and categorizes your dispute automatically.",
      iconName: "FolderOpen",
    },
    {
      step: 2,
      title: "Invite Counterparty",
      description:
        "The opposing party receives a secure invitation to join the platform. Acceptance can be done in minutes via email or mobile.",
      iconName: "UserPlus",
    },
    {
      step: 3,
      title: "Resolve Online",
      description:
        "Certified professionals facilitate the resolution via video hearings, secure messaging, and structured online proceedings — all recorded and encrypted.",
      iconName: "ShieldCheck",
    },
    {
      step: 4,
      title: "Receive Award",
      description:
        "A legally enforceable resolution document is generated, e-signed, and archived. Compliant with Indian law and internationally recognized.",
      iconName: "Award",
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// FEATURES / BENEFITS
// ─────────────────────────────────────────────────────────────
export const featuresContent: {
  badge: string;
  headline: string;
  subheading: string;
  mainImage?: string;
  items: Feature[];
} = {
  badge: "Why PDR Court",
  headline: "Built for Modern Dispute Resolution",
  subheading:
    "Enterprise-grade infrastructure meets user-first design. Every feature is purpose-built to make dispute resolution faster, fairer, and fully online.",
  mainImage: "/images/features_main.png",
  items: [
    {
      iconName: "Clock",
      title: "24/7 Platform Access",
      description:
        "Initiate, track, and participate in hearings any time, from anywhere in the world — no scheduling delays.",
      metric: "24/7",
      metricLabel: "Always Available",
      image: "/images/process.png",
    },
    {
      iconName: "Lock",
      title: "Bank-Grade Security",
      description:
        "End-to-end encryption, secure document vaults, and multi-factor authentication protect every interaction.",
      metric: "256-bit",
      metricLabel: "Encryption",
      image: "/images/offer_arbitration.png",
    },
    {
      iconName: "Users",
      title: "Vetted Expert Panel",
      description:
        "Access 200+ certified arbitrators, mediators, and legal experts with domain-specific knowledge.",
      metric: "200+",
      metricLabel: "Legal Experts",
      image: "/images/about-team.png",
    },
    {
      iconName: "Zap",
      title: "Lightning-Fast Resolution",
      description:
        "Average case turnaround of 72 hours — vs. months or years in traditional litigation.",
      metric: "72hrs",
      metricLabel: "Avg. Turnaround",
      image: "/images/feature_speed.png",
    },
    {
      iconName: "BadgeDollarSign",
      title: "Fraction of the Cost",
      description:
        "Reduce dispute resolution costs by up to 80% compared to traditional legal proceedings.",
      metric: "80%",
      metricLabel: "Cost Savings",
      image: "/images/about-mission.png",
    },
    {
      iconName: "FileCheck",
      title: "Legally Binding Outcomes",
      description:
        "Awards and settlements are fully compliant with Indian law and enforceable across jurisdictions.",
      metric: "100%",
      metricLabel: "Legal Compliance",
      image: "/images/arbitration.png",
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// PARTNERS / RECOGNITION
// ─────────────────────────────────────────────────────────────
export const partnersContent: {
  badge: string;
  headline: string;
  subheading?: string;
  reports?: {
    year: string;
    cases: string;
    settled: string;
    successRate: string;
  }[];
  reachStats?: {
    value: string;
    label: string;
  }[];
  items: Partner[];
} = {
  badge: "Trusted By",
  headline: "Backed by Industry Leaders",
  subheading: "A trusted ODR / ADR platform for industry leaders.",
  reports: [
    { year: "2023", cases: "3.5 Lac", settled: "2.3 Lac", successRate: "65%" },
    { year: "2024", cases: "12.7 Lac", settled: "8.6 Lac", successRate: "67%" },
    { year: "2025", cases: "15.3 Lac", settled: "9.19 Lac", successRate: "60.04%" },
  ],
  reachStats: [
    { value: "70+", label: "Leading Banks & NBFCs" },
    { value: "60%+", label: "Resolution Rate" },
  ],
  items: [
    { name: "ICICI Home Finance", logo: "/images/800px-ICICI_Home_Finance_Company_logo 1.png" },
    { name: "CSL Finance Limited", logo: "/images/CSL Finance Limited 3 1.png" },
    { name: "Electronica Finance", logo: "/images/Electronica-Finance-Logo 1.png" },
    { name: "STFT", logo: "/images/STFT-logo 1.png" },
    { name: "Surjit Hire Purchase", logo: "/images/Surjit Hire Purchase 1.png" },
    { name: "Indiabulls Asset Reconstruction", logo: "/images/indiabulls_asset_reconstruction_logo 1.png" },
    { name: "Kinara Capital", logo: "/images/kinara-logo-color 1.png" },
    { name: "Moglix", logo: "/images/moglix-logo 1.png" },
    { name: "Jupiter", logo: "/images/partner-jupiter 1.png" },
    { name: "Suryoday", logo: "/images/1630503440969 1.png" },
    { name: "LendingKart", logo: "/images/cdjltjppqzozjggn2msn 1.png" },
    { name: "BharatPe", logo: "/images/eb3c9fb726e378f39d813b1723ebde51 1.png" },
  ],
};

// ─────────────────────────────────────────────────────────────
// TESTIMONIALS
// ─────────────────────────────────────────────────────────────
export const testimonialsContent: {
  badge: string;
  headline: string;
  subheading: string;
  items: Testimonial[];
} = {
  badge: "Client Stories",
  headline: "Trusted by Legal Professionals & Enterprises",
  subheading:
    "From Fortune 500 legal teams to independent SMEs, our platform has transformed how disputes get resolved.",
  items: [
    {
      id: 1,
      quote:
        "PDR Court cut our average dispute cycle from 8 months to under 3 weeks. The platform's structured process and expert panel are second to none.",
      name: "Priya Mehta",
      role: "General Counsel",
      company: "Axis Financial Group",
      rating: 5,
      avatar: "PM",
    },
    {
      id: 2,
      quote:
        "As a mediator, I've never had a platform that gives me this level of control and professionalism. The UI is intuitive, the process is airtight.",
      name: "Rajiv Anand",
      role: "Senior Mediator & Advocate",
      company: "Anand ADR Chambers",
      rating: 5,
      avatar: "RA",
    },
    {
      id: 3,
      quote:
        "We resolved a multi-crore commercial dispute in 5 days. No travel, no delays, no court—just a clean, fair outcome. Absolutely remarkable.",
      name: "Sunita Krishnan",
      role: "CFO",
      company: "Meridian Manufacturing Ltd.",
      rating: 5,
      avatar: "SK",
    },
    {
      id: 4,
      quote:
        "The encryption and document security gave our compliance team complete confidence. This is how legal tech should work in 2026.",
      name: "Arjun Kapoor",
      role: "Head of Risk & Compliance",
      company: "NovaBridge Capital",
      rating: 5,
      avatar: "AK",
    },
    {
      id: 5,
      quote:
        "Onboarding was seamless, the arbitrator assigned to our case was highly specialized, and the final award was delivered digitally — flawless.",
      name: "Deepa Raghunathan",
      role: "Legal Manager",
      company: "SynthaTech Pvt. Ltd.",
      rating: 5,
      avatar: "DR",
    },
    {
      id: 6,
      quote:
        "PDR Court democratizes access to justice. For our SME clients who couldn't afford protracted litigation, this changes everything.",
      name: "Vivek Sharma",
      role: "Partner",
      company: "Sharma & Associates Law Firm",
      rating: 5,
      avatar: "VS",
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// FAQs
// ─────────────────────────────────────────────────────────────
export const faqContent: {
  badge: string;
  headline: string;
  subheading: string;
  items: FAQ[];
} = {
  badge: "FAQs",
  headline: "Everything You Need to Know",
  subheading:
    "Have questions? We've answered the most common ones below. Need more? Our support team is available 24/7.",
  items: [
    {
      id: 1,
      question: "What is Online Dispute Resolution (ODR)?",
      answer:
        "ODR is the use of technology to resolve disputes outside of court. It applies legally recognized Alternative Dispute Resolution (ADR) mechanisms—arbitration, mediation, conciliation, and negotiation—to an online environment, making justice faster, cheaper, and more accessible.",
      category: "General",
    },
    {
      id: 2,
      question: "Are outcomes from PDR Court legally enforceable?",
      answer:
        "Yes. Arbitration awards issued on our platform are legally binding and enforceable under the Arbitration and Conciliation Act, 1996. Mediated settlements carry the same enforceability as a court decree when filed under Section 74.",
      category: "Legal",
    },
    {
      id: 3,
      question: "What types of disputes can be resolved on PDR Court?",
      answer:
        "We handle commercial disputes, financial disagreements, employment issues, consumer grievances, real estate conflicts, insurance claims, and more. Our platform supports B2B, B2C, and B2G dispute categories.",
      category: "General",
    },
    {
      id: 4,
      question: "How secure is the platform?",
      answer:
        "PDR Court employs 256-bit AES encryption, secure document vaults, MFA authentication, and ISO 27001-compliant infrastructure. All proceedings are confidential, and data is stored in compliant Indian data centers.",
      category: "Security",
    },
    {
      id: 5,
      question: "How long does a typical dispute take to resolve?",
      answer:
        "Resolution timelines depend on case complexity and party cooperation. Simple negotiation cases resolve in as few as 24 hours. Mediation typically takes 3–7 days, while arbitration ranges from 2–6 weeks—dramatically faster than litigation.",
      category: "Process",
    },
    {
      id: 6,
      question: "Who are the neutrals on the platform?",
      answer:
        "Our panel includes 200+ certified arbitrators, qualified mediators, and domain-expert conciliators—vetted, trained, and continuously evaluated. Parties can view profiles, credentials, and track records before selection.",
      category: "General",
    },
    {
      id: 7,
      question: "What is the cost of using PDR Court?",
      answer:
        "Our pricing is transparent and significantly lower than traditional litigation. Plans are based on dispute value and mechanism chosen. Enterprise clients get custom pricing. A free case assessment is available to all new users.",
      category: "Pricing",
    },
    {
      id: 8,
      question: "Can both parties be in different cities or countries?",
      answer:
        "Absolutely. PDR Court is built for borderless resolution. Parties can participate from any device, anywhere—with video hearings, asynchronous communication, and timezone-aware scheduling built in.",
      category: "Process",
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// ADVISORY COUNCIL
// ─────────────────────────────────────────────────────────────
export const councilContent = {
  badge: "Strategic Guidance",
  headline: "Our Advisory Council",
  subheading: "A distinguished panel of legal veterans, technologists, and industry leaders guiding the future of digital justice in India.",
  mainImage: "/images/advisory_main.png",
  members: [
    {
      name: "Hon'ble Justice Ramesh Chandra",
      role: "Advisor - Legal Regulatory",
      affiliation: "Retired Judge, Supreme Court of India",
      bio: "Offering profound insights into judicial processes and ensuring the platform meets the highest standards of legal integrity.",
      expertise: ["Constitutional Law", "Arbitration"],
      avatar: "RC",
    },
    {
      name: "Dr. Arvind Subramanian",
      role: "Advisor - Economic Strategy",
      affiliation: "Former Chief Economic Advisor, Govt. of India",
      bio: "Guiding the impact of ODR on the ease of doing business and economic efficiency in commercial transactions.",
      expertise: ["Macroeconomics", "Public Policy"],
      avatar: "AS",
    },
    {
      name: "Ms. Sheila Dikshit (Legal)",
      role: "Advisor - Corporate Governance",
      affiliation: "Former General Counsel, Fortune 100",
      bio: "Expertise in cross-border disputes and enterprise-grade legal compliance for large-scale digital transformations.",
      expertise: ["Corporate Law", "Enterprise Risk"],
      avatar: "SD",
    },
    {
      name: "Prof. Vikram Singh",
      role: "Advisor - Technology & AI",
      affiliation: "Professor, IIT Delhi",
      bio: "Spearheading the integration of artificial intelligence and blockchain to ensure transparency and trust in automated resolutions.",
      expertise: ["Legal-tech AI", "Blockchain"],
      avatar: "VS",
    },
    {
      name: "Adv. Smriti Z. Irani (ADR)",
      role: "Advisor - ADR Policy",
      affiliation: "Senior Advocate, High Court",
      bio: "Bridging the gap between traditional litigation and digital-first ADR mechanisms through policy innovation.",
      expertise: ["Mediation", "Dispute Policy"],
      avatar: "SI",
    },
    {
      name: "Mr. Rohan Murty",
      role: "Advisor - Digital Innovation",
      affiliation: "Tech Entrepreneur & Investor",
      bio: "Guiding the scale and accessibility of the PDR Court platform to reach every corner of India through mobile tech.",
      expertise: ["Scalability", "Product Design"],
      avatar: "RM",
    },
  ] as Advisor[],
};

// ─────────────────────────────────────────────────────────────
// CTA SECTION
// ─────────────────────────────────────────────────────────────
export const ctaContent = {
  headline: "Ready to Resolve Smarter?",
  subheading:
    "Join thousands of enterprises and legal professionals who've transformed how they handle disputes. Start your first case for free.",
  primaryCta: { label: "Start Your Case", href: "/#contact" },
  secondaryCta: { label: "Talk to an Expert", href: "/#contact" },
  badge: "No credit card required",
};

// ─────────────────────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────────────────────
export const footerContent = {
  brand: {
    name: "PDR Court",
    tagline: "Justice. Simplified. Online.",
    description:
      "India's most advanced Online Dispute Resolution platform — fast, secure, and legally compliant.",
  },
  columns: [
    {
      title: "Solutions",
      links: [
        { label: "Online Arbitration", href: "/solutions/arbitration" },
        { label: "Digital Mediation", href: "/solutions/mediation" },
        { label: "Structured Negotiation", href: "/solutions/negotiation" },
        { label: "Online Conciliation", href: "/#services" },
      ],
    },
    {
      title: "Platform",
      links: [
        { label: "How It Works", href: "/#process" },
        { label: "Features & Benefits", href: "/#features" },
        { label: "Expert Panel", href: "/#experts" },
        { label: "Case Portal", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Careers", href: "#" },
        { label: "Press & Media", href: "#" },
        { label: "Partnerships", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog & Insights", href: "#" },
        { label: "Legal Framework", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
      ],
    },
  ],
  contact: {
    email: "legal@pdrcourt.com",
    phone: "8976955540",
    address: "Mumbai | Delhi | Bengaluru",
  },
  regionalAddresses: [
    {
      zone: "North Zone DELHI",
      address: "A-19, Guru Nanak Pura, Street No. 3, Laxmi Nagar, Delhi-110092.",
      landmark: "V3S Mall"
    },
    {
      zone: "South Zone MUMBAI",
      address: "Unit No. 208, 2nd Floor, Globe Business Park, Khuntavali, Ambernath, Thane, Kalyan, Maharashtra, India, 421501."
    },
    {
      zone: "Other Locations",
      address: "Bengaluru, Chennai, Hyderabad, Pune, Kolkata, Ahmedabad, Amritsar, Bhopal, Bhubaneswar, Chandigarh, Faridabad, Ghaziabad, Jamshedpur, Jaipur, Kochi, Lucknow, Nagpur, Patna, Raipur, Surat, Visakhapatnam, Agra, Ajmer, Kanpur and Mysuru"
    }
  ],
  social: [
    { name: "LinkedIn", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "YouTube", href: "#" },
  ],
  copyright: "Copyright ©PDR ORGANIZATION PRIVATE LIMITED. All rights reserved",
};

// ─────────────────────────────────────────────────────────────
// ABOUT PAGE
// ─────────────────────────────────────────────────────────────
export const aboutContent = {
  hero: {
    badge: "Our Story",
    headline: "Built to Make Justice",
    headlineAccent: "Accessible to All.",
    subheading:
      "PDR Court was founded on a simple belief: that everyone deserves access to fast, affordable, and fair dispute resolution — without the complexity of courts.",
    image: "/images/about-team.png",
  },
  mission: {
    badge: "Our Mission",
    headline: "Democratizing Access to Justice",
    body: "India faces a staggering backlog of over 50 million pending court cases. We exist to change that. PDR Court harnesses the power of technology, legal expertise, and human-centered design to resolve disputes in days — not years — while preserving relationships and reducing costs by up to 80%.",
    image: "/images/about-mission.png",
    values: [
      {
        iconName: "Scale",
        title: "Fairness First",
        description: "Every case is handled with absolute neutrality and procedural integrity.",
      },
      {
        iconName: "ShieldCheck",
        title: "Uncompromised Security",
        description: "Bank-grade encryption and ISO 27001 infrastructure protect every interaction.",
      },
      {
        iconName: "Globe",
        title: "Borderless Reach",
        description: "Parties from any city, state, or country can participate seamlessly.",
      },
      {
        iconName: "Lightbulb",
        title: "Innovation Driven",
        description: "We continuously evolve our platform with AI and legal tech advancements.",
      },
    ],
  },
  stats: [
    { value: "15,000+", label: "Cases Resolved", iconName: "FileCheck" },
    { value: "98%", label: "Resolution Rate", iconName: "TrendingUp" },
    { value: "72hrs", label: "Average Turnaround", iconName: "Clock" },
    { value: "500+", label: "Enterprise Clients", iconName: "Building2" },
    { value: "200+", label: "Expert Neutrals", iconName: "Users" },
    { value: "80%", label: "Cost Reduction", iconName: "BadgeDollarSign" },
  ],
  team: [
    {
      name: "Aditya Verma",
      role: "Founder & CEO",
      bio: "Former Supreme Court advocate with 15+ years in ADR. Visionary behind PDR Court's legal framework.",
      avatar: "AV",
    },
    {
      name: "Neha Joshi",
      role: "Co-Founder & CTO",
      bio: "IIT Bombay alumna. Built the platform's secure, scalable infrastructure from the ground up.",
      avatar: "NJ",
    },
    {
      name: "Rajan Mehta",
      role: "Chief Legal Officer",
      bio: "Expert in arbitration law and international dispute resolution. Oversees neutral panel quality.",
      avatar: "RM",
    },
    {
      name: "Pooja Iyer",
      role: "Head of Product",
      bio: "Design-first product leader with experience at two unicorn startups. Obsessed with UX.",
      avatar: "PI",
    },
    {
      name: "Suresh Nair",
      role: "Head of Partnerships",
      bio: "Builds and manages relationships with enterprise clients and institutional partners.",
      avatar: "SN",
    },
    {
      name: "Divya Kapoor",
      role: "Lead Legal Technologist",
      bio: "Bridging legal expertise and technology — ensuring every feature meets the highest legal standards.",
      avatar: "DK",
    },
  ] as TeamMember[],
  timeline: [
    {
      year: "2019",
      title: "Company Founded",
      description: "PDR Court launched with a small team and a bold mission to reform dispute resolution in India.",
    },
    {
      year: "2020",
      title: "Platform Launch",
      description: "First iteration of our ODR platform went live, handling 200+ cases in the first quarter.",
    },
    {
      year: "2021",
      title: "NITI Aayog Recognition",
      description: "Selected as a model ODR initiative by NITI Aayog. Series A funding secured.",
    },
    {
      year: "2022",
      title: "Enterprise Expansion",
      description: "Onboarded 100+ enterprise clients including major banks, NBFCs, and insurance companies.",
    },
    {
      year: "2023",
      title: "10,000 Cases Milestone",
      description: "Crossed 10,000 successfully resolved cases with a 97% satisfaction rate.",
    },
    {
      year: "2024",
      title: "International Reach",
      description: "Expanded to support cross-border disputes with multi-language and multi-jurisdiction capabilities.",
    },
    {
      year: "2026",
      title: "AI-Augmented Resolution",
      description: "Launched AI-assisted case categorization and evidence analysis tools.",
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// SOLUTIONS — ARBITRATION
// ─────────────────────────────────────────────────────────────
export const arbitrationContent = {
  hero: {
    badge: "Online Arbitration",
    headline: "Binding Decisions.",
    headlineAccent: "Without the Courtroom.",
    subheading:
      "PDR Court Arbitration delivers legally enforceable awards through certified independent arbitrators — conducted entirely online, with the same authority as a court judgment.",
    primaryCta: { label: "File an Arbitration Case", href: "/#contact" },
    secondaryCta: { label: "Talk to an Expert", href: "/#contact" },
    image: "/images/arbitration-hero.png",
    stats: [
      { value: "6 Weeks", label: "Avg. Arbitration Time" },
      { value: "100%", label: "Awards Legally Binding" },
      { value: "150+", label: "Certified Arbitrators" },
      { value: "₹0", label: "Court Fees Required" },
    ],
  },
  showcaseImage: "/images/arbitration.png",
  whatIs: {
    headline: "What is Online Arbitration?",
    body: "Arbitration is a formal ADR process where a neutral third party — the arbitrator — hears both sides and renders a binding decision called an 'award'. Unlike mediation, neither party needs to agree to the outcome. On PDR Court, the entire process happens digitally: from case filing to evidence exchange to the final award.",
    points: [
      "Binding on both parties — no mutual agreement needed",
      "Governed by the Arbitration & Conciliation Act, 1996",
      "Awards are enforceable like court decrees",
      "Confidential and private — no public record",
    ],
  },
  benefits: [
    {
      iconName: "Scale",
      title: "Legally Binding Awards",
      description: "Arbitration awards carry the full weight of law and are enforceable in any Indian court under the Arbitration & Conciliation Act, 1996.",
    },
    {
      iconName: "Clock",
      title: "Dramatically Faster",
      description: "Average resolution in 4–6 weeks — compared to years in traditional litigation. Pre-defined timelines keep proceedings on track.",
    },
    {
      iconName: "ShieldCheck",
      title: "Certified Arbitrators",
      description: "Choose from our panel of 150+ domain-certified arbitrators with expertise in finance, real estate, commerce, employment, and more.",
    },
    {
      iconName: "Lock",
      title: "Fully Confidential",
      description: "All proceedings, evidence, and awards are sealed and confidential. No public record — protecting your business reputation.",
    },
    {
      iconName: "Globe",
      title: "Conduct it Anywhere",
      description: "Parties in different cities or countries can participate via secure video hearings with recorded transcripts and e-signed documentation.",
    },
    {
      iconName: "BadgeDollarSign",
      title: "Cost-Effective",
      description: "Reduce dispute resolution expenditure by 60–80% compared to full-scale litigation, with transparent pricing and no hidden fees.",
    },
  ] as SolutionBenefit[],
  process: [
    { step: 1, iconName: "FolderOpen", title: "File Your Case", description: "Submit case details, documents, and desired timeline. Select arbitrator criteria." },
    { step: 2, iconName: "UserCheck", title: "Arbitrator Appointed", description: "A neutral, domain-certified arbitrator is assigned or selected from your shortlist." },
    { step: 3, iconName: "FileText", title: "Pleadings & Evidence", description: "Structured exchange of written statements, documents, and digital evidence on our secure platform." },
    { step: 4, iconName: "Video", title: "Online Hearing", description: "Scheduled video hearing with all parties, recorded and transcribed in real time." },
    { step: 5, iconName: "Award", title: "Award Issued", description: "A legally binding award is generated, digitally signed, and delivered to all parties." },
  ],
  useCases: [
    { iconName: "Briefcase", title: "Commercial Disputes", description: "Contract breaches, payment defaults, partnership conflicts" },
    { iconName: "Building2", title: "Real Estate", description: "Builder-buyer disputes, property title conflicts, lease terminations" },
    { iconName: "Landmark", title: "Financial Services", description: "Loan defaults, insurance claim rejections, NBFC disputes" },
    { iconName: "Users", title: "Employment", description: "Wrongful termination, compensation disputes, workplace conflicts" },
  ],
  faqs: [
    { id: 1, question: "Is an arbitration award final?", answer: "Yes. Arbitration awards are final and binding. They can only be challenged on very limited grounds under Section 34 of the Arbitration & Conciliation Act, 1996 — such as fraud or public policy violations.", category: "Legal" },
    { id: 2, question: "Can I choose my arbitrator?", answer: "Yes. On PDR Court, you can browse arbitrator profiles, view credentials, and shortlist your preferred neutrals. The final appointment is made per your arbitration agreement or by mutual consent.", category: "Process" },
    { id: 3, question: "What is the typical cost of arbitration?", answer: "Costs depend on the dispute value, complexity, and duration. PDR Court provides a transparent fee schedule. Enterprise clients receive custom pricing. All costs are significantly lower than traditional litigation.", category: "Pricing" },
    { id: 4, question: "Are international arbitration cases supported?", answer: "Yes. PDR Court supports international arbitration with multi-language proceedings, cross-jurisdictional expertise, and awards recognized under the New York Convention.", category: "General" },
  ] as FAQ[],
};

// ─────────────────────────────────────────────────────────────
// SOLUTIONS — MEDIATION
// ─────────────────────────────────────────────────────────────
export const mediationContent = {
  hero: {
    badge: "Digital Mediation",
    headline: "Resolve Together.",
    headlineAccent: "Preserve the Relationship.",
    subheading:
      "PDR Court Mediation connects you with certified, neutral mediators who guide both parties toward a mutually agreeable outcome — online, confidential, and legally recognized.",
    primaryCta: { label: "Start a Mediation", href: "/#contact" },
    secondaryCta: { label: "Learn More", href: "#benefits" },
    image: "/images/mediation-hero.png",
    stats: [
      { value: "3–7 Days", label: "Avg. Mediation Time" },
      { value: "85%", label: "Settlement Rate" },
      { value: "180+", label: "Certified Mediators" },
      { value: "100%", label: "Relationship Preserved" },
    ],
  },
  whatIs: {
    headline: "What is Digital Mediation?",
    body: "Mediation is a voluntary, confidential process where a neutral third-party mediator helps disputing parties communicate, negotiate, and reach a mutually acceptable resolution. Unlike arbitration, the mediator does not impose a decision — the parties retain full control over the outcome. On PDR Court, mediation happens entirely online through secure video sessions, shared document workspaces, and encrypted messaging.",
    points: [
      "Voluntary and collaborative — both parties retain control",
      "Confidential — nothing shared with courts or public",
      "Settlements are legally documented and enforceable",
      "Preserves business and personal relationships",
    ],
  },
  benefits: [
    {
      iconName: "Heart",
      title: "Preserves Relationships",
      description: "Mediation is collaborative, not adversarial. It's ideal when parties need to maintain working or personal relationships after the dispute.",
    },
    {
      iconName: "Clock",
      title: "Resolve in Days, Not Months",
      description: "Most mediation cases conclude within 3–7 days. Our platform keeps sessions structured and productive.",
    },
    {
      iconName: "UserCheck",
      title: "Empathetic Mediators",
      description: "180+ certified mediators with expertise in commercial, family, employment, and consumer disputes. Match by domain and language.",
    },
    {
      iconName: "Shield",
      title: "Absolute Confidentiality",
      description: "Everything discussed in mediation stays off-record. No party can use session content in future legal proceedings.",
    },
    {
      iconName: "FileCheck",
      title: "Legally Recognized Settlements",
      description: "Mediation agreements signed through PDR Court are legally enforceable under the Civil Procedure Code and the Mediation Act, 2023.",
    },
    {
      iconName: "BadgeDollarSign",
      title: "Low Cost, High Value",
      description: "Mediation costs a fraction of arbitration and litigation — with a higher relationship-preservation value.",
    },
  ] as SolutionBenefit[],
  process: [
    { step: 1, iconName: "FolderOpen", title: "Initiate Session", description: "Submit your case and invite the counterparty to participate in mediation." },
    { step: 2, iconName: "UserCheck", title: "Mediator Matched", description: "A certified mediator is assigned based on domain expertise, language, and availability." },
    { step: 3, iconName: "MessageSquare", title: "Opening Sessions", description: "Both parties share their perspectives in a structured, facilitated online session." },
    { step: 4, iconName: "Handshake", title: "Negotiation Rounds", description: "The mediator facilitates joint and private sessions to identify common ground." },
    { step: 5, iconName: "FileCheck", title: "Settlement Drafted", description: "A legally binding settlement agreement is drafted, reviewed, and e-signed by all parties." },
  ],
  useCases: [
    { iconName: "Users", title: "Commercial Disputes", description: "Vendor disagreements, partnership breakdowns, B2B payment disputes" },
    { iconName: "Home", title: "Family & Property", description: "Inheritance disputes, co-ownership conflicts, matrimonial matters" },
    { iconName: "Briefcase", title: "Workplace Conflicts", description: "Employer-employee disputes, HR grievances, team conflicts" },
    { iconName: "ShoppingCart", title: "Consumer Complaints", description: "Product defects, service failures, e-commerce refund disputes" },
  ],
  faqs: [
    { id: 1, question: "Is mediation legally binding?", answer: "The mediation process itself is voluntary, but any settlement reached is documented in a legally binding agreement. Under the Mediation Act, 2023, mediated settlements are enforceable as decrees.", category: "Legal" },
    { id: 2, question: "What if the other party refuses to mediate?", answer: "Mediation requires both parties' willingness to participate. If the other party declines, we can advise on escalating to arbitration or conciliation, where participation can be mandated.", category: "Process" },
    { id: 3, question: "What if we don't reach a settlement?", answer: "If mediation doesn't result in a settlement, neither party is bound by any offers or positions shared during the session. You are free to pursue arbitration or litigation without prejudice.", category: "Process" },
    { id: 4, question: "Can I have my lawyer present during mediation?", answer: "Yes. Parties may have legal representatives present during mediation sessions on PDR Court. The mediator will ensure the process remains balanced and focused.", category: "General" },
  ] as FAQ[],
};

// ─────────────────────────────────────────────────────────────
// SOLUTIONS — NEGOTIATION
// ─────────────────────────────────────────────────────────────
export const negotiationContent = {
  hero: {
    badge: "Structured Negotiation",
    headline: "Agree Faster.",
    headlineAccent: "On Your Terms.",
    subheading:
      "PDR Court Negotiation provides a structured, platform-guided framework for direct dispute resolution — enabling parties to reach agreements independently with minimal friction and full legal backing.",
    primaryCta: { label: "Start Negotiating", href: "/#contact" },
    secondaryCta: { label: "See How It Works", href: "#process" },
    image: "/images/negotiation-hero.png",
    stats: [
      { value: "24–48hrs", label: "Avg. Resolution Time" },
      { value: "75%", label: "First-Round Agreement" },
      { value: "No", label: "Third Party Needed" },
      { value: "100%", label: "Private & Confidential" },
    ],
  },
  whatIs: {
    headline: "What is Structured Negotiation?",
    body: "Structured Negotiation is the fastest and most autonomous form of dispute resolution. Parties communicate directly through PDR Court's platform-guided framework — with structured prompts, document tools, and automated agreement drafting — to reach a bilateral agreement without any third-party involvement. It's ideal for disputes where a relationship exists and both parties are motivated to resolve quickly.",
    points: [
      "No arbitrator or mediator required — full party autonomy",
      "Platform guides communication structure and prevents escalation",
      "AI-assisted agreement drafting and document exchange",
      "Fastest resolution timeline — often within 24–48 hours",
    ],
  },
  benefits: [
    {
      iconName: "Zap",
      title: "Fastest Resolution",
      description: "Structured Negotiation resolves disputes in 24–48 hours on average — no scheduling, no third parties, no delays.",
    },
    {
      iconName: "MessageSquare",
      title: "Platform-Guided Communication",
      description: "Our proprietary communication framework prevents escalation, keeps focus on issues, and steers conversations toward resolution.",
    },
    {
      iconName: "FileText",
      title: "Auto-Generated Agreements",
      description: "Once terms are agreed, the platform automatically drafts and formats a legally valid settlement document ready for e-signature.",
    },
    {
      iconName: "Users",
      title: "Full Party Autonomy",
      description: "No third party influences the outcome. Both parties define the resolution terms, preserving control and dignity.",
    },
    {
      iconName: "Lock",
      title: "Private & Encrypted",
      description: "All negotiations are end-to-end encrypted. No communication is visible to anyone outside the negotiation room.",
    },
    {
      iconName: "BadgeDollarSign",
      title: "Most Cost-Effective",
      description: "The lowest-cost resolution mechanism available — no neutral fees, minimal platform charges, maximum value.",
    },
  ] as SolutionBenefit[],
  process: [
    { step: 1, iconName: "FolderOpen", title: "Submit Dispute", description: "Describe the issue, upload supporting documents, and invite the counterparty via secure link." },
    { step: 2, iconName: "MessageSquare", title: "Structured Dialogue", description: "Both parties communicate through a guided framework with structured prompts and issue-based threads." },
    { step: 3, iconName: "RefreshCw", title: "Offer & Counter-Offer", description: "Exchange proposals in a structured, time-boxed format. The platform tracks all versions and iterations." },
    { step: 4, iconName: "FileText", title: "Agreement Drafted", description: "When terms align, the platform auto-generates a formatted settlement agreement for review." },
    { step: 5, iconName: "CheckCircle", title: "E-Sign & Close", description: "Both parties e-sign the agreement. It's archived securely and legally enforceable." },
  ],
  useCases: [
    { iconName: "Briefcase", title: "B2B Disputes", description: "Invoice disputes, delivery delays, SLA breaches, vendor conflicts" },
    { iconName: "ShoppingCart", title: "E-Commerce", description: "Return and refund disputes, platform seller-buyer conflicts" },
    { iconName: "Home", title: "Property Rentals", description: "Security deposit conflicts, maintenance disputes, lease termination disagreements" },
    { iconName: "Globe", title: "Freelance & Gig Work", description: "Payment disputes, scope disagreements, contract breaches" },
  ],
  faqs: [
    { id: 1, question: "Is the negotiated agreement legally binding?", answer: "Yes. Any agreement reached through PDR Court Negotiation is documented as a legally binding settlement deed, admissible in any Indian court as a binding contract.", category: "Legal" },
    { id: 2, question: "What if negotiations fail?", answer: "If parties cannot reach an agreement through negotiation, you can seamlessly escalate to Mediation or Arbitration on the same platform — with all case history transferred automatically.", category: "Process" },
    { id: 3, question: "Do I need a lawyer for negotiation?", answer: "Not necessarily. PDR Court's structured framework guides you through the process. However, you're always welcome to have legal counsel review terms before signing.", category: "General" },
    { id: 4, question: "How long does the counterparty have to respond?", answer: "Counterparties are given a defined response window (default 48 hours, customizable). If they fail to respond, the platform sends automated reminders and can escalate to mediation.", category: "Process" },
  ] as FAQ[],
};
