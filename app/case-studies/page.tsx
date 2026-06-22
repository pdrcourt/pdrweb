import React from "react";
import { Metadata } from "next";
import CaseStudiesClientPage, { CaseStudyItem } from "./CaseStudiesClientPage";
import { getAllByCategory } from "@/lib/migrated-content";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Case Studies | PDR COURT",
  description:
    "Gain a comprehensive perspective of PDR COURT as an ADR platform. Review, read, and analyze our real-life case studies.",
};

function categorize(title: string, slug: string): string {
  const s = (title + " " + slug).toLowerCase();
  if (/nbfc/.test(s)) return "NBFCs";
  if (/bank|finance-company|finance-firm|finance-ministry/.test(s)) return "Banks";
  if (/msme|small-business|trader|wholesal|distribut|manufactur/.test(s)) return "Institutions";
  if (/freelance|designer|individual|professional/.test(s)) return "Freelancers";
  if (/construction|contractor|engineering|infra/.test(s)) return "Contractors";
  if (/dealer|retail|shop|owner/.test(s)) return "Professionals";
  return "Institutions";
}

export default function CaseStudiesPage() {
  const caseStudies: CaseStudyItem[] = getAllByCategory("case-studies").map((c) => ({
    title: c.title,
    description: c.excerpt,
    href: `/case-studies/${c.slug}`,
    category: categorize(c.title, c.slug),
  }));

  return <CaseStudiesClientPage caseStudies={caseStudies} />;
}
