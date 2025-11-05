import '@/app/[locale]/globals.css';
import {oxygen} from '@/app/font';
import Footer from '@/components/Footer/Footer';
import ErrorIcon from '@/components/Icons/ErrorIcon';
import SuccessIcon from '@/components/Icons/SuccessIcon';
import Navbar from '@/components/Navbar/Navbar';
import {Providers} from '@/theme/ThemeProvider';
import {SessionProvider} from 'next-auth/react';
import {NextIntlClientProvider} from 'next-intl';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {Toaster} from 'react-hot-toast';

export function generateStaticParams() {
	const locales = ['en', 'fr'];
	return locales.map((locale) => ({locale}));
}

export async function generateMetadata(params: Promise<{locale: 'en' | 'fr'}>) {
	const {locale} = await params;
	setRequestLocale(locale);

	const t = await getTranslations({locale});

	return {
		title: {
			template: '%s | Catevika Web Dev',
			default: 'Catevika Web Dev',
		},
		description: t('description'),
	};
}

export default async function LocaleLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{locale: string}>;
}) {
	const {locale} = await params;
	setRequestLocale(locale);

	return (
		<html
			lang={locale}
			suppressHydrationWarning>
			<body className={oxygen.className}>
				<NextIntlClientProvider locale={locale}>
					<Providers>
						<SessionProvider>
							<Navbar />
							<main className={`${oxygen.className} container`}>
								{children}
								<Toaster
									position='top-center'
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
												background: 'var(--color-dark)',
											},
											ariaProps: {
												role: 'status',
												'aria-live': 'polite',
											},
										},
										error: {
											duration: 5000,
											icon: <ErrorIcon />,
											style: {
												color: 'var(--color-gold)',
												background: 'var(--color-dark)',
											},
											ariaProps: {
												role: 'status',
												'aria-live': 'polite',
											},
										},
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
