import type { Metadata } from 'next';
import Link from 'next/link';
import {
  CheckCircle2,
  ArrowRight,
  Building2,
  Users,
  FileText,
  BarChart3,
  Calendar,
  Shield,
} from 'lucide-react';
import { ServiceHero } from '@/components/ServiceHero';
import { CTASection } from '@/components/CTASection';
import { FAQSection } from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Statutory Accounts Preparation | Zenith',
  description:
    'Year-end statutory accounts for sole traders and limited companies in Cheltenham, Winchcombe and Gloucestershire. Accurate, compliant accounts preparation.',
  alternates: {
    canonical: 'https://www.zenith-as.co.uk/statutory-accounts',
  },
};

const faqs = [
  {
    question: 'What are statutory accounts?',
    answer:
      'Statutory accounts are legally required financial statements prepared at year-end that show your company\'s financial position, profit/loss, and cash flow. For limited companies, these must be filed with Companies House. For sole traders, they support self-assessment tax returns. They must comply with accounting standards and company law.',
  },
  {
    question: 'When do I need to file statutory accounts?',
    answer:
      'Filing deadlines depend on your entity type. Private companies must file within 9 months of year-end (extended timeline available). Sole traders must file their tax return by 31st January following the tax year. We manage the timetable and remind you of all deadlines to ensure compliance.',
  },
  {
    question: 'Can I file dormant accounts?',
    answer:
      'If your company is dormant (no activity, no transactions), you can file dormant accounts. These are simpler and faster than full statutory accounts. We identify if you qualify and file accordingly, saving you fees and administration.',
  },
  {
    question: 'What accounts format applies to my business?',
    answer:
      'This depends on your turnover and structure. Micro-entities (under £632k turnover) can file abbreviated accounts. Small companies (under £10.2m) can file simplified accounts. We ensure you file the right format, minimising disclosure while remaining compliant.',
  },
  {
    question: 'How much detail will my accounts show?',
    answer:
      'The detail depends on the format filed. Full statutory accounts include detailed notes and disclosures. Abbreviated accounts show fewer details. We discuss your preferences and filing obligations to determine the right level of detail.',
  },
  {
    question: 'What if my accountant from previous years prepares my accounts?',
    answer:
      'We can prepare your statutory accounts regardless of prior history. If you change accountants, we handle all aspects: opening balances reconciliation, prior year information gathering, and seamless handover from previous accountants.',
  },
  {
    question: 'Are statutory accounts the same as management accounts?',
    answer:
      'No, they serve different purposes. Statutory accounts are formal, audited documents filed with regulators. Management accounts are monthly or quarterly reports for internal decision-making. Many companies produce both for different needs.',
  },
  {
    question: 'When should I book statutory accounts preparation?',
    answer:
      'Book as early as possible after year-end. We typically need 2-3 weeks to prepare accounts, depending on transaction volume and record quality. Early booking ensures you meet filing deadlines without rush fees.',
  },
];

export default function StatutoryAccountsPage() {
  return (
    <>
      <ServiceHero
        title="Statutory Accounts Preparation — Year-End Made Simple"
        subtitle="Professional, compliant year-end accounts for sole traders and limited companies. File with confidence."
        breadcrumbItems={[
          { name: 'Services', href: '/bookkeeping-services' },
          { name: 'Statutory Accounts' },
        ]}
        badge="COMPLIANCE"
      />

      {/* What Are Statutory Accounts */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-6">
                What Are Statutory Accounts?
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Statutory accounts are the formal financial statements your business must prepare at year-end. They
                show your profit/loss, balance sheet position, and cash flow. For limited companies, these documents
                are filed publicly with Companies House. For sole traders, they support your self-assessment tax
                return.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                These accounts must comply with accounting standards and company law. They provide stakeholders,
                HMRC, and the public (for companies) with a clear picture of your financial health and trading
                performance.
              </p>

              <div className="space-y-3">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#0ea5c8] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Profit & Loss:</strong> Shows revenue, expenses, and net profit
                  </span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#0ea5c8] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Balance Sheet:</strong> Details assets, liabilities, and equity
                  </span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#0ea5c8] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Cash Flow:</strong> Explains money in and out of your business
                  </span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#0ea5c8] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Notes & Disclosures:</strong> Supporting detail and compliance statements
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0f2244] to-[#0f2244]/90 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Why Statutory Accounts Matter</h3>
              <div className="space-y-5">
                <div>
                  <p className="font-semibold text-[#0ea5c8] mb-2">Legal Requirement</p>
                  <p className="text-white/80">Required by law for all companies and businesses above certain thresholds</p>
                </div>
                <div>
                  <p className="font-semibold text-[#0ea5c8] mb-2">Tax Compliance</p>
                  <p className="text-white/80">
                    Form the basis of your corporation tax return or self-assessment submission
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#0ea5c8] mb-2">Stakeholder Confidence</p>
                  <p className="text-white/80">Banks, investors, and partners expect certified, credible financial statements</p>
                </div>
                <div>
                  <p className="font-semibold text-[#0ea5c8] mb-2">Audit Trail</p>
                  <p className="text-white/80">Professional accounts provide clear evidence for HMRC or regulatory inquiries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Year-End Process */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-12 text-center">
            The Year-End Accounts Process
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 rounded-lg bg-[#0ea5c8]/20 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-[#0ea5c8]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0f2244] mb-3">1. Information Gathering</h3>
              <p className="text-gray-600 text-sm">
                We collect all records needed: trial balance, invoices, receipts, bank statements, payroll information,
                and any adjustments.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 rounded-lg bg-[#0ea5c8]/20 flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-[#0ea5c8]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0f2244] mb-3">2. Draft Preparation</h3>
              <p className="text-gray-600 text-sm">
                We prepare draft accounts showing all transactions, adjustments, and year-end items. We liaise with
                you on any queries.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 rounded-lg bg-[#0ea5c8]/20 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-[#0ea5c8]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0f2244] mb-3">3. Review & Adjustment</h3>
              <p className="text-gray-600 text-sm">
                Final review for completeness, accuracy, and compliance. We make adjustments and ensure all
                requirements are met.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 rounded-lg bg-[#0ea5c8]/20 flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-[#0ea5c8]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0f2244] mb-3">4. Filing & Delivery</h3>
              <p className="text-gray-600 text-sm">
                Finalised accounts prepared for signing. We coordinate filing with Companies House or HMRC as
                required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sole Traders vs Limited Companies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-12 text-center">
            Sole Trader Accounts vs Limited Company Accounts
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-[#0ea5c8] rounded-xl p-8 bg-white">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-[#0ea5c8]" />
                <h3 className="text-2xl font-bold text-[#0f2244]">Sole Traders</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#0f2244] mb-2">Accounts Format</h4>
                  <p className="text-gray-700">
                    Simplified accounts showing profit/loss and key expenses. Attached to self-assessment tax return.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#0f2244] mb-2">Filing Requirements</h4>
                  <p className="text-gray-700">
                    File by 31st January following the tax year via Self Assessment. No public filing required.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#0f2244] mb-2">What's Included</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Turnover and business expenses</li>
                    <li>• Profit or loss calculation</li>
                    <li>• Capital allowances</li>
                    <li>• Tax summary with our recommendations</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-[#0f2244] mb-2">Timeframe</h4>
                  <p className="text-gray-700">2-3 weeks after providing records</p>
                </div>
              </div>
            </div>

            <div className="border-2 border-[#0ea5c8] rounded-xl p-8 bg-white">
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-8 h-8 text-[#0ea5c8]" />
                <h3 className="text-2xl font-bold text-[#0f2244]">Limited Companies</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#0f2244] mb-2">Accounts Format</h4>
                  <p className="text-gray-700">
                    Full or abbreviated statutory accounts depending on size. Filed publicly with Companies House and
                    HMRC.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#0f2244] mb-2">Filing Requirements</h4>
                  <p className="text-gray-700">
                    File within 9 months of year-end with Companies House. Corporation tax return filed separately.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#0f2244] mb-2">What's Included</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Profit & loss statement</li>
                    <li>• Balance sheet (assets, liabilities, equity)</li>
                    <li>• Cash flow statement</li>
                    <li>• Notes and disclosures (detail varies)</li>
                    <li>• Director/audit certifications</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-[#0f2244] mb-2">Timeframe</h4>
                  <p className="text-gray-700">3-4 weeks after providing records</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filing Deadlines */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#0f2244] to-[#0f2244]/95 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Filing Deadlines & Important Dates</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-xl font-bold mb-6 text-[#0ea5c8]">Sole Traders (Self Assessment)</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Calendar className="w-6 h-6 text-[#0ea5c8]" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Return Filing Deadline</p>
                    <p className="text-white/80">31st January following the tax year</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Calendar className="w-6 h-6 text-[#0ea5c8]" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Tax Payment Due</p>
                    <p className="text-white/80">31st January for prior year; payments on account Jan/Jul</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Calendar className="w-6 h-6 text-[#0ea5c8]" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Record Retention</p>
                    <p className="text-white/80">Keep records for 6 years from year-end</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-xl font-bold mb-6 text-[#0ea5c8]">Limited Companies</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Calendar className="w-6 h-6 text-[#0ea5c8]" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Companies House Filing</p>
                    <p className="text-white/80">Within 9 months of year-end (or 12 months if extended)</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Calendar className="w-6 h-6 text-[#0ea5c8]" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Corporation Tax Return</p>
                    <p className="text-white/80">12 months from end of accounting period</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Calendar className="w-6 h-6 text-[#0ea5c8]" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Tax Payment Due</p>
                    <p className="text-white/80">9 months after year-end (Q1-Q3 payments may apply)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#0ea5c8]/20 rounded-xl p-6 border border-[#0ea5c8]/40">
            <p className="text-white/90 text-center">
              We manage all deadlines and remind you well in advance. No filing penalties on our watch.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-12 text-center">
            What's Included in Our Statutory Accounts Service
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <CheckCircle2 className="w-8 h-8 text-[#0ea5c8] mb-4" />
              <h3 className="text-lg font-semibold text-[#0f2244] mb-3">Complete Preparation</h3>
              <p className="text-gray-600">
                Draft and final accounts prepared to UK accounting standards with full compliance checks.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <CheckCircle2 className="w-8 h-8 text-[#0ea5c8] mb-4" />
              <h3 className="text-lg font-semibold text-[#0f2244] mb-3">Year-End Adjustments</h3>
              <p className="text-gray-600">
                Accruals, prepayments, depreciation, bad debts, and all standard adjustments calculated.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <CheckCircle2 className="w-8 h-8 text-[#0ea5c8] mb-4" />
              <h3 className="text-lg font-semibold text-[#0f2244] mb-3">Tax Advisory</h3>
              <p className="text-gray-600">
                Summary of tax liabilities, recommendations for planning, and guidance on payments.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <CheckCircle2 className="w-8 h-8 text-[#0ea5c8] mb-4" />
              <h3 className="text-lg font-semibold text-[#0f2244] mb-3">Filing Coordination</h3>
              <p className="text-gray-600">
                We liaise with regulators, coordinate with other advisors, and handle all filing logistics.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <CheckCircle2 className="w-8 h-8 text-[#0ea5c8] mb-4" />
              <h3 className="text-lg font-semibold text-[#0f2244] mb-3">Director Sign-Off Support</h3>
              <p className="text-gray-600">
                Guidance on director responsibilities and certifications; we prepare all sign-off documentation.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <CheckCircle2 className="w-8 h-8 text-[#0ea5c8] mb-4" />
              <h3 className="text-lg font-semibold text-[#0f2244] mb-3">Ongoing Support</h3>
              <p className="text-gray-600">
                Questions during the year? We're here to advise on accounting, tax, and compliance matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        faqs={faqs}
        title="Statutory Accounts Questions"
        subtitle="Get answers to common questions about preparing your year-end accounts."
      />

      {/* Related Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-12 text-center">Related Services</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Link
              href="/record-keeping"
              className="group bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-[#0ea5c8] hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-[#0f2244] group-hover:text-[#0ea5c8] transition-colors">
                  Record Keeping & Reconciliation
                </h3>
                <ArrowRight className="w-5 h-5 text-[#0ea5c8] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-gray-600">
                Monthly bookkeeping and reconciliation to ensure your accounts are ready for year-end.
              </p>
            </Link>

            <Link
              href="/bookkeeping-services"
              className="group bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-[#0ea5c8] hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-[#0f2244] group-hover:text-[#0ea5c8] transition-colors">
                  Bookkeeping Services
                </h3>
                <ArrowRight className="w-5 h-5 text-[#0ea5c8] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-gray-600">
                Complete bookkeeping and business accounting support throughout the year.
              </p>
            </Link>

            <Link
              href="/contact"
              className="group bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-[#0ea5c8] hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-[#0f2244] group-hover:text-[#0ea5c8] transition-colors">
                  Book a Consultation
                </h3>
                <ArrowRight className="w-5 h-5 text-[#0ea5c8] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-gray-600">
                Discuss your accounting needs and let us prepare your next set of statutory accounts.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready for Professional Year-End Accounts?"
        description="Get your statutory accounts prepared by experienced professionals. Compliant, accurate, and filed on time. Let's take the year-end stress away."
        variant="navy"
      />
    </>
  );
}
