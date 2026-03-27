import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About Us | Servelead Global',
  description: "Learn about Servelead Global — Africa's AI-powered business development organization. Our story, vision, mission, milestones, and the team driving change across the continent.",
  keywords: 'About Servelead Global, African Business Development, AI Business Organization, Nigeria Startup Ecosystem, Servelead Story',
  openGraph: {
    title: 'About Servelead Global | Our Story & Vision',
    description: "From idea validation to market entry and global scale — Servelead Global is Africa's end-to-end growth partner.",
    url: 'https://www.serveleadglobal.net/about',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'About Servelead Global', description: "Our story, vision, and mission to transform African business development." },
  alternates: { canonical: 'https://www.serveleadglobal.net/about' },
};

export default function Page() { return <AboutClient />; }
