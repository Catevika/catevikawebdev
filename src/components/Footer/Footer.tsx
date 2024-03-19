import styles from '@/components/Footer/footer.module.css';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('FooterTexts');

  return (
    <div className={styles.footer__container}>
      <div className={styles.footer__content__top}>
        <div className={styles.content__left}>
          <p>Catevika Web Dev - 128 Rue de la Boétie - 75008 Paris - FRANCE</p>
        </div>
        <div className={styles.footer__content__right}>
          <Link className={styles.footer__link} href={'/contact'}>
            <Image data-hide-on-theme='light' className={styles.footer__icon__email__dark} src={'/icons/email.svg'} alt='Email icon' sizes='4vw' width={0} height={0} />
            <Image data-hide-on-theme='dark' className={styles.footer__icon__email__light} src={'/icons/email-light.svg'} alt='Email icon' sizes='4vw' width={0} height={0} />
          </Link>
          <Link className={styles.footer__link} href={'/contact'}>
            <Image data-hide-on-theme='light' className={styles.footer__icon__facebook__dark} src={'/icons/facebook.svg'} alt='Facebook icon' sizes='4vw' width={0} height={0} />
            <Image data-hide-on-theme='dark' className={styles.footer__icon__facebook__light} src={'/icons/facebook-light.svg'} alt='Facebook icon' sizes='4vw' width={0} height={0} />
          </Link>
          <Link className={styles.footer__link} href={'/contact'}>
            <Image data-hide-on-theme='light' className={styles.footer__icon__x__dark} src={'/icons/social-x.svg'} alt='X ex-twitter icon' sizes='2vw' width={0} height={0} />
            <Image data-hide-on-theme='dark' className={styles.footer__icon__x__light} src={'/icons/social-x-light.svg'} alt='X ex-twitter icon' sizes='2vw' width={0} height={0} />
          </Link>
        </div>
      </div>
      <div className={styles.footer__content__bottom}>
        <q>
          <span>{t.rich('quote', {
            span: (chuncks) => <span>{chuncks}</span>
          })}</span>
        </q>
        <p>{t('text1')}</p>
        <p>© Catevika Web Dev 2024</p>
      </div>
    </div>
  );
}
