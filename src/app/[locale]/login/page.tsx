"use client";

import styles from '@/app/[locale]/register/register.module.css';
import LoginForm from '@/components/Forms/LoginForm';
import { useTranslations } from 'next-intl';
import Image from 'next/image';


export default function Login() {
  const t = useTranslations('LoginPage');

  return (
    <section className={styles.register__container}>
      <div className={styles.register__left} >
        <Image data-hide-on-theme="light" className={styles.home__background__image2dark} src={'/images/Catevika.png'} alt='' width={0}
          height={0} sizes="50vw" priority />
        <Image data-hide-on-theme="dark" className={styles.home__background__image2light} src={'/images/Catevika2.png'} alt='' width={0}
          height={0} sizes="50vw" priority />
      </div>
      <div className={styles.register__right}>
        <LoginForm />
      </div>
    </section>
  );
}
