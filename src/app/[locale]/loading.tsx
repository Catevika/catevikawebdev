'use client';

import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), {ssr: false});

import lottieLoading from '@/app/[locale]/lottieLoading.json';
import lottieLoadingLight from '@/app/[locale]/lottieLoadingLight.json';

export default function Loading() {
	return (
		<div className='loading'>
			<Lottie
				data-hide-on-theme='light'
				animationData={lottieLoading}
				loop={true}
			/>
			<Lottie
				data-hide-on-theme='dark'
				animationData={lottieLoadingLight}
				loop={true}
			/>
		</div>
	);
}
