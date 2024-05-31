"use client";

import styles from '@/app/[locale]/services/services.module.css';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function ServiceScrollLink() {
  const t = useTranslations('Services');

  return (
    <>
      <Link href={'/contact'}>
        <motion.p className={styles.services__link}
          initial={{ opacity: 0, scale: 0.8, x: 0 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            ease: "easeInOut",
            repeat: 4,
            duration: 1.3
          }}
        >
          {t('link')}
        </motion.p>
      </Link >
    </>
  );
}
