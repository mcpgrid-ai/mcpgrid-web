import { client } from '../../client';
import {
  GetPageAuth,
  GetPageAuthQuery,
  GetPageAuthQueryVariables,
} from '../../__generated__/query';

export const getAuth = async (variables: GetPageAuthQueryVariables) => {
  try {
    const { data, error } = await client.query<
      GetPageAuthQuery,
      GetPageAuthQueryVariables
    >({
      variables,
      query: GetPageAuth,
    });

    if (error) throw new Error(error.message);

    return { data };
  } catch (error) {
    throw error;
  }
};
