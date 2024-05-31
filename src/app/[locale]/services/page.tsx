import styles from '@/app/[locale]/services/services.module.css';
import ServiceBanner from '@/components/Services/ServiceBanner/ServiceBanner';
import ServiceImage from '@/components/Services/ServiceImage/ServiceImage';
import ServiceList from '@/components/Services/ServiceList/ServiceList';
import ServiceReasonList from '@/components/Services/ServiceReasonList/ServiceReasonList';
import ServiceScrollLink from '@/components/Services/ServiceScrollLink/ServiceScrollLink';
import type { Props } from '@/types/types';
import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Services',
};

export default function Services({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  const t = useTranslations('Services');

  return (
    <>
      <section className={styles.services__container}>
        <h3>{t('title1')}</h3>
        <ServiceScrollLink />
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
          <ServiceImage />
        </div>
      </section>
    </>
  );
}