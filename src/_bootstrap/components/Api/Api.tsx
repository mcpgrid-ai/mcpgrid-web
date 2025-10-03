'use client';

import { FC, PropsWithChildren } from 'react';
import { get } from 'lodash';

import {
  ApiProvider,
  ApiProviderProps,
  RequestInterceptorFulfilledFn,
} from '@network/api';
import { useSession } from '@core/auth/client';

type ApiProps = PropsWithChildren<ApiProviderProps>;

export const Api: FC<ApiProps> = ({ children, ...props }) => {
  const { data } = useSession();

  const token = get(data, ['user', 'token']);

  const requestInterceptorFulfilled: RequestInterceptorFulfilledFn = (
    config,
  ) => {
    if (token) {
      config.headers?.set('Authorization', `Bearer ${token}`);
    }
    return Promise.resolve(config);
  };

  return (
    <ApiProvider
      key={token}
      {...props}
      requestInterceptorFulfilled={requestInterceptorFulfilled}
    >
      {children}
    </ApiProvider>
  );
};
