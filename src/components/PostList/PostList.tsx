import styles from '@/app/[locale]/blog/blog.module.css';
import { getPosts } from '@/database/utils/postUtils';
import PostCard from '../PostCard/PostCard';
import PostUser from '../PostUser/PostUser';

export const revalidate = 86400;

export default async function PostList() {
  const posts = await getPosts();

  return (
    <>
      {posts ? posts.map((post) => (
        <div key={post._id.toString()} className={styles.post__wrapper}>
          <PostUser post={post} />
          <PostCard post={post} />
        </div>
      )) : null}
    </>
  );
}
