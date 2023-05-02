import React from 'react';
import './global.css';
import type {Metadata} from 'next';
import Banner from '@/components/Banner';
import NavBar from '@/components/NavBar';

export const metadata: Metadata = {
  title: {
    default: 'jooncco.com',
    template: '%s | jooncco.com',
  },
  description: "Developer jooncco's blog.",
  icons: {
    shortcut: '/img/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return (
    <html lang="en" className="text-white bg-black">
      <body className="max-w-7xl mx-auto mb-40 mx-4 mt-8 md:mt-12">
        <Banner />
        <NavBar />
        <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2">
          {children}
        </main>
      </body>
    </html>
  );
}
