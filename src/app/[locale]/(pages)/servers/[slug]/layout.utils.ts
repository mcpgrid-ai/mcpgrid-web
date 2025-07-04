import { github } from '@network/github';
import { strapi } from '@network/strapi';

const getServerLayoutRepo = async ({ url }: { url?: string | null }) => {
  if (!url) return null;

  return await github.repo.getByUrl({
    url,
  });
};

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

  const repo = await getServerLayoutRepo({
    url: server?.GitHubUrl,
  });

  return { server, servers, home, repo };
};
