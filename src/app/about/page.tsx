import styles from '@/app/about/about.module.css';
import { oxygen } from '@/app/font';
import SeahorseDetailList from '@/components/seahorseDetailList/seahorseDetailList';
import Image from 'next/image';

export default function About() {
  return (
    <main className='container'>
      <h3 className={oxygen.className}>Welcome!</h3>
      <section className={styles.about__top__container}>
        <Image className={styles.about__top__image} src={'/images/Profile.png'} alt='Picture of the Web Developer' height={250} width={250} priority />
        <p className={styles.about__text}>I&apos;m <span>Dominique Bello</span>, also known as <span>Catevika</span>. Although my roots are in <span>Paris, France</span>, my husband led me to find a second home in <span>Italy</span>.</p>

        <p className={styles.about__text}>I am a dedicated <span>Frontend Web Developer</span>. My <span>main motivation</span> is to help <span>clients</span> from <span>all over the world </span> creating <span>websites</span> that reflect the <span>unique personality</span> of their <span>brands.</span></p>

        <p className={styles.about__text}>As a former <span>Project Manager</span>, I have always been a <span>hard-working team player</span> with a <span>strong commitment for learning</span> and <span>problem-solving</span>. I have collaborated with <span>teams of developpers around the world</span> to deploy <span>BtoB</span> and <span>BtoC online surveys</span> during <span>over 15 years</span> in <span>Fast-moving consumer goods marketing</span>. For the past <span>4 years</span>, I have been undergoing <span>intensive training</span>.</p>

        <p className={styles.about__text}>Finally I am able to align my <span>passion for Web Development</span> with my <span>professional goals.</span></p>

        <p className={styles.about__text}><span>French</span> is my mother tongue, I also speak <span>Italian</span> and I&apos;ve used professional <span>English</span> in my previous experience and almost every day to acquire new <span>web development</span> skills.</p>
        <br />
      </section>
      <h3 className={oxygen.className}>What does the pseudo &quot;Catevika&quot; means?</h3>
      <section className={styles.about__middle__container}>
        <div className={styles.about__paragraph}>
          <p className={styles.about__text}>Ever heard of <span>&quot;Cattivik&quot;</span>, a mischievous character from an old Italian comic book?</p>
          <p className={styles.about__text}>Well, thanks to a playful typo, my <span>husband</span>&apos;s pseudonym became <span>&quot;Catevik&quot;</span>.</p>
          <p className={styles.about__text}>As his <span>wife</span>, I did not looked for mine any futher!</p>
          <p className={styles.about__text}>This is how <span>&quot;Catevika&quot;</span> is born.</p>
        </div>
        <Image className={styles.about__middle__image} src={'/images/Cattivik.png'} alt='Picture of Cattivik' height={292} width={216} />
      </section>
      <h3 className={oxygen.className}>What about the steampunk* seahorse symbol?</h3>
      <section className={styles.about__bottom__container}>
        <Image data-hide-on-theme='light' className={styles.about__bottom__image__dark} src={'/images/Catevika.png'} alt='Drawing of a colorful seahorse' height={292} width={292} />
        <Image data-hide-on-theme='dark' className={styles.about__bottom__image__light} src={'/images/Catevika2.png'} alt='Drawing of a colorful seahorse' height={292} width={292} />
        <p className={styles.about__text}>The seahorse is often associated with:</p>
        <SeahorseDetailList />
        <br />
        <p className={styles.about__text}>The hippocampus is also a brain structure that plays a central role in cognition, memory, learning and spatial orientation. Its distinctive, curved shape has been likened to the sea-horse monster of Greek mythology.</p>
      </section>
      <p className='note'>* a style of design that combines historical elements with anachronistic technological features inspired by science fiction. I am a really big fan of it!</p>
    </main >
  );
}