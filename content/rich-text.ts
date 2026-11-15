import type { RichText } from '@/types/portable-text/rich-text'

export type ContentBlock =
  | string
  | { heading: string; level?: 2 | 3 | 4 }
  | { image: string; alt: string }
  | { quote: string; author?: string }

export function richText(blocks: ContentBlock[]): RichText {
  return blocks.map((block, index) => {
    const _key = `section-${index + 1}`

    if (typeof block !== 'string' && 'image' in block) {
      return { _key, _type: 'postImageBlock', url: block.image, alt: block.alt }
    }

    if (typeof block !== 'string' && 'quote' in block) {
      return {
        _key,
        _type: 'postQuoteBlock',
        quote: block.quote,
        author: block.author ?? '',
        bgColor: 'F6F6F2',
        iconColor: '237F8F',
        textColor: '18181B',
      }
    }

    const text = typeof block === 'string' ? block : block.heading
    const style = typeof block === 'string' ? 'normal' : `h${block.level ?? 2}`
    return {
      _key,
      _type: 'block',
      style,
      children: [{ _type: 'span', _key: `${_key}-text`, text, marks: [] }],
      markDefs: [],
    }
  })
}
