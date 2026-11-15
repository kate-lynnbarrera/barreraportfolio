import Image from '@/components/shared/site-image'

export default function PortableTextImage({ data }: {
  data: { url: string; alt?: string }
}) {

  return (
    <Image
      src={data.url}
      width={800}
      height={800}
      className='my-10 block mx-auto w-full rounded-xl'
      alt={data.alt ?? ""}
    />
  )
}
