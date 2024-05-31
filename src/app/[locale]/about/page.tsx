import AboutList from '@/components/About/Aboutlist/AboutList';
import { locales } from '@/config';
import type { Props } from '@/types/types';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: Props) {
  const title = locale === 'en' ? 'About' : 'A propos';

  return {
    title: title
  };
}

export default function About() {
  return (
    <>
      <AboutList />
    </>
  );
}