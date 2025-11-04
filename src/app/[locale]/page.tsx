'use client';

import styles from '@/app/[locale]/page.module.css';
import {motion} from 'framer-motion';
import {useTranslations} from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import catevikaImg from '../../../public/images/Catevika.png';
import catevika2Img from '../../../public/images/Catevika2.png';

export default function Home() {
	const t = useTranslations('HomePage');

	return (
		<section className={styles.home__container}>
			<div className={styles.home__background}>
				<Image
					className={styles.home__background__image1}
					src={'/icons/bubbles.svg'}
					alt=''
					width={0}
					height={0}
					sizes='50vw'
					priority
				/>
				<Image
					data-hide-on-theme='light'
					className={styles.home__background__image2dark}
					src={catevikaImg}
					alt=''
					width={0}
					height={0}
					sizes='50vw'
					placeholder='blur'
					priority
				/>
				<Image
					data-hide-on-theme='dark'
					className={styles.home__background__image2light}
					src={catevika2Img}
					alt=''
					width={0}
					height={0}
					sizes='50vw'
					placeholder='blur'
					priority
				/>
			</div>
			<div className={styles.home__content}>
				<Link
					className={styles.home__link__top}
					href={'./services'}>
					<h2>{t('title')}</h2>
				</Link>
			</div>
			<div className={styles.home__bottom}>
				<motion.h1
					initial={{opacity: 0, scale: 0}}
					animate={{opacity: 1, scale: 1}}
					transition={{ease: 'easeOut', duration: 1.5}}>
					Catevika Web&nbsp;Dev
				</motion.h1>
				<Link
					className={styles.home__link__bottom}
					href={'/contact'}>
					catevikawebdev@outlook.fr
				</Link>
			</div>
		</section>
	);
}
