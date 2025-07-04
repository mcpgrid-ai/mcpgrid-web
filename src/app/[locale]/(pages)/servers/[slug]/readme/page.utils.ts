import { github } from '@network/github';
import { strapi } from '@network/strapi';

interface GetServerDetailsReadmeDataParams {
  slug: string;
}

export const getServerDetailsReadmeData = async ({
  slug,
}: GetServerDetailsReadmeDataParams) => {
  const {
    servers: [server],
  } = await strapi.page.getServer({
    slug: [],
    server: slug,
  });

  if (!server) return null;

  const readme = await github.repo.getReadmeByUrl({
    url: server.GitHubUrl,
  });

  return { readme: readme?.data };
};
