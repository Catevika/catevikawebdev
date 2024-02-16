import { lato } from '@/app/font';
import styles from '@/app/services/services.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function services() {
  return (
    <main className='container'>
      <section className={styles.services__content}>
        <h3 className={lato.className}>Ready to launch your online presence? <Link className={styles.services__link} href={'/contact'}>Request a website quote now!</Link></h3>
        <div className={styles.services__ribbon}><p>Introductory rates for first few clients!</p></div>
        <h3 className={lato.className}>Catevika Web Dev services</h3>
        <div className={styles.services__container}>
          <div className={styles.services__card}>
            <h4 className={lato.className}>Showcase Site Creation</h4>
            <p><Image className={styles.services__icon} src={'/icons/star.svg'} alt='Star icon' sizes='2vw' width={0} height={0} />Let me design a stunning website that perfectly reflects your brand identity and story</p>
            <p><Image className={styles.services__icon} src={'/icons/rocket.svg'} alt='Rocket launch icon' sizes='2vw' width={0} height={0} />Attract your ideal audience and stand out in the online world</p>
          </div>

          <div className={styles.services__card}>
            <h4 className={lato.className}>Seamless Service Offering</h4>
            <p><Image className={styles.services__icon} src={'/icons/star.svg'} alt='Star icon' sizes='2vw' width={0} height={0} />Let me simplify your business with a dedicated site for your services</p>
            <p><Image className={styles.services__icon} src={'/icons/rocket.svg'} alt='Rocket launch icon' sizes='2vw' width={0} height={0} />Streamline client booking, showcase your expertise, and boost conversions</p>
          </div>

          <div className={styles.services__card}>
            <h4 className={lato.className}>Modernization Makeover</h4>
            <p><Image className={styles.services__icon} src={'/icons/star.svg'} alt='Star icon' sizes='2vw' width={0} height={0} />Let me ensure your existing site is compatible with the latest technologies for optimal performance and user experience</p>
            <p><Image className={styles.services__icon} src={'/icons/rocket.svg'} alt='Rocket launch icon' sizes='2vw' width={0} height={0} />Breathe new life into your outdated website</p>
          </div>

          <div className={styles.services__card}>
            <h4 className={lato.className}>Scalable Solutions</h4>
            <p><Image className={styles.services__icon} src={'/icons/star.svg'} alt='Star icon' sizes='2vw' width={0} height={0} />Let me optimize your React front-end to ensure your website performs flawlessly, even under heavy load</p>
            <p><Image className={styles.services__icon} src={'/icons/rocket.svg'} alt='Rocket launch icon' sizes='2vw' width={0} height={0} />Handle high-volume traffic with confidence</p>
          </div>

          <div className={styles.services__card}>
            <h4 className={lato.className}>Efficiency Boost</h4>
            <p><Image className={styles.services__icon} src={'/icons/star.svg'} alt='Star icon' sizes='2vw' width={0} height={0} />Let me free up your time by outsourcing some of your React tasks to me</p>
            <p><Image className={styles.services__icon} src={'/icons/rocket.svg'} alt='Rocket launch icon' sizes='2vw' width={0} height={0} />Focus on your core strengths while I ensure a robust and efficient front-end</p>
          </div>

          <div className={styles.services__card}>
            <h4 className={lato.className}>Long-Term Support</h4>
            <p><Image className={styles.services__icon} src={'/icons/star.svg'} alt='Star icon' sizes='2vw' width={0} height={0} />Let me keep your React front-end website secure and up-to-date so that it stands the test of time</p>
            <p><Image className={styles.services__icon} src={'/icons/rocket.svg'} alt='Rocket launch icon' sizes='2vw' width={0} height={0} />Choose my maintenance and support package tailored to your needs</p>
          </div>
        </div>
      </section>
      <section className={styles.services__content}>
        <h3 className={lato.className}>Why choose Catevika Web Dev?</h3>
        <div className={styles.services__items}>
          <div className={styles.services__item}>
            <Image className={styles.services__icon} src={'/icons/star.svg'} alt='Star icon' sizes='2vw' width={0} height={0} />
            <p><span>Fresh Perspective</span> - as a self-taught developer, I approach each project with a unique outlook, free from conventional limitations.</p>
          </div>
          <div className={styles.services__item}>
            <Image className={styles.services__icon} src={'/icons/star.svg'} alt='Star icon' sizes='2vw' width={0} height={0} />
            <p><span>React Expertise</span> - I leverage the power of React to create stunning and user-friendly websites that engage and convert.</p>
          </div>
          <div className={styles.services__item}>
            <Image className={styles.services__icon} src={'/icons/star.svg'} alt='Star icon' sizes='2vw' width={0} height={0} />
            <p><span>Your Vision, My Code</span> - I partner with you to understand your vision and translate it into a website that exceeds expectations.</p>
          </div>
          <div className={styles.services__item}>
            <Image className={styles.services__icon} src={'/icons/star.svg'} alt='Star icon' sizes='2vw' width={0} height={0} />
            <p><span>Pixel-Perfect Craftsmanship</span> - every element, from design to code, is carefully crafted with meticulous attention to detail.</p>
          </div>
          <div className={styles.services__item}>
            <Image className={styles.services__icon} src={'/icons/star.svg'} alt='Star icon' sizes='2vw' width={0} height={0} />
            <p><span>Client-Centric Approach</span> - open communication and collaboration are at the heart of every project.</p>
          </div>
          <div className={styles.services__item}>
            <Image className={styles.services__icon} src={'/icons/star.svg'} alt='Star icon' sizes='2vw' width={0} height={0} />
            <p><span>Multilingual Magic</span> - speak French or Italian? No problem! I can also communicate and collaborate seamlessly in both languages.</p>
          </div>
          <div className={styles.services__item}><Image className={styles.services__icon} src={'/icons/star.svg'} alt='Star icon' sizes='2vw' width={0} height={0} />
            <p><span>Continuous Learning</span> - the digital world is ever-evolving, and I stay ahead of the curve to offer the best solutions.</p></div>
        </div>
      </section>
    </main>
  );
}