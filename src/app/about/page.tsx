import { lato } from '@/app/font';
import Image from 'next/image';
import styles from './about.module.css';

export default function About() {
  return (
    <main className='container'>
      <h3 className={lato.className}>Welcome!</h3>
      <section className={styles.about__top__container}>
        <Image className={styles.about__top__image} src={'/images/Profile.png'} alt='Picture of the Web Developer' height={250} width={250} loading='lazy' />
        <p className={styles.about__text}>I&apos;m Dominique Bello, also known as Catevika.<br />Although my roots are in Paris, France, my husband led me to find a second home in Italy.</p>
        <p className={styles.about__text}>I&apos;m a self-taught Web Developer who is currently retraining after more than fifteen years in marketing.</p>
        <p className={styles.about__text}>French is my mother tongue, I also speak Italian and I&apos;ve used professional English in my previous experience and almost every day to acquire new web development skills. </p>
        <p className={styles.about__text}>I&apos;m delighted to help clients from  all over the world achieve their personal or business goals. I create websites that reflect their unique brand personality, down to the pixel.</p>
      </section>
      <h3 className={lato.className}>What does the pseudo &quot;Catevika&quot; means?</h3>
      <section className={styles.about__middle__container}>
        <div className={styles.about__paragraph}>
          <p className={styles.about__text}>Ever heard of &quot;Cattivik&quot;, a mischievous character from an old Italian comic book?</p>
          <p className={styles.about__text}>Well, thanks to a playful typo, my husband&apos;s pseudonym became &quot;Catevik&quot;.</p>
          <p className={styles.about__text}>As his wife, I did not looked for mine any futher!</p>
          <p className={styles.about__text}>This is how &quot;Catevika&quot; is born.</p>
        </div>
        <Image className={styles.about__middle__image} src={'/images/Cattivik.png'} alt='Picture of Cattivik' height={292} width={216} loading='lazy' />
      </section>
      <h3 className={lato.className}>What about the steampunk* seahorse symbol?</h3>
      <section className={styles.about__bottom__container}>
        <Image className={styles.about__bottom__image} src={'/images/Catevika.png'} alt='Drawing of a colorful seahorse' height={292} width={292} loading='lazy' />
        <p className={styles.about__text}>The seahorse is often associated with:</p>
        <details className={styles.about__details}><summary>Loyalty <span className='note'>learn more</span></summary><p className='note'>Seahorses are known for their monogamous mating habits and span pair bonds, which has made them a symbol of loyalty and commitment.</p></details>
        <details className={styles.about__details}><summary>Patience <span className='note'>learn more</span></summary><p className='note'>Seahorses are slow-moving creatures and take their time to get where they are going. This has made them a symbol of patience and perseverance.</p></details>
        <details className={styles.about__details}><summary>Strength <span className='note'>learn more</span></summary><p className='note'>Seahorses have an amazing ability to navigate through the ocean current and survive in harsh conditions. This has made them a symbol of strength and resilience.</p></details>
        <details className={styles.about__details}><summary>Creativity <span className='note'>learn more</span></summary><p className='note'>Seahorses have a unique shape that makes them very recognizable. This has made them a symbol of creativity and uniqueness.</p></details>
        <details className={styles.about__details}><summary>Balance <span className='note'>learn more</span></summary><p className='note'>Seahorses have a long snout and a curved body that gives them an unusual balance. This has made them a symbol of balance and harmony.</p></details>
        <p className={styles.about__text}>The hippocampus is also a brain structure that plays a central role in cognition, memory, learning and spatial orientation. Its distinctive, curved shape has been likened to the sea-horse monster of Greek mythology.</p>
      </section>
      <p className='note'>* a style of design and fashion that combines historical elements with anachronistic technological features inspired by science fiction</p>
    </main >
  );
}