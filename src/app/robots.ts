import type { MetadataRoute } from 'next';

import { PRIVATE_PATHS } from '@common/constants';

const robots = async (): Promise<MetadataRoute.Robots> => {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: PRIVATE_PATHS,
    },
    sitemap: 'https://mcpgrid.ai/sitemap.xml',
  };
};

export default robots;
