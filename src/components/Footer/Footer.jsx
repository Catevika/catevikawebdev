import Image from 'next/image';
import Link from 'next/link';
import styles from './components/Footer/Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footer__container}>
      <div className={styles.footer__content}>
        <div className={styles.footer__icons}>
          <p className={styles.footer__icon__block}>
            <Link className={styles.footer__link} href={'/contact'}><Image className={styles.footer__icon} src={'/icons/email.svg'} alt='Email icon' sizes='4vw' width={0} height={0} /></Link>
          </p>
          <p className={styles.footer__icon__block}>
            <Link className={styles.footer__link} href={'/contact'}>
              <Image className={styles.footer__icon} src={'/icons/facebook.svg'} alt='Facebook icon' sizes='2vw' width={0} height={0} />
            </Link>
          </p>
          <p className={styles.footer__icon__block}>
            <Link className={styles.footer__link} href={'/contact'}>
              <Image className={styles.footer__icon} src={'/icons/social-x.svg'} alt='X ex-twitter icon' sizes='2vw' width={0} height={0} />
            </Link>
          </p>
        </div>
      </div>
      <div className={styles.footer__content}>
        <p>Catevika Web Dev - 128 Rue de la Boétie - 75008 Paris - FRANCE</p>
        <p>© Catevika Web Dev 2024</p>
      </div>
    </div>
  );
}
