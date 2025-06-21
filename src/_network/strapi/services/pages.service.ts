import { client } from '../client';
import {
  GetFaqsPage,
  GetFaqsPageQuery,
  GetFaqsPageQueryVariables,
} from '../__generated__/query';

export const getFaqs = async (variables: GetFaqsPageQueryVariables) => {
  try {
    const { data, error } = await client.query<
      GetFaqsPageQuery,
      GetFaqsPageQueryVariables
    >({
      variables,
      query: GetFaqsPage,
    });

    if (error) throw new Error(error.message);

    return { data };
  } catch (error) {
    throw error;
  }
};
