import styles from '@/app/[locale]/blog/blog.module.css';
import PostCard from '@/components/PostCard/PostCard';
import { getPosts } from '@/utils/postUtils';

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <section className={styles.blog__container}>
      <h3>What are you interested in today?</h3>
      {posts.map((post, postIndex) => (
        <PostCard key={postIndex} post={post} />
      ))}
    </section>
  );
}
