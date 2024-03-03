import { lato } from '@/app/font';
import styles from "@/app/page.module.css";
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='container'>
      <div className={styles.home__background}>
        <Image className={styles.home__background__image1} src={'/icons/bubbles.svg'} alt='' width={0}
          height={0} sizes="50vw" priority />
        <Image className={styles.home__background__image2dark} src={'/images/Catevika.png'} alt='' width={0}
          height={0} sizes="50vw" priority />
        <Image className={styles.home__background__image2light} src={'/images/Catevika2.png'} alt='' width={0}
          height={0} sizes="50vw" priority />
      </div>
      <div className={styles.home__content}>
        <h2 className={lato.className}>Your tailor-made website in&nbsp;just&nbsp;a&nbsp;few&nbsp;clicks!</h2>
        <Link className={styles.home__link} href={'./services'}> Learn&nbsp;more</Link>
      </div>
      <div className={styles.home__bottom}>
        <h1 className={lato.className}>Catevika Web&nbsp;Dev</h1>
        <Link className={styles.home__link} href={'/contact'}>catevikawebdev@outlook.fr</Link>
      </div>
    </main>
  );
}
