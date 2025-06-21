import { CodegenConfig } from '@graphql-codegen/cli';
import { config as dotenv } from 'dotenv';

dotenv();

const config: CodegenConfig = {
  schema: [
    {
      'http://localhost:1337/graphql': {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        },
      },
    },
  ],
  ignoreNoDocuments: true,
  generates: {
    './src/_network/strapi/__generated__/query.ts': {
      documents: ['./src/_network/strapi/documents/*.graphql'],
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-document-nodes',
      ],
      config: {
        withHooks: true,
        addInfiniteQuery: true,
        fetcher: {
          func: '../hooks/useFetchData/useFetchData.hook#useFetchData',
          isReactHook: true,
        },
      },
    },
  },
};

export default config;
