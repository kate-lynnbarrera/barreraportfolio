import type { Metadata } from 'next'
import { site } from '@/content/portfolio'

const siteUrl = (process.env.PAGES_SITE_URL || site.url).replace(/\/$/, '')
const shareImage = siteUrl ? `${siteUrl}${site.socialImage}` : site.socialImage

export const defaultMetadata: Metadata = {
  ...(siteUrl && { metadataBase: new URL(`${siteUrl}/`) }),
  title: site.title,
  description: site.description,
  robots: { index: true, follow: true },
  openGraph: {
    ...(siteUrl && { url: siteUrl }),
    title: site.title,
    description: site.description,
    siteName: site.title,
    images: [shareImage],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
    images: [shareImage],
  },
  authors: [{ name: site.name }],
}
