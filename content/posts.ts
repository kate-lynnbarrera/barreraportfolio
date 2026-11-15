import { site, home } from './portfolio'
import { richText, type ContentBlock } from './rich-text'
import type { Post } from '@/types/documents/post'

type PostEntry = Pick<Post, 'slug' | 'title' | 'image' | 'readTime' | 'category'> & {
  description: string
  content: ContentBlock[]
  related: string[]
}

const categories = {
  tools: { title: 'Tools', slug: 'tools' },
  process: { title: 'Process', slug: 'process' },
}

const author = { name: site.name, description: 'Independent developer', image: home.image }

// List the newest posts first. Related posts refer to slugs from this list.
const entries: PostEntry[] = [
  {
    slug: 'a-small-toolkit-for-website-projects',
    title: 'A Small Toolkit for Website Projects',
    description: 'A few tools to take a project from its first sketch to a preview.',
    image: '/images/demo/tools.png',
    readTime: 2,
    category: categories.tools,
    related: ['what-to-check-before-a-site-goes-live'],
    content: [
      'A small project usually needs a place to think, a place to write, and a reliable preview. Each tool should make a decision easier.',
      { heading: 'Start with a sketch' },
      'List the pages and sketch how a visitor might find each one. A rough outline is enough to spot missing routes early.',
      { heading: 'Work in the browser' },
      'Use the browser to test real content at different widths. Keep an eye on long headings, large images, and the order of links.',
      { heading: 'Share a preview' },
      'Give the reviewer a working URL and ask them to complete one task without guidance. Use what they do to inform the next edit.',
    ],
  },
  {
    slug: 'what-to-check-before-a-site-goes-live',
    title: 'What to Check Before a Site Goes Live',
    description: 'A short pre-launch pass for a small website.',
    image: '/images/demo/workflow.png',
    readTime: 2,
    category: categories.process,
    related: ['a-small-toolkit-for-website-projects', 'making-room-for-real-content'],
    content: [
      { heading: 'Open the important links' },
      'Visit the main pages, follow the contact link, and open a project from the homepage.',
      { heading: 'Try a narrow screen' },
      'Check that the menu opens, buttons remain easy to reach, and long text can wrap without forcing the page to scroll sideways.',
      { heading: 'Check the shared preview' },
      'Confirm the page title, description, and share image from the final address.',
    ],
  },
  {
    slug: 'making-room-for-real-content',
    title: 'Making Room for Real Content',
    description: 'Designing portfolio layouts with the photos and words visitors will see.',
    image: '/images/demo/design.png',
    readTime: 2,
    category: categories.process,
    related: ['what-to-check-before-a-site-goes-live'],
    content: [
      'The best time to make room for long titles, mixed photos, and uneven descriptions is while a layout is still easy to change.',
      { heading: 'Use the real material early' },
      'Add the longest title and the least cooperative image first. Let those examples guide spacing and cropping decisions.',
      { heading: 'Edit for clarity' },
      'Lead each card with the project name and a line about what the visitor will see when they open it.',
    ],
  },
]

const basePosts: Post[] = entries.map((entry) => ({
  _id: entry.slug,
  slug: entry.slug,
  title: entry.title,
  image: entry.image,
  readTime: entry.readTime,
  category: entry.category,
  author,
  content: richText(entry.content),
  relatedPosts: [],
  metaTitle: entry.title,
  metaDescription: entry.description,
  metaKeywords: '',
}))

const bySlug = new Map(basePosts.map((post) => [post.slug, post]))

export const posts = basePosts.map((post, index): Post => ({
  ...post,
  relatedPosts: entries[index].related.flatMap((slug) => {
    const relatedPost = bySlug.get(slug)
    return relatedPost ? [relatedPost] : []
  }),
}))
