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
  Phone,
  ArrowRight,
  MapPin,
  CheckCircle2,
  Award,
  Shield,
} from 'lucide-react';
import { CTASection } from '@/components/CTASection';
import { FAQSection } from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Areas We Cover | Bookkeeper in Winchcombe, Cheltenham & North Cotswolds',
  description:
    'Professional bookkeeping and accountancy services across Winchcombe, Cheltenham and the North Cotswolds, Gloucestershire. ICB Member, 25+ years experience.',
  alternates: { canonical: 'https://www.zenith-as.co.uk/areas' },
  openGraph: {
    title: 'Areas We Cover | Zenith Accountancy Services',
    description:
      'Professional bookkeeping and accountancy across Winchcombe, Cheltenham and the North Cotswolds.',
    url: 'https://www.zenith-as.co.uk/areas',
    type: 'website',
  },
};

const services = [
  { title: 'Bookkeeping Services', description: 'Accurate day-to-day bookkeeping and financial record management.', href: '/bookkeeping-services', icon: BookOpen },
  { title: 'VAT Returns & MTD', description: 'VAT submissions and Making Tax Digital compliance.', href: '/vat-returns', icon: Calculator },
  { title: 'Self Assessment', description: 'Tax returns for sole traders, landlords and directors.', href: '/self-assessment', icon: FileText },
  { title: 'MTD for Income Tax', description: 'Quarterly submissions and ITSA compliance planning.', href: '/mtd-itsa', icon: TrendingUp },
  { title: 'Payroll Services', description: 'PAYE, CIS payroll and auto enrolment.', href: '/payroll-services', icon: Users },
  { title: 'Record Keeping', description: 'Bank and credit card reconciliation.', href: '/record-keeping', icon: Database },
  { title: 'Statutory Accounts', description: 'Year-end accounts for sole traders and limited companies.', href: '/statutory-accounts', icon: Building2 },
  { title: 'Data Migration', description: 'Safe migration between Xero, QuickBooks and Sage.', href: '/data-migration', icon: ArrowLeftRight },
  { title: 'Software Setup & Training', description: 'Implementation and training for accounting platforms.', href: '/software-setup', icon: Monitor },
  { title: 'Business IT Support', description: 'Technology guidance and software troubleshooting.', href: '/it-support', icon: Headphones },
];

const faqs = [
  {
    question: 'What areas does Zenith Accountancy Services cover?',
    answer:
      'We primarily serve Winchcombe, Cheltenham, and the wider North Cotswolds including Bourton-on-the-Water, Stow-on-the-Wold, Moreton-in-Marsh, Chipping Campden, Broadway, Blockley and surrounding villages. We also work remotely with clients across the UK.',
  },
  {
    question: 'Do you visit clients in person?',
    answer:
      'Yes. We are happy to visit clients anywhere across our coverage area for initial consultations and ongoing meetings. Being local means we can provide a genuinely personal service, not just a remote one.',
  },
  {
    question: 'What types of businesses do you work with?',
    answer:
      'We work with sole traders, partnerships, and limited companies across a wide range of sectors including retail, hospitality, tourism, agriculture, professional services, construction and trades, and more. If you run a business in Gloucestershire, we can help.',
  },
  {
    question: 'Do you work with agricultural and farming businesses?',
    answer:
      'Absolutely. The Cotswolds has a strong agricultural community and we have experience supporting farmers and rural enterprises with their bookkeeping, VAT, and self assessment needs, including seasonal income patterns and partnership structures.',
  },
  {
    question: 'How much does bookkeeping cost in this area?',
    answer:
      'Pricing is tailored to your business. It depends on transaction volume, the services required, and how complex your finances are. We offer transparent fixed monthly fees. Contact us for a free, no-obligation quote.',
  },
  {
    question: 'How do I get started?',
    answer:
      "Contact us for a free consultation — by phone, email or via our online form. We'll discuss your business needs, explain how we work, and agree a plan. There's no pressure and no obligation.",
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'AccountingService',
  name: 'Zenith Accountancy Services',
  url: 'https://www.zenith-as.co.uk',
  telephone: '+441242000000',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Winchcombe',
    addressRegion: 'Gloucestershire',
    addressCountry: 'GB',
  },
  areaServed: [
    { '@type': 'City', name: 'Winchcombe' },
    { '@type': 'City', name: 'Cheltenham' },
    { '@type': 'City', name: 'Bourton-on-the-Water' },
    { '@type': 'City', name: 'Stow-on-the-Wold' },
    { '@type': 'City', name: 'Moreton-in-Marsh' },
    { '@type': 'City', name: 'Chipping Campden' },
    { '@type': 'AdministrativeArea', name: 'North Cotswolds' },
    { '@type': 'AdministrativeArea', name: 'Gloucestershire' },
  ],
};

export default function AreasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="bg-[#0f2244] pt-28 pb-20 md:pt-36 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/90">Areas We Cover</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block bg-[#0ea5c8]/20 text-[#0ea5c8] text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
              Gloucestershire
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Local Bookkeeping Across<br />
              <span className="text-[#0ea5c8]">Winchcombe, Cheltenham &amp; the Cotswolds</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed mb-8">
              Based in Winchcombe, Zenith Accountancy Services provides professional bookkeeping and accountancy support to businesses throughout Gloucestershire — with a personal, face-to-face service that larger firms cannot match.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#0ea5c8] hover:bg-[#0891b2] text-white px-8 py-3.5 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-[#0ea5c8]/25 hover:-translate-y-0.5"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+441242000000"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3.5 rounded-lg font-semibold transition-all"
              >
                <Phone className="w-5 h-5" />
                01242 000 000
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Area tabs / jump links */}
      <div className="bg-[#0a1628] sticky top-[64px] md:top-[80px] z-40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-none">
            {[
              { label: 'Winchcombe', href: '#winchcombe' },
              { label: 'Cheltenham', href: '#cheltenham' },
              { label: 'North Cotswolds', href: '#north-cotswolds' },
              { label: 'All Services', href: '#services' },
            ].map((tab) => (
              <a
                key={tab.href}
                href={tab.href}
                className="flex-shrink-0 px-5 py-2 rounded-md text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              >
                {tab.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Winchcombe ── */}
      <section id="winchcombe" className="py-16 md:py-24 bg-white scroll-mt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#0ea5c8]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#0ea5c8]" />
                </div>
                <span className="text-[#0ea5c8] text-sm font-semibold uppercase tracking-wider">Winchcombe</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-4">
                Bookkeeper in Winchcombe
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Based in the area, we provide personalised bookkeeping to businesses throughout Winchcombe and the surrounding villages — including Toddington, Alderton, Gotherington, and Gretton. With over 25 years of experience, we understand the unique challenges facing local Cotswolds businesses.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Whether you are a sole trader, partnership or limited company, you get the same quality financial support that larger firms take for granted. Our approach is personal and direct — you always deal with David Pinner, never a junior.
              </p>
              <div className="bg-[#0f2244]/3 border-l-4 border-[#0ea5c8] p-5 rounded-r-lg mb-6">
                <p className="font-semibold text-[#0f2244] mb-1">Why local matters</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We are invested in the Winchcombe community and understand the local business landscape — that means better advice and faster response times.
                </p>
              </div>
              <div className="space-y-2.5">
                {[
                  'Face-to-face client visits',
                  'Personal service from David Pinner',
                  'ICB Member & AAT Level 3 qualified',
                  'HMRC experience & MTD ready',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0ea5c8] flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="font-semibold text-[#0f2244] mb-4">Winchcombe FAQs</h3>
              <div className="space-y-5">
                {[
                  { q: 'Do you visit clients in Winchcombe?', a: "Yes. We're happy to visit for initial consultations and ongoing meetings. Being local means a genuinely personal service." },
                  { q: 'What businesses do you work with?', a: 'Sole traders, partnerships and limited companies across retail, hospitality, trades, professional services and more.' },
                  { q: 'Can you help with Making Tax Digital?', a: "Absolutely — whether you need software setup or ongoing MTD compliance, we'll guide you through HMRC requirements." },
                ].map(({ q, a }) => (
                  <div key={q}>
                    <p className="font-medium text-[#0f2244] text-sm mb-1">{q}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-gray-200">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#0f2244] hover:bg-[#0ea5c8] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all"
                >
                  Enquire for Winchcombe
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-gray-100 h-px max-w-7xl mx-auto" />

      {/* ── Cheltenham ── */}
      <section id="cheltenham" className="py-16 md:py-24 bg-white scroll-mt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="lg:order-2">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#0ea5c8]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#0ea5c8]" />
                </div>
                <span className="text-[#0ea5c8] text-sm font-semibold uppercase tracking-wider">Cheltenham</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-4">
                Bookkeeper in Cheltenham
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Cheltenham is home to a vibrant and diverse business community — from high street retailers and independent hospitality businesses to professional services firms, freelancers, and specialist practitioners. With 25+ years of experience, we understand the landscape.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Close to Winchcombe but with its own unique character, Cheltenham deserves a bookkeeper who understands not just the sector but the community. That is what we offer — local knowledge, personal service, and professional expertise.
              </p>
              <div className="bg-[#0f2244]/3 border-l-4 border-[#0ea5c8] p-5 rounded-r-lg mb-6">
                <p className="font-semibold text-[#0f2244] mb-1">Supporting Cheltenham&apos;s diversity</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Whether you run a café, a consultancy, a building firm, or a retail shop — we have sector-specific experience and understand your financial needs.
                </p>
              </div>
              <div className="space-y-2.5">
                {[
                  'Serving all Cheltenham postcodes',
                  'Retail, hospitality, professional services',
                  'Sole traders, LTDs and partnerships',
                  'MTD compliance from day one',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0ea5c8] flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 lg:order-1">
              <h3 className="font-semibold text-[#0f2244] mb-4">Cheltenham FAQs</h3>
              <div className="space-y-5">
                {[
                  { q: 'Do you visit Cheltenham clients?', a: "Yes — we're happy to meet anywhere in Cheltenham for consultations or ongoing relationship building." },
                  { q: 'Do you work with Cheltenham startups?', a: 'Absolutely. We support new businesses from day one — from software setup and initial bookkeeping to VAT registration and payroll.' },
                  { q: 'Can you help with Cheltenham-based self assessment?', a: "Yes. We file accurate, on-time self assessment returns for sole traders, landlords and directors across Cheltenham." },
                ].map(({ q, a }) => (
                  <div key={q}>
                    <p className="font-medium text-[#0f2244] text-sm mb-1">{q}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-gray-200">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#0f2244] hover:bg-[#0ea5c8] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all"
                >
                  Enquire for Cheltenham
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-gray-100 h-px max-w-7xl mx-auto" />

      {/* ── North Cotswolds ── */}
      <section id="north-cotswolds" className="py-16 md:py-24 bg-white scroll-mt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#0ea5c8]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#0ea5c8]" />
                </div>
                <span className="text-[#0ea5c8] text-sm font-semibold uppercase tracking-wider">North Cotswolds</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-4">
                Bookkeeping Across the North Cotswolds
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                The North Cotswolds is one of England&apos;s most distinctive regions — a patchwork of charming market towns and thriving rural communities. We provide bookkeeping and accountancy services to businesses across the entire area.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  'Bourton-on-the-Water',
                  'Stow-on-the-Wold',
                  'Moreton-in-Marsh',
                  'Chipping Campden',
                  'Broadway',
                  'Bourton-on-the-Hill',
                  'Blockley',
                  'Surrounding villages',
                ].map((place) => (
                  <div key={place} className="flex items-center gap-2 text-sm text-gray-700">
                    <MapPin className="w-3.5 h-3.5 text-[#0ea5c8] flex-shrink-0" />
                    {place}
                  </div>
                ))}
              </div>
              <div className="bg-[#0f2244]/3 border-l-4 border-[#0ea5c8] p-5 rounded-r-lg">
                <p className="font-semibold text-[#0f2244] mb-1">Understanding North Cotswolds business</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Tourism and hospitality, agricultural and farming operations, craft businesses, specialist retail, country house hotels — we understand these sectors and the financial challenges they present.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="font-semibold text-[#0f2244] mb-4">North Cotswolds FAQs</h3>
              <div className="space-y-5">
                {[
                  { q: 'Do you serve all North Cotswolds villages?', a: "Yes — we're based in Winchcombe and travel throughout the North Cotswolds for client meetings. Cloud accounting also means we can serve you wherever you are." },
                  { q: 'Can you help agricultural businesses?', a: 'Yes. We have experience with farming and rural enterprises — seasonal accounts, partnership structures, and agricultural bookkeeping.' },
                  { q: 'Do you work with hospitality and tourism businesses?', a: 'Absolutely. Hotels, B&Bs, restaurants and visitor attractions all have specific VAT and payroll needs we handle with confidence.' },
                ].map(({ q, a }) => (
                  <div key={q}>
                    <p className="font-medium text-[#0f2244] text-sm mb-1">{q}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-gray-200">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#0f2244] hover:bg-[#0ea5c8] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all"
                >
                  Enquire for North Cotswolds
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose Zenith */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0f2244] mb-3">Why Businesses Choose Zenith</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Wherever you are in Gloucestershire, you get the same expert service.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: MapPin, title: 'Genuinely Local', desc: 'Based in Winchcombe — we know this area and its businesses.' },
              { icon: Users, title: 'Personal Service', desc: 'You always deal with David directly. No call centres.' },
              { icon: Award, title: 'ICB Qualified', desc: 'Member of the Institute of Certified Bookkeepers, AAT Level 3.' },
              { icon: Shield, title: 'HMRC Experience', desc: 'Former HMRC tax systems background — compliance is in our DNA.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-[#0f2244]/5 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#0ea5c8]" />
                </div>
                <h3 className="font-semibold text-[#0f2244] mb-1">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-24 bg-white scroll-mt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0f2244] mb-3">Services Available Across All Areas</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Every service is available to clients throughout Winchcombe, Cheltenham and the North Cotswolds.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group bg-gray-50 hover:bg-[#0f2244] rounded-xl p-5 border border-gray-100 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <Icon className="w-6 h-6 text-[#0ea5c8] mb-3" />
                  <h3 className="font-semibold text-[#0f2244] group-hover:text-white text-sm mb-1 transition-colors">{s.title}</h3>
                  <p className="text-gray-500 group-hover:text-white/70 text-xs leading-relaxed transition-colors">{s.description}</p>
                  <div className="flex items-center gap-1 text-[#0ea5c8] text-xs font-medium mt-3">
                    Learn more
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <FAQSection
        faqs={faqs}
        title="Questions About Our Coverage Area"
        subtitle="Everything you need to know about where we work and how we can help."
      />

      <CTASection />
    </>
  );
}
