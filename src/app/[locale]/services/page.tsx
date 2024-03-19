import styles from '@/app/[locale]/services/services.module.css';
import ServiceBanner from '@/components/ServiceBanner/ServiceBanner';
import ServiceList from '@/components/ServiceList/ServiceList';
import ServiceReasonList from '@/components/ServiceReasonList/ServiceReasonList';
import type { Props } from '@/types/types';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';

export default function Services({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  const t = useTranslations('Services');

  return (
    <>
      <section className={styles.services__container}>
        <h3>{t('title1')}</h3>
        <Link className={styles.services__link} href={'/contact'}>{t('link')}</Link>
        <div className={styles.services__content__top}>
          <div className={styles.services__banner}>
            <ServiceBanner />
          </div>
          <div className={styles.services__content}>
            <ServiceList />
          </div>
        </div>
      </section>
      <section className={styles.services__container}>
        <h3>{t('title2')}</h3>
        <div className={styles.services__content__bottom}>
          <div className={styles.services__content}>
            <ServiceReasonList />
          </div>
          <Image className={styles.services__image} src={'/images/Website_Mockup.png'} alt={t('alt')} width={0} height={0} sizes="50vw" priority />
        </div>
      </section>
    </>
  );
}