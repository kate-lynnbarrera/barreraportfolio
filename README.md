# Portfolio template for GitHub Pages

A static adaptation of [James Rea's Next + Sanity Theme](https://github.com/jamesreaco/next-sanity-theme). It keeps the original Next.js pages, React components, styling, and animations. The sample site is a general freelance portfolio. It uses local content and includes images from the original theme demo as replaceable examples.

## Make it yours

| Change | Edit |
| --- | --- |
| Name, site title, intro, portrait, navigation, email, social links, and footer | `content/portfolio.ts` |
| Project names, links, descriptions, overview, and gallery | `content/case-studies.ts` |
| Blog posts, categories, author bio, and related posts | `content/posts.ts` |
| Images and the share preview | Add or replace files in `public/images/` |
| Browser tab icon | Replace `app/favicon.ico` |

Add a project or post by copying one entry and giving it a unique lowercase, hyphenated `slug`. The build creates its page automatically. List featured projects and the newest posts first. Posts can refer to other posts by slug in `related`.

Use paths such as `/images/my-work.webp` in the content files. The build adds the GitHub repository path automatically. Use root-relative paths such as `/contact` for navigation within the site. Set a project's `url` to its public link, use `#project-gallery` for the gallery, or use an empty string to hide the button.

The body of a project or post is a list of blocks. A string becomes a paragraph. Headings also appear in a blog post's table of contents.

```ts
[
  'A short introduction.',
  { heading: 'My role' },
  { heading: 'Design details', level: 3 },
  { image: '/images/detail.webp', alt: 'A close-up of the final design' },
  { quote: 'An optional quotation.', author: 'Name' },
]
```

Replace the sample email and legal-page copy before publishing. The contact form opens a filled-out draft in the visitor's email app. The footer newsletter is optional. To enable it, set `footer.newsletterAction` to a hosted form URL that accepts an `email` POST field. Disable the floating bar with `bottomBar.enabled`.

## Preview locally

Install Node.js 22 and run these commands in the extracted folder.

```sh
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). Run `npm run build` to export the finished HTML, CSS, JavaScript, and images to `out/`.

## Publish to GitHub Pages

1. Create a GitHub repository and push the extracted project files to its `main` branch. Include the hidden `.github/workflows/pages.yml` file.
2. Open **Settings → Pages** in that repository. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Open **Actions → Deploy portfolio to GitHub Pages → Run workflow**. After deployment succeeds, find the live URL under **Settings → Pages**.

Future pushes to `main` rebuild and publish the site. The workflow gets the correct base path from GitHub Pages for both repository URLs and custom domains. It requires no Sanity account, API keys, or custom repository secrets.

[GitHub Pages publishing instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
