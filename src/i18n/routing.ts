import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
	locales: ['en', 'fr'],
	defaultLocale: 'en',
	pathnames: {
		'/': '/',
		'/services': {
			en: '/services',
			fr: '/services',
		},
		'/contact': {
			en: '/contact',
			fr: '/contact',
		},
		'/blog': {
			en: '/blog',
			fr: '/blog',
		},
		'/blog/[slug]': {
			en: '/blog/[slug]',
			fr: '/blog/[slug]',
		},
		'/blog/tags/[tag]': {
			en: '/blog/tags/[tag]',
			fr: '/blog/tags/[tag]',
		},
		'/about': {
			en: '/about',
			fr: '/a-propos',
		},
		'/dashboard': {
			en: '/dashboard',
			fr: '/tableau-de-bord',
		},
	},
});
