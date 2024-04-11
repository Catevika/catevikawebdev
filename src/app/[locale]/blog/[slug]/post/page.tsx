import styles from '@/app/[locale]/blog/[slug]/post.module.css';
import PostUser from '@/components/PostUser/PostUser';
import Image from 'next/image';

export default function Post() {

  return (
    <section className={styles.post__container}>
      <div className={styles.post__image__container}>
        {/* <Link href={"https://www.freepnglogos.com/images/under-construction-29010.html"}> */}
        <Image src={'/images/Under-construction.png'} alt='Site under construction' sizes='250x118' fill priority />
        {/* </Link> */}
      </div>
      <div className={styles.post__content}>
        <div className={styles.post__title__container}>
          <h3>Title</h3>
        </div>
        <div className={styles.post__content__top}>
          <PostUser /* userId={post.userId} */ />
          <p>
            <span className={styles.post__text}>Published</span>
            <span> 22.03.2024</span>
          </p>
        </div>
        <div className={styles.post__content__bottom}>
          <div className={styles.post__description}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum reiciendis unde temporibus ea dolores nisi voluptates, commodi ab aut reprehenderit!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum reiciendis unde temporibus ea dolores nisi voluptates, commodi ab aut reprehenderit!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum reiciendis unde temporibus ea dolores nisi voluptates, commodi ab aut reprehenderit!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
