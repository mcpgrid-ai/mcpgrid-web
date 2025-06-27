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
      data: {
        pages: [page],
        serverCategories,
      },
    } = await client.query<GetPageHomeQuery, GetPageHomeQueryVariables>({
      variables,
      query: GetPageHome,
    });

    const serversRequests = serverCategories.map((item) => {
      if (item) {
        return client.query<
          GetPageHomeServersQuery,
          GetPageHomeServersQueryVariables
        >({
          variables: {
            documentId: item.documentId,
          },
          query: GetPageHomeServers,
        });
      }
    });

    const serversResponses = await Promise.all(serversRequests);

    const categories = serversResponses.reduce((res, item) => {
      if (item?.data && item.data.servers.length) {
        return [...res, item.data];
      }
      return res;
    }, [] as GetPageHomeServersQuery[]);

    return { page, categories };
  } catch (error) {
    throw error;
  }
};
