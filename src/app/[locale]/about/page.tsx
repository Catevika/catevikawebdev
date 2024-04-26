import styles from '@/app/[locale]/about/about.module.css';
import SeahorseDetailList from '@/components/SeahorseDetailList/SeahorseDetailList';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export async function generateMetadata({ params }: { params: { locale: string; }; }) {
  const title = params.locale === 'en' ? 'About' : 'A propos';

  return {
    title: title
  };
}

export default function About() {
  const t = useTranslations('AboutPage');

  return (
    <>
      <section className={styles.about__top__container}>
        <Image className={styles.about__top__image} src={'/images/Profile.png'} alt={t('alt1')} height={250} width={250} priority />

        <p className={styles.about__text}>{t.rich('aboutMe', {
          span: (chuncks) => <span>{chuncks}</span>
        })}</p>
        <p className={styles.about__text}>{t.rich('aboutMe2', {
          span: (chuncks) => <span>{chuncks}</span>
        })}</p>
        <p className={styles.about__text}>{t.rich('aboutMe3', {
          span: (chuncks) => <span>{chuncks}</span>
        })}</p>
        <p className={styles.about__text}>{t.rich('aboutMe4', {
          span: (chuncks) => <span>{chuncks}</span>
        })}</p>
        <p className={styles.about__text}>{t.rich('languages', {
          span: (chuncks) => <span>{chuncks}</span>
        })}</p>

      </section>
      <h3>{t('name')}</h3>
      <section className={styles.about__middle__container}>
        <div className={styles.about__paragraph}>
          <p className={styles.about__text}>{t.rich('cattivik', {
            span: (chuncks) => <span>{chuncks}</span>
          })}</p>
          <p className={styles.about__text}>{t.rich('catevik', {
            span: (chuncks) => <span>{chuncks}</span>
          })}</p>
          <p className={styles.about__text}>{(t('catevika'))}</p>
          <p className={styles.about__text}>{t.rich('catevika2', {
            span: (chuncks) => <span>{chuncks}</span>
          })}</p>
        </div>
        <Image className={styles.about__middle__image} src={'/images/Cattivik.png'} alt={t('alt2')} height={292} width={216} />
      </section>
      <h3>{t('seahorseSymbol')}</h3>
      <section className={styles.about__bottom__container}>
        <Image data-hide-on-theme='light' className={styles.about__bottom__image__dark} src={'/images/Catevika.png'} alt={t('alt3')} height={292} width={292} />
        <Image data-hide-on-theme='dark' className={styles.about__bottom__image__light} src={'/images/Catevika2.png'} alt={t('alt3')} height={292} width={292} />
        <p className={styles.about__text}>{t('seahorse')}</p>
        <SeahorseDetailList />
        <br />
        <p className={styles.about__text}>{t('hippocampus')}</p>
      </section>
      <p className='note'>{t('note')}</p>
    </ >
  );
}