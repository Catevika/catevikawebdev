'use client';

import dynamic from 'next/dynamic';

import { Lottie } from 'lottie-react';

const LottieComponent = dynamic(() => import('lottie-react').then((mod) => mod.Lottie), {ssr: false});

import lottieLoading from '@/app/[locale]/lottieLoading.json';
import lottieLoadingLight from '@/app/[locale]/lottieLoadingLight.json';

export default function Loading() {
	return (
		<div className='loading'>
			<LottieComponent
			src={lottieLoading}
			data-hide-on-theme='light'
			autoplay
			loop
			/>
			<LottieComponent
				src={lottieLoadingLight}
				data-hide-on-theme='dark'
				autoplay
				loop
			/>
		</div>
	);
}
