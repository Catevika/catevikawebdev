import styles from '@/app/[locale]/blog/tags/[tag]/tags.module.css';
import BackButton from '@/components/Buttons/BackButton';
import BacktoBlogButton from '@/components/Buttons/BackToBlogButton';
import PostCard from '@/components/PostCard/PostCard';
import { getPosts, getPostsMetadata } from '@/utils/postUtils';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = await getPostsMetadata();

  if (!posts) return [];

  // new Set removes the dyplicates and flat() flattens the array of arrays
  const tags = new Set(posts.map((post) => post.tags).flat());

  // Array.from() converts the Set to an array
  return Array.from(tags).map((tag) => ({ tag }));
}

export function generateMetadata({ params }: { params: { tag: string; }; }) {
  return {
    title: `Posts about ${params.tag} | Catevika Web Dev `
  };
}

export default async function TagPostList({ params }: { params: { tag: string; }; }) {
  const posts = await getPosts();

  const tagPosts = posts.filter((post) => post.frontmatter.tags.includes(params.tag));

  return (
    <section className={styles.tags__container}>
      <p><BackButton /></p>
      {posts.length ?
        tagPosts.length ?
          <>
            <h3 className={styles.tags__title}>Posts available for <span>#{params.tag}</span> tag:</h3>
            <div className={styles.tags__content}>
              {tagPosts.map((post) => (
                <div key={post.slug}>
                  <Link href={`/blog/${post.slug}`}>
                    <PostCard post={post} />
                  </Link >
                </div>
              ))}
            </div>
          </>
          : <div>
            <p>No posts available with the #{params.tag} tag.</p>
            <BacktoBlogButton />
          </div>
        : <div>
          <p>No posts available with the #{params.tag} tag.</p>
          <BacktoBlogButton />
        </div>}
    </section>
  );
}
