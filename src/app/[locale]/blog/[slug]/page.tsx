import styles from '@/app/[locale]/blog/[slug]/post.module.css';
import BackButton from '@/components/Buttons/BackButton';
import type { PostMetadataType } from '@/types/types';
import { getPostContent, getPostMetaData } from '@/utils/postUtils';
import Markdown from 'markdown-to-jsx';

export const generateStaticParams = async () => {
  const posts = getPostMetaData('src/postsMDfiles');
  return posts.map((post: PostMetadataType) => ({
    slug: post.slug
  }));
};

export async function generateMetadata({ params }: { params: { slug: string; }; }) {
  const id = params?.slug ? '*' + params?.slug : '';
  return {
    title: `Catevika Web Dev ${id.replaceAll('_', ' ')}`
  };
}

export default function PostPage({ params }: { params: { slug: string; }; }) {
  const { slug } = params;
  const post = getPostContent(slug);

  return (
    <section className={styles.post__container}>
      <div className={styles.post__backbutton__container}>
        <BackButton />
      </div>
      <article className={styles.post__article}>
        <Markdown>{post.content}</Markdown>
      </article>
    </section>
  );
}
