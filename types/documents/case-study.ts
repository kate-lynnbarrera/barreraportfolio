import type { RichText } from '@/types/portable-text/rich-text'

export type CaseStudy = {
  _id: string
  title: string
  slug: string
  image: string
  shortDescription: string
  url: string
  overview: RichText
  imageGallery: CaseStudyGalleryImage[]
  metaTitle: string
  metaDescription: string
  metaKeywords: string
}

export type CaseStudyGalleryImage = {
  url: string
  alt: string
}