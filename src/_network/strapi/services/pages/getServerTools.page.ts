import { client } from '../../client';
import {
  GetPageServerTools,
  GetPageServerToolsQuery,
  GetPageServerToolsQueryVariables,
} from '../../__generated__/query';

interface ServerToolParameter {
  name: string;
  type: string;
  description?: string;
  required: boolean;
}

interface ServerTool {
  id: string;
  description?: string;
  parameters?: ServerToolParameter[];
}

interface GetServerToolsReturnType {
  Tools?: ServerTool[];
}

export const getServerTools = async (
  variables: GetPageServerToolsQueryVariables,
): Promise<GetServerToolsReturnType> => {
  try {
    const { data, error } = await client.query<
      GetPageServerToolsQuery,
      GetPageServerToolsQueryVariables
    >({
      variables,
      query: GetPageServerTools,
    });

    if (error) throw new Error(error.message);

    return { ...data.servers[0] };
  } catch (error) {
    throw error;
  }
};
