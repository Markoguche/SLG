import type { Metadata } from 'next';
import Client from './Client';

export const metadata: Metadata = {
  title: 'Portfolio | Servelead Global',
  description: "Explore Servelead Global's portfolio of landmark events — RespecTech Conference, Blockchain Developers Summit, World Bank training programs, French Embassy partnerships, and more.",
  keywords: 'Servelead Portfolio, RespecTech Conference, Blockchain Summit Africa, Event Portfolio Nigeria, Conference Management Africa, Tech Events Abuja',
  openGraph: {
    title: 'Portfolio | Servelead Global Events & Impact',
    description: 'From blockchain summits to women leadership programs — every event we manage leaves a measurable legacy.',
    url: 'https://www.serveleadglobal.net/portfolio',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Servelead Global Portfolio', description: 'Flagship events, conferences, and impact programs across Africa.' },
  alternates: { canonical: 'https://www.serveleadglobal.net/portfolio' },
};

export default function Page() { return <Client />; }
