'use client';

import "@/app/[locale]/globals.css";
import { ThemeProvider } from 'next-themes';
import type React from 'react';

export function Providers({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ThemeProvider defaultTheme='system'>
    {children}
  </ThemeProvider>;
}