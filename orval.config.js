module.exports = {
  meilisearch: {
    output: {
      mode: 'tags-split',
      client: 'react-query',
      mock: false,
      override: {
        mutator: {
          name: 'customInstance',
          path: './src/_network/meilisearch/utils/orval/orval.utils.ts',
        },
        query: {
          useInfinite: true,
          queryOptions: {
            name: 'customQueryOptions',
            path: './src/_network/meilisearch/utils/orval/orval.utils.ts',
          },
          useInfiniteQueryParam: 'skip',
        },
      },
      target: './src/_network/meilisearch/__generated__/api.ts',
    },
    afterAllFilesWrite: {
      command: 'eslint ./src --fix',
      injectGeneratedDirsAndFiles: true,
    },
    input: {
      target: './src/_network/meilisearch/openapi.json',
    },
  },
};
