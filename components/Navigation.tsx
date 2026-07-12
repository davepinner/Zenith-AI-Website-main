'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  { name: 'Bookkeeping Services', href: '/bookkeeping-services' },
  { name: 'VAT Returns & MTD', href: '/vat-returns' },
  { name: 'Self Assessment', href: '/self-assessment' },
  { name: 'MTD for Income Tax', href: '/mtd-itsa' },
  { name: 'Payroll Services', href: '/payroll-services' },
  { name: 'Record Keeping', href: '/record-keeping' },
  { name: 'Statutory Accounts', href: '/statutory-accounts' },
  { name: 'Data Migration', href: '/data-migration' },
  { name: 'Software Setup & Training', href: '/software-setup' },
  { name: 'Business IT Support', href: '/it-support' },
];

const locations = [
  { name: 'Winchcombe', href: '/areas#winchcombe' },
  { name: 'Cheltenham', href: '/areas#cheltenham' },
  { name: 'North Cotswolds', href: '/areas#north-cotswolds' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setLocationsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#0f2244] shadow-lg shadow-black/10'
          : 'bg-[#0f2244]/95 backdrop-blur-sm'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
            <Image
              src="/Zenith_Icon_Logo_-_FINAL.png"
              alt="Zenith Accountancy Solutions icon"
              width={56}
              height={56}
              className="h-14 w-auto"
              priority
            />
            <div className="flex flex-col leading-tight">
              <span className="text-white font-bold text-lg tracking-tight">Zenith</span>
              <span className="text-[#5ec9d4] text-sm font-medium tracking-wide">Accountancy Solutions</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className={cn(
                'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                pathname === '/'
                  ? 'text-[#0ea5c8]'
                  : 'text-white hover:text-[#0ea5c8] hover:bg-white/10'
              )}
            >
              Home
            </Link>

            {/* Services dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-white hover:text-[#0ea5c8] hover:bg-white/10 transition-colors"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                Services
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              {servicesOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-60 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  {services.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#0f2244]/5 hover:text-[#0f2244] transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Locations dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-white hover:text-[#0ea5c8] hover:bg-white/10 transition-colors"
                onMouseEnter={() => setLocationsOpen(true)}
                onMouseLeave={() => setLocationsOpen(false)}
              >
                Areas Covered
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              {locationsOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                  onMouseEnter={() => setLocationsOpen(true)}
                  onMouseLeave={() => setLocationsOpen(false)}
                >
                  {locations.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#0f2244]/5 hover:text-[#0f2244] transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/about"
              className={cn(
                'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                pathname === '/about'
                  ? 'text-[#0ea5c8]'
                  : 'text-white hover:text-[#0ea5c8] hover:bg-white/10'
              )}
            >
              About
            </Link>
            <Link
              href="/blog"
              className={cn(
                'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                pathname.startsWith('/blog')
                  ? 'text-[#0ea5c8]'
                  : 'text-white hover:text-[#0ea5c8] hover:bg-white/10'
              )}
            >
              Blog
            </Link>
            <Link
              href="/analysis"
              className={cn(
                'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                pathname === '/analysis'
                  ? 'text-[#0ea5c8]'
                  : 'text-white hover:text-[#0ea5c8] hover:bg-white/10'
              )}
            >
              Analysis
            </Link>
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+441242000000"
              className="flex items-center gap-2 text-white hover:text-[#0ea5c8] text-sm font-medium transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>01242 000 000</span>
            </a>
            <Link
              href="/contact"
              className="bg-[#0ea5c8] hover:bg-[#0891b2] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:shadow-lg hover:shadow-[#0ea5c8]/25 hover:-translate-y-0.5"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-white/10 py-4 space-y-1">
            <Link href="/" className="block px-3 py-2.5 text-white hover:text-[#0ea5c8] hover:bg-white/10 rounded-md text-sm font-medium">
              Home
            </Link>

            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full px-3 py-2.5 text-white hover:text-[#0ea5c8] hover:bg-white/10 rounded-md text-sm font-medium"
              >
                Services
                <ChevronDown className={cn('w-4 h-4 transition-transform', servicesOpen && 'rotate-180')} />
              </button>
              {servicesOpen && (
                <div className="ml-4 mt-1 space-y-1 border-l border-white/20 pl-4">
                  {services.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-2 text-white/80 hover:text-white text-sm"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => setLocationsOpen(!locationsOpen)}
                className="flex items-center justify-between w-full px-3 py-2.5 text-white hover:text-[#0ea5c8] hover:bg-white/10 rounded-md text-sm font-medium"
              >
                Areas Covered
                <ChevronDown className={cn('w-4 h-4 transition-transform', locationsOpen && 'rotate-180')} />
              </button>
              {locationsOpen && (
                <div className="ml-4 mt-1 space-y-1 border-l border-white/20 pl-4">
                  {locations.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-2 text-white/80 hover:text-white text-sm"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className="block px-3 py-2.5 text-white hover:text-[#0ea5c8] hover:bg-white/10 rounded-md text-sm font-medium">
              About
            </Link>
            <Link href="/blog" className="block px-3 py-2.5 text-white hover:text-[#0ea5c8] hover:bg-white/10 rounded-md text-sm font-medium">
              Blog
            </Link>
            <Link href="/analysis" className="block px-3 py-2.5 text-white hover:text-[#0ea5c8] hover:bg-white/10 rounded-md text-sm font-medium">
              Analysis
            </Link>

            <div className="pt-4 pb-2 space-y-3 border-t border-white/10">
              <a
                href="tel:+441242000000"
                className="flex items-center gap-2 px-3 text-white hover:text-[#0ea5c8] text-sm font-medium"
              >
                <Phone className="w-4 h-4" />
                01242 000 000
              </a>
              <Link
                href="/contact"
                className="block mx-3 bg-[#0ea5c8] hover:bg-[#0891b2] text-white px-5 py-3 rounded-lg text-sm font-semibold text-center transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
