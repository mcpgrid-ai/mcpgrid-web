import { client } from '../../client';
import {
  GetPageServerOverview,
  GetPageServerOverviewQuery,
  GetPageServerOverviewQueryVariables,
} from '../../__generated__/query';

export const getServerOverview = async (
  variables: GetPageServerOverviewQueryVariables,
) => {
  try {
    const { data, error } = await client.query<
      GetPageServerOverviewQuery,
      GetPageServerOverviewQueryVariables
    >({
      variables,
      query: GetPageServerOverview,
    });

    if (error) throw new Error(error.message);

    return { ...data };
  } catch (error) {
    throw error;
  }
};
