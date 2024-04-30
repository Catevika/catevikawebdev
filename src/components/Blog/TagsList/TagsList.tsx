import styles from '@/app/[locale]/blog/[slug]/post.module.css';
import Link from 'next/link';

export default function TagsList({ tags }: { tags: string[]; }) {
  return (
    <p className={styles.post__tags}>Related: {tags?.map((tag: string) => <Link href={`/blog/tags/${tag}`} key={tag}>{tag}</Link>)}</p>
  );
}
