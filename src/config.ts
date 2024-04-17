import { Pathnames } from 'next-intl/navigation';

export const locales = ['en', 'fr'] as const;

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
  '/blog/newpost': {
    en: '/blog/newpost',
    fr: '/blog/nouveaupost'
  },
  '/blog/post/[postId]': {
    en: '/blog/post/[postId]',
    fr: '/blog/post/[postId]'
  },
  '/about': {
    en: '/about',
    fr: '/apropos'
  },
  '/login': {
    en: '/login',
    fr: '/connexion'
  },
  '/register': {
    en: '/register',
    fr: '/inscription'
  },
  '/dashboard': {
    en: '/dashboard',
    fr: '/tableaudebord'
  }
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;