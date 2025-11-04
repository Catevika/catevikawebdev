import createMDX from '@next/mdx';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'images.pexels.com',
				pathname: '/**',
			},
		],
	},
};

const withMDX = createMDX({
	options: {
		remarkPlugins: [
			['remark-toc', {ordered: true, maxDepth: 6}], // plugin name as string, simple options
			'remark-gfm',
		],
		rehypePlugins: [
			'rehype-slug',
			'rehype-autolink-headings',
			[
				'rehype-autolink-headings',
				{
					behavior: 'append',
					properties: {
						ariaHidden: true,
						tabIndex: -1,
						className: 'hash-link',
					},
				},
			],
			'rehype-highlight',
		],
	},
});

export default withNextIntl(withMDX(nextConfig));
