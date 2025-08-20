import { Metadata } from 'next';

import { keystone } from '@network/keystone';

interface GenerateMetadataParams {
  params: Promise<{
    slug: string;
  }>;
}

export const generateMetadata = async ({
  params,
}: GenerateMetadataParams): Promise<Metadata> => {
  const { slug } = await params;

  const { server } = await keystone.metadata.getServer({
    slug,
  });

  const title = `${server?.title} | ${process.env.PRODUCT_NAME}`;

  const image =
    server?.icon?.publicUrlTransformed ||
    server?.category?.icon?.publicUrlTransformed;

  return {
    title,
    description: server?.description,
    openGraph: {
      siteName: process.env.PRODUCT_NAME,
      title,
      description: server?.description || '',
      images: [
        {
          url: image || '',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: server?.description || '',
      images: [image || ''],
    },
  };
};
