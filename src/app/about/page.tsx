import styles from '@/app/about/about.module.css';
import { lato } from '@/app/font';
import Image from 'next/image';

export default function About() {
  return (
    <main className='container'>
      <h3 className={lato.className}>Welcome!</h3>
      <section className={styles.about__top__container}>
        <Image className={styles.about__top__image} src={'/images/Profile.png'} alt='Picture of the Web Developer' height={250} width={250} />
        <p className={styles.about__text}>I&apos;m <span>Dominique Bello</span>, also known as <span>Catevika.</span></p>
        <p className={styles.about__text}>Although my roots are in <span>Paris, France</span>, my husband led me to find a second home in <span>Italy</span>.</p>
        <p className={styles.about__text}>I&apos;m a self-taught <span>Web Developer</span> who is currently retraining <span>after more than fifteen years in marketing</span>.</p>
        <p className={styles.about__text}><span>French</span> is my mother tongue, I also speak <span>Italian</span> and I&apos;ve used professional <span>English</span> in my previous experience and almost every day to acquire new web development skills. </p>
        <p className={styles.about__text}>I&apos;m delighted to help <span>clients</span> from <span>all over the world</span> achieve their <span>personal</span> or <span>business goals</span>. I create <span>websites</span> that reflect their unique <span>brand personality</span>, down to the pixel.</p>
      </section>
      <h3 className={lato.className}>What does the pseudo &quot;Catevika&quot; means?</h3>
      <section className={styles.about__middle__container}>
        <div className={styles.about__paragraph}>
          <p className={styles.about__text}>Ever heard of <span>&quot;Cattivik&quot;</span>, a mischievous character from an old Italian comic book?</p>
          <p className={styles.about__text}>Well, thanks to a playful typo, my <span>husband</span>&apos;s pseudonym became <span>&quot;Catevik&quot;</span>.</p>
          <p className={styles.about__text}>As his <span>wife</span>, I did not looked for mine any futher!</p>
          <p className={styles.about__text}>This is how <span>&quot;Catevika&quot;</span> is born.</p>
        </div>
        <Image className={styles.about__middle__image} src={'/images/Cattivik.png'} alt='Picture of Cattivik' height={292} width={216} />
      </section>
      <h3 className={lato.className}>What about the steampunk* seahorse symbol?</h3>
      <section className={styles.about__bottom__container}>
        <Image className={styles.about__bottom__image} src={'/images/Catevika.png'} alt='Drawing of a colorful seahorse' height={292} width={292} />
        <p className={styles.about__text}>The seahorse is often associated with:</p>
        <details className={styles.about__details}><summary>Loyalty <span className='note'>learn more</span></summary><p className='note'>Seahorses are known for their monogamous mating habits and span pair bonds, which has made them a symbol of loyalty and commitment.</p></details>
        <details className={styles.about__details}><summary>Patience <span className='note'>learn more</span></summary><p className='note'>Seahorses are slow-moving creatures and take their time to get where they are going. This has made them a symbol of patience and perseverance.</p></details>
        <details className={styles.about__details}><summary>Strength <span className='note'>learn more</span></summary><p className='note'>Seahorses have an amazing ability to navigate through the ocean current and survive in harsh conditions. This has made them a symbol of strength and resilience.</p></details>
        <details className={styles.about__details}><summary>Creativity <span className='note'>learn more</span></summary><p className='note'>Seahorses have a unique shape that makes them very recognizable. This has made them a symbol of creativity and uniqueness.</p></details>
        <details className={styles.about__details}><summary>Balance <span className='note'>learn more</span></summary><p className='note'>Seahorses have a long snout and a curved body that gives them an unusual balance. This has made them a symbol of balance and harmony.</p></details>
        <p className={styles.about__text}>The hippocampus is also a brain structure that plays a central role in cognition, memory, learning and spatial orientation. Its distinctive, curved shape has been likened to the sea-horse monster of Greek mythology.</p>
      </section>
      <p className='note'>* a style of design that combines historical elements with anachronistic technological features inspired by science fiction. I am a really big fan of it!</p>
    </main >
  );
}