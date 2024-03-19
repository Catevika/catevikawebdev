import "@/app/[locale]/globals.css";
import { oxygen } from '@/app/font';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import { locales } from '@/config';
import { Providers } from '@/theme/ThemeProvider';
import type { LayoutProps, Props } from '@/types/types';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale });

  return {
    title: t('title'),
    description: t('description')
  };
}


export default function LocaleLayout({
  children, params: { locale }
}: Readonly<LayoutProps>) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const messages = useMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={oxygen.className}>
        <NextIntlClientProvider locale={locale} messages={messages} >
          <Providers>
            <Navbar />
            <main className={`${oxygen.className} container`}>
              {children}
            </main>
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
