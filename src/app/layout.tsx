import type { Metadata } from 'next';
import { Bebas_Neue, DM_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import MagneticCursor from '@/components/effects/MagneticCursor';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

const dmSans = DM_Sans({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-dm',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-mono-var',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Forged Systems — AI Revenue Systems',
  description:
    'We build AI systems that capture leads, qualify prospects, and close deals — while you sleep. Book a discovery call today.',
  keywords: 'AI systems, lead capture, revenue automation, AI agency, Forged Systems',
  openGraph: {
    title: 'Forged Systems — AI Revenue Systems',
    description: 'Your business is leaking revenue. We build the AI that stops it.',
    type: 'website',
    url: 'https://forged-system.co.za',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
      style={
        {
          '--font-display': 'var(--font-bebas)',
          '--font-body': 'var(--font-dm)',
          '--font-mono': 'var(--font-mono-var)',
        } as React.CSSProperties
      }
    >
      <body className="min-h-screen bg-[--forge-black] text-[--forge-text] overflow-x-hidden">
        <MagneticCursor />
        <Nav />
        {children}
      </body>
    </html>
  );
}
