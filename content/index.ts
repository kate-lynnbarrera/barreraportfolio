import type { Page } from '@/types/documents/page'
import type { HomePage } from '@/types/singletons/home-page'
import type { Settings } from '@/types/singletons/settings'
import { caseStudies } from './case-studies'
import { posts } from './posts'
import { bottomBar, footer, home, navigation, pageCopy, site } from './portfolio'
import { richText } from './rich-text'

export { caseStudies, posts }
export const contactEmail = site.email

function menuItems(items: { title: string; link: string }[]) {
  return items.map((item) => ({ ...item, _id: item.link }))
}

export function fetchSettings(): Settings {
  return {
    logoText: site.name,
    navbarMenuItems: menuItems(navigation),
    navbarButtonText: 'Contact',
    navbarButtonLink: '/contact',
    enableBottomBar: bottomBar.enabled,
    bottomBarMessage: bottomBar.message,
    enableBottomBarLink: Boolean(bottomBar.link),
    bottomBarLinkUrl: bottomBar.link,
    bottomBarLinkText: bottomBar.linkText,
    bottomBarLinkColor: bottomBar.linkColor,
    footerTagline: footer.tagline,
    subscribeFormAction: footer.newsletterAction,
    subscribeFormTitle: footer.newsletterTitle,
    subscribeFormPlaceholder: footer.newsletterPlaceholder,
    footerQuickLinks: menuItems([...navigation, { title: 'Contact', link: '/contact' }]),
    footerSocialLinks: menuItems(footer.socials),
    footerCopyright: footer.copyright,
    footerLegalLinks: menuItems([
      { title: pageCopy.privacy.heading, link: '/privacy' },
      { title: pageCopy.terms.heading, link: '/terms' },
    ]),
    enableFootnote: true,
    footerFootnoteText: 'Theme by',
    enableFootnoteLink: true,
    footerFootnoteLinkText: 'James Rea',
    footerFootnoteLink: 'https://github.com/jamesreaco/next-sanity-theme',
  }
}

function page(id: string, heading: string, paragraphs: string[] = []): Page {
  return {
    _id: id,
    heading,
    metaTitle: `${heading} | ${site.name}`,
    metaDescription: site.description,
    metaKeywords: '',
    content: richText(paragraphs),
  }
}

export function fetchHomePage(): HomePage {
  return {
    _id: 'home',
    ...home,
    metaTitle: site.title,
    metaDescription: site.description,
    metaKeywords: '',
  }
}

export const fetchCaseStudyPage = () => page('case-studies', pageCopy.caseStudies.heading)
export const fetchBlogPage = () => page('blog', pageCopy.blog.heading)
export const fetchContactPage = () => page('contact', pageCopy.contact.heading)
export const fetchPrivacyPage = () => page('privacy', pageCopy.privacy.heading, pageCopy.privacy.paragraphs)
export const fetchTermsPage = () => page('terms', pageCopy.terms.heading, pageCopy.terms.paragraphs)

export const fetchAllCaseStudies = () => caseStudies
export const fetchLatestCaseStudies = () => caseStudies.slice(0, 3)
export const fetchCaseStudyBySlug = (slug: string) => caseStudies.find((project) => project.slug === slug)
export const fetchAllPosts = () => posts
export const fetchLatestPosts = () => posts.slice(0, 3)
export const fetchPostBySlug = (slug: string) => posts.find((post) => post.slug === slug)
export const fetchAllPostCategories = () => Array.from(
  new Map(posts.map(({ category }) => [category.slug, category])).values(),
)
