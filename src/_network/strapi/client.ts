import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';

export const client = new ApolloClient<NormalizedCacheObject>({
  link: new HttpLink({
    uri: process.env.STRAPI_SCHEMA_URL,
    fetch,
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  }),
  cache: new InMemoryCache(),
});
