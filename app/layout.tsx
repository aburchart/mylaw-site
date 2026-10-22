import type { Metadata } from 'next';
import { Providers } from '@/components/providers';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://mylawsolutions.com.au'),
  title: {
    default: 'MyLaw Solutions - Brisbane Compliance Advisor Aged Care, NDIS, Healthcare',
    template: '%s | MyLaw Solutions',
  },
  description:
    "Brisbane's trusted legal advisors for aged care, NDIS, and healthcare compliance. We help you avoid litigation through proactive legal solutions and training.",
  keywords: [
    'Brisbane compliance lawyer',
    'aged care legal services',
    'NDIS compliance',
    'healthcare practice legal support',
    'Queensland regulatory compliance',
  ],
  authors: [{ name: 'MyLaw Solutions' }],
  openGraph: {
    title: 'MyLaw Solutions - Brisbane Compliance Legal Advisory',
    description:
      "Brisbane's trusted legal advisors for aged care, NDIS, and healthcare compliance. We help you avoid litigation through proactive legal solutions.",
    type: 'website',
    images: [{ url: '/og-image.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MyLaw Solutions - Brisbane Compliance Legal Advisory',
    description:
      "Brisbane's trusted legal advisors for aged care, NDIS, and healthcare compliance.",
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
