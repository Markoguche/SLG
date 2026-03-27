import type { Metadata } from 'next';
import Client from './Client';

export const metadata: Metadata = {
  title: 'Contact Us | Servelead Global',
  description: 'Get in touch with Servelead Global. We help startups, SMEs, enterprises, and NGOs grow with AI-powered business development. Based in Abuja, Nigeria — serving Africa and beyond.',
  keywords: 'Contact Servelead Global, Servelead Abuja, AI Business Consulting Nigeria, Startup Support Contact, Business Development Contact',
  openGraph: {
    title: 'Contact Servelead Global',
    description: "Whether you're a startup seeking funding or a business looking to integrate AI — we're your partner for sustainable growth.",
    url: 'https://www.serveleadglobal.net/contact',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Contact Servelead Global', description: "Get in touch. We respond within 24 hours." },
  alternates: { canonical: 'https://www.serveleadglobal.net/contact' },
};

export default function Page() { return <Client />; }
