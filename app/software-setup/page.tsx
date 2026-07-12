import type { Metadata } from 'next';
import Link from 'next/link';
import {
  CheckCircle2,
  ArrowRight,
  Zap,
  Users,
  Settings,
  BookOpen,
  MessageCircle,
  BarChart3,
} from 'lucide-react';
import { ServiceHero } from '@/components/ServiceHero';
import { CTASection } from '@/components/CTASection';
import { FAQSection } from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Xero, QuickBooks & Sage Setup & Training | Zenith',
  description:
    'Expert accounting software setup and training in Cheltenham and Winchcombe. Xero, QuickBooks and Sage implementation, configuration and staff training.',
  alternates: {
    canonical: 'https://www.zenith-as.co.uk/software-setup',
  },
};

const faqs = [
  {
    question: 'Which accounting software is best for my business?',
    answer:
      'Each platform has strengths. Xero excels at online collaboration and integrations. QuickBooks is powerful for multi-user setups. Sage suits larger businesses. We assess your workflows, team size, integrations, and budget to recommend the best fit. Many businesses thrive on any platform with proper setup.',
  },
  {
    question: 'How long does software setup take?',
    answer:
      'Basic setup typically takes 3-5 days. Complex setups (multiple currencies, advanced integrations, custom fields) take 1-2 weeks. Training adds another 1-2 days. We provide a realistic timeline after understanding your requirements.',
  },
  {
    question: 'Do I need to train my entire team?',
    answer:
      'We recommend training key staff: finance leads, accounts managers, and those entering transactions. Others can receive role-specific training. We provide documentation and video guides so new staff can be trained in the future without our involvement.',
  },
  {
    question: 'What if my current setup is wrong?',
    answer:
      "If you're already using accounting software but it's configured poorly, we can audit and rebuild it. This may involve reclassifying transactions, fixing chart of accounts, setting up integrations, and retraining staff. The cost is usually worth the efficiency gains.",
  },
  {
    question: 'Can you set up integrations with our other systems?',
    answer:
      'Yes. We set up connections between your accounting software, CRM, e-commerce platform, payroll, and banking. This reduces manual data entry, improves accuracy, and saves time. We advise on which integrations make sense for your business.',
  },
  {
    question: 'Do you provide ongoing training after setup?',
    answer:
      'Yes. We provide post-setup support, refresher training, and help with new features. Many clients have an annual training session when software updates or new features are released.',
  },
  {
    question: 'What is chart of accounts setup?',
    answer:
      'This is the foundation of your accounting system: the list of accounts for income, expenses, assets, and liabilities. Proper setup ensures accurate reporting, tax compliance, and meaningful business insights. We build your chart based on your industry, structure, and reporting needs.',
  },
  {
    question: 'Can you help with user management and permissions?',
    answer:
      'Absolutely. We set up user accounts and configure permissions so staff see only what they need. This protects sensitive data, prevents errors, and ensures compliance. We advise on best practice access levels.',
  },
];

export default function SoftwareSetupPage() {
  return (
    <>
      <ServiceHero
        title="Accounting Software Setup & Training"
        subtitle="Expert implementation and staff training for Xero, QuickBooks, Sage and more. Get the most from your accounting software."
        breadcrumbItems={[
          { name: 'Services', href: '/bookkeeping-services' },
          { name: 'Software Setup & Training' },
        ]}
        badge="SETUP & SUPPORT"
      />

      {/* Why the Right Software Matters */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-6">
                Why the Right Software Setup Matters
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Your accounting software is only as good as its setup. Many businesses have great software configured
                poorly. This leads to inefficient workflows, data entry errors, incomplete reporting, and wasted time.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Proper setup means: automated processes, accurate data, reliable reporting, compliance confidence, and
                staff productivity. It's the foundation for financial clarity and business growth.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#0ea5c8] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#0f2244] mb-1">Proper Chart of Accounts</h3>
                    <p className="text-gray-600">
                      Accounts structured for your business, tax reporting, and management decision-making
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#0ea5c8] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#0f2244] mb-1">Tax Code Configuration</h3>
                    <p className="text-gray-600">
                      VAT, PAYE, and tax codes set correctly for compliance and reporting
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#0ea5c8] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#0f2244] mb-1">Automated Integrations</h3>
                    <p className="text-gray-600">
                      Bank feeds, payroll, CRM, and e-commerce connected for automated data flows
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#0ea5c8] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#0f2244] mb-1">Efficient Workflows</h3>
                    <p className="text-gray-600">
                      Templates, automation rules, and custom fields tailored to your business
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0ea5c8] to-[#0891b2] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-8">Impact of Proper Setup</h3>
              <div className="space-y-6">
                <div>
                  <p className="font-semibold text-[#0f2244] bg-white/20 px-3 py-1 rounded-full inline-block mb-3">
                    60%
                  </p>
                  <p className="text-white/90">Reduction in manual data entry</p>
                </div>
                <div>
                  <p className="font-semibold text-[#0f2244] bg-white/20 px-3 py-1 rounded-full inline-block mb-3">
                    75%
                  </p>
                  <p className="text-white/90">Fewer data entry errors</p>
                </div>
                <div>
                  <p className="font-semibold text-[#0f2244] bg-white/20 px-3 py-1 rounded-full inline-block mb-3">
                    40%
                  </p>
                  <p className="text-white/90">Time saved on month-end close</p>
                </div>
                <div>
                  <p className="font-semibold text-[#0f2244] bg-white/20 px-3 py-1 rounded-full inline-block mb-3">
                    100%
                  </p>
                  <p className="text-white/90">Improved compliance confidence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform-Specific Setup */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-12 text-center">
            Platform-Specific Setup
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border-2 border-[#0ea5c8]/30 hover:border-[#0ea5c8] transition-colors">
              <h3 className="text-2xl font-bold text-[#0f2244] mb-6">Xero Setup</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#0f2244] mb-2 text-sm">What's Included</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>✓ Organisation setup and company settings</li>
                    <li>✓ Chart of accounts creation</li>
                    <li>✓ Bank account and credit card configuration</li>
                    <li>✓ Tax codes and GST/VAT setup</li>
                    <li>✓ Customer and supplier templates</li>
                    <li>✓ Invoicing templates and payment terms</li>
                    <li>✓ Bank feed connections</li>
                    <li>✓ Integration setup (Stripe, PayPal, etc.)</li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-gray-600 text-sm">
                    <strong>Best for:</strong> Service businesses, retailers, and online sellers. Excellent for
                    multi-user teams.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border-2 border-[#0ea5c8]/30 hover:border-[#0ea5c8] transition-colors">
              <h3 className="text-2xl font-bold text-[#0f2244] mb-6">QuickBooks Setup</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#0f2244] mb-2 text-sm">What's Included</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>✓ Company file setup and configuration</li>
                    <li>✓ Chart of accounts optimisation</li>
                    <li>✓ User roles and permissions</li>
                    <li>✓ Bank and credit card feeds</li>
                    <li>✓ Item setup for inventory (if applicable)</li>
                    <li>✓ Customer and supplier management</li>
                    <li>✓ Invoicing and payment processing</li>
                    <li>✓ Reporting setup and dashboards</li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-gray-600 text-sm">
                    <strong>Best for:</strong> Growing businesses, those with inventory, and multi-user offices.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border-2 border-[#0ea5c8]/30 hover:border-[#0ea5c8] transition-colors">
              <h3 className="text-2xl font-bold text-[#0f2244] mb-6">Sage Setup</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#0f2244] mb-2 text-sm">What's Included</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>✓ System initialisation and security setup</li>
                    <li>✓ Chart of accounts creation</li>
                    <li>✓ General ledger configuration</li>
                    <li>✓ Sales and purchase ledger setup</li>
                    <li>✓ Tax code and VAT setup</li>
                    <li>✓ Nominal and cost code analysis</li>
                    <li>✓ Credit control and payment terms</li>
                    <li>✓ Reporting and MIS configuration</li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-gray-600 text-sm">
                    <strong>Best for:</strong> Established businesses, manufacturing, and detailed cost analysis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training & Support */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-12 text-center">
            Comprehensive Training & Support
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-[#0f2244]/5 to-[#0ea5c8]/5 rounded-xl p-8 border border-[#0ea5c8]/20">
              <Users className="w-8 h-8 text-[#0ea5c8] mb-4" />
              <h3 className="text-xl font-semibold text-[#0f2244] mb-4">Staff Training</h3>
              <p className="text-gray-700 mb-4">
                Role-specific training tailored to each team member's responsibilities:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-[#0ea5c8] font-bold">→</span>
                  <span><strong>Finance Leads:</strong> Complete system overview and reporting</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#0ea5c8] font-bold">→</span>
                  <span><strong>Accounts Staff:</strong> Data entry, reconciliation, month-end procedures</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#0ea5c8] font-bold">→</span>
                  <span><strong>Sales Team:</strong> Invoicing, payment recording, customer management</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#0ea5c8] font-bold">→</span>
                  <span><strong>Operations:</strong> Process workflows and operational requirements</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#0f2244]/5 to-[#0ea5c8]/5 rounded-xl p-8 border border-[#0ea5c8]/20">
              <BookOpen className="w-8 h-8 text-[#0ea5c8] mb-4" />
              <h3 className="text-xl font-semibold text-[#0f2244] mb-4">Documentation & Resources</h3>
              <p className="text-gray-700 mb-4">
                Support materials so your team can learn independently:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-[#0ea5c8] font-bold">→</span>
                  <span><strong>User Guides:</strong> Step-by-step instructions for common tasks</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#0ea5c8] font-bold">→</span>
                  <span><strong>Video Tutorials:</strong> Walkthrough videos for key processes</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#0ea5c8] font-bold">→</span>
                  <span><strong>Quick Reference:</strong> Cards for common workflows</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#0ea5c8] font-bold">→</span>
                  <span><strong>FAQ Database:</strong> Answers to typical questions</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#0ea5c8]/10 to-[#0f2244]/10 rounded-xl p-8 border border-[#0ea5c8]/30">
            <div className="flex gap-4">
              <MessageCircle className="w-6 h-6 text-[#0ea5c8] flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-[#0f2244] mb-2">Post-Training Support</h4>
                <p className="text-gray-700">
                  Training doesn't end at go-live. We provide follow-up support for questions, troubleshooting, and
                  refresher training. Many clients schedule annual check-ins when software updates occur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Optimisation & Chart of Accounts */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-12 text-center">
            System Optimisation & Chart of Accounts Design
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-start gap-4 mb-8">
                <Settings className="w-8 h-8 text-[#0ea5c8] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-[#0f2244] mb-3">System Optimisation</h3>
                  <p className="text-gray-700 mb-4">
                    Beyond initial setup, we optimise your system for your specific workflows:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#0ea5c8] flex-shrink-0 mt-0.5" />
                      <span><strong>Automated Rules:</strong> Recurring entries, auto-categorisation, scheduled tasks</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#0ea5c8] flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Custom Fields:</strong> Track business-specific data and metrics
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#0ea5c8] flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Reporting Dashboards:</strong> Real-time KPI monitoring and performance tracking
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#0ea5c8] flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Approval Workflows:</strong> Controls and checks for financial safety
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-4">
                <BarChart3 className="w-8 h-8 text-[#0ea5c8] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-[#0f2244] mb-3">Chart of Accounts Design</h3>
                  <p className="text-gray-700 mb-4">
                    We design your account structure for reporting, analysis, and compliance:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#0ea5c8] flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Revenue Analysis:</strong> Accounts by product, service, or customer segment
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#0ea5c8] flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Cost Control:</strong> Expense accounts matching your department or project structure
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#0ea5c8] flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Tax Compliance:</strong> Accounts aligned to tax categories and filing requirements
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#0ea5c8] flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Management Reporting:</strong> Clear P&L and balance sheet for decision-making
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-12 text-center">
            Our Software Setup Process
          </h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-[#0ea5c8]/10 to-transparent rounded-xl p-8 border border-[#0ea5c8]/20 flex gap-6 items-start">
              <div className="w-14 h-14 rounded-full bg-[#0ea5c8] text-white font-bold text-lg flex items-center justify-center flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0f2244] mb-2">Discovery & Planning</h3>
                <p className="text-gray-700">
                  We understand your business model, current systems, team structure, and future growth plans. We
                  recommend the right platform and design an implementation timeline.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#0ea5c8]/10 to-transparent rounded-xl p-8 border border-[#0ea5c8]/20 flex gap-6 items-start">
              <div className="w-14 h-14 rounded-full bg-[#0ea5c8] text-white font-bold text-lg flex items-center justify-center flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0f2244] mb-2">Setup & Configuration</h3>
                <p className="text-gray-700">
                  We configure your system: chart of accounts, tax codes, users, permissions, bank feeds, and
                  integrations. We optimise workflows for your business.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#0ea5c8]/10 to-transparent rounded-xl p-8 border border-[#0ea5c8]/20 flex gap-6 items-start">
              <div className="w-14 h-14 rounded-full bg-[#0ea5c8] text-white font-bold text-lg flex items-center justify-center flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0f2244] mb-2">Data Migration (if applicable)</h3>
                <p className="text-gray-700">
                  If migrating from legacy systems, we handle complete data transfer, validation, and reconciliation.
                  Historical data preserved and accessible.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#0ea5c8]/10 to-transparent rounded-xl p-8 border border-[#0ea5c8]/20 flex gap-6 items-start">
              <div className="w-14 h-14 rounded-full bg-[#0ea5c8] text-white font-bold text-lg flex items-center justify-center flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0f2244] mb-2">Testing & Verification</h3>
                <p className="text-gray-700">
                  We thoroughly test all functions, integrations, reporting, and workflows. We verify balances, tax
                  codes, and compliance settings before go-live.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#0ea5c8]/10 to-transparent rounded-xl p-8 border border-[#0ea5c8]/20 flex gap-6 items-start">
              <div className="w-14 h-14 rounded-full bg-[#0ea5c8] text-white font-bold text-lg flex items-center justify-center flex-shrink-0">
                5
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0f2244] mb-2">Staff Training</h3>
                <p className="text-gray-700">
                  We conduct comprehensive training for your team. Role-specific sessions, documentation, video guides,
                  and Q&A sessions ensure everyone's confident.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#0ea5c8]/10 to-transparent rounded-xl p-8 border border-[#0ea5c8]/20 flex gap-6 items-start">
              <div className="w-14 h-14 rounded-full bg-[#0ea5c8] text-white font-bold text-lg flex items-center justify-center flex-shrink-0">
                6
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0f2244] mb-2">Go-Live & Ongoing Support</h3>
                <p className="text-gray-700">
                  Your team goes live with the new system. We provide intensive support during the transition period,
                  troubleshooting issues and helping staff adapt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        faqs={faqs}
        title="Software Setup & Training Questions"
        subtitle="Get answers to common questions about accounting software implementation."
      />

      {/* Related Services */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-12 text-center">Related Services</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Link
              href="/data-migration"
              className="group bg-white rounded-xl p-8 border border-gray-200 hover:border-[#0ea5c8] hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-[#0f2244] group-hover:text-[#0ea5c8] transition-colors">
                  Data Migration
                </h3>
                <ArrowRight className="w-5 h-5 text-[#0ea5c8] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-gray-600">
                Migrate your data safely from legacy systems or other platforms.
              </p>
            </Link>

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
                Professional bookkeeping and accounting support using your new system.
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
              <p className="text-gray-600">
                Contact us to discuss your software setup and implementation needs.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Implement Your Accounting Software?"
        description="Let us set up your system properly. Expert configuration, staff training, and ongoing support ensures your software works hard for your business."
        variant="navy"
      />
    </>
  );
}
