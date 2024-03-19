import styles from "@/app/[locale]/page.module.css";
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

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
            <Link className={styles.not__found__link} href="/">{t('link')}</Link>
          </div>
        </div>
      </div>
    </>
  );
}