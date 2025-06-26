'use client';

import { FC, PropsWithChildren } from 'react';

import { useTheme } from '@core/uikit';

type CountdownLayoutProps = PropsWithChildren;

const CountdownLayout: FC<CountdownLayoutProps> = ({ children }) => {
  const { mode } = useTheme();

  return (
    <body
      data-layout-size="boxed"
      data-layout="horizontal"
      data-topbar={mode}
      data-bs-theme={mode}
    >
      {children}
    </body>
  );
};

export default CountdownLayout;
