import styles from '@/app/[locale]/blog/blog.module.css';
import PostCard from '@/components/Blog/PostCard/PostCard';
import TagMenu from '@/components/Blog/TagMenu/TagMenu';
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
      <div>
        <h3>What are you interested in today?</h3>
        <TagMenu tagsFromPosts={tagsFromPosts} />
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <PostCard post={post} />
          </Link >
        ))}
      </div>
    </section>
  );
}
