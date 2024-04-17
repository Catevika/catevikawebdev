import styles from '@/app/[locale]/blog/post/[postId]/post.module.css';
import BackButton from '@/components/Buttons/BackButton';
import PostDetails from '@/components/PostDetails/PostDetails';
import { getPost } from '@/database/utils/postUtils';
import type { PostType } from '@/types/types';

export const revalidate = 3600;

export default async function Post({ params: { postId } }: { params: { postId: string; }; }) {

  const post: PostType | null = await getPost(postId);

  return (
    <section>
      <div className={styles.post__backbutton__container}>
        <BackButton />
      </div>
      <div className={styles.post__container}>
        {post ? <>
          <PostDetails post={post} />
        </> : null}
      </div>
    </section>
  );
}
