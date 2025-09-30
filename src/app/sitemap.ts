/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck x3 error

import { MetadataRoute } from 'next';
import { get } from 'lodash';

import { keystone } from '@network/keystone';

const PRIORITY = {
  'sign-in': 0.3,
  dashboard: 0.3,
};

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const { servers: initialServers, pages: initialPages } =
    await keystone.sitemap.get();

  const pages =
    initialPages?.reduce(
      (acc, { slug, updatedAt }): MetadataRoute.Sitemap => [
        ...acc,
        {
          url: `https://mcpbox.com/${slug}`,
          lastModified: new Date(updatedAt),
          changeFrequency: 'weekly',
          priority: get(PRIORITY, `${slug}`, 0.8),
        },
      ],
      [],
    ) || [];

  const servers =
    initialServers?.reduce(
      (acc, { slug, updatedAt }): MetadataRoute.Sitemap => [
        ...acc,
        {
          url: `https://mcpbox.com/servers/${slug}`,
          lastModified: new Date(updatedAt),
          changeFrequency: 'weekly',
          priority: 0.8,
        },
        {
          url: `https://mcpbox.com/servers/${slug}/tools`,
          lastModified: new Date(updatedAt),
          changeFrequency: 'weekly',
          priority: 0.7,
        },
      ],
      [],
    ) || [];

  return [
    ...pages,
    ...servers,
    {
      url: 'https://mcpbox.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
};

export default sitemap;
