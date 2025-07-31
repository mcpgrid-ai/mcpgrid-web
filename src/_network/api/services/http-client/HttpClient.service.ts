import axios, { AxiosInstance } from 'axios';
import { stringify } from 'qs';

interface HttpClientParams {
  baseURL: string;
  apiKey: string;
}

export class HttpClient {
  private static client: HttpClient;
  public axios: AxiosInstance;

  private constructor({ baseURL, apiKey }: HttpClientParams) {
    this.axios = axios.create({
      baseURL,
      timeout: 30000,
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      paramsSerializer: (params) => stringify(params, { indices: false }),
    });
  }

  public static instance(params: HttpClientParams): HttpClient {
    if (!HttpClient.client) {
      HttpClient.client = new HttpClient(params);
    }

    return HttpClient.client;
  }
}
