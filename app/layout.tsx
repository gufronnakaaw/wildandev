'use client';

import './globals.css';
import { Outfit, Recursive } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import dynamic from 'next/dynamic';
import Floating from '@/components/Floating';

const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: false });

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

const recursive = Recursive({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-recursive',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${recursive.variable}`}
      suppressHydrationWarning={true}
    >
      <body>
        <ThemeProvider attribute="class">
          <Navbar />
          {children}
          <Floating />
        </ThemeProvider>
      </body>
    </html>
  );
}
