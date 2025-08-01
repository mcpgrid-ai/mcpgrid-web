import { AxiosError, AxiosRequestConfig } from 'axios';
import { get, merge } from 'lodash';

import { ApiClient } from '../../services/api-client/ApiClient.service';

export const customInstance = <T>(
  config: AxiosRequestConfig,
  request?: AxiosRequestConfig,
): Promise<T> => {
  return ApiClient.instance()
    .axios({ ...config, ...request })
    .then(({ data }) => data)
    .catch((error: AxiosError) =>
      Promise.reject(get(error, ['response', 'data'])),
    );
};

export const customQueryOptions = <T extends object = object>(
  options: T,
): typeof options => {
  return merge({}, options, {
    retry: false,
    refetchOnWindowFocus: false,
  });
};
