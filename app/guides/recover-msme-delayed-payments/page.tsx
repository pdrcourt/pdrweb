import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import GuideArticle from "@/components/guides/GuideArticle";

export const metadata: Metadata = buildMetadata({
  title: "MSME Delayed Payment Recovery: 45-Day Rule | PDR Court",
  description:
    "How registered MSMEs recover delayed payments in India — the MSMED Act 45-day rule, the interest you're owed, and a faster online route to get paid.",
  path: "/guides/recover-msme-delayed-payments",
});

export default function MsmeDelayedPaymentGuide() {
  return (
    <GuideArticle
      slug="recover-msme-delayed-payments"
      category="MSME"
      title="Recovering Delayed Payments as an MSME: Your Rights and a Faster Route"
      dek="Late payments choke small-business cash flow — but as a registered MSME you have powerful statutory rights. Here's the 45-day rule, the interest you can claim, the MSME Samadhaan route, and a faster online alternative."
      datePublished="2026-06-26"
      readingTime="8 min read"
      faqs={[
        {
          q: "What is the 45-day rule for MSME payments?",
          a: "Under the MSMED Act, 2006, a buyer must pay a micro or small enterprise on the date agreed in writing — and that date cannot exceed 45 days from acceptance of the goods or services. With no written agreement, payment is due within 15 days.",
        },
        {
          q: "How much interest can I claim on a delayed MSME payment?",
          a: "Section 16 entitles you to compound interest with monthly rests at three times the bank rate notified by the RBI, calculated from the appointed day until the amount is actually paid.",
        },
        {
          q: "Do I need Udyam registration to claim?",
          a: "Yes. The delayed-payment remedies under the MSMED Act are available to suppliers with a valid Udyam registration as a micro or small enterprise.",
        },
        {
          q: "What is MSME Samadhaan?",
          a: "MSME Samadhaan (samadhaan.msme.gov.in) is the government portal for filing a delayed-payment reference to the Micro and Small Enterprise Facilitation Council (MSEFC), which conciliates and, if needed, arbitrates the dispute.",
        },
        {
          q: "Is online dispute resolution legally binding?",
          a: "Yes. Settlements and arbitral awards reached through online dispute resolution are enforceable under the Arbitration & Conciliation Act, 1996 — the same legal footing as offline ADR.",
        },
      ]}
      related={[
        {
          label: "Dispute resolution for MSMEs",
          href: "/msmes",
          description:
            "Recover unpaid invoices and protect your cash flow, online.",
        },
        {
          label: "File a dispute online",
          href: "/lodge-dispute",
          description:
            "Start conciliation or arbitration and reach a binding outcome.",
        },
      ]}
    >
      <p>
        For most small businesses, the problem isn&rsquo;t winning work — it&rsquo;s
        getting paid for it. Delayed payments tie up working capital, stall
        growth, and force founders to chase invoices instead of customers. What
        many MSME owners don&rsquo;t fully use is that Indian law gives a{" "}
        <strong>registered micro or small enterprise</strong> unusually strong
        rights to recover delayed payments — with interest. Here&rsquo;s how it
        works, and how to get paid faster.
      </p>

      <h2>Your statutory right: the 45-day rule</h2>
      <p>
        The <strong>Micro, Small and Medium Enterprises Development (MSMED) Act,
        2006</strong> (Sections 15&ndash;16) sets a hard limit on how long a buyer
        can take to pay. A buyer must pay a micro or small enterprise supplier on
        or before the date agreed in writing — and crucially, that agreed date
        <strong> cannot exceed 45 days</strong> from the day the goods or services
        are accepted (or deemed accepted). If there is no written agreement,
        payment falls due within 15 days.
      </p>

      <h2>The interest you&rsquo;re owed when payment is late</h2>
      <p>
        Miss that deadline and the consequences are real. Under{" "}
        <strong>Section 16</strong>, a defaulting buyer is liable to pay{" "}
        <strong>compound interest, with monthly rests, at three times the bank
        rate notified by the Reserve Bank of India</strong> — calculated from the
        appointed day. This is a statutory penalty, not a negotiable term, and the
        buyer cannot even claim that interest as a deduction for income-tax
        purposes (Section 23). In practice, the interest clock is your strongest
        lever.
      </p>

      <h2>Who qualifies</h2>
      <ul>
        <li>The supplier must be a <strong>micro or small enterprise with a valid Udyam registration</strong> — these delayed-payment protections are designed for them.</li>
        <li>The claim is about goods supplied or services rendered in the course of business.</li>
        <li>Keep your Udyam certificate, the invoice, the purchase order or work order, and proof of delivery and acceptance — they establish both the debt and the appointed day.</li>
      </ul>

      <h2>The MSME Samadhaan route (MSEFC)</h2>
      <p>
        To enforce these rights, you can file a reference on the{" "}
        <strong>MSME Samadhaan portal</strong> (samadhaan.msme.gov.in) against the
        buyer. The matter goes to the <strong>Micro and Small Enterprise
        Facilitation Council (MSEFC)</strong> in your state. The Council first
        attempts <strong>conciliation</strong>; if that fails, it conducts{" "}
        <strong>arbitration</strong> itself or refers it to an ADR institution —
        under the Arbitration &amp; Conciliation Act, 1996. The resulting award is
        enforceable like a decree of a court.
      </p>

      <h2>The catch — and the faster alternative</h2>
      <p>
        The Samadhaan route is powerful, but it isn&rsquo;t always quick. MSEFC
        councils carry their own backlogs, jurisdiction is tied to the
        supplier&rsquo;s location, and timelines can stretch well beyond what a
        cash-strapped business can wait for. Where you need speed — or where your
        contract already contains a dispute-resolution clause — private{" "}
        <strong>online dispute resolution</strong> is often the faster path.
      </p>
      <p>
        Through PDR Court, a delayed-payment dispute can be resolved entirely
        online: <strong>conciliation</strong> to reach a voluntary settlement, or{" "}
        <strong>arbitration</strong> for a binding award — typically in weeks, not
        years, with proceedings you can attend from your desk. See how it works
        for{" "}
        <Link href="/msmes">MSMEs and small businesses</Link>.
      </p>

      <h2>What to do today — a quick checklist</h2>
      <ul>
        <li>Confirm your <strong>Udyam registration</strong> is active and classifies you as micro or small.</li>
        <li>Document the debt: invoice, PO or work order, and proof of delivery and acceptance.</li>
        <li>Send a written payment reminder that cites the MSMED Act deadline and the interest payable.</li>
        <li>
          Choose your route: file on MSME Samadhaan, or — for speed, or where a
          contract clause exists —{" "}
          <Link href="/lodge-dispute">lodge an online dispute</Link> and drive it
          to a fast, enforceable outcome.
        </li>
      </ul>
      <p>
        You did the work. The law is firmly on your side about getting paid for
        it — and you don&rsquo;t have to spend a year in a queue to enforce that.
      </p>
    </GuideArticle>
  );
}
