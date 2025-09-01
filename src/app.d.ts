declare namespace NodeJS {
  interface ProcessEnv {
    PRODUCT_NAME: string;
    API_HOST: string;
    KEYSTONE_SCHEMA_URL: string;
    GOOGLE_ANALYTICS_ID: string;
    GCP_CLIENT_EMAIL: string;
    GCP_PRIVATE_KEY: string;
    GCP_FIREBASE_ACCOUNT_KEY: string;
    GCP_FIREBASE_ACCOUNT_KEY_BASE64: string;
    GCP_ADMIN_ACCOUNT_KEY: string;
    GCP_ADMIN_ACCOUNT_KEY_BASE64: string;
  }
}
