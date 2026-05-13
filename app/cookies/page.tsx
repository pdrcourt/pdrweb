import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LegalPageClient } from "@/components/pages/LegalPageClient";

export default function CookiesPage() {
  return (
    <>
      <Navbar />
      <LegalPageClient
        title="Cookie Policy"
        subtitle="Information about how we use cookies to improve your experience."
        lastUpdated="February 20, 2024"
        content={
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">What are Cookies?</h2>
              <p>Cookies are small text files that are stored on your device when you visit a website. They help us remember your preferences and improve platform performance.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">How we use Cookies</h2>
              <p>We use essential cookies for platform security and session management. We also use analytical cookies to understand how users interact with our platform to improve our services.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Managing Cookies</h2>
              <p>You can control and manage cookies through your browser settings. However, disabling certain cookies may impact the functionality of the PDR Court platform.</p>
            </section>
          </div>
        }
      />
      <Footer />
    </>
  );
}
