import type { Metadata } from 'next';
import Client from './Client';

export const metadata: Metadata = {
  title: 'Our Team | Servelead Global',
  description: "Meet the people behind Servelead Global — our executive leadership, core team specialists, and the culture that drives Africa's business development revolution.",
  keywords: 'Servelead Team, Ijeoma Aladesaye, Servelead Leadership, African Business Team, Nigeria Startup Team, AI Business Professionals',
  openGraph: {
    title: 'Meet Our Team | Servelead Global',
    description: 'Diverse experts united by a shared mission — to build, scale, and transform African businesses through world-class service.',
    url: 'https://www.serveleadglobal.net/team',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Servelead Global Team', description: 'Meet the team driving African business development forward.' },
  alternates: { canonical: 'https://www.serveleadglobal.net/team' },
};

export default function Page() { return <Client />; }
