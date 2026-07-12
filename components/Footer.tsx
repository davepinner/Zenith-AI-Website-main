import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';

const services = [
  { name: 'Bookkeeping Services', href: '/bookkeeping-services' },
  { name: 'VAT Returns & MTD', href: '/vat-returns' },
  { name: 'Self Assessment', href: '/self-assessment' },
  { name: 'MTD for Income Tax', href: '/mtd-itsa' },
  { name: 'Payroll Services', href: '/payroll-services' },
  { name: 'Record Keeping', href: '/record-keeping' },
  { name: 'Statutory Accounts', href: '/statutory-accounts' },
  { name: 'Data Migration', href: '/data-migration' },
  { name: 'Software Setup', href: '/software-setup' },
  { name: 'Business IT Support', href: '/it-support' },
];

const locations = [
  { name: 'Winchcombe', href: '/areas#winchcombe' },
  { name: 'Cheltenham', href: '/areas#cheltenham' },
  { name: 'North Cotswolds', href: '/areas#north-cotswolds' },
];

const quickLinks = [
  { name: 'About David Pinner', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Blog & Guides', href: '/blog' },
];

export function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/Zenith_Icon_Logo_-_FINAL.png"
                alt="Zenith Accountancy Solutions icon"
                width={44}
                height={44}
                className="h-11 w-auto"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-white font-bold text-base tracking-tight">Zenith</span>
                <span className="text-[#5ec9d4] text-xs font-medium tracking-wide">Accountancy Solutions</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Professional bookkeeping and accountancy services for small businesses across Winchcombe, Cheltenham and the North Cotswolds.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-white/70">
                <CheckCircle2 className="w-4 h-4 text-[#0ea5c8] flex-shrink-0" />
                <span>Member of the Institute of Certified Bookkeepers</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <CheckCircle2 className="w-4 h-4 text-[#0ea5c8] flex-shrink-0" />
                <span>AAT Level 3 Qualified</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <CheckCircle2 className="w-4 h-4 text-[#0ea5c8] flex-shrink-0" />
                <span>25+ Years Finance Experience</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Services</h3>
            <ul className="space-y-2.5">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-[#0ea5c8] text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas & Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Areas Served</h3>
            <ul className="space-y-2.5 mb-8">
              {locations.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-[#0ea5c8] text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-[#0ea5c8] text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+441242000000"
                  className="flex items-start gap-3 text-white/60 hover:text-[#0ea5c8] transition-colors group"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#0ea5c8]" />
                  <span className="text-sm">01242 000 000</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@zenith-as.co.uk"
                  className="flex items-start gap-3 text-white/60 hover:text-[#0ea5c8] transition-colors"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#0ea5c8]" />
                  <span className="text-sm">info@zenith-as.co.uk</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/60">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#0ea5c8]" />
                  <span className="text-sm">Winchcombe, Gloucestershire<br />GL54</span>
                </div>
              </li>
            </ul>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-block bg-[#0ea5c8] hover:bg-[#0891b2] text-white px-5 py-3 rounded-lg text-sm font-semibold transition-all hover:shadow-lg hover:shadow-[#0ea5c8]/25"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Zenith Accountancy Services. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-white/40 hover:text-white/70 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/40 hover:text-white/70 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
