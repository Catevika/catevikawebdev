'use client';

import styles from '@/app/[locale]/about/about.module.css';
import SeahorseDetailList from '@/components/About/SeahorseDetailList/SeahorseDetailList';
import {motion} from 'framer-motion';
import {useTranslations} from 'next-intl';
import Image from 'next/image';
import catevikaImg from '../../../../public/images/Catevika.png';
import catevika2Img from '../../../../public/images/Catevika2.png';
import cattivikImg from '../../../../public/images/Cattivik.png';
import profileImg from '../../../../public/images/Profile.png';

export default function AboutList() {
	const t = useTranslations('AboutPage');

	return (
		<>
			<motion.section
				className={styles.about__top__container}
				initial={{x: '100vw'}}
				animate={{x: 0}}
				transition={{ease: 'easeInOut', duration: 1.5}}>
				<Image
					className={styles.about__top__image}
					src={profileImg}
					alt={t('alt1')}
					height={250}
					width={250}
					placeholder='blur'
					priority
				/>

				<p className={styles.about__text}>
					{t.rich('aboutMe', {
						span: (chuncks) => <span>{chuncks}</span>,
					})}
				</p>
				<p className={styles.about__text}>
					{t.rich('aboutMe2', {
						span: (chuncks) => <span>{chuncks}</span>,
					})}
				</p>
				<p className={styles.about__text}>
					{t.rich('aboutMe3', {
						span: (chuncks) => <span>{chuncks}</span>,
					})}
				</p>
				<p className={styles.about__text}>
					{t.rich('aboutMe4', {
						span: (chuncks) => <span>{chuncks}</span>,
					})}
				</p>
				<p className={styles.about__text}>
					{t.rich('languages', {
						span: (chuncks) => <span>{chuncks}</span>,
					})}
				</p>
			</motion.section>
			<h3>{t('name')}</h3>
			<motion.section
				className={styles.about__middle__container}
				initial={{x: '-100vw'}}
				animate={{x: 0}}
				transition={{ease: 'easeInOut', duration: 1.5}}>
				<div className={styles.about__paragraph}>
					<p className={styles.about__text}>
						{t.rich('cattivik', {
							span: (chuncks) => <span>{chuncks}</span>,
						})}
					</p>
					<p className={styles.about__text}>
						{t.rich('catevik', {
							span: (chuncks) => <span>{chuncks}</span>,
						})}
					</p>
					<p className={styles.about__text}>{t('catevika')}</p>
					<p className={styles.about__text}>
						{t.rich('catevika2', {
							span: (chuncks) => <span>{chuncks}</span>,
						})}
					</p>
				</div>
				<Image
					className={styles.about__middle__image}
					src={cattivikImg}
					alt={t('alt2')}
					height={292}
					width={216}
					placeholder='blur'
					priority
				/>
			</motion.section>
			<h3>{t('seahorseSymbol')}</h3>
			<motion.section
				className={styles.about__bottom__container}
				initial={{x: '100vw'}}
				animate={{x: 0}}
				transition={{ease: 'easeInOut', duration: 1.5}}>
				<Image
					data-hide-on-theme='light'
					className={styles.about__bottom__image__dark}
					src={catevikaImg}
					alt={t('alt3')}
					height={292}
					width={292}
					placeholder='blur'
					priority
				/>
				<Image
					data-hide-on-theme='dark'
					className={styles.about__bottom__image__light}
					src={catevika2Img}
					alt={t('alt3')}
					height={292}
					width={292}
					placeholder='blur'
					priority
				/>
				<p className={styles.about__text}>{t('seahorse')}</p>
				<SeahorseDetailList />
				<br />
				<p className={styles.about__text}>{t('hippocampus')}</p>
			</motion.section>
			<p className='note'>{t('note')}</p>
		</>
	);
}
