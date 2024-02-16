import { lato } from '@/app/font';
import styles from "@/app/page.module.css";
import Image from 'next/image';
import Link from 'next/link';

export default function notFound() {
  return (
    <main className='container'>
      <div className={styles.home__background}>
        <Image src={'/images/404.png'} alt='' height={400} width={400} style={{ borderRadius: '50%' }} priority />
        <div className={styles.not__found}>
          <h3 className={lato.className}>404 - Page not found</h3>
          <Link className={styles.not__found__link} href="/">Back to Home page</Link>
        </div>
      </div>
    </main>
  );
}