"use client";
import styles from '@/app/[locale]/blog/blog.module.css';
import PostCard from '@/components/PostCard/PostCard';
import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

// TODO Change the PostCards with a PostList et mettre le status dans le PostList

export default function Blog() {
  const t = useTranslations("BlogPage");

  const { data: session } = useSession();

  return (
    <section className={styles.blog__container}>
      {session?.user?.name === 'Catevika' ? <Link href={t('link1')}>{t('button')}</Link> : null}
      <div className={styles.blog__posts__container}>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </section>
  );
};
