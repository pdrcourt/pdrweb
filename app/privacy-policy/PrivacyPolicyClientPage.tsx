'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, Lock, HelpCircle } from 'lucide-react';
import SiblingLinksSection from '@/components/sections/SiblingLinksSection';

export default function PrivacyPolicyClientPage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-dark text-white overflow-hidden border-b-8 border-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/95 to-primary-950/40 z-10" />
        
        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-primary-300 text-sm font-medium mb-8">
                <ShieldCheck className="w-4 h-4" />
                <span>Resources & Legal</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
                Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-amber-200">Policy.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light mb-10 border-l-4 border-primary pl-6 py-2">
                PDR COURT respects your privacy and shall spare no effort to protect your personal information. By accessing or using our website, PDR COURT wants you to hereby acknowledge that you have read, understood and agreed to be bound by all the terms of this Privacy Policy.
              </p>
            </motion.div>

            <div className="relative flex justify-center items-center lg:h-[400px]">
              <div className="bg-cream/10 backdrop-blur-md rounded-[3rem] p-8 border border-white/10 shadow-2xl max-w-sm space-y-6 relative z-20">
                <div className="p-3 bg-primary/20 rounded-2xl w-fit">
                  <Lock className="w-8 h-8 text-primary-300" />
                </div>
                <h3 className="text-xl font-bold text-white">Guaranteed Security</h3>
                <p className="text-sm text-white/70 font-semibold leading-relaxed">
                  We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.
                </p>
                <div className="pt-4 border-t border-white/10">
                  <span className="text-xs text-white/60 font-bold block mb-1">Write to us</span>
                  <a href="mailto:legal@pdrcourt.com" className="text-lg font-bold text-primary hover:underline block">legal@pdrcourt.com</a>
                </div>
              </div>
              
              <div className="w-64 h-80 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl absolute left-8 top-16 z-10 hover:scale-105 transition-transform duration-300 hidden md:block">
                <img src="/images/corporate-man-smiling.jpg" alt="Corporate Man" className="w-full h-full object-cover opacity-30" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-20 lg:py-32 bg-white relative">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-primary max-w-none text-dark/80">
            
            {/* Header Callout */}
            <div className="bg-cream border border-cream-300 p-8 rounded-3xl mb-12 shadow-sm">
              <h3 className="text-2xl font-display font-bold text-dark mb-4 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                Acknowledgment
              </h3>
              <p className="font-semibold text-dark/70 text-sm leading-relaxed m-0 uppercase">
                BY ACCESSING OR USING WWW.PDRCOURT.COM/WWW.PDR COURT.IN YOU HEREBY ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREED TO BE BOUND BY ALL THE TERMS OF THIS PRIVACY POLICY OF WWW.PDRCOURT.COM/WWW.PDR COURT.IN TERMS OF USE.
              </p>
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-display font-bold text-dark mb-4">Use of Information collected</h3>
                <div className="text-sm text-dark/70 font-semibold leading-relaxed space-y-4">
                  <p>
                    pdrcourt.com/PDR COURT.in respects your privacy and shall spare no effort to protect your personal information. Cookies are small files that a site or its service provider transfers to your computer&apos;s hard drive through your Web browser (if you allow) that enable the sites or service provider systems to recognize your browser and capture and remember certain information.
                  </p>
                  <p>
                    We collect information from you when you register on our site, place an order or subscribe to our newsletter. When ordering or registering on PDR ORGANIZATION PRIVATE LIMITED, as appropriate, you may be asked to enter your name, e-mail address, mailing address, phone number or the payment method. You may, however, visit our site anonymously.
                  </p>
                  <p>Any of the information we collect from you may be used in one of the following ways:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>To personalise your experience (your information helps us to better respond to your individual needs).</li>
                    <li>To improve our website (we continually strive to improve our website offerings based on the information and feedback we receive from you).</li>
                    <li>To improve customer service (your information helps us to more effectively respond to your customer service requests and support needs).</li>
                    <li>To process transactions for your purchase.</li>
                    <li>Your information, whether public or private, will not be sold, exchanged, transferred, or given to any other company for any reason whatsoever without your consent other than for the express purpose of delivering the purchased product or service requested. We respect your privacy and will not use your email address for anything other than the specified purpose declared.</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-dark mb-4">Securing your Information</h3>
                <ul className="list-disc pl-6 text-sm text-dark/70 font-semibold space-y-2">
                  <li>Cookies are small files that a site or its service provider transfers to your computer&apos;s hard drive through your Web browser (if you allow) that enable the sites or service provider systems to recognise your browser and capture and remember certain information.</li>
                  <li>We use cookies to help us remember and process the items in your shopping cart.</li>
                  <li>Google, as a third-party vendor, uses cookies to serve ads on websites. Users may opt-out of the use of the DART cookie by visiting the Google ad and content network privacy policy.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-dark mb-4">Use of cookies</h3>
                <p className="text-sm text-dark/70 font-semibold leading-relaxed">
                  We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-dark mb-4">Disclosure of Your Information to Third Parties</h3>
                <p className="text-sm text-dark/70 font-semibold leading-relaxed">
                  We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so as long as parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect our or others&apos; rights, property, or safety.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-dark mb-4">Children&apos;s Online Privacy Protection Act Compliance</h3>
                <p className="text-sm text-dark/70 font-semibold leading-relaxed">
                  We are in compliance with the requirements of COPPA (Children&apos;s Online Privacy Protection Act). We do not collect any information from anyone under 18 years of age. Our website, products and services are all directed to people who are at least 18 years old or older.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-dark mb-4">FOR ADR/ODR use only</h3>
                <p className="text-sm text-dark/70 font-semibold leading-relaxed">
                  You hereby acknowledge that the use of this website is solely for ADR/ODR only. You shall not use this website for availing legal consultancy, legal advisory or for attorney&apos;s services. Services availed if any shall be services received from third party and PDR ORGANIZATION PRIVATE LIMITED&apos;s shall be indemnified and hold harmless against any loss arising after availing Third Party Services.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-dark mb-4">Methods of Payment</h3>
                <p className="text-sm text-dark/70 font-semibold leading-relaxed">
                  Used by thousands of business people, big and small and in nearly all parts of the world, PayPal and Worldpay are the two secure and easy-to-use payment solutions that are trustworthy to opt for. Hence, we at PDR ORGANIZATION PRIVATE LIMITED, use these two methods of payment to manage our processing on our website. With WorldPay, you are provided with a variety of options for payment such as Visa, MasterCard, Switch and all the major credit cards. We also accept debit cards. pdrcourt.com not only focuses on connecting you to the world of business branches, but instead it also helps in making a trusted payment to its members.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-dark mb-4">Refund Policy</h3>
                <div className="bg-cream border-l-4 border-primary p-6 rounded-r-2xl">
                  <h4 className="text-lg font-bold text-primary mb-2">No Refunds</h4>
                  <p className="text-sm text-dark/70 font-semibold leading-relaxed m-0">
                    A refund will not be provided for any membership. We do not provide credit, refund or prorated billing that is cancelled mid-year. In such a circumstance you will continue to avail of services till the end of your membership. However, we assure our customers/clients to provide services to 100% satisfaction.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-dark mb-4">Guaranteed security</h3>
                <p className="text-sm text-dark/70 font-semibold leading-relaxed">
                  We are committed to the security of your information that you post to your profile and also the pictures you add to your profile. We process a stringent investigation and report unauthorised usage of an account immediately and refund members within twenty-four hours for any breach of security as a result of internal company security transgressions. All your content and descriptions will be kept secure, and there is no need to fear any crime to happen on our website. You will be given a login, and the password you enter is tenable; there is no agony of hacking because it never happens on our site. All appropriate taxes are intended based on the billing information you provide us at the time of purchase. You may cancel or suspend your Premium Services here. PDR ORGANIZATION PRIVATE LIMITED refund policy is explained here. We do not guarantee refunds for lack of usage or discontent. You also acknowledge that our Premium Services are subjected to this agreement and any extra terms related to the delivery of the Premium Service. Additionally, if you require a printed invoice for your transaction with us, you may access it through your account settings under purchase history or, for SlideShare-related invoices, request one by e-mailing our customer support team.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-dark mb-4">Terms and Conditions</h3>
                <p className="text-sm text-dark/70 font-semibold leading-relaxed">
                  Please also visit our Terms and Conditions section establishing the use, disclaimers, and limitations of liability governing the use of our websites www.pdrcourt.com/www.PDR Court.in. This online privacy policy applies to information collected through our website online & information collected offline.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-dark mb-4">Changes to our Privacy Policy</h3>
                <p className="text-sm text-dark/70 font-semibold leading-relaxed">
                  If we decide to change our privacy policy, we will post those changes on this page. Alternatively, you can opt to join our email list for regular updates on our website and its products.
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
          currentRoute="/privacy-policy" 
          kind="Legal" 
        />
      </div>
    </div>
  );
}
