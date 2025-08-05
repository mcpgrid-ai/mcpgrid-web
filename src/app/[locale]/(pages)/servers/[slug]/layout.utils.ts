import { strapi } from '@network/strapi';

export const getServerLayoutData = async ({ slug }: { slug: string }) => {
  const {
    pages,
    servers: [server],
  } = await strapi.page.getServer({
    slug: ['home', 'servers'],
    server: slug,
  });

  const servers = pages.find((item) => item && item.Slug === 'servers');

  const home = pages.find((item) => item && item.Slug === 'home');

  return { server, servers, home };
};
