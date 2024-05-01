"use client";

import { useReadingTime } from '@/app/hooks/useReadingTime';
import styles from '@/components/Blog/PostCard/PostCard.module.css';
import Image from 'next/image';
import { type JSXElementConstructor, type ReactElement } from 'react';

export default function PostCard({ post }: { post: { frontmatter: { imageurl: string; title: string; subtitle: string; author: string; publishedAt: string; credits: string; }, content: ReactElement<any, string | JSXElementConstructor<any>>, slug: string; }; }) {
  const { imageurl, title, subtitle, author, publishedAt, credits } = post.frontmatter;
  const { content } = post;

  const reading = useReadingTime({ content });

  return (
    <>
      <div className={styles.postcard__container}>
        <div className={styles.postcard__image__container}>
          <Image src={imageurl} alt='' sizes="400x200" fill priority />
        </div>
        <div className={styles.postcard__content}>
          <h3>{title}</h3>
          <p>{subtitle}</p>
          <p>Author: <span>{author}</span></p>
          <p>Published: <span>{publishedAt}</span></p>
          {credits?.length !== 0 ? <p>Credits: <span>{credits}</span></p> : null}
          <p>Reading time: <span>{reading.readingTime}</span></p>
        </div>
      </div>
    </>
  );
}
