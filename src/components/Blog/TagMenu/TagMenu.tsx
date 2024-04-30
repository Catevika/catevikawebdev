import styles from '@/components/Blog/TagMenu/TagMenu.module.css';
import Link from 'next/link';

export default function TagMenu({ tagsFromPosts }: { tagsFromPosts: string[]; }) {

  return (
    <div className={styles.tagMenu__container}>
      <h3>Search per tag
        <ul>
          {tagsFromPosts.map((tagsFromPost, postIndex) => (
            <li key={postIndex}><Link href={`/blog/tags/${tagsFromPost}`}>{tagsFromPost}</Link></li>
          ))}
        </ul>
      </h3>
    </div>
  );
};
