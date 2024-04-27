import styles from '@/components/PostVideo/postVideo.module.css';

export default function PostVideo({ id }: { id: string; }) {

  return (
    <div className={styles.post__video}>
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title="Build and Deploy a Next.js Blog with Remote MDX Content Files and Nextjs 13" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}
