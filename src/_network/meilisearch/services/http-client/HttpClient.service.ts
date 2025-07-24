import axios, { AxiosInstance } from 'axios';
import { stringify } from 'qs';

export class HttpClient {
  private static client: HttpClient;
  public axios: AxiosInstance;

  private constructor(baseURL?: string) {
    this.axios = axios.create({
      baseURL,
      timeout: 30000,
      paramsSerializer: (params) => stringify(params, { indices: false }),
    });
  }

  public static instance(baseURL?: string): HttpClient {
    if (!HttpClient.client) {
      HttpClient.client = new HttpClient(baseURL);
    }

    return HttpClient.client;
  }
}
