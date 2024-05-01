"use client";

import PaginationControls from '@/components/Blog/PaginationControls/PaginationControls';
import PostCard from '@/components/Blog/PostCard/PostCard';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { type JSXElementConstructor, type ReactElement } from 'react';

export default function PostList({ posts }: {
  posts: { frontmatter: { imageurl: string; title: string; subtitle: string; author: string; publishedAt: string; credits: string; }, content: ReactElement<any, string | JSXElementConstructor<any>>, slug: string; }[];
}) {
  const totalPages = posts.length;
  const PER_PAGE = '3';

  const searchParams = useSearchParams();
  const page: string | null = searchParams.get('page') ?? '1';
  const per_page: string | null = searchParams.get('per_page') ?? PER_PAGE;

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const visiblePosts = posts.slice(start, end);

  return (
    <>
      <PaginationControls totalPages={totalPages} perPage={PER_PAGE} hasNextPage={end < posts.length}
        hasPrevPage={start > 0} />
      {visiblePosts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          <PostCard post={post} />
        </Link >
      ))}
    </>
  );
}
