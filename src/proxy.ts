import type {Locale} from '@/types/types';
import createMiddleware from 'next-intl/middleware';
import type {NextRequest, NextResponse} from 'next/server';

const nexIntlMiddleware = createMiddleware({
	locales: ['en', 'fr'] as Locale[],
	defaultLocale: 'en',
});

export default function extractReq(req: NextRequest): NextResponse {
	return nexIntlMiddleware(req);
}

export const config = {
	matcher: [
		// Enable a redirect to a matching locale at the root
		'/',

		// Set a cookie to remember the previous locale for
		// all requests that have a locale prefix
		'/(en|fr)/:path*',

		// Enable redirects that add missing locales
		// (e.g. `/pathnames` -> `/en/pathnames`)
		'/((?!api|trpc|_next|_vercel|.*\\..*).*)',
	],
};
