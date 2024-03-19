import type { Props } from '@/types/types';
import { unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';

export default function Blog({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  return (
    <main className='container'>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Image src={'/images/Site_under_construction.png'} alt='' height={504} width={896} priority />
      </div>
      <h3>Blog</h3>
    </main>
  );
}
