"use client";

import styles from "@/app/[locale]/not-found.module.css";
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';


export default function BacktoBlogButton() {
  const t = useTranslations('BackButton');

  const router = useRouter();

  const handleClick = () => {
    return router.push('/blog');
  };

  return (
    <button type='button' className={styles.not__found__link} onClick={handleClick}>&larr; {t('link')}</button>
  );
}
