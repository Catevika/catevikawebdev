import '@/app/[locale]/blog/[slug]/codeHighlight.css';
import styles from '@/app/[locale]/blog/[slug]/post.module.css';
import BackToBlogButton from '@/components/Buttons/BackToBlogButton';
import { getPosts, getPostsBySlug } from '@/utils/postUtils';
import Image from 'next/image';
import Link from 'next/link';

export const generateStaticParams = async () => {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug
  }));
};

export async function generateMetadata({ params }: { params: { slug: string; }; }) {
  const id = params?.slug ? '*' + params?.slug : '';
  return {
    title: `Catevika Web Dev ${id.replaceAll('_', ' ')}`
  };
}

export default async function PostPage({ params }: { params: { slug: string; }; }) {
  const { slug } = params;
  const post = await getPostsBySlug(slug);

  const { imageurl, title, subtitle, author, publishedAt, credits } = post.frontmatter;

  return (
    <section id='top' className={styles.post__container}>
      <div className={styles.post__backbutton__container}>
        <BackToBlogButton />
      </div>
      <div className={styles.post__top}>
        <div className={styles.post__image__container}>
          <Image src={imageurl} alt='' sizes="400x200" fill priority />
        </div>
        <div className={styles.post__metadata}>
          <h3>{title}</h3>
          <p>{subtitle}</p>
          <p>Author: <span>{author}</span></p>
          <p>Published: <span>{publishedAt}</span></p>
          {credits?.length !== 0 ? <p>Credits: <span>{credits}</span></p> : null}
        </div>
      </div>
      <hr />
      <article className={styles.post__article}>
        {post.content}
      </article>
      <p><Link className="top-link hide" href="#top">&uarr;</Link></p>
    </section>
  );
}
