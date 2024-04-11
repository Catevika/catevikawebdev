import styles from '@/components/PostCard/PostCard.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function PostCard() {

  return (
    <section className={styles.post__container}>
      <div className={styles.post__top}>
        <p className={styles.post__image__container}>
          <Link href={"https://www.freepnglogos.com/images/under-construction-29010.html"}>
            <Image src={'/images/Under-construction.png'} alt='Site under construction' sizes='250x118' fill priority />
          </Link>
        </p>
        <p className={styles.post__date}>22.03.2024</p>
      </div>
      <div className={styles.post__bottom}>
        <h3>Title</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, nulla.</p>
        <Link href='/blog/post'>Read more</Link>
      </div>
    </section>
  );
}
