'use client';

import { FC, PropsWithChildren } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';

import { getQueryClient } from './QueryProvider.utils';

export const QueryProvider: FC<PropsWithChildren> = ({ children }) => {
  const client = getQueryClient();

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};
