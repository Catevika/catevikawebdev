import styles from "@/app/[locale]/not-found.module.css";
import BackButton from '@/components/Buttons/BackButton';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function NotFoundPage() {
  const t = useTranslations('NotFoundPage');

  return (
    <>
      <div className={styles.not__found__container}>
        <div className={styles.not__found__content}>
          <div className={styles.not__found__image__container}>
            <Image className={styles.not__found__image} src={'/images/404.png'} alt='' sizes="20vw" width={0} height={0} priority />
          </div>
          <div className={styles.not__found}>
            <h3>{t('text')}</h3>
            <BackButton />
          </div>
        </div>
      </div>
    </>
  );
}