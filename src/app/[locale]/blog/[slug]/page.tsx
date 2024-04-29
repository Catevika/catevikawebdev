import '@/app/[locale]/blog/[slug]/codeHighlight.css';
import styles from '@/app/[locale]/blog/[slug]/post.module.css';
import BackToBlogButton from '@/components/Buttons/BackToBlogButton';
import PostCard from '@/components/PostCard/PostCard';
import TagsList from '@/components/TagsList/TagsList';
import { getPosts, getPostsBySlug } from '@/utils/postUtils';
import Link from 'next/link';

export const generateStaticParams = async () => {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug
  }));
};

export async function generateMetadata({ params }: { params: { slug: string; }; }) {
  const id = params?.slug ? params?.slug : '';
  return {
    title: `${id.replaceAll('_', ' ')} | Catevika Web Dev`
  };
}

export default async function PostPage({ params }: { params: { slug: string; }; }) {
  const { slug } = params;
  const post = await getPostsBySlug(slug);

  const { tags } = post.frontmatter;

  return (
    <section id='top' className={styles.post__container}>
      <div className={styles.post__backbutton__container}>
        <BackToBlogButton />
      </div>
      <PostCard key={post.slug} post={post} />
      <hr />
      <article className={styles.post__article}>
        {post.content}
      </article>
      <hr />
      <TagsList tags={tags} />
      <p><Link className="top-link hide" href="#top">&uarr;</Link></p>
    </section>
  );
}
