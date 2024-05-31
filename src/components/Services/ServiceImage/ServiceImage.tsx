"use client";

import styles from '@/app/[locale]/services/services.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ServiceImage() {
  return (
    <motion.div
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      transition={{ ease: "easeInOut", duration: 1.5 }}
    >
      <Image className={styles.services__image} src={'/images/Website_Mockup.png'} alt='' width={0} height={0} sizes="50vw" priority />
    </motion.div>
  );
}
