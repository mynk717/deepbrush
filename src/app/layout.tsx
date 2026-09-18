import React from 'react';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Deep Brush Industries | Paint Brush & Roller Manufacturer Raipur',
  description: 'Deep Brush Industries (Prop. Hardeep Singh Saini, GSTIN: 22BJEPS5887HIZS) is a leading B2B manufacturer of paint brushes, polyamide rollers, and texture tools in Raipur, Chhattisgarh.',
  keywords: [
    'Paint brush manufacturer in Raipur Chhattisgarh',
    'Wholesale paint rollers supplier India',
    'Bulk paint brush factory price',
    'Polyamide roller brush bulk supplier',
    'Deep Brush Industries GSTIN 22BJEPS5887HIZS',
    'Hardeep Singh Saini Deep Brush'
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ManufacturingBusiness',
    'name': 'Deep Brush Industries',
    'legalName': 'Deep Brush Industries',
    'founder': 'Hardeep Singh Saini',
    'vatID': '22BJEPS5887HIZS',
    'taxID': '22BJEPS5887HIZS',
    'telephone': '+91 9300768484',
    'email': 'deepbrush.digital@gmail.com',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Behind Anand Kukreja, Shyam Nagar, Telibandha',
      'addressLocality': 'Raipur',
      'addressRegion': 'Chhattisgarh',
      'postalCode': '492001',
      'addressCountry': 'IN'
    },
    'description': 'Direct factory manufacturer and wholesale supplier of painting brushes, polyamide rollers, and texture trowels in Raipur, Chhattisgarh.',
    'url': 'https://deepbrushindustry.com'
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-slate-50 text-slate-900 antialiased min-h-screen flex flex-col justify-between">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
