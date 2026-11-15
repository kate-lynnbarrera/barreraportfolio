import Image, { type ImageProps } from 'next/image'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export default function SiteImage({ src, alt, ...props }: ImageProps) {
  const isLocalPath = typeof src === 'string' && src.startsWith('/') && !src.startsWith('//')
  return <Image {...props} alt={alt} src={isLocalPath ? `${basePath}${src}` : src} />
}
