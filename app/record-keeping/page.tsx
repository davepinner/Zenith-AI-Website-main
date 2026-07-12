import type { Metadata } from 'next';
import Link from 'next/link';
import {
  CheckCircle2,
  ArrowRight,
  Calendar,
  BarChart3,
  Shield,
  Zap,
  FileText,
  TrendingUp,
} from 'lucide-react';
import { ServiceHero } from '@/components/ServiceHero';
import { CTASection } from '@/components/CTASection';
import { FAQSection } from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Monthly Record Keeping & Reconciliation | Zenith Accountancy',
  description:
    'Accurate monthly bookkeeping reconciliation for businesses in Cheltenham, Winchcombe and the North Cotswolds. Bank reconciliation, credit card reconciliation.',
  alternates: {
    canonical: 'https://www.zenith-as.co.uk/record-keeping',
  },
};

const faqs = [
  {
    question: 'How often should I reconcile my bank account?',
    answer:
      'We recommend monthly reconciliation as standard. This ensures your records match your bank statements and helps catch any discrepancies quickly. For high-volume transactions, some businesses prefer weekly reviews. Monthly reconciliation is also essential for accurate management reporting and VAT compliance.',
  },
  {
    question: 'What if there are discrepancies during reconciliation?',
    answer:
      'Discrepancies are common and we investigate them thoroughly. These might include outstanding cheques, bank errors, timing differences, or data entry mistakes. Our process systematically identifies and resolves each issue, often recovering lost income or preventing overpayments. Once resolved, your records reflect an accurate financial position.',
  },
  {
    question: 'Can you reconcile credit card expenses?',
    answer:
      'Yes, we handle full credit card reconciliation alongside your bank reconciliation. This includes categorising expenses, matching transactions to receipts, and ensuring VAT recovery where applicable. Multi-card businesses benefit from comprehensive reconciliation across all payment methods.',
  },
  {
    question: 'Why is monthly reconciliation important for compliance?',
    answer:
      'HMRC expects accurate records demonstrating income and expenditure. Monthly reconciliation ensures your books reflect true transactions, supports audit trails, and proves compliance. It also provides evidence of proper record-keeping during tax investigations or business disputes.',
  },
  {
    question: 'How does reconciliation improve business decision-making?',
    answer:
      'Accurate, timely financial records mean you see real cash positions, profit trends, and spending patterns. This enables confident forecasting, better budgeting, and informed pricing decisions. Monthly reconciliation prevents financial surprises and helps identify opportunities for cost control.',
  },
  {
    question: 'What accounting software do you reconcile?',
    answer:
      'We work across all major platforms: Xero, QuickBooks, Sage, FreshBooks, Wave, and traditional spreadsheet systems. Our software expertise means smooth, efficient reconciliation regardless of your platform.',
  },
];

export default function RecordKeepingPage() {
  return (
    <>
      <ServiceHero
        title="Monthly Record Keeping & Reconciliation"
        subtitle="Accurate, timely bookkeeping that keeps your finances compliant and your business confident."
        breadcrumbItems={[
          { name: 'Services', href: '/bookkeeping-services' },
          { name: 'Record Keeping & Reconciliation' },
        ]}
        badge="CORE SERVICE"
      />

      {/* Bank Reconciliation Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-6">
                Bank Reconciliation: The Foundation of Accurate Records
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Bank reconciliation is the monthly process of comparing your accounting records against your bank
                statements. It ensures every transaction is accounted for, identifies missing entries, and catches
                errors before they compound.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#0ea5c8] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#0f2244] mb-1">Line-by-line verification</h3>
                    <p className="text-gray-600">Every transaction matched and validated</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#0ea5c8] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#0f2244] mb-1">Outstanding items identified</h3>
                    <p className="text-gray-600">Cheques, transfers and pending transactions tracked</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#0ea5c8] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#0f2244] mb-1">Discrepancies resolved</h3>
                    <p className="text-gray-600">Issues investigated and corrected immediately</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Monthly bank reconciliation takes the guesswork out of your cash position. You'll always know exactly
                what money is available and what's committed. This clarity is invaluable for managing cash flow,
                planning payments, and avoiding overdraft fees.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#0f2244] to-[#0f2244]/90 rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="w-6 h-6 text-[#0ea5c8]" />
                    <h3 className="font-semibold text-lg">Monthly Process</h3>
                  </div>
                  <p className="text-white/80">Scheduled within 5 working days of month-end for maximum accuracy</p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Zap className="w-6 h-6 text-[#0ea5c8]" />
                    <h3 className="font-semibold text-lg">Real-time Updates</h3>
                  </div>
                  <p className="text-white/80">
                    Automated feeds and manual entry ensure nothing is missed or duplicated
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="w-6 h-6 text-[#0ea5c8]" />
                    <h3 className="font-semibold text-lg">Audit Trail</h3>
                  </div>
                  <p className="text-white/80">Full documentation and reconciliation notes for compliance and peace of mind</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credit Card Reconciliation */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-6">
            Credit Card & Payment Reconciliation
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            Business credit cards, corporate accounts, and multiple payment methods create complexity. We reconcile
            every payment channel, categorise expenses correctly, and ensure VAT recovery where applicable.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-[#0ea5c8] transition-colors">
              <FileText className="w-8 h-8 text-[#0ea5c8] mb-4" />
              <h3 className="text-xl font-semibold text-[#0f2244] mb-3">Expense Categorisation</h3>
              <p className="text-gray-600 leading-relaxed">
                Every card transaction allocated to the correct expense code. This ensures accurate reporting, proper
                cost analysis, and VAT compliance across all spending.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-[#0ea5c8] transition-colors">
              <BarChart3 className="w-8 h-8 text-[#0ea5c8] mb-4" />
              <h3 className="text-xl font-semibold text-[#0f2244] mb-3">Receipt Matching</h3>
              <p className="text-gray-600 leading-relaxed">
                Transactions matched to supporting receipts and invoices. We identify missing documentation and flag
                queries, ensuring complete audit trails.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-[#0ea5c8] transition-colors">
              <TrendingUp className="w-8 h-8 text-[#0ea5c8] mb-4" />
              <h3 className="text-xl font-semibold text-[#0f2244] mb-3">VAT Recovery Optimisation</h3>
              <p className="text-gray-600 leading-relaxed">
                We identify all VAT-recoverable spending, ensuring maximum reclaim. Multi-currency and cross-border
                transactions are handled correctly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Records Management */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-6">
                Complete Financial Records Management
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Reconciliation is only one part of comprehensive record-keeping. We maintain complete, organised
                financial records that serve you at every stage: daily operations, monthly reviews, year-end
                accounting, tax submissions, and future decision-making.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#0ea5c8]/20">
                      <CheckCircle2 className="w-6 h-6 text-[#0ea5c8]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0f2244] mb-1">Purchase & Sales Ledger</h3>
                    <p className="text-gray-600">All invoices tracked, aged debt monitored, payment terms managed</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#0ea5c8]/20">
                      <CheckCircle2 className="w-6 h-6 text-[#0ea5c8]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0f2244] mb-1">Payroll Integration</h3>
                    <p className="text-gray-600">
                      PAYE, pensions, and employee records reconciled with tax accounts seamlessly
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#0ea5c8]/20">
                      <CheckCircle2 className="w-6 h-6 text-[#0ea5c8]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0f2244] mb-1">Fixed Asset Tracking</h3>
                    <p className="text-gray-600">Capital equipment recorded, depreciation calculated, disposals managed</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#0ea5c8]/20">
                      <CheckCircle2 className="w-6 h-6 text-[#0ea5c8]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0f2244] mb-1">Management Reporting</h3>
                    <p className="text-gray-600">Monthly profit & loss, balance sheet, cash flow and KPI dashboards</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0ea5c8] to-[#0891b2] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Why Accuracy Drives Compliance</h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                HMRC conducts reviews with increasing frequency and sophistication. Accurate, well-maintained records
                are your best defence. They demonstrate good record-keeping practices, support audit trails, and prove
                compliance with tax law.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-[#0f2244] font-bold flex-shrink-0">✓</span>
                  <span>Clear evidence of income and allowable expenses</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#0f2244] font-bold flex-shrink-0">✓</span>
                  <span>VAT correctly charged, recovered, and submitted</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#0f2244] font-bold flex-shrink-0">✓</span>
                  <span>PAYE and payroll contributions properly accounted for</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#0f2244] font-bold flex-shrink-0">✓</span>
                  <span>Professional presentation during any inquiry</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-12 text-center">
            Our Monthly Record Keeping Process
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative">
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[#0ea5c8] text-white font-bold text-lg flex items-center justify-center mb-4">
                      1
                    </div>
                    <div className="w-1 h-20 bg-[#0ea5c8]/30" />
                  </div>
                  <div className="pb-8">
                    <h3 className="text-lg font-semibold text-[#0f2244] mb-2">Data Collection</h3>
                    <p className="text-gray-600">
                      We gather bank statements, credit card statements, invoices, receipts, and payroll records. For
                      most clients, this is automated via direct feeds.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[#0ea5c8] text-white font-bold text-lg flex items-center justify-center mb-4">
                      2
                    </div>
                    <div className="w-1 h-20 bg-[#0ea5c8]/30" />
                  </div>
                  <div className="pb-8">
                    <h3 className="text-lg font-semibold text-[#0f2244] mb-2">Transaction Entry</h3>
                    <p className="text-gray-600">
                      Transactions are entered or verified in your accounting software. We categorise each entry
                      correctly and ensure completeness.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[#0ea5c8] text-white font-bold text-lg flex items-center justify-center mb-4">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#0f2244] mb-2">Reconciliation</h3>
                    <p className="text-gray-600">
                      We match every transaction to supporting documents and reconcile bank/card accounts against
                      records.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[#0ea5c8] text-white font-bold text-lg flex items-center justify-center mb-4">
                      4
                    </div>
                    <div className="w-1 h-20 bg-[#0ea5c8]/30" />
                  </div>
                  <div className="pb-8">
                    <h3 className="text-lg font-semibold text-[#0f2244] mb-2">Query Resolution</h3>
                    <p className="text-gray-600">
                      Any discrepancies, missing receipts, or timing differences are investigated and resolved with
                      you.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[#0ea5c8] text-white font-bold text-lg flex items-center justify-center mb-4">
                      5
                    </div>
                    <div className="w-1 h-20 bg-[#0ea5c8]/30" />
                  </div>
                  <div className="pb-8">
                    <h3 className="text-lg font-semibold text-[#0f2244] mb-2">Reporting & Advice</h3>
                    <p className="text-gray-600">
                      We provide management accounts, identify opportunities for tax planning, and highlight any
                      financial concerns.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[#0ea5c8] text-white font-bold text-lg flex items-center justify-center mb-4">
                      6
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#0f2244] mb-2">Ready for Tax Time</h3>
                    <p className="text-gray-600">
                      By year-end, your records are complete, accurate, and ready for statutory accounts and tax
                      submissions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-12 text-center">
            The Benefits of Professional Record Keeping
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#0f2244]/5 to-[#0ea5c8]/5 rounded-xl p-8 border border-[#0ea5c8]/20">
              <div className="w-12 h-12 rounded-lg bg-[#0ea5c8]/20 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-[#0ea5c8]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0f2244] mb-3">Better Decision-Making</h3>
              <p className="text-gray-700">
                Real, timely financial data means confident decisions on pricing, hiring, investment and strategy.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0f2244]/5 to-[#0ea5c8]/5 rounded-xl p-8 border border-[#0ea5c8]/20">
              <div className="w-12 h-12 rounded-lg bg-[#0ea5c8]/20 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-[#0ea5c8]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0f2244] mb-3">Complete Compliance</h3>
              <p className="text-gray-700">
                Accurate records satisfy HMRC, support audit trails, and provide evidence of proper tax compliance.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0f2244]/5 to-[#0ea5c8]/5 rounded-xl p-8 border border-[#0ea5c8]/20">
              <div className="w-12 h-12 rounded-lg bg-[#0ea5c8]/20 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-[#0ea5c8]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0f2244] mb-3">Maximised Tax Position</h3>
              <p className="text-gray-700">
                Accurate categorisation ensures all allowable expenses are claimed and VAT is optimised.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0f2244]/5 to-[#0ea5c8]/5 rounded-xl p-8 border border-[#0ea5c8]/20">
              <div className="w-12 h-12 rounded-lg bg-[#0ea5c8]/20 flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-[#0ea5c8]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0f2244] mb-3">Time Savings</h3>
              <p className="text-gray-700">
                No need to spend evenings chasing bank statements or organising receipts. We handle it all.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0f2244]/5 to-[#0ea5c8]/5 rounded-xl p-8 border border-[#0ea5c8]/20">
              <div className="w-12 h-12 rounded-lg bg-[#0ea5c8]/20 flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-[#0ea5c8]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0f2244] mb-3">Cash Flow Confidence</h3>
              <p className="text-gray-700">
                Know your available cash, upcoming payments, and realistic financial forecast at all times.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0f2244]/5 to-[#0ea5c8]/5 rounded-xl p-8 border border-[#0ea5c8]/20">
              <div className="w-12 h-12 rounded-lg bg-[#0ea5c8]/20 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-[#0ea5c8]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0f2244] mb-3">Year-End Ease</h3>
              <p className="text-gray-700">
                Records are ready. No scrambling to find invoices or reconstruct transactions at year-end.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        faqs={faqs}
        title="Monthly Record Keeping Questions"
        subtitle="Get answers to common questions about bank reconciliation and financial record management."
      />

      {/* Related Services */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-12 text-center">Related Services</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Link
              href="/bookkeeping-services"
              className="group bg-white rounded-xl p-8 border border-gray-200 hover:border-[#0ea5c8] hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-[#0f2244] group-hover:text-[#0ea5c8] transition-colors">
                  Bookkeeping Services
                </h3>
                <ArrowRight className="w-5 h-5 text-[#0ea5c8] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-gray-600">
                Complete bookkeeping from transaction entry to monthly reporting and year-end preparation.
              </p>
            </Link>

            <Link
              href="/statutory-accounts"
              className="group bg-white rounded-xl p-8 border border-gray-200 hover:border-[#0ea5c8] hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-[#0f2244] group-hover:text-[#0ea5c8] transition-colors">
                  Statutory Accounts
                </h3>
                <ArrowRight className="w-5 h-5 text-[#0ea5c8] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-gray-600">
                Year-end statutory accounts preparation for sole traders and limited companies.
              </p>
            </Link>

            <Link
              href="/contact"
              className="group bg-white rounded-xl p-8 border border-gray-200 hover:border-[#0ea5c8] hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-[#0f2244] group-hover:text-[#0ea5c8] transition-colors">
                  Get Started
                </h3>
                <ArrowRight className="w-5 h-5 text-[#0ea5c8] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-gray-600">Contact us today to discuss your record keeping needs and get a free quote.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready for Accurate, Stress-Free Record Keeping?"
        description="Let us take the bookkeeping burden off your shoulders. With accurate monthly reconciliation and records management, you'll have the financial clarity to run your business with confidence."
        variant="navy"
      />
    </>
  );
}
