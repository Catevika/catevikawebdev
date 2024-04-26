import styles from '@/app/[locale]/blog/tags/[tag]/tags.module.css';
import BacktoBlogButton from '@/components/Buttons/BackToBlogButton';
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
    title: `Catevika Web Dev | Posts about ${params.tag}`
  };
}

export default async function TagPostList({ params }: { params: { tag: string; }; }) {
  const posts = await getPosts();
  if (!posts) return <p>No posts available with the tag {params.tag}</p>;

  const tagPosts = posts.filter((post) => post.frontmatter.tags.includes(params.tag));
  if (!tagPosts) return (
    <div>
      <p>No posts available with the tag {params.tag}</p>
      <BacktoBlogButton />
    </div>);

  return (
    <section className='container'>
      <h3 className={styles.tags__title}>Posts available for <span>#{params.tag}</span> tag:</h3>
      <div className={styles.tags__container}>
        {tagPosts.map((post) => (
          <div key={post.frontmatter.title}>
            <Link href={`/blog/${post.slug}`}>{post.frontmatter.title}</Link>
          </div>
        ))}
      </div>
    </section>
  );
}
