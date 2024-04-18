import styles from '@/app/[locale]/blog/blog.module.css';
import PostCard from '@/components/PostCard/PostCard';
import type { PostMetadataType } from '@/types/types';
import { getPostMetaData } from '@/utils/postUtils';

export default function BlogPage() {
  const postsMetadata: PostMetadataType[] = getPostMetaData();

  return (
    <section className={styles.blog__container}>
      <h3>What are you interested in today?</h3>
      {postsMetadata.map((post, postIndex) => (
        <PostCard key={postIndex} post={post} />
      ))}
    </section>
  );
}
