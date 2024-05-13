"use client";

import styles from "@/app/[locale]/not-found.module.css";
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';


export default function BackButton() {
  const t = useTranslations('NotFoundPage');

  const router = useRouter();

  const handleClick = () => {
    return router.back();
  };

  return (
    <button type='button' className={styles.not__found__link} onClick={handleClick}>&larr; {t('link')}</button>
  );
}
