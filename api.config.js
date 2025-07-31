module.exports = {
  api: {
    output: {
      mode: 'tags-split',
      client: 'react-query',
      mock: false,
      override: {
        mutator: {
          name: 'customInstance',
          path: './src/_network/api/utils/orval/orval.utils.ts',
        },
        query: {
          useInfinite: true,
          queryOptions: {
            name: 'customQueryOptions',
            path: './src/_network/api/utils/orval/orval.utils.ts',
          },
          useInfiniteQueryParam: 'skip',
        },
      },
      target: './src/_network/api/__generated__/api.ts',
    },
    afterAllFilesWrite: {
      command: 'eslint ./src --fix',
      injectGeneratedDirsAndFiles: true,
    },
    input: {
      target: './src/_network/api/openapi.json',
    },
  },
};
