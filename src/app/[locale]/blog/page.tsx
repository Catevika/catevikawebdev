import styles from '@/app/[locale]/blog/blog.module.css';
import PostCard from '@/components/PostCard/PostCard';
import { getPosts, getPostsMetadata, getTags } from '@/utils/postUtils';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = await getPostsMetadata();

  if (!posts) return [];

  // new Set removes the dyplicates and flat() flattens the array of arrays
  const tags = new Set(posts.map((post) => post.tags).flat());

  // Array.from() converts the Set to an array
  return Array.from(tags).map((tag) => ({ tag }));
}

export default async function BlogPage() {
  const posts = await getPosts();
  const tagsFromPosts = await getTags();

  return (
    <section className={styles.blog__container}>
      <h3>Tags</h3>
      <aside>
        {tagsFromPosts.map((tagsFromPost, postIndex) => (
          <Link key={postIndex} href={`/blog/tags/${tagsFromPost}`}>{tagsFromPost}</Link>
        ))}
      </aside>
      <div>
        <h3>What are you interested in today?</h3>
        {posts.map((post, postIndex) => (
          <PostCard key={postIndex} post={post} />
        ))}
      </div>
    </section>
  );
}
