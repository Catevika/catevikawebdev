"use client";

import styles from '@/components/PostUser/PostUser.module.css';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function PostUser() {
  const t = useTranslations('AboutPage');

  return (
    <div className={styles.user__container}>
      <Image className={styles.user__image} src={'/images/Profile.png'} alt={t('alt1')} height={250} width={250} priority />
      <p>
        <span className={styles.user__title}>Author</span>
        <span className={styles.user__username}> Dominique Bello</span>
      </p>
    </div>
  );
}
