'use client';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import type { FooterExperiencePage as PageData } from '@/lib/footer-content';

import ServiceDetailTemplate from './ServiceDetailTemplate';
import CareerDetailTemplate from './CareerDetailTemplate';
import AboutDetailTemplate from './AboutDetailTemplate';
import KnowledgeBaseTemplate from './KnowledgeBaseTemplate';
import MediaDetailTemplate from './MediaDetailTemplate';
import LegalDetailTemplate from './LegalDetailTemplate';

export default function SubPageTemplate({ page }: { page: PageData }) {
  const renderTemplate = () => {
    switch (page.kind) {
      case 'services':
        return <ServiceDetailTemplate page={page} />;
      case 'join':
        return <CareerDetailTemplate page={page} />;
      case 'about':
        return <AboutDetailTemplate page={page} />;
      case 'information':
        return <KnowledgeBaseTemplate page={page} />;
      case 'media':
        return <MediaDetailTemplate page={page} />;
      case 'legal':
        return <LegalDetailTemplate page={page} />;
      default:
        // Fallback to Knowledge Base
        return <KnowledgeBaseTemplate page={page} />;
    }
  };

  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        {renderTemplate()}
      </main>
      <Footer />
    </>
  );
}
