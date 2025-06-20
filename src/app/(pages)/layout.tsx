import { FC, PropsWithChildren } from 'react';

import { Header } from './_partitions/Header';

import { ThemeProvider } from '@core/uikit';

type DashboardLayoutProps = PropsWithChildren;

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <html lang="en">
        <body
          data-layout-size="boxed"
          data-layout="horizontal"
          data-topbar="light"
          data-bs-theme="light"
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
      </html>
    </ThemeProvider>
  );
};

export default DashboardLayout;
