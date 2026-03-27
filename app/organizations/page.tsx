import type { Metadata } from 'next';
import Client from './Client';

export const metadata: Metadata = {
  title: 'Organizations | Servelead Global',
  description: 'Explore the Servelead Global group of companies — LAICOS Farms, RespecTech, Aidos Creations, RescueTap, and Servelead Humanitarian Initiative. Five pillars solving Africa\'s business challenges.',
  keywords: 'Servelead Organizations, LAICOS Farms, RespecTech, Aidos Creations, RescueTap, Servelead Humanitarian, Nigeria Tech Companies',
  openGraph: {
    title: 'Our Organizations | Servelead Global Group',
    description: 'Five specialized companies united under one vision — each solving a critical piece of Africa\'s development puzzle.',
    url: 'https://www.serveleadglobal.net/organizations',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Servelead Global Organizations', description: 'LAICOS Farms, RespecTech, Aidos, RescueTap & SHI.' },
  alternates: { canonical: 'https://www.serveleadglobal.net/organizations' },
};

export default function Page() { return <Client />; }
