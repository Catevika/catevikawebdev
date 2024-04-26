import "@/app/[locale]/globals.css";
import { oxygen } from '@/app/font';
import Footer from '@/components/Footer/Footer';
import ErrorIcon from '@/components/Icons/ErrorIcon';
import SuccessIcon from '@/components/Icons/SuccessIcon';
import Navbar from '@/components/Navbar/Navbar';
import { locales } from '@/config';
import { Providers } from '@/theme/ThemeProvider';
import type { LayoutProps, Props } from '@/types/types';
import { SessionProvider } from 'next-auth/react';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Toaster } from 'react-hot-toast';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale });

  return {
    title: {
      template: '%s | Catevika Web Dev',
      default: 'Catevika Web Dev',
    },
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
            <SessionProvider>
              <Navbar />
              <main className={`${oxygen.className} container`}>
                {children}
                <Toaster
                  position="top-center"
                  reverseOrder={false}
                  gutter={8}
                  toastOptions={{
                    style: {
                      fontSize: '24px',
                      maxWidth: '350px',
                      textAlign: 'center',
                      borderRadius: '1rem',
                      border: '1px solid var(--color-blue-30)',
                    },
                    success: {
                      duration: 3000,
                      icon: <SuccessIcon />,
                      style: {
                        color: 'var(--color-gold)',
                        background: 'var(--color-dark)'
                      },
                      ariaProps: {
                        role: 'status',
                        'aria-live': 'polite',
                      }
                    },
                    error: {
                      duration: 5000,
                      icon: <ErrorIcon />,
                      style: {
                        color: 'var(--color-gold)',
                        background: 'var(--color-dark)'
                      },
                      ariaProps: {
                        role: 'status',
                        'aria-live': 'polite',
                      }
                    }
                  }}
                />
              </main>
            </SessionProvider>
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
