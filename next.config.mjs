import createMDX from '@next/mdx';
import createNextIntlPlugin from 'next-intl/plugin';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/photos/**',
      }
    ]
  }
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      remarkToc,
      remarkGfm
    ],
    rehypePlugins: [
      rehypeSlug,
      rehypeAutolinkHeadings, {
        properties: {
          behavior: "append",
          ariaHidden: true,
          tabIndex: -1,
          className: 'hash-link'
        }
      },
      rehypeHighlight
    ]
  }
});


export default withNextIntl(withMDX(nextConfig));