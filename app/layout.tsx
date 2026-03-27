import type { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import './globals.css';
import ClientLayout from '../components/ClientLayout';

export const metadata: Metadata = {
  title: 'Servelead Global | AI-Powered Business Development',
  description: "Africa's Premier AI-Powered Business Development Organization.",
  keywords: 'Servelead Global, AI Business Development, African Startups, Venture Studio, Nigeria',
  openGraph: {
    type: 'website',
    title: 'Servelead Global | AI-Powered Business Development',
    description: 'World-class AI-powered business development organization empowering startups and businesses across Africa.',
    url: 'https://www.serveleadglobal.net',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servelead Global',
    description: "AI-Powered Business Development for Africa's Future",
  },
  icons: { icon: '/logo.png' },
};

export const viewport: Viewport = {
  themeColor: '#0A2E1A',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,100..900;1,100..900&family=DM+Sans:ital,opsz,wght@0,9..40,200..900;1,9..40,200..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div id="cursor" />
        <div id="cursor-follower" />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
