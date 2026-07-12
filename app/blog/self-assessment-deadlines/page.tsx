import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { CTASection } from '@/components/CTASection';
import { FAQSection } from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Self Assessment Deadlines: A Complete Guide for 2024/25 | Zenith',
  description:
    'Never miss an HMRC self assessment deadline again. Complete guide to all tax year dates, payment deadlines, and what you need to do and when.',
  alternates: {
    canonical: 'https://zenithaccountancy.co.uk/blog/self-assessment-deadlines',
  },
};

const faqs = [
  {
    question: 'What happens if I miss the Self Assessment deadline?',
    answer:
      'Missing the deadline to file your return incurs penalties starting at £100. If you don\'t file within 3 months, the penalty increases to £10 per day (up to £900). If you don\'t file within 12 months, you\'ll face a penalty of up to 100% of the tax owed. It\'s critical to file on time.',
  },
  {
    question: 'Can I get an extension if I\'ve got more time to prepare?',
    answer:
      'HMRC does offer extensions in specific circumstances (accounting issues, natural disasters, bereavement, etc.), but you must request it before the deadline. Extensions are not automatic, so don\'t rely on getting one. It\'s better to file on time and amend later if needed.',
  },
  {
    question: 'What if I owe tax but can\'t pay by the deadline?',
    answer:
      'Contact HMRC as soon as possible if you can\'t pay by the deadline. They may offer a Time to Pay arrangement allowing you to pay in installments. Penalties and interest will apply, but payment arrangements prevent further action. Don\'t ignore the problem.',
  },
  {
    question: 'Do I need to file a Self Assessment return if my income is low?',
    answer:
      'You must file a Self Assessment return if you\'re self-employed or have income over the threshold, even if you don\'t owe tax. However, if your income is below £1,000, you may not be required to file. Check HMRC guidance for your specific situation.',
  },
  {
    question: 'Should I file my return early or wait until close to the deadline?',
    answer:
      'Filing early is better. It gives you time to spot errors and allows HMRC to contact you if they have questions. Filing close to the deadline leaves no buffer for technical issues or missing documents. Aim to file at least 2 weeks before the deadline.',
  },
];

const relatedArticles = [
  { slug: 'making-tax-digital-explained', title: 'Making Tax Digital Explained: What Every Business Owner Needs to Know' },
  { slug: 'mtd-itsa-guide-sole-traders', title: 'MTD ITSA: A Complete Guide for Sole Traders' },
];

export default function SelfAssessmentDeadlines() {
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
            <span>Self Assessment Deadlines</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Self Assessment Deadlines: A Complete Guide for 2024/25
          </h1>
          <div className="flex flex-wrap gap-6 items-center text-white/80">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800">
                Tax
              </span>
            </div>
            <div>
              <span>1 April 2025</span>
            </div>
            <div>
              <span>5 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none text-gray-700">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Self Assessment deadlines are non-negotiable. Missing them means penalties, interest, and potential enforcement action from HMRC. If you're self-employed, a company director, or have other income, understanding these dates is essential. Here's everything you need to know about Self Assessment deadlines for the 2024/25 tax year.
            </p>

            <h2 className="text-3xl font-bold text-[#0f2244] mt-12 mb-6">Key Self Assessment Deadlines for 2024/25</h2>

            <h3 className="text-2xl font-bold text-[#0f2244] mt-10 mb-4">31 October 2024 – Deadline for Paper Returns</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              If filing a paper return (which is rare and not recommended), this is the deadline. Most people file online, so this date is largely obsolete. However, if you have special circumstances preventing online filing, you must request a paper form before this deadline.
            </p>

            <h3 className="text-2xl font-bold text-[#0f2244] mt-10 mb-4">31 January 2025 – The Main Deadline</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This is the critical deadline. By 31 January 2025, you must:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span>File your Self Assessment tax return online</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span>Pay any tax owing for the previous year (2023/24)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span>Make your first payment on account for the current year if applicable</span>
              </li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              For the 2024/25 tax year, this means filing by 31 January 2025 and paying tax owed for 2023/24, plus the first payment on account (typically 50% of your estimated tax for 2024/25).
            </p>

            <h3 className="text-2xl font-bold text-[#0f2244] mt-10 mb-4">31 July 2025 – Second Payment on Account</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              If you're required to make payments on account (typically if you owed more than £1,000 tax), your second payment is due by 31 July 2025. This is another 50% of your estimated tax for 2024/25.
            </p>

            <h2 className="text-3xl font-bold text-[#0f2244] mt-12 mb-6">Understanding Payments on Account</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Payments on account are instalments of tax you're expected to pay during the tax year, rather than in one lump sum at the end. Here's how they work:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">First payment (January):</strong> Due 31 January in the tax year, typically equal to 50% of your previous year's tax</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">Second payment (July):</strong> Due 31 July, also typically 50% of your previous year's tax</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">Final payment (January):</strong> Due 31 January the following year, balancing out any difference between payments on account and your actual tax liability</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-[#0f2244] mt-12 mb-6">What You Need Before the Deadline</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              To file your return on time, gather these documents:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span>Total business income (from invoices or sales records)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span>All business expenses and allowable deductions</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span>Employment income details (P60 or payslips)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span>Interest, dividend, and rental income records</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span>Gift Aid donation receipts</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span>Any other relevant income or deduction documents</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-[#0f2244] mt-12 mb-6">Penalties for Missing Deadlines</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              HMRC penalties are serious and escalate quickly if you miss deadlines:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">Late filing (up to 3 months late):</strong> £100 fixed penalty</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">3-6 months late:</strong> Additional penalty of 5% of tax owed or £300, whichever is higher</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">6-12 months late:</strong> Additional penalty of 5% of tax owed or £300, whichever is higher</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">Late payment of tax:</strong> Interest on unpaid tax plus potential penalties of 5%, 10%, or more depending on how late</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-[#0f2244] mt-12 mb-6">How to File Your Return</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              HMRC requires all Self Assessment returns to be filed online through their Self Assessment portal:
            </p>
            <ol className="space-y-4 mb-8">
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold">1.</span>
                <span>Log in to your HMRC Self Assessment account at tax.service.gov.uk</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold">2.</span>
                <span>Complete your tax return (either directly or import data from accounting software)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold">3.</span>
                <span>Review the calculations and check for accuracy</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold">4.</span>
                <span>Submit the return (before 31 January)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold">5.</span>
                <span>Pay any tax due (also by 31 January or 31 July for payments on account)</span>
              </li>
            </ol>

            <h2 className="text-3xl font-bold text-[#0f2244] mt-12 mb-6">Payment Methods</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              You can pay Self Assessment tax through several methods:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span>Online banking (fastest and safest option)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span>Debit or credit card (via the government payment service)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span>Cheque (payable to HMRC with payment slip)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span>Direct debit (set up Time to Pay arrangement)</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-[#0f2244] mt-12 mb-6">Pro Tips for Meeting Your Deadlines</h2>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">Start early:</strong> Don't wait until January. Gather records and prepare throughout the year</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">Use accounting software:</strong> Software can import data directly into your return, saving time and reducing errors</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">Set reminders:</strong> Mark the key dates (31 October, 31 January, 31 July) in your calendar with advance warnings</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">Keep records:</strong> Store all receipts, invoices, and documents for at least 6 years</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">Get professional help:</strong> Consider working with an accountant if Self Assessment is complex or stressful</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-[#0f2244] mt-12 mb-6">Takeaway</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Self Assessment deadlines are non-negotiable, and penalties for missing them are substantial. The key is to organize your records throughout the year, stay aware of deadlines, and file early if possible. Missing a deadline by even one day can result in a £100 penalty—easily avoided with basic planning.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-6">
              If Self Assessment feels overwhelming, we can help. Our team prepares returns for self-employed individuals and company directors, ensuring everything is filed on time and you maximize your allowable deductions. Let's discuss how we can take the stress out of tax time.
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
              href="/self-assessment"
              className="group p-6 bg-white rounded-lg border border-gray-200 hover:border-[#0ea5c8] hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-[#0f2244] mb-2 group-hover:text-[#0ea5c8] transition-colors">
                Self Assessment Services
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                We handle your Self Assessment return and ensure full compliance with HMRC.
              </p>
              <span className="inline-flex items-center gap-2 text-[#0ea5c8] font-semibold text-sm">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              href="/bookkeeping-services"
              className="group p-6 bg-white rounded-lg border border-gray-200 hover:border-[#0ea5c8] hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-[#0f2244] mb-2 group-hover:text-[#0ea5c8] transition-colors">
                Bookkeeping Services
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Clean records make tax returns accurate and filing stress-free.
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
        title="Self Assessment FAQs"
        subtitle="Common questions about deadlines, payments, and filing requirements"
      />

      {/* CTA Section */}
      <CTASection
        title="Never Miss a Self Assessment Deadline Again"
        description="Let our experienced team handle your Self Assessment return. We'll ensure it's filed on time, penalties-free, and optimized for your situation."
        variant="navy"
      />
    </main>
  );
}
