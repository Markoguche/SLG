import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Servelead Global | AI-Powered Business Development for Africa',
  description: "Africa's #1 AI-powered business development organization. We empower startups and businesses to build, operate, and scale sustainably. 103,500+ people impacted, $350K+ managed.",
  keywords: 'Servelead Global, AI Business Development Africa, Startup Support Nigeria, Venture Studio Africa, Business Consulting Abuja, Tech Talent Africa, AI Integration Business',
  openGraph: {
    title: 'Servelead Global | We Build Africa\'s Future',
    description: 'World-class AI-powered business development. From idea validation to market entry and global scale — your end-to-end growth partner.',
    url: 'https://www.serveleadglobal.net',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servelead Global | AI-Powered Business Development',
    description: "Africa's #1 AI-powered business development organization. 103,500+ people impacted.",
  },
  alternates: { canonical: 'https://www.serveleadglobal.net' },
};

export default function Page() {
  return <HomeClient />;
}
