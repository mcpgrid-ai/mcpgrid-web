import { client } from '../client';
import {
  GetPageFaqs,
  GetPageFaqsQuery,
  GetPageFaqsQueryVariables,
} from '../__generated__/query';

export const getFaqs = async (variables: GetPageFaqsQueryVariables) => {
  try {
    const { data, error } = await client.query<
      GetPageFaqsQuery,
      GetPageFaqsQueryVariables
    >({
      variables,
      query: GetPageFaqs,
    });

    if (error) throw new Error(error.message);

    return { data };
  } catch (error) {
    throw error;
  }
};
