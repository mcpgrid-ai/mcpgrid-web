import { client } from '../../client';
import {
  GetPageServerTools,
  GetPageServerToolsQuery,
  GetPageServerToolsQueryVariables,
} from '../../__generated__/query';

export const getServerTools = async (
  variables: GetPageServerToolsQueryVariables,
) => {
  try {
    const { data, error } = await client.query<
      GetPageServerToolsQuery,
      GetPageServerToolsQueryVariables
    >({
      variables,
      query: GetPageServerTools,
    });

    if (error) throw new Error(error.message);

    return { ...data };
  } catch (error) {
    throw error;
  }
};
