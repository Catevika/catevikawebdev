import styles from '@/components/PostUser/PostUser.module.css';
import type { PostType } from '@/types/types';
import Image from 'next/image';

export default function PostUser({ post }: { post: PostType; }) {

  const { image, imageLight, name } = post.author;

  return (
    <div className={styles.user__container}>
      <Image data-hide-on-theme="light" className={styles.user__image} src={image} alt='' height={300} width={300} priority />
      <Image data-hide-on-theme="dark" className={styles.user__image} src={imageLight} alt='' height={300} width={300} priority />
      <p>
        <span className={styles.user__title}>Author</span>
        <span className={styles.user__username}>{name}</span>
      </p>
    </div>
  );
}
