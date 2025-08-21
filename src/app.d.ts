declare namespace NodeJS {
  interface ProcessEnv {
    PRODUCT_NAME: string;
    API_HOST: string;
    KEYSTONE_SCHEMA_URL: string;
    GOOGLE_ANALYTICS_ID: string;
  }
}
