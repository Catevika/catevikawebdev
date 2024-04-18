import matter from 'gray-matter';
import * as fs from 'node:fs';

export function getPostMetaData(basePath: string) {
  const folder = basePath + '/';
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith('.md'));

  const posts: any = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`${basePath}/${fileName}`, 'utf8');
    const matterResult = matter(fileContents);
    return {
      imageurl: 'https://images.pexels.com/photos/220118/pexels-photo-220118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      author: matterResult.data.author,
      date: matterResult.data.date,
      credits: matterResult.data.credits,
      slug: fileName.replace('.md', '')
    };
  });
  return posts;
}

export function getPostContent(slug: string) {
  const folder = 'src/postsExamples/';
  const file = `${folder}${slug}.md`;
  const fileContents = fs.readFileSync(file, 'utf8');
  const matterResult = matter(fileContents);
  return matterResult;
}

