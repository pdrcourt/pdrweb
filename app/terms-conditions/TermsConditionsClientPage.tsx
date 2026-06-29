'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Scale, CheckCircle2, ShieldCheck, HelpCircle } from 'lucide-react';
import SiblingLinksSection from '@/components/sections/SiblingLinksSection';

export default function TermsConditionsClientPage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-dark text-white overflow-hidden border-b-8 border-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/95 to-primary-950/40 z-10" />
        
        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-primary-300 text-sm font-medium mb-8">
                <Scale className="w-4 h-4" />
                <span>Resources & Legal</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
                Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-amber-200">Conditions.</span>
              </h1>
              <p className="text-lg md:text-xl text-paper-70 leading-relaxed font-light mb-10 border-l-4 border-primary pl-6 py-2">
                PDR COURT defines the terms on which users may make use of our website whether as a guest or an account holder. Use of our site includes accessing, browsing, and creating an account.
              </p>
            </motion.div>

            <div className="relative flex justify-center items-center lg:h-[400px]">
              <div className="bg-cream/10 backdrop-blur-md rounded-[3rem] p-8 border border-white/10 shadow-2xl max-w-sm space-y-6 relative z-20">
                <div className="p-3 bg-primary/20 rounded-2xl w-fit">
                  <HelpCircle className="w-8 h-8 text-primary-300" />
                </div>
                <h3 className="text-xl font-bold text-white">Got any Questions?</h3>
                <p className="text-sm text-paper-70 font-semibold leading-relaxed">
                  Our legal desk is here to clarify details about our terms and policies.
                </p>
                <div className="pt-4 border-t border-white/10">
                  <span className="text-xs text-paper-60 font-bold block mb-1">Write to us</span>
                  <a href="mailto:legal@pdrcourt.com" className="text-lg font-bold text-primary hover:underline block">legal@pdrcourt.com</a>
                </div>
              </div>
              
              <div className="w-64 h-80 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl absolute left-8 top-16 z-10 hover:scale-105 transition-transform duration-300 hidden md:block">
                <img decoding="async" src="/images/corporate-man-smiling.jpg" alt="Corporate Man" className="w-full h-full object-cover opacity-30" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-20 lg:py-32 bg-white relative">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-primary max-w-none text-ink-80">
            
            {/* Header Callout */}
            <div className="bg-cream border border-cream-300 p-8 rounded-3xl mb-12 shadow-sm">
              <h3 className="text-2xl font-display font-bold text-dark mb-4 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                Agreement to Terms
              </h3>
              <p className="font-semibold text-ink-70 text-sm leading-relaxed m-0">
                The terms of use (together with the documents referred to in them) define the terms on which you may make use of our website www.pdrcourt.com/ (our site), whether as a guest or an account holder. Use of our site includes accessing, browsing, creating an account. Please read these terms of use carefully before you start to use our site, as these will apply to your use of our site. We recommend that you print a copy of this for future reference. By using our site, you confirm that you accept these terms of use and that you agree to comply with them. If you do not agree to these terms of use, you must not use our site or service.
              </p>
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-display font-bold text-dark mb-4">Modification of These Terms of Use</h3>
                <p className="text-sm text-ink-70 font-semibold leading-relaxed">
                  www.pdrcourt.com/ reserves the right to change the terms, conditions, and notices under which the www.pdrcourt.com/ Web Site is offered, including but not limited to the charges associated with the use of the www.pdrcourt.com Web Site.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-dark mb-4">No Unlawful or Prohibited Use</h3>
                <p className="text-sm text-ink-70 font-semibold leading-relaxed">
                  As a condition of your use of the www.pdrcourt.com/ Web Site, you warrant to www.pdrcourt.com/ that you will not use the www.pdrcourt.com/ Web Site for any purpose that is unlawful or prohibited by these terms, conditions, and notices. You may not use the www.pdrcourt.com/ Web Site in any manner which could damage, disable, overburden, or impair the www.pdrcourt.com/ Web Site or interfere with any other party&apos;s use and enjoyment of the www.pdrcourt.com/ Web Site. You may not obtain or attempt to obtain any materials or information through any means not intentionally made available or provided for through the www.pdrcourt.com/ Web Sites.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-dark mb-4">Other applicable terms</h3>
                <p className="text-sm text-ink-70 font-semibold leading-relaxed mb-4">
                  These terms of use refer to the following additional terms, which also apply to your use of our site:
                </p>
                <ul className="list-disc pl-6 text-sm text-ink-70 font-semibold space-y-2">
                  <li>Our Privacy Policy, which sets out the terms on which we process any personal data we collect from you, or that you provide to us. By using our site, you consent to such processing and you warrant that all data provided by you is accurate.</li>
                  <li>Our Cookie Policy (specified in our Privacy Policy), which sets out information about the cookies on our site.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-dark mb-4">Accounts, Membership and Security; Confidentiality</h3>
                <div className="text-sm text-ink-70 font-semibold leading-relaxed space-y-4">
                  <p>
                    To use certain Online Services, such as the PDR ORGANIZATION PRIVATE LIMITED Membership, you may be directed to register with the Site and create an account or otherwise provide PDR ORGANIZATION PRIVATE LIMITED with certain information about yourself and your case (if applicable). By submitting your information through the Site, subject to any confidentiality agreement with PDR ORGANIZATION PRIVATE LIMITED (if applicable), you grant PDR ORGANIZATION PRIVATE LIMITED a perpetual, irrevocable, worldwide, royalty-free, non-exclusive license to use, reproduce, transmit, and display this information in connection with PDR ORGANIZATION PRIVATE LIMITED&apos;s operation of the Site and/or performance of the Online Services for you and others you may designate.
                  </p>
                  <p>
                    As part of the registration process, you will be asked to submit such information as your name, title, email address, mobile phone number, and to choose a user name and password. If you submit information on a case to PDR ORGANIZATION PRIVATE LIMITED, you may also be asked to provide your company&apos;s name, mailing address, phone number, fax number, email address and web address, case information, identity of the parties to the dispute and your preferences for the hearing format, PDR ORGANIZATION PRIVATE LIMITED Mediation/Arbitration center, PDR ORGANIZATION PRIVATE LIMITED arbitrators or mediators who preside over a given PDR ORGANIZATION PRIVATE LIMITED case and hearing dates for the case. You represent and warrant that all information you provide to PDR ORGANIZATION PRIVATE LIMITED for purposes of creating an account (&ldquo;Registration Information&rdquo;) will be true, accurate, current and complete and your failure to comply with this warranty shall constitute a breach of these Terms of Service and may result in the immediate termination of your account.
                  </p>
                  <p>
                    Except for confidential information received in connection with any dispute resolution proceedings/cases, PDR ORGANIZATION PRIVATE LIMITED does not wish to receive any confidential or proprietary information from you via the Site or Online Services, whether by email, via the Online Services, or in any other manner. You agree that any confidential information you provide outside of such proceedings, including without limitation any concepts, ideas, plans, techniques or any other information or content that you provide, may be used by PDR ORGANIZATION PRIVATE LIMITED in any manner without restriction.
                  </p>
                  <p>
                    You shall not (a) select or use the email address or user name of another person with the intent to impersonate that person, (b) use a name subject to the rights of any other person without authorization, (c) use an email address or user name that is profane, offensive or otherwise inappropriate or (d) allow any other party to use your account and/or password.
                  </p>
                  <p>
                    You agree to immediately notify PDR ORGANIZATION PRIVATE LIMITED of any known or suspected unauthorized use(s) of your account or any known or suspected breach of security, including loss, theft or unauthorized disclosure of your password. You understand and agree that you shall be liable for all activities that occur under any account created for your use, even if such activities were not committed by you. PDR ORGANIZATION PRIVATE LIMITED is not responsible for any loss or damage arising from your failure to maintain the confidentiality of your password.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-dark mb-4">Membership Policy</h3>
                <div className="text-sm text-ink-70 font-semibold leading-relaxed space-y-4">
                  <p>
                    You shall comply with all applicable laws, statutes, ordinances and regulations in your use of the Online Services. PDR ORGANIZATION PRIVATE LIMITED may immediately terminate your account, or suspend your access to your account, in its sole discretion and without notice, for conduct that PDR ORGANIZATION PRIVATE LIMITED believes is: (i) illegal, fraudulent, harassing or abusive, (ii) a violation of these Terms of Service or any other policies or guidelines posted on the Site, or (iii) harmful to other users, third parties, or PDR ORGANIZATION PRIVATE LIMITED&apos;s business. Use of an account for illegal, fraudulent or abusive purposes may be referred to law enforcement authorities without notice. In addition, PDR ORGANIZATION PRIVATE LIMITED may terminate your account if you file a claim against PDR ORGANIZATION PRIVATE LIMITED, or a claim which in any way involves PDR ORGANIZATION PRIVATE LIMITED.
                  </p>
                  <p>
                    You understand that you, and not PDR ORGANIZATION PRIVATE LIMITED, are solely responsible for any information submitted about a case (&ldquo;Case Information&rdquo;) through the use of any of the Online Services. PDR ORGANIZATION PRIVATE LIMITED does not control the Case Information posted on the Site or transmitted through the use of any of the Online Services and, as such, does not guarantee the accuracy, reliability or quality of such Case Information.
                  </p>
                  <p className="font-bold text-dark">You agree not to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>upload, post, email, transmit, display on the Site or make available: (a) any information that is fraudulent, misleading, inaccurate, unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, pornographic, profane, invasive of another&apos;s privacy, hateful, or otherwise objectionable; (b) any information that you do not have a right to make available under applicable law or under contractual or fiduciary relationships; (c) any information that infringes, violates, or misappropriates any patent, trademark, trade secret, copyright, privacy, publicity or other rights of any third party; (d) any unsolicited or unauthorized advertising, promotional materials, junk mail, spam, or any other improper form of solicitation.</li>
                    <li>use any of the Online Services (i) to harm minors in any way, (ii) to impersonate any person or entity, (iii) for any commercial purpose or the benefit of any third party in a manner not permitted, or (iv) to violate any applicable laws.</li>
                    <li>remove any proprietary notices from the Site;</li>
                    <li>hack or seek unauthorized access to or compromise the integrity of the Site and Online Services, or breach or attempt to breach security of the Site, Online Services and related servers.</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-dark mb-4">Limited Liability Clause</h3>
                <div className="text-sm text-ink-70 font-semibold leading-relaxed space-y-4">
                  <p>
                    PDR ORGANIZATION PRIVATE LIMITED website with all its content is provided as seen by visitors. For this reason, users of this website agree to use the webpage on their own responsibility. PDR ORGANIZATION PRIVATE LIMITED does not in any way guarantee that PDR ORGANIZATION PRIVATE LIMITED website, servers or emails sent from PDR ORGANIZATION PRIVATE LIMITED will not contain viruses or other harmful elements. PDR ORGANIZATION PRIVATE LIMITED assumes no responsibility for damage of any kind that can be caused from the use of this website including, but not limited to, direct, indirect, incidental and consequential damages.
                  </p>
                  <p>
                    We will not be liable to any user for any loss or damage, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, even if foreseeable, arising under or in connection with:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>use of, or inability to use, our site;</li>
                    <li>use of, or inability to use, our Resolver Email Service;</li>
                    <li>loss of profits, sales, business, or revenue;</li>
                    <li>business interruption;</li>
                    <li>loss of anticipated savings;</li>
                    <li>loss of business opportunity, goodwill or reputation; or</li>
                    <li>any indirect or consequential loss or damage.</li>
                  </ul>
                  <p className="text-primary font-bold">PDR ORGANIZATION PRIVATE LIMITED is not responsible for any malfunction of the platform in case of force majeure.</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-dark mb-4">Intellectual Property</h3>
                <p className="text-sm text-ink-70 font-semibold leading-relaxed">
                  All intellectual property contained in PDR ORGANIZATION PRIVATE LIMITED, whether related to literary and artistic property, industrial property or know-how are and remain the sole and exclusive property of PDR ORGANIZATION PRIVATE LIMITED. Any reproduction and / or representation of all or part of any of these elements without the express advance written approval of PDR ORGANIZATION PRIVATE LIMITED is prohibited. You are prohibited from any other act likely to infringe directly or indirectly the intellectual property rights of PDR ORGANIZATION PRIVATE LIMITED.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-dark mb-4">Cancellation Policy</h3>
                <p className="text-sm text-ink-70 font-semibold leading-relaxed">
                  If you breach any of the Terms of Use, PDR ORGANIZATION PRIVATE LIMITED will have a right to suspend or terminate your account without any compensation or refund eight days after having sent you an e-mail asking you to remedy your non-compliance with the Terms of Use, or without any prior notice if your non-compliance is not curable.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-dark mb-4">Minimum Age</h3>
                <p className="text-sm text-ink-70 font-semibold leading-relaxed">
                  The minimum age for availing of our services is eighteen years. If you are below eighteen years, kindly apply for our services through your parent or guardian.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-dark mb-4">Payment Terms</h3>
                <div className="text-sm text-ink-70 font-semibold leading-relaxed space-y-4">
                  <p>
                    We have multiple payment options on our platform. You agree to indemnify us against all/any loss faced by you while making payment. All the payments shall be made in Indian currency only. Once you successfully make payment, you agree to acknowledge all the terms, conditions, and rules available on our website.
                  </p>
                  <p>The below-mentioned options are available for making payment:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Credit Card</li>
                    <li>Debit Card</li>
                    <li>Net Banking</li>
                    <li>UPI</li>
                    <li>Cash (on our authorized branch)</li>
                  </ul>
                  <p className="text-xs font-bold text-ink-60">Please make sure that you are using your own credit card while making payment, failing which we are not liable to acknowledge your payment.</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-dark mb-4">Principal to Principal</h3>
                <p className="text-sm text-ink-70 font-semibold leading-relaxed">
                  You understand that we are an independent entity and availing our services does not make you our employees, associates, agents or our legal representatives for any purpose whatsoever. These terms and conditions are entered on principal-to-principal basis and it will not create any employer-employee relationship between the Parties nor shall it be deemed to create any partnership, joint-venture, franchisee or association between us.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-dark mb-4">Disclaimer of Warranties</h3>
                <p className="text-xs text-ink-60 font-semibold leading-relaxed uppercase">
                  EXCEPT WHERE EXPRESSLY PROVIDED OTHERWISE BY PDR ORGANIZATION PRIVATE LIMITED, THE MATERIALS AND THE SERVICES ON THE WEBSITE ARE PROVIDED &ldquo;AS IS,&rdquo; AND ARE FOR USE AS CONTRACTED HEREIN. EXCEPT FOR THE EXPRESS WARRANTIES SET FORTH HEREIN, PDR ORGANIZATION PRIVATE LIMITED AND ITS THIRD PARTY PROVIDERS HEREBY DISCLAIM ALL EXPRESS OR IMPLIED REPRESENTATIONS, WARRANTIES, GUARANTIES, AND CONDITIONS WITH REGARD TO THE WEBSITE, THE MATERIALS, AND THE GOODS AND SERVICES ASSOCIATED THEREWITH INCLUDING BUT NOT LIMITED TO ANY IMPLIED REPRESENTATIONS, WARRANTIES, GUARANTIES, AND CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-dark mb-4">Refund Policy</h3>
                <div className="bg-cream border-l-4 border-primary p-6 rounded-r-2xl">
                  <h4 className="text-lg font-bold text-primary mb-2">Refund Policy Note</h4>
                  <p className="text-sm text-ink-70 font-semibold leading-relaxed m-0">
                    Refund will not be provided for any membership. We do not provide credit, refund or prorated billing that are cancelled mid-year. In such a circumstance you will continue to avail services till the end of membership. However, we assure our customers/clients to provide services to 100% satisfaction.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-dark mb-4">Governing Laws and Dispute Resolution</h3>
                <p className="text-sm text-ink-70 font-semibold leading-relaxed">
                  These terms of use shall be governed by the laws of India and the courts at Mumbai shall have jurisdictions with regards to subject matter of this agreement. Any Dispute, controversy, breach, termination or invalidity thereof shall be settled by arbitration in accordance with the provisions of The Arbitration and Conciliation act, 1996 as amended till date. To adjudicate the dispute, sole arbitrator shall be appointed by PDR ORGANIZATION PRIVATE LIMITED. The place, seat and venue of Arbitration shall be Mumbai. The arbitration proceeding shall be conducted in English Language and any award or awards shall be rendered in English language. The award of arbitral tribunal shall be final, conclusive and binding on the parties.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sibling Links */}
      <div className="bg-cream border-t border-cream-300">
        <SiblingLinksSection 
          links={[
            { title: "Terms & Conditions", route: "/terms-conditions", description: "Our platform terms." },
            { title: "Privacy Policy", route: "/privacy-policy", description: "Data privacy regulations." },
            { title: "Cookie Policy", route: "/cookie-policy", description: "Cookie preference rules." }
          ]} 
          parentRoute="/resources" 
          currentRoute="/terms-conditions" 
          kind="Legal" 
        />
      </div>
    </div>
  );
}
