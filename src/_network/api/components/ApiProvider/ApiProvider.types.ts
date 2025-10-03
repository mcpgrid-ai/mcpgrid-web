import { InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

export type RequestInterceptorFulfilledFn = (
  v: InternalAxiosRequestConfig,
) => Promise<InternalAxiosRequestConfig>;

export type RequestInterceptorRejectedFn<T = unknown> = (
  error: AxiosError<T>,
) => Promise<AxiosError<T>>;

export type ResponseInterceptorFulfilledFn<T = unknown> = (
  value: AxiosResponse<T>,
) => Promise<AxiosResponse<T>>;

export type ResponseInterceptorRejectedFn<T = unknown> = (
  error: AxiosError<T>,
) => Promise<AxiosError<T>>;
