import styles from '@/components/Footer/Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className={styles.footer__container}>
      <div className={styles.footer__content}>
        <div>
          <Image className={styles.footer__icon} src={'/icons/address.svg'} alt='Address card icon' sizes='2vw' width={0} height={0} />
          <div>
            <p>Catevika Web Dev</p>
            <p>128 Rue de la Boétie</p>
            <p>75008 Paris</p>
            <p>FRANCE</p>
          </div>
        </div>
        <div>
          <Link className={styles.footer__link} href={'/contact'}>catevikawebdev@outlook.fr</Link>
        </div>
        <div className={styles.footer__icons}>
          <Image className={styles.footer__icon} src={'/icons/facebook.svg'} alt='Facebook icon' sizes='2vw' width={0} height={0} />
          <Image className={styles.footer__icon} src={'/icons/social-x.svg'} alt='X ex-twitter icon' sizes='2vw' width={0} height={0} />
          <Image className={styles.footer__icon} src={'/icons/instagram.svg'} alt='instagram icon' sizes='4vw' width={0} height={0} />
        </div>
      </div>
      <p className={styles.footer__copyright} >© Catevika Web Dev 2024</p>
    </div>
  );
}
