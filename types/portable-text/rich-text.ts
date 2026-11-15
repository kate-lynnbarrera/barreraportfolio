import type { PortableTextBlock, TypedObject } from '@portabletext/types'
import type { Quote } from './quote'

export type RichText = Array<
  | PortableTextBlock
  | (TypedObject & { _type: 'postImageBlock'; url: string; alt: string })
  | (TypedObject & { _type: 'postQuoteBlock' } & Quote)
>
