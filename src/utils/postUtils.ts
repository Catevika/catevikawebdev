import PostImage from '@/components/Blog/PostImage/PostImage';
import PostVideo from '@/components/Blog/PostVideo/PostVideo';
import { postProcess, preProcess } from '@/components/Blog/rehype-pre-raw';
import { Pre } from '@/components/Buttons/Pre';
import { compileMDX } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import * as fs from 'node:fs';
import path, { join } from 'node:path';
import type { ComponentType, HTMLAttributes } from 'react';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';

const basePath = join(process.cwd(), "_posts");

export async function getPostsBySlug(slug: string) {
  try {
    const folder = basePath + '/';
    const filename = `${folder}${slug}.mdx`;

    const fileContent = fs.readFileSync(filename, 'utf8');

    const { frontmatter, content } = await compileMDX<{
      imageurl: string;
      title: string;
      subtitle: string;
      author: string;
      publishedAt: string;
      credits: string;
      tags: string[];
    }>({
      source: fileContent,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [remarkToc, remarkGfm],
          rehypePlugins: [
            preProcess,
            rehypeSlug,
            rehypeAutolinkHeadings,
            rehypeHighlight,
            postProcess
          ]
        }
      },
      components: {
        PostVideo,
        PostImage,
        pre: Pre as unknown as ComponentType<HTMLAttributes<HTMLPreElement>>
      }
    });

    return {
      frontmatter,
      content,
      slug: path.parse(filename).name
    };
  } catch (error) {
    notFound();
  }
}

export async function getTags() {
  const posts = await getPosts();
  if (!posts) return [];

  // new Set removes the dyplicates and flat() flattens the array of arrays
  const alltagsWithDuplicates = new Set(posts.map((post) => post.frontmatter.tags).flat());

  const alltags = Array.from(alltagsWithDuplicates);

  const orderedTags = alltags.sort();

  return orderedTags;
}

export async function getPosts() {
  try {
    const folder = basePath + '/';
    const files = fs.readdirSync(folder);
    const posts = await Promise.all(
      files.map(async (file) => await getPostsBySlug(path.parse(file).name))
    );

    return posts;
  } catch (error) {
    notFound();
  }
}

export async function getPostsMetadata() {
  try {
    const folder = basePath + '/';
    const files = fs.readdirSync(folder);
    const posts = await Promise.all(
      files.map(async (file) => await getPostsBySlug(path.parse(file).name))
    );

    const postMetadata = posts.map((post) => post.frontmatter);

    return postMetadata;
  } catch (error) {
    notFound();
  }
}

