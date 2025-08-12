import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';

export const client = new ApolloClient<NormalizedCacheObject>({
  link: new HttpLink({
    uri: process.env.KEYSTONE_SCHEMA_URL,
    fetch,
  }),
  cache: new InMemoryCache(),
});
