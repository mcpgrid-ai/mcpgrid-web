import { Metadata } from 'next';

import { getTranslations } from '@core/i18n';
import { keystone } from '@network/keystone';

interface GenerateMetadataParams {
  params: Promise<{
    slug: string;
  }>;
}

interface GenerateServerMetadataParams {
  suffix?: string;
}

export const generateServerMetadata = ({
  suffix,
}: GenerateServerMetadataParams) => {
  return async ({ params }: GenerateMetadataParams): Promise<Metadata> => {
    const { slug } = await params;
    const t = await getTranslations();

    const { server } = await keystone.metadata.getServer({
      slug,
    });

    if (!server) {
      return {
        title: t('noData.serverNotFound'),
        description: t('noData.serverNotFound'),
      };
    }

    const title = [server?.title, suffix, process.env.PRODUCT_NAME]
      .filter((v) => !!v)
      .join(' | ');

    const image =
      server?.icon?.publicUrlTransformed ||
      server?.category?.icon?.publicUrlTransformed;

    return {
      title,
      keywords: server?.keywords,
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
};
