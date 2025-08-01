import axios, { AxiosInstance } from 'axios';
import { stringify } from 'qs';

interface HttpClientParams {
  baseURL: string;
}

export class HttpClient {
  private static client: HttpClient;
  public axios: AxiosInstance;

  private constructor({ baseURL }: HttpClientParams) {
    this.axios = axios.create({
      baseURL,
      timeout: 30000,
      paramsSerializer: (params) => stringify(params, { indices: false }),
    });
  }

  public static instance(params?: HttpClientParams): HttpClient {
    if (!HttpClient.client && params) {
      HttpClient.client = new HttpClient(params);
    }

    return HttpClient.client;
  }
}
