import AboutList from '@/components/About/Aboutlist/AboutList';

export async function generateMetadata(params: Promise<{locale: string}>) {
	const {locale} = await params;
	const title = locale === 'en' ? 'About' : 'A propos';

	return {
		title: title,
	};
}

export default function About() {
	return (
		<>
			<AboutList />
		</>
	);
}
