/**
 * MDX Utilities for content processing
 */

import matter from 'gray-matter';
import path from 'path';
import fs from 'fs';

export interface FrontMatter {
  title: string;
  description: string;
  category: string;
  order: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedTime: string;
  tags: string[];
}

export interface ContentFile {
  slug: string;
  frontMatter: FrontMatter;
  content: string;
  path: string;
}

/**
 * Get all markdown files from a directory
 */
export function getAllContentFiles(dir: string): ContentFile[] {
  if (!fs.existsSync(dir)) {
    return [];
  }

  const files = fs.readdirSync(dir);

  return files
    .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))
    .map((file) => {
      const filePath = path.join(dir, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug: file.replace(/\.mdx?$/, ''),
        frontMatter: data as FrontMatter,
        content,
        path: filePath,
      };
    })
    .sort((a, b) => a.frontMatter.order - b.frontMatter.order);
}

/**
 * Get a single content file by slug
 */
export function getContentBySlug(dir: string, slug: string): ContentFile | null {
  const filePath = path.join(dir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    const mdxPath = path.join(dir, `${slug}.mdx`);
    if (!fs.existsSync(mdxPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(mdxPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      frontMatter: data as FrontMatter,
      content,
      path: mdxPath,
    };
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    frontMatter: data as FrontMatter,
    content,
    path: filePath,
  };
}

/**
 * Group content files by category
 */
export function groupByCategory(files: ContentFile[]): Record<string, ContentFile[]> {
  return files.reduce(
    (acc, file) => {
      const category = file.frontMatter.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(file);
      return acc;
    },
    {} as Record<string, ContentFile[]>
  );
}

/**
 * Filter files by difficulty
 */
export function filterByDifficulty(
  files: ContentFile[],
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
): ContentFile[] {
  return files.filter((file) => file.frontMatter.difficulty === difficulty);
}

/**
 * Search content files
 */
export function searchContent(files: ContentFile[], query: string): ContentFile[] {
  const lowerQuery = query.toLowerCase();

  return files.filter(
    (file) =>
      file.frontMatter.title.toLowerCase().includes(lowerQuery) ||
      file.frontMatter.description.toLowerCase().includes(lowerQuery) ||
      file.frontMatter.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)) ||
      file.slug.toLowerCase().includes(lowerQuery)
  );
}

/**
 * Generate table of contents from markdown headings
 */
export function generateTableOfContents(
  content: string
): Array<{ level: number; title: string; slug: string }> {
  const headingRegex = /^(#{2,4})\s+(.+)$/gm;
  const toc: Array<{ level: number; title: string; slug: string }> = [];

  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const title = match[2];
    const slug = title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');

    toc.push({ level, title, slug });
  }

  return toc;
}

/**
 * Get estimated reading time
 */
export function getReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

/**
 * Format content filename to readable title
 */
export function filenameToTitle(filename: string): string {
  return filename
    .replace(/^\d+-/, '') // Remove leading numbers
    .replace(/\.(md|mdx)$/, '') // Remove extension
    .replace(/-/g, ' ') // Replace hyphens with spaces
    .replace(/\b\w/g, (l) => l.toUpperCase()); // Capitalize words
}

/**
 * Extract metadata from content for SEO
 */
export function extractMetadata(file: ContentFile) {
  const readingTime = getReadingTime(file.content);
  const toc = generateTableOfContents(file.content);

  return {
    slug: file.slug,
    title: file.frontMatter.title,
    description: file.frontMatter.description,
    category: file.frontMatter.category,
    difficulty: file.frontMatter.difficulty,
    estimatedTime: file.frontMatter.estimatedTime,
    readingTime,
    tags: file.frontMatter.tags,
    toc,
  };
}
