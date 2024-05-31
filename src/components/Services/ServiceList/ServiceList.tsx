"use client";

import styles from '@/app/[locale]/services/services.module.css';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const ServiceList = () => {
  const t = useTranslations('ServiceList');

  const keys = ['id-1', 'id-2', 'id-3', 'id-4', 'id-5', 'id-6'] as const;

  return (
    <motion.div
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      transition={{ ease: "easeInOut", duration: 1.5 }}
    >
      {keys ? keys.map((key) => (
        <details className={styles.services__card} key={key}>
          <summary>{t(`${key}.title`)}</summary>
          <p>
            <Image data-hide-on-theme='light' className={styles.services__icon__dark} src={'/icons/star.svg'} alt={t(`${key}.alt1`)} sizes='32x32' width={32} height={32} />
            <Image data-hide-on-theme='dark' className={styles.services__icon__light} src={'/icons/star-light.svg'} alt={t(`${key}.alt1`)} sizes='32x32' width={32} height={32} />
            {t(`${key}.text1`)}</p>
          <p>
            <Image data-hide-on-theme='light' className={styles.services__icon__dark} src={'/icons/rocket.svg'} alt={t(`${key}.alt2`)} sizes='32x32' width={32} height={32} />
            <Image data-hide-on-theme='dark' className={styles.services__icon__light} src={'/icons/rocket-light.svg'} alt={t(`${key}.alt2`)} sizes='32x32' width={32} height={32} />
            {t(`${key}.text2`)}
          </p>
        </details >)) : null
      }
    </motion.div>
  );
};

export default ServiceList;