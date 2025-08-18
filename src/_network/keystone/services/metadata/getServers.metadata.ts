import { client } from '../../client';
import {
  GetMetadataServers,
  GetMetadataServersQuery,
} from '../../__generated__/query';

export const getServers = async () => {
  try {
    const { data, error } = await client.query<GetMetadataServersQuery>({
      query: GetMetadataServers,
    });

    if (error) throw new Error(error.message);

    return { ...data };
  } catch (error) {
    throw error;
  }
};
