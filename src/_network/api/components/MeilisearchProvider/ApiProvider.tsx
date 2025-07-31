'use client';

import { FC, PropsWithChildren, useRef } from 'react';
import { useUnmount } from 'react-use';

import { HttpClient } from '../../services/http-client';

import {
  RequestInterceptorFulfilledFn,
  RequestInterceptorRejectedFn,
  ResponseInterceptorFulfilledFn,
  ResponseInterceptorRejectedFn,
} from './ApiProvider.types';

export type ApiProviderProps = PropsWithChildren<{
  baseUrl: string;
  requestInterceptorRejected?: RequestInterceptorRejectedFn;
  requestInterceptorFulfilled?: RequestInterceptorFulfilledFn;
  responseInterceptorRejected?: ResponseInterceptorRejectedFn;
  responseInterceptorFulfilled?: ResponseInterceptorFulfilledFn;
}>;

export const ApiProvider: FC<ApiProviderProps> = ({
  children,
  baseUrl,
  requestInterceptorFulfilled: instanceRequestInterceptorFulfilled,
  requestInterceptorRejected: instanceRequestInterceptorRejected,
  responseInterceptorRejected: instanceResponseInterceptorRejected,
  responseInterceptorFulfilled: instanceResponseInterceptorFulfilled,
}) => {
  const { current: instance } = useRef(
    HttpClient.instance({
      baseURL: baseUrl,
    }),
  );

  const requestInterceptorFulfilled =
    instanceRequestInterceptorFulfilled || null;

  const requestInterceptorRejected = instanceRequestInterceptorRejected || null;

  const responseInterceptorFulfilled =
    instanceResponseInterceptorFulfilled || null;

  const responseInterceptorRejected =
    instanceResponseInterceptorRejected || null;

  const { current: requestInterceptor } = useRef(
    instance.axios.interceptors.request.use(
      requestInterceptorFulfilled,
      requestInterceptorRejected,
    ),
  );

  const { current: responseInterceptor } = useRef(
    instance.axios.interceptors.response.use(
      responseInterceptorFulfilled,
      responseInterceptorRejected,
    ),
  );

  useUnmount(() => {
    instance.axios.interceptors.request.eject(requestInterceptor);
    instance.axios.interceptors.response.eject(responseInterceptor);
  });
  return <>{children}</>;
};
