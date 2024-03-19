import styles from '@/app/[locale]/about/about.module.css';
import { useTranslations } from 'next-intl';

export default function SeahorseDetailList() {
  const t = useTranslations('SeahorseDetailList');
  const keys = [ 'id-1', 'id-2', 'id-3', 'id-4', 'id-5' ] as const;

  return (
    <>
      {keys ? keys.map((key) => (
        <details className={styles.about__details} key={key}><summary>{t(`${key}.summary`)}<span className='note'>{t('LearnMore')}</span></summary><p className='note'>{t(`${key}.text`)}</p></details>
      )) : null}
    </>
  );
}