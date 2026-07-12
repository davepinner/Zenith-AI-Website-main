import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { CTASection } from '@/components/CTASection';
import { FAQSection } from '@/components/FAQSection';

export const metadata: Metadata = {
  title: '5 Common VAT Return Mistakes (and How to Avoid Them) | Zenith',
  description:
    'VAT errors cost thousands in penalties and interest. Learn the 5 most common VAT mistakes businesses make and how to avoid them to stay compliant with HMRC.',
  alternates: {
    canonical: 'https://zenithaccountancy.co.uk/blog/common-vat-mistakes',
  },
};

const faqs = [
  {
    question: 'What happens if I file a VAT return late?',
    answer:
      'HMRC penalties for late VAT return submission start at £200 or 5% of VAT payable (whichever is higher) for the first breach, increasing for repeated violations. Submitting online by the deadline helps avoid these penalties entirely.',
  },
  {
    question: 'Can I claim back VAT on expenses if I make a mistake in categorization?',
    answer:
      'You can submit an amended VAT return if you discover errors within a certain timeframe. HMRC allows correction of most errors, but if you intentionally claimed VAT you weren\'t entitled to, this becomes a different issue. Prevention is better than correction.',
  },
  {
    question: 'What if I invoice a customer abroad?',
    answer:
      'Invoices to businesses in other EU or non-EU countries may be zero-rated or reverse charged depending on their VAT status and your business type. This requires proper documentation and correct coding. Professional guidance is essential for cross-border transactions.',
  },
  {
    question: 'How often should I reconcile my VAT records?',
    answer:
      'You should reconcile VAT records monthly or quarterly depending on your filing frequency. Regular reconciliation catches errors early before they multiply and helps you prepare accurate returns quickly when they\'re due.',
  },
  {
    question: 'What records do I need to keep for VAT purposes?',
    answer:
      'Keep all invoices, receipts, purchase orders, credit notes, and bank statements for at least 6 years. Digital records are acceptable if properly stored. These documents prove your VAT claims and protect you in case of HMRC audit.',
  },
];

const relatedArticles = [
  { slug: 'making-tax-digital-explained', title: 'Making Tax Digital Explained: What Every Business Owner Needs to Know' },
  { slug: 'self-assessment-deadlines', title: 'Self Assessment Deadlines: A Complete Guide for 2024/25' },
];

export default function CommonVATMistakes() {
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
            <span>Common VAT Mistakes</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            5 Common VAT Return Mistakes (and How to Avoid Them)
          </h1>
          <div className="flex flex-wrap gap-6 items-center text-white/80">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-orange-100 text-orange-800">
                VAT
              </span>
            </div>
            <div>
              <span>10 March 2025</span>
            </div>
            <div>
              <span>6 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none text-gray-700">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              VAT mistakes are costly. Errors on your return can result in penalties, interest charges, and unwelcome attention from HMRC. Many businesses make the same VAT errors repeatedly—often without realizing they're getting it wrong. This guide covers the five most common VAT mistakes and how to avoid them.
            </p>

            <h2 className="text-3xl font-bold text-[#0f2244] mt-12 mb-6">1. Incorrectly Claiming VAT on Exempt Supplies</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              One of the most frequent VAT errors is claiming input tax (VAT you've paid) on supplies that are exempt or outside the scope of VAT. This includes financial services, insurance, membership fees to non-trading organizations, and certain medical treatments.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong className="text-[#0f2244]">Why it matters:</strong> If you claim VAT on exempt supplies, you're overclaiming your input tax, which reduces your VAT liability and triggers HMRC scrutiny.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              <strong className="text-[#0f2244]">How to avoid it:</strong> Keep detailed records of all expenses and their classification. When in doubt about whether a supply is VATable, consult HMRC guidance or ask your accountant. Use accounting software that helps categorize transactions correctly.
            </p>

            <h2 className="text-3xl font-bold text-[#0f2244] mt-12 mb-6">2. Missing the VAT Return Deadline</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              VAT returns must be filed by the same date you pay any VAT due. For most businesses, this is one month plus seven calendar days after the end of the quarter. Missing this deadline triggers penalties.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong className="text-[#0f2244]">Why it matters:</strong> A single late return results in a £200 penalty (or 5% of VAT due, whichever is higher). Repeat offences compound the penalties and can trigger further interest charges and assessments.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              <strong className="text-[#0f2244]">How to avoid it:</strong> Mark VAT deadlines in your calendar with reminders 2-3 weeks in advance. If you struggle to meet deadlines, consider using software that flags due dates or hiring a bookkeeper to handle submissions. Filing online by HMRC's portal is now mandatory and the deadline is strict.
            </p>

            <h2 className="text-3xl font-bold text-[#0f2244] mt-12 mb-6">3. Miscalculating the VAT on Round Sum Invoices</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Some businesses incorrectly calculate VAT on round sum invoices, particularly when they invoice in round figures like £100. If an invoice says "£100 including VAT" at 20%, the VAT is actually £16.67, not £20. Small rounding errors multiply across hundreds of invoices.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong className="text-[#0f2244]">Why it matters:</strong> These errors accumulate. Over a year, miscalculating VAT on round sum invoices can mean you're overstating or understating your VAT return by hundreds of pounds—enough to trigger a correction or investigation.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              <strong className="text-[#0f2244]">How to avoid it:</strong> Use accounting software that automatically calculates VAT correctly. If invoicing manually, double-check the calculation: to find VAT on an amount including VAT, divide by 1.20 (or 1.05 for reduced rate), then subtract the original amount.
            </p>

            <h2 className="text-3xl font-bold text-[#0f2244] mt-12 mb-6">4. Not Keeping Proper Supporting Documentation</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              HMRC requires you to keep invoices, receipts, and records for at least 6 years. Many businesses keep digital copies but lose track of originals, or don't keep supporting docs for all claims. Without documentation, you can't prove your VAT claims to HMRC.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong className="text-[#0f2244]">Why it matters:</strong> If HMRC audits your return and you can't produce receipts for claimed expenses, they can deny those claims. This means VAT becomes payable on revenue you thought was properly accounted for, plus penalties.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              <strong className="text-[#0f2244]">How to avoid it:</strong> Implement a document management system. Scan receipts and invoices monthly. Store them digitally with clear naming and organization. Use accounting software that links invoices and receipts to transactions. Organize by month and supplier.
            </p>

            <h2 className="text-3xl font-bold text-[#0f2244] mt-12 mb-6">5. Not Adjusting VAT Records When Credit Notes Are Issued</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              When you issue a credit note to a customer, the VAT on that credit note must be accounted for in your VAT return—not just the invoice amounts. The same applies to credit notes received from suppliers. Many businesses miss this adjustment.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong className="text-[#0f2244]">Why it matters:</strong> Forgetting to include credit notes means your VAT return doesn't reflect the true VAT position. You're either overstating VAT due (meaning you pay unnecessarily) or understating it (meaning you face a correction and penalties).
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              <strong className="text-[#0f2244]">How to avoid it:</strong> Ensure your accounting system automatically tracks credit notes as deductions from the related invoices. Flag credit notes during VAT reconciliation. Reconcile VAT monthly to catch these errors early before the quarterly return is filed.
            </p>

            <h2 className="text-3xl font-bold text-[#0f2244] mt-12 mb-6">Bonus Mistake: Not Reconciling VAT Records Regularly</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Many businesses wait until the VAT return is due to reconcile their records. By then, mistakes have accumulated over three months and are harder to trace.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              <strong className="text-[#0f2244]">Best practice:</strong> Reconcile your VAT records monthly. This means matching sales invoices to sales list, purchase invoices to purchases list, and checking the VAT totals. Catching discrepancies early is far easier than sorting out a messy quarter-end reconciliation.
            </p>

            <h2 className="text-3xl font-bold text-[#0f2244] mt-12 mb-6">Your VAT Safety Checklist</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Before submitting each VAT return, verify:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span>All invoices issued have been recorded with correct VAT amounts</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span>All purchase invoices and receipts have been recorded and VAT is only claimed where VATable</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span>All credit notes issued and received are properly accounted for</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span>VAT totals on the return match your accounting records</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span>Supporting documentation is stored and accessible</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span>The return is being filed before the deadline</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-[#0f2244] mt-12 mb-6">Takeaway</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              VAT compliance isn't complicated, but mistakes are common and costly. Most errors stem from poor record-keeping, lack of reconciliation, and not understanding VAT rules. By implementing regular reconciliation, using good accounting software, and keeping meticulous records, you can avoid these pitfalls.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-6">
              If VAT is a headache for your business, we can help. Our team handles VAT returns for dozens of businesses, catching issues before they become problems. We ensure your records are accurate, your returns are filed on time, and you're never at risk of penalties.
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
              href="/vat-returns"
              className="group p-6 bg-white rounded-lg border border-gray-200 hover:border-[#0ea5c8] hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-[#0f2244] mb-2 group-hover:text-[#0ea5c8] transition-colors">
                VAT Returns & Compliance
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                We handle your VAT returns and ensure full HMRC compliance.
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
                Clean records and proper VAT tracking start with good bookkeeping.
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
        title="VAT Compliance FAQs"
        subtitle="Common questions about VAT returns and HMRC compliance"
      />

      {/* CTA Section */}
      <CTASection
        title="Stop Worrying About VAT Compliance"
        description="Let our qualified team handle your VAT returns and ensure you're always compliant. Book a free consultation to discuss how we can help."
        variant="navy"
      />
    </main>
  );
}
