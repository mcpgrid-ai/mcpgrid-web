import { client } from '../../client';
import {
  GetPageSignUp,
  GetPageSignUpQuery,
  GetPageSignUpQueryVariables,
} from '../../__generated__/query';

export const getSignUp = async (variables: GetPageSignUpQueryVariables) => {
  try {
    const { data, error } = await client.query<
      GetPageSignUpQuery,
      GetPageSignUpQueryVariables
    >({
      variables,
      query: GetPageSignUp,
    });

    if (error) throw new Error(error.message);

    return { data };
  } catch (error) {
    throw error;
  }
};
