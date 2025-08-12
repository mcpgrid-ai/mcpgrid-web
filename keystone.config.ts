import { CodegenConfig } from '@graphql-codegen/cli';
import { config as dotenv } from 'dotenv';

dotenv();

const config: CodegenConfig = {
  schema: [
    {
      [process.env.KEYSTONE_SCHEMA_URL]: {
        headers: {},
      },
    },
  ],
  ignoreNoDocuments: true,
  generates: {
    './src/_network/keystone/__generated__/query.ts': {
      documents: ['./src/_network/keystone/documents/**/*.graphql'],
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-document-nodes',
      ],
      // config: {
      //   withHooks: true,
      //   addInfiniteQuery: true,
      //   fetcher: {
      //     func: '../hooks/useFetchData/useFetchData.hook#useFetchData',
      //     isReactHook: true,
      //   },
      // },
    },
  },
  config: {
    dedupeFragments: true,
  },
};

export default config;
