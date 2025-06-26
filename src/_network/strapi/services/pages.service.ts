import { client } from '../client';
import {
  GetPageFaqs,
  GetPageFaqsQuery,
  GetPageFaqsQueryVariables,
  GetPageHome,
  GetPageHomeQuery,
  GetPageHomeQueryVariables,
  GetPageSignUp,
  GetPageSignUpQuery,
  GetPageSignUpQueryVariables,
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

export const getHome = async (variables: GetPageHomeQueryVariables) => {
  try {
    const { data, error } = await client.query<
      GetPageHomeQuery,
      GetPageHomeQueryVariables
    >({
      variables,
      query: GetPageHome,
    });

    if (error) throw new Error(error.message);

    return { data };
  } catch (error) {
    throw error;
  }
};

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
