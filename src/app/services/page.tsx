import { lato } from '@/app/font';
import styles from '@/app/services/services.module.css';
import ServiceList from '@/components/ServiceList/ServiceList';
import ServiceReasonList from '@/components/ServiceReasonList/ServiceReasonList';
import ServiceRibbon from '@/components/ServiceRibbon/ServiceRibbon';
import Link from 'next/link';

export default function services() {
  return (
    <main className='container'>
      <section className={styles.services__content}>
        <h3 className={lato.className}>Ready to launch your online presence?</h3>
        <Link className={styles.services__link} href={'/contact'}>Request a website quote now!</Link>
        <ServiceRibbon />
        <h3 className={lato.className}>Catevika Web Dev services</h3>
        <div className={styles.services__container}>
          <ServiceList />
        </div>
      </section>
      <section className={styles.services__content}>
        <h3 className={lato.className}>Why choose Catevika Web Dev?</h3>
        <div className={styles.services__items}>
          <ServiceReasonList />
        </div>
      </section>
    </main>
  );
}