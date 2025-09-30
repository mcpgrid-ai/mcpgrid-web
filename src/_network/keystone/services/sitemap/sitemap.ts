import { client } from '../../client';
import { GetSitemap, GetSitemapQuery } from '../../__generated__/query';

export const get = async () => {
  try {
    const { data, error } = await client.query<GetSitemapQuery>({
      query: GetSitemap,
    });

    if (error) throw new Error(error.message);

    return { ...data };
  } catch (error) {
    throw error;
  }
};
