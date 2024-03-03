import styles from '@/app/about/about.module.css';
import { seahorseDetailList } from '@/data/seahorse';

function SeahorseDetailList() {
  return (
    <>
      {seahorseDetailList ? seahorseDetailList.map((seahorseDetail) => (
        <details className={styles.about__details} key={seahorseDetail.summary}><summary>{seahorseDetail.summary} <span className='note'>learn more</span></summary><p className='note'>{seahorseDetail.text}</p></details>
      )) : null}
    </>
  );
}

export default SeahorseDetailList;