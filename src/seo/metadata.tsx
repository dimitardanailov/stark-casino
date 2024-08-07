import {Metadata} from 'next'

export type InternalMetadata = {
  title: string
  description: string
  canonical: string
}

function generateMetadata({
  title,
  description,
  canonical,
}: InternalMetadata): Metadata {
  const url = `https://casino-stark.com${canonical}`

  return {
    alternates: {
      canonical: url,
    },
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: url,
    },
  }
}

export default generateMetadata
