import type { Metadata } from 'next';
import Link from 'next/link';
import {
  BookOpen,
  Calculator,
  FileText,
  TrendingUp,
  Users,
  Database,
  Building2,
  ArrowLeftRight,
  Monitor,
  Headphones,
  CheckCircle2,
  Star,
  ArrowRight,
  Phone,
  Shield,
  Award,
  Clock,
  MapPin,
} from 'lucide-react';
import { ServiceCard } from '@/components/ServiceCard';
import { CTASection } from '@/components/CTASection';
import { FAQSection } from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Bookkeeper in Winchcombe & Cheltenham | Zenith Accountancy Services',
  description:
    'Professional bookkeeping, VAT returns, payroll and tax support for businesses across Winchcombe, Cheltenham and the North Cotswolds. Get a free consultation.',
  alternates: { canonical: 'https://www.zenith-as.co.uk' },
};

const services = [
  {
    title: 'Bookkeeping Services',
    description: 'Accurate, timely bookkeeping that keeps your finances in order and your business compliant.',
    href: '/bookkeeping-services',
    icon: BookOpen,
    features: ['Bank reconciliation', 'Purchase & sales ledger', 'Management reporting'],
  },
  {
    title: 'VAT Returns & MTD',
    description: 'Stress-free VAT submissions and Making Tax Digital compliance handled for you.',
    href: '/vat-returns',
    icon: Calculator,
    features: ['VAT registration', 'MTD-compliant submissions', 'Error checking'],
  },
  {
    title: 'Self Assessment',
    description: 'Accurate tax returns for sole traders, landlords and company directors, filed on time.',
    href: '/self-assessment',
    icon: FileText,
    features: ['Sole traders & landlords', "Directors' tax returns", 'Deadline management'],
  },
  {
    title: 'MTD for Income Tax',
    description: 'Prepare for the biggest change to UK tax in a generation with expert MTD ITSA guidance.',
    href: '/mtd-itsa',
    icon: TrendingUp,
    features: ['Quarterly submissions', 'Software setup', 'Compliance planning'],
  },
  {
    title: 'Payroll Services',
    description: 'Reliable payroll processing for your employees, including CIS and auto enrolment support.',
    href: '/payroll-services',
    icon: Users,
    features: ['PAYE & RTI submissions', 'CIS payroll', 'Auto enrolment'],
  },
  {
    title: 'Record Keeping',
    description: 'Meticulous monthly reconciliation to ensure your records are always accurate and audit-ready.',
    href: '/record-keeping',
    icon: Database,
    features: ['Bank reconciliation', 'Credit card reconciliation', 'Audit trail'],
  },
  {
    title: 'Statutory Accounts',
    description: 'Year-end accounts prepared to statutory standards for sole traders and limited companies.',
    href: '/statutory-accounts',
    icon: Building2,
    features: ['Year-end preparation', 'Sole trader accounts', 'Limited company accounts'],
  },
  {
    title: 'Data Migration',
    description: 'Smooth, risk-free migration between accounting software platforms with full data validation.',
    href: '/data-migration',
    icon: ArrowLeftRight,
    features: ['Xero, Sage & QuickBooks', 'Data validation', 'Zero data loss'],
  },
  {
    title: 'Software Setup & Training',
    description: 'Get up and running on Xero, QuickBooks or Sage with expert setup and personalised training.',
    href: '/software-setup',
    icon: Monitor,
    features: ['Xero certified', 'QuickBooks & Sage', 'Staff training'],
  },
  {
    title: 'Business IT Support',
    description: 'Practical technology support and guidance to keep your business systems running smoothly.',
    href: '/it-support',
    icon: Headphones,
    features: ['Software troubleshooting', 'Systems guidance', 'Staff training'],
  },
];

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Owner, Cotswold Crafts',
    location: 'Winchcombe',
    text: "David transformed our bookkeeping. We went from dreading our accounts to having complete confidence in our numbers every month. Highly recommended for any small business in the area.",
    rating: 5,
  },
  {
    name: 'James Thornton',
    role: 'Sole Trader, JT Building Services',
    location: 'Cheltenham',
    text: "Switching to Zenith was the best business decision I made last year. My self assessment was done quickly and accurately, and David saved me money I didn't even know I was missing.",
    rating: 5,
  },
  {
    name: 'Emma Richards',
    role: 'Director, North Cotswolds Letting Co.',
    location: 'North Cotswolds',
    text: 'The MTD setup and quarterly submissions are handled seamlessly. I no longer worry about HMRC deadlines — David keeps everything on track and communicates proactively.',
    rating: 5,
  },
];

const faqs = [
  {
    question: 'What areas does Zenith Accountancy Services cover?',
    answer:
      'We primarily serve businesses in Winchcombe, Cheltenham, and the wider North Cotswolds area of Gloucestershire. We can also work remotely with clients across the UK.',
  },
  {
    question: 'How much does bookkeeping cost for a small business?',
    answer:
      'Pricing depends on the volume of transactions and services required. We offer transparent, fixed monthly fees tailored to your specific needs. Contact us for a free, no-obligation quote.',
  },
  {
    question: 'What accounting software do you work with?',
    answer:
      'We work with all the major cloud accounting platforms including Xero, QuickBooks and Sage. We can help you choose the right software and set it up from scratch, or work with whatever you currently use.',
  },
  {
    question: "What is Making Tax Digital and does it affect my business?",
    answer:
      "Making Tax Digital (MTD) is HMRC's programme to move UK tax online. MTD for VAT is already mandatory for all VAT-registered businesses. MTD for Income Tax Self Assessment (ITSA) is being rolled out from 2026 and will affect sole traders and landlords with income over £50,000. We can help you prepare.",
  },
  {
    question: 'Do I need a bookkeeper if I already have accounting software?',
    answer:
      'Accounting software automates some tasks but cannot replace professional expertise. A qualified bookkeeper ensures your data is entered correctly, your reconciliations are accurate, you remain compliant with HMRC, and your records support good business decisions.',
  },
];

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'AccountingService',
  name: 'Zenith Accountancy Services',
  description:
    'Professional bookkeeping, VAT returns, payroll and tax services for small businesses in Winchcombe, Cheltenham and the North Cotswolds.',
  url: 'https://www.zenith-as.co.uk',
  telephone: '+441242000000',
  email: 'info@zenith-as.co.uk',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Winchcombe',
    addressRegion: 'Gloucestershire',
    postalCode: 'GL54',
    addressCountry: 'GB',
  },
  areaServed: [
    { '@type': 'City', name: 'Winchcombe' },
    { '@type': 'City', name: 'Cheltenham' },
    { '@type': 'AdministrativeArea', name: 'North Cotswolds' },
  ],
  founder: {
    '@type': 'Person',
    name: 'David Pinner',
    jobTitle: 'Director & Principal Bookkeeper',
  },
  priceRange: '££',
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero */}
      <section className="relative bg-[#0f2244] pt-28 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#0ea5c8]/8 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#0ea5c8]/6 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 bg-[#0ea5c8]/15 text-[#0ea5c8] text-xs font-semibold px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5c8] animate-pulse" />
                Serving Winchcombe, Cheltenham &amp; North Cotswolds
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Expert Bookkeeping &amp;<br />
              <span className="text-[#0ea5c8]">Accountancy Services</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed mb-8 max-w-2xl">
              Professional financial support for small businesses across Gloucestershire. From bookkeeping and VAT returns to payroll and self assessment — handled accurately, on time, every time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#0ea5c8] hover:bg-[#0891b2] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-xl hover:shadow-[#0ea5c8]/30 hover:-translate-y-0.5"
              >
                Get a Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+441242000000"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
              >
                <Phone className="w-5 h-5" />
                01242 000 000
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              {[
                { icon: Award, text: 'ICB Member' },
                { icon: Shield, text: 'AAT Level 3' },
                { icon: Clock, text: '25+ Years Experience' },
                { icon: CheckCircle2, text: 'MTD Ready' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-white/60 text-sm">
                  <Icon className="w-4 h-4 text-[#0ea5c8]" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#0a1628] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '25+', label: 'Years Experience' },
              { number: '200+', label: 'Clients Supported' },
              { number: '100%', label: 'MTD Compliant' },
              { number: '3', label: 'Platforms Certified' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-[#0ea5c8] mb-1">{stat.number}</div>
                <div className="text-white/50 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#0ea5c8] text-sm font-semibold uppercase tracking-wider">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mt-2 mb-4">
              A Complete Accountancy Service
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From day-to-day bookkeeping to year-end accounts, we provide the financial expertise your business needs to thrive.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((service) => (
              <ServiceCard key={service.href} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Zenith */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#0ea5c8] text-sm font-semibold uppercase tracking-wider">Why Zenith</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mt-2 mb-6">
                Trusted Expertise. Personal Service.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Zenith Accountancy Services is led by David Pinner — a Member of the Institute of Certified Bookkeepers with over 25 years of experience in finance, technology and business systems. You deal with one knowledgeable person, not a faceless team.
              </p>
              <div className="space-y-5">
                {[
                  {
                    icon: Award,
                    title: 'Qualified & Regulated',
                    desc: 'ICB Member, AAT Level 3 — professionally qualified and bound by a code of conduct.',
                  },
                  {
                    icon: Shield,
                    title: 'HMRC Expertise',
                    desc: 'Direct experience working on HMRC tax-related systems — not just theory, real-world knowledge.',
                  },
                  {
                    icon: Monitor,
                    title: 'Technology-Led',
                    desc: 'Xero, QuickBooks and Sage certified — we implement and optimise the right software for you.',
                  },
                  {
                    icon: MapPin,
                    title: 'Local & Personal',
                    desc: 'Based in Winchcombe — a genuine local expert who understands businesses in this area.',
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#0f2244]/5 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#0ea5c8]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0f2244] mb-1">{title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-[#0ea5c8] font-semibold hover:gap-3 transition-all"
                >
                  Meet David Pinner
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
              <h3 className="text-[#0f2244] font-bold text-xl mb-6">Professional Credentials</h3>
              <div className="space-y-4">
                {[
                  { label: 'Qualifications', items: ['Member of the Institute of Certified Bookkeepers', 'AAT Level 2 Certificate in Accounting', 'AAT Level 3 Diploma in Accounting'] },
                  { label: 'Software Expertise', items: ['Xero Certified Advisor', 'QuickBooks ProAdvisor', 'Sage Partner'] },
                  { label: 'Industry Experience', items: ['HMRC Tax Systems', 'Finance & Technology', 'Business Systems Implementation'] },
                ].map(({ label, items }) => (
                  <div key={label} className="bg-white rounded-xl p-5 border border-gray-100">
                    <h4 className="text-xs font-semibold text-[#0ea5c8] uppercase tracking-wider mb-3">{label}</h4>
                    <ul className="space-y-2">
                      {items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-[#0ea5c8] flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Areas */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#0ea5c8] text-sm font-semibold uppercase tracking-wider">Areas We Serve</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mt-2 mb-4">
              Local Expertise Across Gloucestershire
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Based in Winchcombe, we support businesses across the North Cotswolds, Cheltenham and the surrounding area.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Winchcombe',
                href: '/areas#winchcombe',
                desc: 'Our home base. Providing hands-on bookkeeping and accountancy services to businesses across Winchcombe and surrounding villages.',
              },
              {
                name: 'Cheltenham',
                href: '/areas#cheltenham',
                desc: 'Supporting businesses across Cheltenham with professional bookkeeping, VAT, payroll and self assessment services.',
              },
              {
                name: 'North Cotswolds',
                href: '/areas#north-cotswolds',
                desc: 'Covering the wider North Cotswolds area including Bourton-on-the-Water, Stow-on-the-Wold, Moreton-in-Marsh and beyond.',
              },
            ].map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="group bg-white rounded-2xl border border-gray-100 p-7 shadow-sm hover:shadow-xl hover:shadow-[#0f2244]/8 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0f2244]/5 group-hover:bg-[#0ea5c8]/10 flex items-center justify-center transition-colors">
                    <MapPin className="w-5 h-5 text-[#0ea5c8]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0f2244] group-hover:text-[#0ea5c8] transition-colors">{area.name}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{area.desc}</p>
                <div className="flex items-center gap-1 text-[#0ea5c8] text-sm font-medium">
                  Find out more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-[#0f2244]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#0ea5c8] text-sm font-semibold uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white/5 rounded-2xl p-7 border border-white/10">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#f5a623] text-[#f5a623]" />
                  ))}
                </div>
                <p className="text-white/80 leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-[#0ea5c8] text-sm">{t.role}</div>
                  <div className="text-white/40 text-sm">{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection
        faqs={faqs}
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about working with Zenith Accountancy Services."
      />

      <CTASection />
    </>
  );
}
