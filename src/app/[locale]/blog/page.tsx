import styles from '@/app/[locale]/blog/blog.module.css';
import PostCard from '@/components/PostCard/PostCard';
import type { Props } from '@/types/types';
import { unstable_setRequestLocale } from 'next-intl/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';


export default function Blog({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  const isLoggedIn = cookies().get('IS_LOGGED_IN')?.value;

  return (
    <section className={styles.blog__posts__container}>
      {isLoggedIn === 'true' ?
        <>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </>
        : redirect('/login')
      }
    </section>
  );
}
