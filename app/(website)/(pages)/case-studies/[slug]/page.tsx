import { notFound } from "next/navigation";
import { Metadata } from "next";
import { fetchCaseStudyBySlug, caseStudies } from '@/content'
import CaseStudy from '@/components/pages/case-studies/case-study/case-study'

interface CaseStudyPageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {

  const caseStudy = await fetchCaseStudyBySlug(params.slug)
  if (!caseStudy) notFound()

  return {
    title: caseStudy.metaTitle,
    description: caseStudy.metaDescription,
    keywords: caseStudy.metaKeywords,
  }
}

export async function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {

  const caseStudy = await fetchCaseStudyBySlug(params.slug)
  if (!caseStudy) notFound()

  return (
    <CaseStudy caseStudy={caseStudy} />
  )
}