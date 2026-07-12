import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.zenith-as.co.uk'),
  title: {
    default: 'Bookkeeper in Winchcombe & Cheltenham | Zenith Accountancy Services',
    template: '%s | Zenith Accountancy Services',
  },
  description:
    'Professional bookkeeping, VAT returns, payroll and tax support for businesses across Winchcombe, Cheltenham and the North Cotswolds.',
  keywords: [
    'bookkeeper Winchcombe',
    'bookkeeper Cheltenham',
    'bookkeeping North Cotswolds',
    'VAT returns Gloucestershire',
    'self assessment Cheltenham',
    'payroll services Cheltenham',
    'accountancy services Gloucestershire',
  ],
  authors: [{ name: 'Zenith Accountancy Services' }],
  creator: 'Zenith Accountancy Services',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.zenith-as.co.uk',
    siteName: 'Zenith Accountancy Services',
    title: 'Bookkeeper in Winchcombe & Cheltenham | Zenith Accountancy Services',
    description:
      'Professional bookkeeping, VAT returns, payroll and tax support for businesses across Winchcombe, Cheltenham and the North Cotswolds.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zenith Accountancy Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bookkeeper in Winchcombe & Cheltenham | Zenith Accountancy Services',
    description:
      'Professional bookkeeping, VAT returns, payroll and tax support for businesses across Winchcombe, Cheltenham and the North Cotswolds.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.zenith-as.co.uk',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
