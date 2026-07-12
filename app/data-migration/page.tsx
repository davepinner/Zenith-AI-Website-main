import type { Metadata } from 'next';
import Link from 'next/link';
import {
  CheckCircle2,
  ArrowRight,
  Database,
  Shield,
  Zap,
  FileText,
  ArrowLeftRight,
  AlertCircle,
} from 'lucide-react';
import { ServiceHero } from '@/components/ServiceHero';
import { CTASection } from '@/components/CTASection';
import { FAQSection } from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Accounting Software Data Migration | Zenith Accountancy',
  description:
    'Risk-free data migration between Xero, QuickBooks and Sage for businesses in Cheltenham, Winchcombe and Gloucestershire. Full data validation.',
  alternates: {
    canonical: 'https://www.zenith-as.co.uk/data-migration',
  },
};

const faqs = [
  {
    question: 'How long does a data migration take?',
    answer:
      'Most migrations complete within 1-2 weeks. Simple migrations (small transaction volumes, clean data) may take just days. Complex migrations (large histories, legacy systems, data cleanup) may take longer. We provide a realistic timeline after reviewing your data volume and quality.',
  },
  {
    question: 'Will I lose any data during migration?',
    answer:
      'No. Our process preserves 100% of your data. We extract complete historical records from your old system, validate them in the new system, and reconcile balances before go-live. You retain access to the old system for comparison.',
  },
  {
    question: 'Can I migrate to Xero from QuickBooks or Sage?',
    answer:
      'Yes. We successfully migrate between all major platforms: Xero, QuickBooks, Sage, FreshBooks, and others. Each has different migration paths and we select the optimal approach for your data and requirements.',
  },
  {
    question: 'What historical data can I migrate?',
    answer:
      'We typically migrate 2-3 years of transaction history plus your current year. This provides sufficient history for reporting and trend analysis without excessive data volumes. Opening balances ensure historical profit/loss comparisons remain accurate.',
  },
  {
    question: 'How much does data migration cost?',
    answer:
      'Costs depend on data volume, system complexity, and data cleanup requirements. Simple migrations may be included with setup fees. Complex migrations are quoted separately. We always provide transparent pricing upfront.',
  },
  {
    question: 'What happens to my old accounting system?',
    answer:
      'You retain access for reference and historical reporting. After a successful migration and sign-off period, you can cancel your old subscription. Some businesses keep the old system read-only for compliance record-keeping.',
  },
  {
    question: 'Will my chart of accounts change?',
    answer:
      'Not necessarily. We map your old chart of accounts to your new system to maintain consistency. However, migration is an ideal opportunity to optimise your chart of accounts for better reporting and compliance.',
  },
  {
    question: 'How do you handle multi-currency transactions?',
    answer:
      'Multi-currency data migrates with full exchange rate history preserved. Revaluation gains/losses are calculated correctly. If your new platform handles multi-currency differently, we advise on the implications.',
  },
];

export default function DataMigrationPage() {
  return (
    <>
      <ServiceHero
        title="Accounting Software Data Migration — Seamless & Risk-Free"
        subtitle="Move your financial data safely between systems. Complete validation, zero data loss, professional handover."
        breadcrumbItems={[
          { name: 'Services', href: '/bookkeeping-services' },
          { name: 'Data Migration' },
        ]}
        badge="TECHNICAL"
      />

      {/* Why Migrate Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-12 text-center">
            Why Businesses Migrate Accounting Systems
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <Zap className="w-8 h-8 text-[#0ea5c8] mb-4" />
              <h3 className="text-lg font-semibold text-[#0f2244] mb-3">Better Functionality</h3>
              <p className="text-gray-600">
                Modern systems offer features your current software lacks: superior reporting, automation, mobile
                access, and integration.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <ArrowLeftRight className="w-8 h-8 text-[#0ea5c8] mb-4" />
              <h3 className="text-lg font-semibold text-[#0f2244] mb-3">Improved Integration</h3>
              <p className="text-gray-600">
                Connect your accounting to CRM, e-commerce, payroll, and banking for automated data flows and reduced
                manual entry.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <AlertCircle className="w-8 h-8 text-[#0ea5c8] mb-4" />
              <h3 className="text-lg font-semibold text-[#0f2244] mb-3">End of Support</h3>
              <p className="text-gray-600">
                Legacy systems eventually become unsupported, risky, and incompatible. Migrating proactively avoids
                emergency transitions.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <FileText className="w-8 h-8 text-[#0ea5c8] mb-4" />
              <h3 className="text-lg font-semibold text-[#0f2244] mb-3">Standardised Processes</h3>
              <p className="text-gray-600">
                Modern platforms follow industry best practices for reporting, compliance, and audit trails. Simpler
                training and support.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <Shield className="w-8 h-8 text-[#0ea5c8] mb-4" />
              <h3 className="text-lg font-semibold text-[#0f2244] mb-3">Better Security</h3>
              <p className="text-gray-600">
                Cloud-based systems offer encryption, automatic backups, and security updates. Reduces risk of data
                loss or breach.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <Zap className="w-8 h-8 text-[#0ea5c8] mb-4" />
              <h3 className="text-lg font-semibold text-[#0f2244] mb-3">Cost Efficiency</h3>
              <p className="text-gray-600">
                Modern SaaS solutions often cost less than legacy software support. No expensive upgrades or
                infrastructure maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Migration Process */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-12 text-center">
            Our 5-Step Migration Process
          </h2>

          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-[#0ea5c8] text-white font-bold text-lg">
                    1
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-[#0f2244] mb-3">Planning & Preparation</h3>
                  <p className="text-gray-700 mb-4">
                    We understand your current system, data structure, and requirements. We assess data volume, quality,
                    and any cleanup needed. We create a detailed migration timeline and identify potential risks.
                  </p>
                  <p className="text-gray-600 text-sm">
                    <strong>Timeline:</strong> 1-2 weeks | <strong>Your Role:</strong> Provide system access and user
                    requirements
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-[#0ea5c8] text-white font-bold text-lg">
                    2
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-[#0f2244] mb-3">Data Extraction & Cleansing</h3>
                  <p className="text-gray-700 mb-4">
                    We extract your complete data from the old system. We validate and cleanse the data, correcting
                    errors, removing duplicates, and standardising formats. Any data quality issues are flagged for
                    your review.
                  </p>
                  <p className="text-gray-600 text-sm">
                    <strong>Timeline:</strong> 2-5 days | <strong>Your Role:</strong> Review and approve data quality
                    findings
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-[#0ea5c8] text-white font-bold text-lg">
                    3
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-[#0f2244] mb-3">Mapping & Configuration</h3>
                  <p className="text-gray-700 mb-4">
                    We configure your new system and map your old data to new fields. We set up your chart of accounts,
                    tax codes, customer/supplier records, and custom fields. We optimise settings for your business
                    workflows.
                  </p>
                  <p className="text-gray-600 text-sm">
                    <strong>Timeline:</strong> 3-7 days | <strong>Your Role:</strong> Approve system configuration
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-[#0ea5c8] text-white font-bold text-lg">
                    4
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-[#0f2244] mb-3">Data Import & Testing</h3>
                  <p className="text-gray-700 mb-4">
                    We import your data into the new system. We run comprehensive tests: balance verification, aged
                    debtors/creditors reconciliation, opening balances validation, transaction sampling. We document
                    all results.
                  </p>
                  <p className="text-gray-600 text-sm">
                    <strong>Timeline:</strong> 2-4 days | <strong>Your Role:</strong> Review test results and approve
                    go-live
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-[#0ea5c8] text-white font-bold text-lg">
                    5
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-[#0f2244] mb-3">Go-Live & Handover</h3>
                  <p className="text-gray-700 mb-4">
                    Data migration goes live. We provide training on new system navigation, data entry, reporting. We
                    remain available for post-migration support and questions. Old system access maintained for
                    reference.
                  </p>
                  <p className="text-gray-600 text-sm">
                    <strong>Timeline:</strong> 1-2 weeks post-migration | <strong>Your Role:</strong> Transition to new
                    system
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Reduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-6">
                How We Reduce Migration Risk
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Data migration can be daunting. Balances might not match. Transactions could be lost. Systems could
                crash. We've built a process that eliminates these risks entirely.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <Shield className="w-6 h-6 text-[#0ea5c8] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#0f2244] mb-1">Complete Data Validation</h3>
                    <p className="text-gray-600">
                      Every figure verified. Opening balances matched. Aged reports reconciled. Nothing moves until
                      perfect.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Shield className="w-6 h-6 text-[#0ea5c8] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#0f2244] mb-1">Parallel Running</h3>
                    <p className="text-gray-600">
                      New system runs alongside old during migration testing. You can verify accuracy before committing.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Shield className="w-6 h-6 text-[#0ea5c8] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#0f2244] mb-1">Backup & Recovery</h3>
                    <p className="text-gray-600">
                      Complete backup of all systems before migration. If anything goes wrong, we restore and try again.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Shield className="w-6 h-6 text-[#0ea5c8] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#0f2244] mb-1">Phased Approach</h3>
                    <p className="text-gray-600">
                      Migration in phases: current year first, then prior years. Each phase verified before next begins.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Shield className="w-6 h-6 text-[#0ea5c8] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#0f2244] mb-1">Expert Troubleshooting</h3>
                    <p className="text-gray-600">
                      Issues arise. We solve them immediately with technical expertise. You're never stuck or waiting.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0f2244] to-[#0f2244]/90 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-8">What Data We Migrate</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-[#0ea5c8] mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    Chart of Accounts
                  </h4>
                  <p className="text-white/80 ml-7">All account codes, names, and classifications</p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#0ea5c8] mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    Transaction History
                  </h4>
                  <p className="text-white/80 ml-7">Bank, sales, purchase, payroll transactions (2-3 years typically)</p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#0ea5c8] mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    Customer & Supplier Data
                  </h4>
                  <p className="text-white/80 ml-7">Names, addresses, contact details, payment terms</p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#0ea5c8] mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    Outstanding Items
                  </h4>
                  <p className="text-white/80 ml-7">Unpaid invoices, credit notes, outstanding cheques</p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#0ea5c8] mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    Tax Information
                  </h4>
                  <p className="text-white/80 ml-7">VAT codes, tax rates, filing history</p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#0ea5c8] mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    Custom Settings
                  </h4>
                  <p className="text-white/80 ml-7">Your specific workflows, templates, and preferences</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Platforms */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-12 text-center">
            Supported Accounting Platforms
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border-2 border-[#0ea5c8]">
              <Database className="w-10 h-10 text-[#0ea5c8] mb-4" />
              <h3 className="text-2xl font-bold text-[#0f2244] mb-4">From & To</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#0ea5c8]" />
                  <span className="text-gray-700 font-medium">Xero</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#0ea5c8]" />
                  <span className="text-gray-700 font-medium">QuickBooks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#0ea5c8]" />
                  <span className="text-gray-700 font-medium">Sage (all versions)</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Bi-directional migration between all major platforms. Any combination supported.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border-2 border-[#0ea5c8]">
              <ArrowLeftRight className="w-10 h-10 text-[#0ea5c8] mb-4" />
              <h3 className="text-2xl font-bold text-[#0f2244] mb-4">Legacy Systems</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#0ea5c8]" />
                  <span className="text-gray-700 font-medium">Sage 50 (older versions)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#0ea5c8]" />
                  <span className="text-gray-700 font-medium">Pegasus Opera</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#0ea5c8]" />
                  <span className="text-gray-700 font-medium">TAS Books</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#0ea5c8]" />
                  <span className="text-gray-700 font-medium">Excel/Spreadsheets</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#0ea5c8]" />
                  <span className="text-gray-700 font-medium">Manual records</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Migrating from legacy systems? We specialise in complex extractions and data reconstruction.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border-2 border-[#0ea5c8]">
              <Zap className="w-10 h-10 text-[#0ea5c8] mb-4" />
              <h3 className="text-2xl font-bold text-[#0f2244] mb-4">Cloud-Based</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#0ea5c8]" />
                  <span className="text-gray-700 font-medium">Infoplus 365</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#0ea5c8]" />
                  <span className="text-gray-700 font-medium">Nimble Accounts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#0ea5c8]" />
                  <span className="text-gray-700 font-medium">Kashflow</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#0ea5c8]" />
                  <span className="text-gray-700 font-medium">Zoho Books</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#0ea5c8]" />
                  <span className="text-gray-700 font-medium">Other platforms on request</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Using a system not listed? We have experience with niche and international platforms too.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        faqs={faqs}
        title="Data Migration Questions"
        subtitle="Get answers to common questions about moving your data between accounting systems."
      />

      {/* Related Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-12 text-center">Related Services</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Link
              href="/software-setup"
              className="group bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-[#0ea5c8] hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-[#0f2244] group-hover:text-[#0ea5c8] transition-colors">
                  Software Setup & Training
                </h3>
                <ArrowRight className="w-5 h-5 text-[#0ea5c8] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-gray-600">
                Configuration, setup, and staff training for Xero, QuickBooks, Sage and other platforms.
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
                Complete bookkeeping services to maintain your data after migration.
              </p>
            </Link>

            <Link
              href="/contact"
              className="group bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-[#0ea5c8] hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-[#0f2244] group-hover:text-[#0ea5c8] transition-colors">
                  Start Your Migration
                </h3>
                <ArrowRight className="w-5 h-5 text-[#0ea5c8] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-gray-600">
                Contact us to discuss your data migration needs and get a free assessment.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Migrate to a Better System?"
        description="Your data is precious. We'll migrate it safely, validate every figure, and have you productive in your new system within weeks. Risk-free, transparent, professional."
        variant="navy"
      />
    </>
  );
}
