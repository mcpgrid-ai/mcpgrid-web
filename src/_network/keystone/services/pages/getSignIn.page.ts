import { client } from '../../client';
import {
  GetPageSignIn,
  GetPageSignInQuery,
  GetPageSignInQueryVariables,
} from '../../__generated__/query';

export const getSignIn = async (variables: GetPageSignInQueryVariables) => {
  try {
    const { data, error } = await client.query<
      GetPageSignInQuery,
      GetPageSignInQueryVariables
    >({
      variables,
      query: GetPageSignIn,
    });

    if (error) throw new Error(error.message);

    return { data };
  } catch (error) {
    throw error;
  }
};
