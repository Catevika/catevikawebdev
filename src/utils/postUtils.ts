import { compileMDX } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import * as fs from 'node:fs';
import path, { join } from 'node:path';
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
          remarkPlugins: [
            remarkToc,
            remarkGfm
          ],
          rehypePlugins: [
            rehypeSlug,
            rehypeAutolinkHeadings,
            rehypeHighlight
          ]
        }
      },
      components: {}
    });

    return {
      frontmatter,
      content,
      slug: path.parse(filename).name,
    };

  } catch (error) {
    notFound();
  }
}

export async function getPostMetadata(slug: string) {
  const post = await getPostsBySlug(slug);

  const { frontmatter } = post;
  return frontmatter;
}

export async function getTags() {
  const posts = await getPosts();
  if (!posts) return [];

  // new Set removes the dyplicates and flat() flattens the array of arrays
  const AlltagsWithDuplicates = new Set(posts.map((post) => post.frontmatter.tags).flat());

  const Alltags = Array.from(AlltagsWithDuplicates);

  return Alltags;
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

export function getAllBlogSlug() {
  try {
    const folder = basePath + '/';
    const files = fs.readdirSync(folder);
    const slugs = files.map((file) => ({ slug: path.parse(file).name }));
    return slugs;
  } catch (error) {
    notFound();
  }
}

