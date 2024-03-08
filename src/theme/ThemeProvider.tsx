'use client';

import "@/app/globals.css";
import { ThemeProvider } from 'next-themes';

export function Providers({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ThemeProvider defaultTheme='system'>
    {children}
  </ThemeProvider>;
}