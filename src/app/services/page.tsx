import { lato } from '@/app/font';
import styles from '@/app/services/services.module.css';

export default function services() {
  return (
    <main className='container'>
      <section className={styles.services__content}>
        <h3 className={lato.className}>Catevika Web Dev services</h3>
        <div className={styles.services__container}>
          <div className={styles.services__top__card}>
            <h4 className={lato.className}>Showcase Site Creation</h4>
            <p>Let me design a stunning website that perfectly reflects your brand identity and story. Attract your ideal audience and stand out in the online world.</p>
          </div>

          <div className={styles.services__top__card}>
            <h4 className={lato.className}>Seamless Service Offering</h4>
            <p>Simplify your business with a dedicated site for your services. Streamline client booking, showcase your expertise, and boost conversions.</p>
          </div>

          <div className={styles.services__top__card}>
            <h4 className={lato.className}>Modernization Makeover</h4>
            <p>Breathe new life into your outdated website. I&apos;ll ensure it&apos;s compatible with the latest technologies for optimal performance and user experience.</p>
          </div>

          <div className={styles.services__top__card}>
            <h4 className={lato.className}>Scalable Solutions</h4>
            <p>Handle high-volume traffic with confidence. I&apos;ll optimize your React front-end to ensure your website performs flawlessly, even under heavy load.</p>
          </div>

          <div className={styles.services__top__card}>
            <h4 className={lato.className}>Efficiency Boost</h4>
            <p>Free up your time by outsourcing some of your React tasks to me. Focus on your core strengths while I ensure a robust and efficient front-end.</p>
          </div>

          <div className={styles.services__top__card}>
            <h4 className={lato.className}>Long-Term Support</h4>
            <p>Build websites that stand the test of time. I offer ongoing maintenance and support to keep your React front-end secure and up-to-date.</p>
          </div>
        </div>
      </section>
      <section className={styles.services__content}>
        <h3 className={lato.className}>Why choose Catevika Web Dev?</h3>
        <div className={styles.services__bottom__container}>
          <div className={styles.services__bottom__card}>
            <h4 className={lato.className}>Fresh Perspective</h4>
            <p>As a self-taught developer, I approach each project with a unique outlook, free from conventional limitations</p>
          </div>
          <div className={styles.services__bottom__card}>
            <h4 className={lato.className}>Pixel-Perfect Craftsmanship</h4>
            <p>Every element, from design to code, is carefully crafted with meticulous attention to detail</p>
          </div>
          <div className={styles.services__bottom__card}>
            <h4 className={lato.className}>React Expertise</h4>
            <p>I leverage the power of React to create stunning and user-friendly websites that engage and convert</p>
          </div>
          <div className={styles.services__bottom__card}>
            <h4 className={lato.className}>Multilingual Magic</h4>
            <p>Speak French or Italian? No problem! I can also communicate and collaborate seamlessly in both languages</p>
          </div>
          <div className={styles.services__bottom__card}>
            <h4 className={lato.className}>Your Vision, My Code</h4>
            <p>I partner with you to understand your vision and translate it into a website that exceeds expectations</p>
          </div>
          <div className={styles.services__bottom__card}>
            <h4 className={lato.className}>Client-Centric Approach</h4>
            <p>Open communication and collaboration are at the heart of every project</p>
          </div>
          <div className={styles.services__bottom__card}>
            <h4 className={lato.className}>Continuous Learning</h4>
            <p>The digital world is ever-evolving, and I stay ahead of the curve to offer the best solutions</p>
          </div>
          <div className={styles.services__bottom__card}>
            <h4 className={lato.className}>Ready to launch your online presence?</h4>
            <p>Request a website quote now! I&apos;m currently offering introductory rates for my first few clients.</p>
          </div>
        </div>
      </section>
    </main>
  );
}