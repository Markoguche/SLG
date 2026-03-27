import type { Metadata } from 'next';
import Client from './Client';

export const metadata: Metadata = {
  title: 'Services | Servelead Global',
  description: 'Six specialized AI-powered service pillars — AI-BaaS, Venture Studio, Event Management, Training, Humanitarian, and Strategic Consulting. End-to-end business growth solutions for Africa.',
  keywords: 'AI Business Services, AI-BaaS Africa, Venture Studio Nigeria, Startup Support Africa, Business Development Services, Event Management Abuja',
  openGraph: {
    title: 'Our Services | Servelead Global',
    description: 'Six specialized service pillars designed to take any business from where it is to where it needs to be.',
    url: 'https://www.serveleadglobal.net/services',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Servelead Global Services', description: 'AI-BaaS, Venture Studio, Events, Training & more.' },
  alternates: { canonical: 'https://www.serveleadglobal.net/services' },
};

export default function Page() { return <Client />; }
