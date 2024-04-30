import styles from '@/components/Blog/PostImage/postImage.module.css';
import Image from 'next/image';

export default function PostImage({ src, alt, priority }: { src: string, alt: string, priority?: boolean; }) {
  const prty = priority ? priority : false;

  return (
    <div className={styles.post__image__container}>
      <Image src={src} alt={alt} priority={prty} sizes='650x650' width={0} height={0} />
    </div>
  );
}
