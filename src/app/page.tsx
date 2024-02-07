import Image from 'next/image';
import Link from 'next/link';
import { barlowCond, oswald } from './font';
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className='container'>
      <div className={styles.home__background}>
        <Image className={styles.home__background__image1} src={'/icons/bubbles.svg'} alt='' height={656} width={656} priority />
        <Image className={styles.home__background__image2} src={'/images/Catevika.png'} alt='' height={720} width={720} priority />
      </div>
      <div className={styles.home__content}>
        <h2 className={barlowCond.className}>Your tailor-made website in just a few clicks!</h2>
        <button>Ask for a quotation</button>
        <Link href={'/services'}>Learn more about our Services</Link>
        <h1 className={oswald.className}>Catevika Web Dev</h1>
        <p className={barlowCond.className}>catevikawebdev@outlook.fr</p>
      </div>
    </main>
  );
}
