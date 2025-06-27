import { client } from '../../client';
import {
  GetPageServers,
  GetPageServersQuery,
  GetPageServersQueryVariables,
} from '../../__generated__/query';

export const getServers = async (variables: GetPageServersQueryVariables) => {
  try {
    const { data, error } = await client.query<
      GetPageServersQuery,
      GetPageServersQueryVariables
    >({
      variables,
      query: GetPageServers,
    });

    if (error) throw new Error(error.message);

    return { data };
  } catch (error) {
    throw error;
  }
};
