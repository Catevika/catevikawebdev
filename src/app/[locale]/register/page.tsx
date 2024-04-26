import styles from '@/app/[locale]/register/register.module.css';
import RegisterForm from '@/components/Forms/RegisterForm';
import type { Props } from '@/types/types';
import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Register'
};

export default function Register({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('RegisterPage');

  return (
    <section className={styles.register__container}>
      <div className={styles.register__left} >
        <Image data-hide-on-theme="light" className={styles.home__background__image2dark} src={'/images/Catevika.png'} alt='' width={0}
          height={0} sizes="50vw" priority />
        <Image data-hide-on-theme="dark" className={styles.home__background__image2light} src={'/images/Catevika2.png'} alt='' width={0}
          height={0} sizes="50vw" priority />
      </div>
      <div className={styles.register__right}>
        <div className={styles.register__title}>
          <h3>{t('title')}</h3>
          <p>{t('text')} <Link href="/login">{t('link')}</Link></p>
        </div>
        <RegisterForm />
      </div>
    </section>
  );
}
