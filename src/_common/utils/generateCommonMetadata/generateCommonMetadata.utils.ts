import { Metadata } from 'next';

import { keystone } from '@network/keystone';

interface GenerateCommonMetadataParams {
  slug: string;
}

export const generateCommonMetadata = ({
  slug,
}: GenerateCommonMetadataParams) => {
  return async (): Promise<Metadata | undefined> => {
    const { page } = await keystone.metadata.getCommon({
      slug,
    });

    if (page) {
      return {
        title: page.seoTitle,
        description: page.seoDescription,
        keywords: page.seoKeywords,
        openGraph: {
          siteName: process.env.PRODUCT_NAME,
          title: page.seoTitle || '',
          description: page.seoDescription || '',
          images: [
            {
              url: page.seoIcon?.publicUrlTransformed || '',
              width: 1200,
              height: 630,
              alt: page.seoTitle || '',
            },
          ],
        },
        twitter: {
          card: 'summary_large_image',
          title: page.seoTitle || '',
          description: page.seoDescription || '',
          images: [page.seoIcon?.publicUrlTransformed || ''],
        },
      };
    }
  };
};
