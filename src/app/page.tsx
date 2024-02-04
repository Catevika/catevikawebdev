import { barlowCond, oswald } from './font';
import styles from "./page.module.css";

import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className={styles.homeBackground}>
        <Image src={'/icons/bubbles.svg'} alt='' height={656} width={656} priority={true} />
        <Image className={styles.homeBackground__image} src={'/images/Catevika.jpeg'} alt='' height={720} width={720} priority={true} />
      </div>
      <div className={styles.homeContent}>
        <h2 className={barlowCond.className}>Your tailor-made website proposal a few clicks away!</h2>
        <h1 className={oswald.className}>Catevika Web Dev</h1>
        <h3 className={barlowCond.className}>dominique.bello@outlook.fr</h3>
      </div>
    </main>
  );
}
