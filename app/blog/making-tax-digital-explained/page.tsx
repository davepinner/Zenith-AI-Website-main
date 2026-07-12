import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { CTASection } from '@/components/CTASection';
import { FAQSection } from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Making Tax Digital Explained: What Every Business Owner Needs to Know | Zenith',
  description:
    'Making Tax Digital is changing how UK businesses report to HMRC. Learn the current rules, deadlines, and what\'s coming next. Comprehensive guide for business owners.',
  alternates: {
    canonical: 'https://zenithaccountancy.co.uk/blog/making-tax-digital-explained',
  },
};

const faqs = [
  {
    question: 'What exactly is Making Tax Digital?',
    answer:
      'Making Tax Digital (MTD) is HMRC\'s initiative to modernize tax administration in the UK. It requires businesses to keep digital records and submit returns using software, moving away from paper-based systems. The aim is to improve accuracy and reduce tax compliance errors.',
  },
  {
    question: 'Do I have to use Making Tax Digital?',
    answer:
      'Most businesses with a turnover above the MTD threshold must use MTD for VAT. From April 2024, MTD for Income Tax Self Assessment (MTD ITSA) affects sole traders and partnerships with income over £10,000. There are exemptions for small businesses, trusts, and certain other entities. We can advise if you\'re affected.',
  },
  {
    question: 'What software do I need for MTD compliance?',
    answer:
      'You need accounting software that\'s recognized by HMRC. Popular options include Xero, QuickBooks, FreshBooks, Wave, and Sage. We recommend choosing software that integrates with your business operations and bank accounts to minimize manual data entry.',
  },
  {
    question: 'What are the penalties for non-compliance?',
    answer:
      'HMRC penalties for MTD non-compliance start at £100 and can increase for repeated breaches or deliberate non-compliance. Penalties are also applied for late or inaccurate returns. Maintaining accurate digital records and meeting deadlines helps you avoid these penalties entirely.',
  },
  {
    question: 'How can you help me with MTD compliance?',
    answer:
      'We can help you choose the right software, set up your digital records, ensure you\'re compliant with HMRC requirements, and handle your tax returns and submissions. Our team stays up-to-date with MTD regulations so you don\'t have to worry.',
  },
];

const relatedArticles = [
  { slug: 'mtd-itsa-guide-sole-traders', title: 'MTD ITSA: A Complete Guide for Sole Traders' },
  { slug: 'common-vat-mistakes', title: '5 Common VAT Return Mistakes (and How to Avoid Them)' },
];

export default function MakingTaxDigitalBlog() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#0f2244] py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 text-white/70 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span>Making Tax Digital Explained</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Making Tax Digital Explained: What Every Business Owner Needs to Know
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap gap-6 items-center text-white/80">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-800">
                Making Tax Digital
              </span>
            </div>
            <div>
              <span>15 January 2025</span>
            </div>
            <div>
              <span>7 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none text-gray-700">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Making Tax Digital (MTD) represents one of the most significant changes to UK tax administration in decades. If you run a business or are self-employed, it's essential to understand what MTD is, how it affects you, and what steps you need to take to stay compliant with HMRC regulations.
            </p>

            <h2 className="text-3xl font-bold text-[#0f2244] mt-12 mb-6">What is Making Tax Digital?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Making Tax Digital is HMRC's digital-first tax system that modernizes how UK businesses, self-employed individuals, and partnerships report their finances to the tax authority. Rather than submitting paper records or traditional spreadsheets, MTD requires you to keep digital records throughout the year and submit tax returns using compatible accounting software.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The core principle is simple: HMRC wants real-time visibility of business finances. This shift aims to reduce errors, catch discrepancies early, and improve overall tax compliance across the UK. It also helps level the playing field—businesses can't hide income if records are digital and transparent.
            </p>

            <h2 className="text-3xl font-bold text-[#0f2244] mt-12 mb-6">Current MTD Rules (2024/25)</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Currently, Making Tax Digital applies in different ways depending on your business structure:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">VAT-registered businesses:</strong> If your turnover exceeds the VAT threshold (£90,000 for most businesses), you must use MTD for VAT returns. This has been mandatory since April 2019.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">Self-employed and partnerships:</strong> From April 2024, MTD for Income Tax Self Assessment applies to sole traders and partnerships with income over £10,000.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">Limited companies:</strong> Mandatory MTD for corporation tax returns will roll out in phases. Large companies were first, with smaller companies following later.</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-[#0f2244] mt-12 mb-6">What Records Do You Need to Keep?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Under MTD, you must maintain digital records that show all income and business expenses. Specifically:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span>All invoices issued and received</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span>Bank statements and transaction records</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span>Receipts for expenses and purchases</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span>VAT records and calculations</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span>Payroll records (if you have employees)</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-[#0f2244] mt-12 mb-6">Which Software Should You Use?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              HMRC publishes a list of recognized software providers that meet MTD standards. Popular options include:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">Xero:</strong> Cloud-based, excellent integrations, mobile app, real-time collaboration</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">QuickBooks:</strong> Strong in US and UK markets, good invoicing and expense tracking</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">FreshBooks:</strong> Ideal for freelancers and contractors with invoicing focus</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">Wave:</strong> Free cloud accounting software with good features for small businesses</span>
              </li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We recommend choosing software that integrates with your bank accounts, payment processors, and invoicing tools to minimize manual data entry and keep records current.
            </p>

            <h2 className="text-3xl font-bold text-[#0f2244] mt-12 mb-6">Key MTD Deadlines</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              To stay compliant, you need to know these important dates:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">VAT returns:</strong> Due 1 month + 7 days after the end of each quarter</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">Self Assessment (MTD ITSA):</strong> Tax returns due 31 January following the tax year</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">Quarterly updates:</strong> You must provide quarterly summaries to HMRC under MTD ITSA</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-[#0f2244] mt-12 mb-6">Common Misconceptions About MTD</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              There's often confusion about MTD. Let's clear up a few myths:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">Myth: MTD is just for VAT returns.</strong> Reality: MTD now covers VAT, self assessment, and corporation tax reporting, depending on your business structure.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">Myth: I can still use spreadsheets for MTD.</strong> Reality: HMRC-recognized software is required. Spreadsheets alone don't meet MTD standards.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">Myth: MTD only affects large businesses.</strong> Reality: Self-employed individuals and small businesses with income over £10,000 must now comply with MTD ITSA.</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-[#0f2244] mt-12 mb-6">How to Prepare for MTD Compliance</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Getting ready for MTD doesn't have to be stressful. Here are practical steps to take now:
            </p>
            <ol className="space-y-4 mb-8">
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold">1.</span>
                <span><strong className="text-[#0f2244]">Choose compliant software.</strong> Select accounting software from HMRC's recognized list that suits your business needs and budget.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold">2.</span>
                <span><strong className="text-[#0f2244]">Digitize your records.</strong> Scan or photograph old receipts and invoices. Move everything into your chosen software.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold">3.</span>
                <span><strong className="text-[#0f2244]">Set up integrations.</strong> Connect your bank accounts, payment processors (PayPal, Stripe), and invoicing tools to your accounting software for automatic data sync.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold">4.</span>
                <span><strong className="text-[#0f2244]">Document your processes.</strong> Establish clear procedures for recording transactions, managing receipts, and maintaining compliance.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold">5.</span>
                <span><strong className="text-[#0f2244]">Get professional support.</strong> Consider working with a bookkeeper or accountant to ensure you're fully compliant and making the most of your software.</span>
              </li>
            </ol>

            <h2 className="text-3xl font-bold text-[#0f2244] mt-12 mb-6">What's Coming Next?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              HMRC's rollout of MTD continues to expand. The next major milestone is MTD for Income Tax Self Assessment (MTD ITSA), which is now in effect for most self-employed individuals and partnerships. Large companies have already been subject to MTD for corporation tax.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Future changes may include enhanced real-time reporting requirements, more granular data collection, and broader application across different business structures. Staying informed and maintaining accurate digital records now will make these transitions much smoother.
            </p>

            <h2 className="text-3xl font-bold text-[#0f2244] mt-12 mb-6">Takeaway</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Making Tax Digital is here to stay, and it's transforming how UK businesses manage their finances. While the shift to digital record-keeping and online submission may seem daunting, it ultimately brings clarity, reduces errors, and can save you time and money in the long run. The key is to start preparing now, choose the right software, and seek professional guidance if needed.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-6">
              Our team at Zenith Accountancy Services can help you navigate MTD compliance with confidence. From software selection to ongoing bookkeeping support, we're here to make sure your business stays compliant and your records are always ready for HMRC.
            </p>
          </article>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0f2244] mb-8">Related Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/mtd-itsa"
              className="group p-6 bg-white rounded-lg border border-gray-200 hover:border-[#0ea5c8] hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-[#0f2244] mb-2 group-hover:text-[#0ea5c8] transition-colors">
                MTD ITSA Support
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Expert guidance on Making Tax Digital for Income Tax Self Assessment.
              </p>
              <span className="inline-flex items-center gap-2 text-[#0ea5c8] font-semibold text-sm">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              href="/vat-returns"
              className="group p-6 bg-white rounded-lg border border-gray-200 hover:border-[#0ea5c8] hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-[#0f2244] mb-2 group-hover:text-[#0ea5c8] transition-colors">
                VAT Returns & Compliance
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                We handle your VAT returns and MTD compliance to ensure you stay audit-proof.
              </p>
              <span className="inline-flex items-center gap-2 text-[#0ea5c8] font-semibold text-sm">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0f2244] mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {relatedArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#0ea5c8] hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-[#0f2244] mb-2 group-hover:text-[#0ea5c8] transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <span className="inline-flex items-center gap-2 text-[#0ea5c8] font-semibold text-sm">
                  Read Article <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={faqs}
        title="Making Tax Digital FAQs"
        subtitle="Common questions about MTD compliance and digital tax reporting"
      />

      {/* CTA Section */}
      <CTASection
        title="Ready to Get MTD Compliant?"
        description="Our team can help you navigate Making Tax Digital, set up compliant accounting software, and keep your records organized. Book a free consultation today."
        variant="navy"
      />
    </main>
  );
}
