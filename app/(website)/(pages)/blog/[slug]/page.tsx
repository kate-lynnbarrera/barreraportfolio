import { notFound } from "next/navigation";
import { Metadata } from "next";
import { fetchPostBySlug, posts } from '@/content'
import Post from "@/components/pages/blog/post/post";

interface PostPageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {

  const post = await fetchPostBySlug(params.slug)
  if (!post) notFound()

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.metaKeywords,
  }
}

export async function generateStaticParams() {
  return posts.map(({ slug }) => ({ slug }));
}

export default async function PostPage({ params }: PostPageProps) {

  const post = await fetchPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <Post post={post} />
  )
}