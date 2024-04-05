"use client";
import styles from "@/app/[locale]/page.module.css";
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function NotFoundPage() {
  const t = useTranslations('NotFoundPage');

  const router = useRouter();

  const handleClick = () => {
    return router.back();
  };

  return (
    <>
      <div className={styles.not__found__container}>
        <div className={styles.not__found__content}>
          <div className={styles.not__found__image__container}>
            <Image className={styles.not__found__image} src={'/images/404.png'} alt='' sizes="20vw" width={0} height={0} priority />
          </div>
          <div className={styles.not__found}>
            <h3>{t('text')}</h3>
            <button className={styles.not__found__link} onClick={handleClick}>{t('link')}</button>
          </div>
        </div>
      </div>
    </>
  );
}