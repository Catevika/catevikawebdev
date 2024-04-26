import styles from '@/app/[locale]/register/register.module.css';
import LoginForm from '@/components/Forms/LoginForm';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Login',
};

export default function Login() {

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
