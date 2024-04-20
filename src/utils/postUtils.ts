import { compileMDX } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import * as fs from 'node:fs';
import path, { join } from 'node:path';


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
      date: string;
      credits: string;
    }>({
      source: fileContent,
      options: { parseFrontmatter: true }
    });
    return {
      frontmatter,
      content,
      slug: path.parse(filename).name,
      likes: { likes: 0 }
    };
  } catch (error) {
    notFound();
  }
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

