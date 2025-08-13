import { keystone } from '@network/keystone';

export const getServerLayoutData = async ({ slug }: { slug: string }) => {
  const { pages, servers: list } = await keystone.pages.getServer({
    server: slug,
    slug: ['home', 'servers'],
  });

  const servers = pages?.find((item) => item && item.slug === 'servers');

  const home = pages?.find((item) => item && item.slug === 'home');

  const server = list?.find(({ slug: id }) => id === slug);

  return { server, servers, home };
};
