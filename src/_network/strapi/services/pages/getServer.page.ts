import { client } from '../../client';
import {
  GetPageServer,
  GetPageServerQuery,
  GetPageServerQueryVariables,
} from '../../__generated__/query';

export const getServer = async (variables: GetPageServerQueryVariables) => {
  try {
    const { data, error } = await client.query<
      GetPageServerQuery,
      GetPageServerQueryVariables
    >({
      variables,
      query: GetPageServer,
    });

    if (error) throw new Error(error.message);

    return { ...data };
  } catch (error) {
    throw error;
  }
};
