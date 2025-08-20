import { client } from '../../client';
import {
  GetMetadataServerQueryVariables,
  GetMetadataServerQuery,
  GetMetadataServer,
} from '../../__generated__/query';

export const getServer = async (variables: GetMetadataServerQueryVariables) => {
  try {
    const { data, error } = await client.query<GetMetadataServerQuery>({
      query: GetMetadataServer,
      variables,
    });

    if (error) throw new Error(error.message);

    return { ...data };
  } catch (error) {
    throw error;
  }
};
