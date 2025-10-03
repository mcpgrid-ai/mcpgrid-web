'use client';

import { FC } from 'react';

import { useGetInstances } from '@network/api';

export const DashboardInstances: FC = () => {
  const { data } = useGetInstances();

  return <div>{JSON.stringify(data)}</div>;
};
