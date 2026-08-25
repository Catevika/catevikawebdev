import styles from '@/components/Blog/PostVideo/postVideo.module.css';

export default function PostVideo({ id }: { id: string; }) {

  return (
		<div className={styles.post__video}>
			<iframe
				width="873"
				height="491"
				src={`https://www.youtube.com/embed/${id}?list=PL0Zuz27SZ-6Pk-QJIdGd1tGZEzy9RTgtj`}
				title="Build and Deploy a Next.js Blog with Remote MDX Content Files and Nextjs 13"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
				allowFullScreen={true}
			></iframe>
		</div>
	);
}

