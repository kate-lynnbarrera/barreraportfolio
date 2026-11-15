import { richText, type ContentBlock } from './rich-text'
import type { CaseStudy } from '@/types/documents/case-study'

type ProjectEntry = Pick<CaseStudy, 'slug' | 'title' | 'shortDescription' | 'image' | 'url' | 'imageGallery'> & {
  overview: ContentBlock[]
}

// Add a new entry with a unique URL slug. List featured projects first.
const projects: ProjectEntry[] = [
  {
    slug: 'zoo-project',
    title: 'Zoo Project',
    shortDescription: 'A visitor-first site concept for a day at the zoo.',
    image: '/images/demo/zoo.jpg',
    url: '#project-gallery',
    overview: [
      'This sample case study shows how to present a project brief, your role, and the finished work.',
      { heading: 'The brief' },
      'Give families a quick way to plan a visit, discover what is on, and find practical information from their phones.',
      { heading: 'The approach' },
      'Organize the main routes around common visitor questions. Use photography and a compact navigation to make each page easy to scan.',
    ],
    imageGallery: [
      { url: '/images/demo/zoo-detail.webp', alt: 'Additional screen from the zoo website concept' },
    ],
  },
  {
    slug: 'the-portal',
    title: 'The Portal',
    shortDescription: 'An interface concept for a digital publication.',
    image: '/images/demo/portal.png',
    url: '#project-gallery',
    overview: [
      { heading: 'The brief' },
      'Create a home for recurring features and help readers find something new to explore.',
      { heading: 'The approach' },
      'Use a clear reading order and a set of reusable content layouts that work at different screen widths.',
    ],
    imageGallery: [
      { url: '/images/demo/portal-detail.webp', alt: 'Additional screen from the Portal project' },
    ],
  },
  {
    slug: 'modern-vintage',
    title: 'Modern Vintage',
    shortDescription: 'A storefront concept with an editorial approach to browsing.',
    image: '/images/demo/vintage.png',
    url: '#project-gallery',
    overview: [
      { heading: 'The brief' },
      'Build space for product photography and short stories about the collection.',
      { heading: 'The approach' },
      'Pair a focused collection layout with clear routes to individual items and details.',
    ],
    imageGallery: [
      { url: '/images/demo/vintage-detail.webp', alt: 'Additional screen from the Modern Vintage project' },
    ],
  },
]

export const caseStudies: CaseStudy[] = projects.map((project) => ({
  ...project,
  _id: project.slug,
  overview: richText(project.overview),
  metaTitle: project.title,
  metaDescription: project.shortDescription,
  metaKeywords: '',
}))
