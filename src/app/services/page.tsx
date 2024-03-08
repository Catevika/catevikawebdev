import { oxygen } from '@/app/font';
import styles from '@/app/services/services.module.css';
import ServiceBanner from '@/components/ServiceBanner/ServiceBanner';
import ServiceList from '@/components/ServiceList/ServiceList';
import ServiceReasonList from '@/components/ServiceReasonList/ServiceReasonList';
import Link from 'next/link';

export default function services() {
  return (
    <main className='container'>
      <section className={styles.services__content}>
        <div className={styles.services__banner}>
          <h3 className={oxygen.className}>Ready to launch your online presence?</h3>
          <Link className={styles.services__link} href={'/contact'}>Request a website quote now!</Link>
          <ServiceBanner />
        </div>
        <h3 className={oxygen.className}>Catevika Web Dev services</h3>
        <div className={styles.services__container}>
          <ServiceList />
        </div>
      </section>
      <section className={styles.services__content}>
        <h3 className={oxygen.className}>Why choose Catevika Web Dev?</h3>
        <div className={styles.services__items}>
          <ServiceReasonList />
        </div>
      </section>
    </main>
  );
}