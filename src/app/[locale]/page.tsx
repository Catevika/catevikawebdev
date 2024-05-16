"use client";

import styles from "@/app/[locale]/page.module.css";
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <section className={styles.home__container}>
      <div className={styles.home__background}>
        <Image className={styles.home__background__image1} src={'/icons/bubbles.svg'} alt='' width={0}
          height={0} sizes="50vw" priority />
        <Image data-hide-on-theme="light" className={styles.home__background__image2dark} src={'/images/Catevika.png'} alt='' width={0}
          height={0} sizes="50vw" priority />
        <Image data-hide-on-theme="dark" className={styles.home__background__image2light} src={'/images/Catevika2.png'} alt='' width={0}
          height={0} sizes="50vw" priority />
      </div>
      <div className={styles.home__content}>
        <Link className={styles.home__link__top} href={'./services'}><h2>{t('title')}</h2></Link>
      </div>
      <div className={styles.home__bottom}>
        <h1>Catevika Web&nbsp;Dev</h1>
        <Link className={styles.home__link__bottom} href={'/contact'}>catevikawebdev@outlook.fr</Link>
      </div>
    </section>
  );
}
