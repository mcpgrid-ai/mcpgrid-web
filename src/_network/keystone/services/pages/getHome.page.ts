import { client } from '../../client';
import {
  GetPageHome,
  GetPageHomeQuery,
  GetPageHomeQueryVariables,
  GetPageHomeServers,
  GetPageHomeServersQuery,
  GetPageHomeServersQueryVariables,
} from '../../__generated__/query';

export const getHome = async (variables: GetPageHomeQueryVariables) => {
  try {
    const {
      data: { pages, serverCategories },
    } = await client.query<GetPageHomeQuery, GetPageHomeQueryVariables>({
      variables,
      query: GetPageHome,
    });

    const serversRequests = serverCategories?.map((item) => {
      return client.query<
        GetPageHomeServersQuery,
        GetPageHomeServersQueryVariables
      >({
        variables: {
          id: item.id,
        },
        query: GetPageHomeServers,
      });
    });

    const serversResponses = await Promise.all(serversRequests || []);

    const categories = serversResponses.reduce((res, item) => {
      if (item.data.servers?.length) {
        return [...res, item.data];
      }
      return res;
    }, [] as GetPageHomeServersQuery[]);

    return { pages, categories };
  } catch (error) {
    throw error;
  }
};
