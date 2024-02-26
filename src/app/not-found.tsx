import { lato } from '@/app/font';
import styles from "@/app/page.module.css";
import Image from 'next/image';
import Link from 'next/link';

export default function notFound() {
  return (
    <main className='container'>
      <div className={styles.home__background}>
        <Image src={'/images/404.png'} alt='' height={393} width={393} style={{
          borderRadius: '1rem', filter: 'brightness(0.7)', mixBlendMode: 'luminosity'
        }} priority />
        <div className={styles.not__found}>
          <p>404 - Page not found</p>
          <h3 className={lato.className}>Tell me about your next project to light my day!</h3>
          <Link className={styles.not__found__link} href="/contact">Go to Contact</Link>
        </div>
      </div>
    </main>
  );
}
