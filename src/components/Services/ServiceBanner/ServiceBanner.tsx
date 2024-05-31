"use client";

import styles from '@/app/[locale]/services/services.module.css';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

function ServiceBanner() {
  const t = useTranslations('ServiceBanner');

  return (
    <motion.div className={styles.banner}
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ ease: "easeInOut", duration: 1.5 }}
    >
      <div className={styles.line}>
        <span>{t('text1')}</span>
      </div>
      <div className={styles.line}>
        <span>{t('text2')}</span>
      </div>
      <div className={styles.line}>
        <span>{t('text3')}</span>
      </div>
    </motion.div>
  );
}

export default ServiceBanner;