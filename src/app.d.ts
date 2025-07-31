declare namespace NodeJS {
  interface ProcessEnv {
    STRAPI_HOST: string;
    STRAPI_API_TOKEN: string;
    PRODUCT_NAME: string;
    MEILISEARCH_HOST: string;
    MEILISEARCH_API_KEY: string;
  }
}
