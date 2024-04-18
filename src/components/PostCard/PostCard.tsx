import styles from '@/components/PostCard/postcard.module.css';
import type { PostMetadataType } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';

export default function PostCard(props: { post: PostMetadataType; }) {
  const { post } = props;
  const { imageurl, title, subtitle, author, date, credits, slug } = post;

  return (
    <>
      <Link href={`/blog/${slug}`}>
        <div className={styles.postcard__container}>
          <div className={styles.postcard__image__container}>
            {<Image src={imageurl} alt='' sizes="400x200" fill priority />}
          </div>
          <div className={styles.postcard__content}>
            <h3>{title}</h3>
            <p>{subtitle}</p>
            <p>Author: <span>{author}</span></p>
            <p>Published: <span>{date}</span></p>
            {credits?.length !== 0 ? <p>Credits: <span>{credits}</span></p> : null}
          </div>
        </div>
      </Link >
    </>
  );
}
