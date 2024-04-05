'use client';

import Floating from '@/components/Floating';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from 'next-themes';
import dynamic from 'next/dynamic';
import { Outfit, Recursive } from 'next/font/google';
import { usePathname } from 'next/navigation';
import './globals.css';

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
  const pathname = usePathname();
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${recursive.variable}`}
      suppressHydrationWarning={true}
    >
      <body>
        <ThemeProvider attribute="class">
          {pathname !== '/links' ? <Navbar /> : null}
          {children}
          {pathname !== '/links' ? <Floating /> : null}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
