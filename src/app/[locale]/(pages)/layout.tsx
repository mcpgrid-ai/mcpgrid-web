'use client';

import { FC, PropsWithChildren } from 'react';

import { Header } from './_partitions/Header';

import { useTheme } from '@core/uikit';

type DashboardLayoutProps = PropsWithChildren;

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  const { mode } = useTheme();

  return (
    <body
      data-layout-size="boxed"
      data-layout="horizontal"
      data-topbar={mode}
      data-bs-theme={mode}
    >
      <div id="layout-wrapper">
        <Header />
        <div className="main-content">
          <div className="page-content">
            <div className="container-fluid">{children}</div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default DashboardLayout;
