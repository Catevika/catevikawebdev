import { Pathnames } from 'next-intl/navigation';

export const locales = [ 'en', 'fr' ] as const;

export const pathnames = {
  '/': '/',
  '/services': {
    en: '/services',
    fr: '/services'
  },
  '/contact': {
    en: '/contact',
    fr: '/contact'
  },
  '/blog': {
    en: '/blog',
    fr: '/blog'
  },
  '/blog/[category]': {
    en: '/blog/[category]',
    fr: '/blog/[catégorie]'
  },
  '/blog/[category]/[slug]': {
    en: '/blog/[category]/[slug]',
    fr: '/blog/[catégorie]/[slug]'
  },
  '/about': {
    en: '/about',
    fr: '/apropos'
  },
  '/admin': {
    en: '/admin',
    fr: '/admin'
  }
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;