import axios, { AxiosInstance } from 'axios';
import { stringify } from 'qs';
// import { isServer } from '@tanstack/react-query';

interface ApiClientParams {
  baseURL: string;
}

export class ApiClient {
  private static client: ApiClient;
  public axios: AxiosInstance;

  private constructor({ baseURL }: ApiClientParams) {
    this.axios = axios.create({
      baseURL,
      timeout: 30000,
      paramsSerializer: (params) => stringify(params, { indices: false }),
    });
  }

  public static instance(params?: ApiClientParams): ApiClient {
    if (!ApiClient.client && params) {
      ApiClient.client = new ApiClient(params);
    }

    return ApiClient.client;
  }
}
