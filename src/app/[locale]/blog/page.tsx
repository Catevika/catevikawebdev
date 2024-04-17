import styles from '@/app/[locale]/blog/blog.module.css';
import NewPostButton from '@/components/Buttons/NewPostButton';
import PostList from '@/components/PostList/PostList';

export default function Blog() {

  return (
    <>
      <section className={styles.blog__container}>
        <NewPostButton />
        <div className={styles.blog__posts__container}>
          <PostList />
        </div>
      </section>
    </>
  );
};
