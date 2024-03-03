import styles from '@/components/Footer/footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className={styles.footer__container}>
      <div className={styles.footer__content__top}>
        <div className={styles.content__left}>
          <p>Catevika Web Dev - 128 Rue de la Boétie - 75008 Paris - FRANCE</p>
        </div>
        <div className={styles.footer__content__right}>
          <Link className={styles.footer__link} href={'/contact'}>
            <Image className={styles.footer__icon__email__dark} src={'/icons/email.svg'} alt='Email icon' sizes='4vw' width={0} height={0} />
            <Image className={styles.footer__icon__email__light} src={'/icons/email-light.svg'} alt='Email icon' sizes='4vw' width={0} height={0} />
          </Link>
          <Link className={styles.footer__link} href={'/contact'}>
            <Image className={styles.footer__icon__facebook__dark} src={'/icons/facebook.svg'} alt='Facebook icon' sizes='4vw' width={0} height={0} />
            <Image className={styles.footer__icon__facebook__light} src={'/icons/facebook-light.svg'} alt='Facebook icon' sizes='4vw' width={0} height={0} />
          </Link>
          <Link className={styles.footer__link} href={'/contact'}>
            <Image className={styles.footer__icon__x__dark} src={'/icons/social-x.svg'} alt='X ex-twitter icon' sizes='2vw' width={0} height={0} />
            <Image className={styles.footer__icon__x__light} src={'/icons/social-x-light.svg'} alt='X ex-twitter icon' sizes='2vw' width={0} height={0} />
          </Link>
        </div>
      </div>
      <div className={styles.footer__content__bottom}>
        <q>
          <span>You can&apos;t wait until life isn&apos;t hard anymore before you&nbsp;decide&nbsp;to&nbsp;be&nbsp;happy.</span>
        </q>
        <p>Jane Marczewski alias &lsquo;Nightbirde&lsquo;</p>
        <p>© Catevika Web Dev 2024</p>
      </div>
    </div>
  );
}
