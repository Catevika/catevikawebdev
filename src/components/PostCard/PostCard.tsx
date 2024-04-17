"use client";

import styles from '@/components/PostCard/PostCard.module.css';
import type { PostType } from '@/types/types';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function PostCard({ post }: { post: PostType; }) {
  const t = useTranslations('PostCard');

  const { title, imageurl, content, createdAt } = post;
  const locale = useParams().toString();

  return (
    <section className={styles.post__container}>
      <div className={styles.post__top}>
        <p className={styles.post__date}>{locale === 'en' ? createdAt.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }) : createdAt.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' })}
        </p>
        <p className={styles.post__image__container}>
          <Image src={imageurl} alt='' sizes='250x400' fill priority />
        </p>
      </div>
      <div className={styles.post__bottom}>
        <h3>{title}</h3>
        <p>{content}</p>
        <Link href={`/blog/post/${post._id}`}>{t('text')}</Link>
      </div>
    </section>
  );
};
