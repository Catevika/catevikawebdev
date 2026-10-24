'use client';

import dynamic from 'next/dynamic';

const ThemeToggle = dynamic(() => import('./ThemeToggleContent'), {
	ssr: false,
	loading: () => <span aria-hidden='true' style={{display: 'block', width: 32, height: 32}} />,
});

export default ThemeToggle;
