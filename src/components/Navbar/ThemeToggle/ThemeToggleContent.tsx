'use client';

import {useTranslations} from 'next-intl';
import {useTheme} from 'next-themes';
import Image from 'next/image';

export default function ThemeToggleContent() {
	const t = useTranslations('Theme');
	const {setTheme, resolvedTheme} = useTheme();

	return (
		<Image
			tabIndex={0}
			aria-label={resolvedTheme === 'dark' ? t('setLight') : t('setDark')}
			role='button'
			onKeyDown={(event) =>
				event.key === 'Enter' ?
					setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
				:	null
			}
			src={resolvedTheme === 'dark' ? '/icons/sun.svg' : '/icons/moon.svg'}
			alt={resolvedTheme === 'dark' ? t('alt1') : t('alt2')}
			width={32}
			height={32}
			sizes='32x32'
			title={resolvedTheme === 'dark' ? t('setLight') : t('setDark')}
			onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
			style={{cursor: 'pointer'}}
		/>
	);
}
