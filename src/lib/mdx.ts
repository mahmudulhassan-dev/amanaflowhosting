import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export function getPostBySlug(slug: string, locale: string = 'en') {
  // We prefer the requested locale, but fallback to English if not found
  let fullPath = path.join(postsDirectory, locale, `${slug}.mdx`);
  
  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(postsDirectory, 'en', `${slug}.mdx`);
  }

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    slug,
    meta: {
      ...data,
      slug,
      locale,
      image: data.image || '/images/blog/placeholder.png',
      readingTime: readingTime(content).text,
    } as any,
    content,
  };
}

export function getAllPosts(locale: string = 'en') {
  const fullPath = path.join(postsDirectory, locale);
  if (!fs.existsSync(fullPath)) return [];
  
  const files = fs.readdirSync(fullPath);
  
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const realSlug = file.replace(/\.mdx$/, '');
      const post = getPostBySlug(realSlug, locale);
      return post;
    })
    .filter((post) => post !== null)
    .sort((a, b) => (new Date(b!.meta.date).getTime() - new Date(a!.meta.date).getTime()));
}
