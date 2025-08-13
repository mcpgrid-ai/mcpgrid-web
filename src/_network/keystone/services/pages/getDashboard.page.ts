import { client } from '../../client';
import {
  GetPageDashboard,
  GetPageDashboardQuery,
  GetPageDashboardQueryVariables,
} from '../../__generated__/query';

export const getDashboard = async (
  variables: GetPageDashboardQueryVariables,
) => {
  try {
    const { data, error } = await client.query<
      GetPageDashboardQuery,
      GetPageDashboardQueryVariables
    >({
      variables,
      query: GetPageDashboard,
    });

    if (error) throw new Error(error.message);

    return { data };
  } catch (error) {
    throw error;
  }
};
