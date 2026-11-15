import type { RichText } from '@/types/portable-text/rich-text'

export type Page = {
  _id: string
  heading: string
  metaTitle: string
  metaDescription: string
  metaKeywords: string
  content: RichText
}