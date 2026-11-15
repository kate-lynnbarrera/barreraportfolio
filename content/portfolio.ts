// Replace the example copy and images in this file. Image paths start at public/.
export const site = {
  name: 'Brooke',
  title: 'Brooke | Freelance Developer',
  description: 'Selected website and app projects by an independent developer.',
  email: 'hello@example.com',
  socialImage: '/images/og.png',
  // Optional. GitHub Actions supplies this URL when deployed to GitHub Pages.
  url: '',
}

export const home = {
  heading: 'Freelance Developer',
  paragraph: 'I build thoughtful websites and apps for people with an idea to share.',
  image: '/images/demo/portrait.png',
  imageAlt: 'Portrait used in the example portfolio',
  btnText: 'Case Studies',
  btnDestination: '/case-studies',
}

export const navigation = [
  { title: 'Case Studies', link: '/case-studies' },
  { title: 'Blog', link: '/blog' },
]

export const footer = {
  tagline: 'Independent developer working on websites and apps.',
  socials: [
    { title: 'Email', link: `mailto:${site.email}` },
  ],
  copyright: `© ${site.name}`,
  // Optional HTTPS endpoint from a newsletter service that accepts an email field.
  newsletterAction: '',
  newsletterTitle: 'Subscribe to my newsletter',
  newsletterPlaceholder: 'Your email',
}

export const bottomBar = {
  enabled: true,
  message: 'Portfolio starter',
  link: 'https://github.com/jamesreaco/next-sanity-theme',
  linkText: 'Original theme',
  linkColor: '#237F8F',
}

export const pageCopy = {
  caseStudies: { heading: 'Case Studies' },
  blog: { heading: 'Blog' },
  contact: { heading: 'Contact' },
  privacy: {
    heading: 'Privacy Policy',
    paragraphs: [
      'This is sample text. Replace it with information about how your published site handles visitor data.',
    ],
  },
  terms: {
    heading: 'Terms',
    paragraphs: [
      'This is sample text. Replace it with terms for your published site, or remove the link from the footer.',
    ],
  },
}
