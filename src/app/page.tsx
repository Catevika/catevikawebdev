import { lato, oswald } from '@/app/font';
import Image from 'next/image';
import Link from 'next/link';
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className='container'>
      <div className={styles.home__background}>
        <Image className={styles.home__background__image1} src={'/icons/bubbles.svg'} alt='' width={0}
          height={0} sizes="50vw" priority />
        <Image className={styles.home__background__image2} src={'/images/Catevika.png'} alt='' width={0}
          height={0} sizes="50vw" priority />
      </div>
      <div className={styles.home__content}>
        <h2 className={lato.className}>Your tailor-made website in just a few clicks!
          <Link className={styles.home__link} href={'./services'}>Learn more</Link> </h2>
      </div>
      <div className={styles.home__bottom}>
        <h1 className={oswald.className}>Catevika Web Dev</h1>
        <Link className={styles.home__link} href={'/contact'}>catevikawebdev@outlook.fr</Link>
      </div>
    </main>
  );
}
