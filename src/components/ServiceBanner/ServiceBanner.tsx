"use client";

import styles from '@/app/[locale]/services/services.module.css';
import { useTranslations } from 'next-intl';

function ServiceBanner() {
  const t = useTranslations('ServiceBanner');

  return (
    <div className={styles.banner}>
      <div className={styles.line}>
        <span>{t('text1')}</span>
      </div>
      <div className={styles.line}>
        <span>{t('text2')}</span>
      </div>
      <div className={styles.line}>
        <span>{t('text3')}</span>
      </div>
    </div>
  );
}

export default ServiceBanner;