import { client } from '../../client';
import {
  GetMetadataHome,
  GetMetadataHomeQuery,
} from '../../__generated__/query';

export const getHome = async () => {
  try {
    const { data, error } = await client.query<GetMetadataHomeQuery>({
      query: GetMetadataHome,
    });

    if (error) throw new Error(error.message);

    return { ...data };
  } catch (error) {
    throw error;
  }
};
