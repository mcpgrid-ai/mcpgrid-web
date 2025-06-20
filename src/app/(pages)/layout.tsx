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
          <Header />
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
};

export default DashboardLayout;
