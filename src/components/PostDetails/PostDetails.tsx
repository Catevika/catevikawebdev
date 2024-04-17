"use client";

import styles from '@/app/[locale]/blog/post/[postId]/post.module.css';
import type { PostType } from '@/types/types';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import PostUser from '../PostUser/PostUser';

export default function PostDetails({ post }: { post: PostType; }) {
  const locale = useParams().toString();

  const { imageurl, title, content, createdAt } = post;

  return (
    <>
      {post ? <div className={styles.post__content}>
        <div className={styles.post__title__container}>
          <h3>{title}</h3>
        </div>
        <div className={styles.post__content__top}>
          <PostUser post={post} />
          <p>
            <span className={styles.post__text}>Published</span>
            <span className={styles.post__date}>{locale === 'en' ? createdAt.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }) : createdAt.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' })}</span>
          </p>
        </div>
        <div className={styles.post__content__bottom}>
          <div className={styles.post__image__container}>
            <Image src={imageurl} alt='' sizes='500x800' fill priority />
          </div>
          <div className={styles.post__description}>
            <p>{content}</p>
          </div>
        </div>
      </div> : null}
    </>
  );
}
