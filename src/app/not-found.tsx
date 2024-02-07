import Image from 'next/image';
import Link from 'next/link';
import { barlow } from './font';
import styles from "./page.module.css";

export default function notFound() {
  return (
    <main className='container'>
      <div className={styles.homeBackground}>
        <Image src={'/images/404.png'} alt='' height={400} width={400} style={{ borderRadius: '50%' }} priority />
        <div className={styles.notFound}>
          <h2 className={barlow.className}>404 - Page not found</h2>
          <Link className={styles.notFound__link} href="/">Back to Home page</Link>
        </div>
      </div>
    </main>
  );
}
