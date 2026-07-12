import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { CTASection } from '@/components/CTASection';
import { FAQSection } from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'MTD ITSA: A Complete Guide for Sole Traders | Zenith',
  description:
    'Making Tax Digital for Income Tax Self Assessment (MTD ITSA) is now live for sole traders. Learn what it means for your business and how to prepare.',
  alternates: {
    canonical: 'https://zenithaccountancy.co.uk/blog/mtd-itsa-guide-sole-traders',
  },
};

const faqs = [
  {
    question: 'Who is affected by MTD ITSA?',
    answer:
      'Sole traders, partnerships, and most self-employed individuals with income over £10,000 per year are affected. Trusts, exclusions for those over 65, and certain other structures have different rules. Check HMRC guidance for your specific situation.',
  },
  {
    question: 'Do I have to do quarterly updates?',
    answer:
      'Yes, under MTD ITSA you must provide quarterly updates to HMRC on business income and expenses. These are submitted digitally through compatible accounting software. Quarterly reporting replaces the traditional annual Self Assessment return (though you\'ll still file annually).',
  },
  {
    question: 'What software do I need for MTD ITSA?',
    answer:
      'You need accounting software that\'s MTD ITSA-compliant. Popular options include Xero, QuickBooks, FreshBooks, Wave, and others on HMRC\'s recognized list. The software must allow you to submit quarterly updates directly to HMRC.',
  },
  {
    question: 'What happens if I don\'t meet the MTD ITSA requirements?',
    answer:
      'Penalties start at £100 for late quarterly submissions and can escalate to £1,000+ for serious breaches. Deliberate non-compliance can trigger criminal investigation. It\'s essential to understand your obligations and meet them.',
  },
  {
    question: 'Will MTD ITSA increase my tax bill?',
    answer:
      'MTD ITSA won\'t automatically increase your tax bill, but it does mean HMRC has better visibility of your finances throughout the year rather than just annually. Accurate quarterly reporting actually helps prevent underreporting and ensures the right tax is paid.',
  },
];

const relatedArticles = [
  { slug: 'making-tax-digital-explained', title: 'Making Tax Digital Explained: What Every Business Owner Needs to Know' },
  { slug: 'self-assessment-deadlines', title: 'Self Assessment Deadlines: A Complete Guide for 2024/25' },
];

export default function MTDITSAGuideSoleTraders() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#0f2244] py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-8 text-white/70 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span>MTD ITSA Guide for Sole Traders</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            MTD ITSA: A Complete Guide for Sole Traders
          </h1>
          <div className="flex flex-wrap gap-6 items-center text-white/80">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-800">
                Making Tax Digital
              </span>
            </div>
            <div>
              <span>20 April 2025</span>
            </div>
            <div>
              <span>9 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none text-gray-700">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Making Tax Digital for Income Tax Self Assessment (MTD ITSA) is now live for millions of UK sole traders and self-employed individuals. If you're self-employed with income above £10,000 per year, this change fundamentally affects how you report your finances to HMRC. This guide explains what MTD ITSA is, how it works, and what you need to do to comply.
            </p>

            <h2 className="text-3xl font-bold text-[#0f2244] mt-12 mb-6">What is MTD ITSA?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              MTD ITSA stands for Making Tax Digital for Income Tax Self Assessment. It's the next phase of HMRC's digital-first tax system, building on the successful rollout of MTD for VAT. Instead of filing your Self Assessment return once a year, you'll now provide quarterly updates to HMRC throughout the year, showing your business income and expenses in real-time.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The goal is the same as with MTD for VAT: improve tax compliance, catch discrepancies early, and give HMRC real-time visibility of your finances. It also means businesses can no longer fudge numbers at tax time—the system tracks income and expenses as they happen.
            </p>

            <h2 className="text-3xl font-bold text-[#0f2244] mt-12 mb-6">When Did MTD ITSA Start?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              MTD ITSA came into effect from 6 April 2024 for most sole traders and partnerships with income over £10,000. This means when you file your next Self Assessment return (by January 2025 for the 2024/25 tax year), you'll need to have been providing quarterly updates if you're required to comply.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              There are some exemptions and phased rollouts for certain groups, but the majority of self-employed people are now caught in the MTD ITSA net.
            </p>

            <h2 className="text-3xl font-bold text-[#0f2244] mt-12 mb-6">Who Must Comply with MTD ITSA?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              MTD ITSA applies to:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span>Sole traders with income over £10,000 per year</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span>Partnerships with income over £10,000 per year</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span>Most self-employed individuals and landlords</span>
              </li>
            </ul>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Exemptions include trusts, most entities over state pension age, and certain special situations. You can check if you're affected on HMRC's website.
            </p>

            <h2 className="text-3xl font-bold text-[#0f2244] mt-12 mb-6">How Does MTD ITSA Work?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              MTD ITSA works in three phases:
            </p>

            <h3 className="text-2xl font-bold text-[#0f2244] mt-10 mb-4">1. Quarterly Updates Throughout the Year</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              You provide quarterly updates to HMRC showing your business income and expenses. These are submitted electronically through MTD ITSA-compliant software. The quarterly periods are:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span>6 April to 5 July</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span>6 July to 5 October</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span>6 October to 5 January</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span>6 January to 5 April</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-[#0f2244] mt-10 mb-4">2. End of Year Submission</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              By 31 January after the end of the tax year, you submit a final end-of-year update to HMRC. This includes any additional information needed for your tax calculation, such as capital allowances, adjusted profit figures, or other adjustments.
            </p>

            <h3 className="text-2xl font-bold text-[#0f2244] mt-10 mb-4">3. Tax Year Summary</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              HMRC uses your quarterly updates and end-of-year submission to calculate your tax liability. You'll still file a tax return form, but much of the data is pre-populated from your submissions.
            </p>

            <h2 className="text-3xl font-bold text-[#0f2244] mt-12 mb-6">What Records Do You Need to Keep?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Under MTD ITSA, you must keep digital records of:
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
                <span>Receipts and supporting documents for expenses</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span>VAT records (if VAT-registered)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span>Capital allowances and asset records</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-[#0f2244] mt-12 mb-6">Which Software Do You Need?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              You must use accounting software from HMRC's MTD ITSA-compliant list. These include:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">Xero:</strong> Full MTD ITSA support with excellent quarterly update workflow</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">QuickBooks:</strong> MTD ITSA-ready with good reporting features</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">FreshBooks:</strong> Freelancer-focused, MTD ITSA compliant</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">Wave:</strong> Free option with MTD ITSA support</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">Others:</strong> Sage, Zoho Books, Countingup, and many more—check HMRC's full list</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-[#0f2244] mt-12 mb-6">Key Dates and Deadlines</h2>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">Quarterly updates:</strong> Due 5 days after the end of each quarter (so by 10 July, 10 October, 10 January, and 10 April)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">End-of-year update:</strong> Due 31 January after the tax year ends</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">Tax return filing:</strong> Still due 31 January (combines self-employment page with other income sources)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">Tax payment:</strong> Still due 31 January (plus payments on account if applicable)</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-[#0f2244] mt-12 mb-6">MTD ITSA Penalties</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Missing MTD ITSA obligations carries penalties:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">Late quarterly update:</strong> £100 per quarter for the first breach (one per tax year max), £200+ for subsequent breaches</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">Late end-of-year update:</strong> Similar penalty structure</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">Inaccurate returns:</strong> Additional penalties for providing incorrect information</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-[#0f2244] mt-12 mb-6">How to Prepare for MTD ITSA</h2>
            <ol className="space-y-4 mb-8">
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold">1.</span>
                <span><strong className="text-[#0f2244]">Check if you're affected:</strong> Visit HMRC's guidance to confirm whether MTD ITSA applies to you</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold">2.</span>
                <span><strong className="text-[#0f2244]">Choose compliant software:</strong> Select from HMRC's list of MTD ITSA-compliant platforms</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold">3.</span>
                <span><strong className="text-[#0f2244]">Migrate your records:</strong> Move historical records and set up to track transactions for quarterly reporting</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold">4.</span>
                <span><strong className="text-[#0f2244]">Set up integrations:</strong> Connect your bank, payment processors, and invoicing tools for automatic sync</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold">5.</span>
                <span><strong className="text-[#0f2244]">Plan your quarterly updates:</strong> Set reminders for when quarterly updates are due (5th of July, October, January, April)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold">6.</span>
                <span><strong className="text-[#0f2244]">Get support if needed:</strong> Consider working with a bookkeeper to handle the administrative burden</span>
              </li>
            </ol>

            <h2 className="text-3xl font-bold text-[#0f2244] mt-12 mb-6">Common Concerns About MTD ITSA</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong className="text-[#0f2244]">Will this increase my tax bill?</strong> MTD ITSA doesn't automatically increase tax—it just changes how you report. If you've been underreporting income, it will highlight that, but honest reporting should be unaffected.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong className="text-[#0f2244]">What if I miss a quarterly deadline?</strong> Missing a deadline triggers a penalty (£100 for the first breach). You can still submit late, but the penalty applies. The key is to plan ahead and hit deadlines consistently.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              <strong className="text-[#0f2244]">Will quarterly reporting be time-consuming?</strong> With good accounting software and proper record-keeping, quarterly updates take 30-60 minutes. The effort is front-loaded throughout the year rather than crammed into January.
            </p>

            <h2 className="text-3xl font-bold text-[#0f2244] mt-12 mb-6">Takeaway</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              MTD ITSA is now a reality for most UK sole traders. Rather than viewing it as a burden, see it as an opportunity to stay on top of your finances throughout the year. Regular quarterly updates mean no surprise bills at tax time, and your records are always organized and compliant.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-6">
              At Zenith Accountancy Services, we help sole traders navigate MTD ITSA with confidence. From software setup to handling your quarterly submissions and year-end filing, we take the complexity out of compliance. Let's discuss how we can support your business through this transition.
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
                We handle your quarterly updates and ensure full MTD ITSA compliance.
              </p>
              <span className="inline-flex items-center gap-2 text-[#0ea5c8] font-semibold text-sm">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              href="/self-assessment"
              className="group p-6 bg-white rounded-lg border border-gray-200 hover:border-[#0ea5c8] hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-[#0f2244] mb-2 group-hover:text-[#0ea5c8] transition-colors">
                Self Assessment Services
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                From quarterly updates to year-end filing, we handle your entire tax submission.
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
        title="MTD ITSA FAQs"
        subtitle="Common questions about quarterly updates, compliance, and deadlines"
      />

      {/* CTA Section */}
      <CTASection
        title="Get Professional Support for MTD ITSA"
        description="Don't navigate MTD ITSA alone. Our team can set up your software, handle quarterly submissions, and ensure you're always compliant with HMRC requirements."
        variant="navy"
      />
    </main>
  );
}
