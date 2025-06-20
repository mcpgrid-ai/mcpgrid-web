import { FC, PropsWithChildren } from 'react';

import { ThemeProvider } from '@core/uikit';

type DashboardLayoutProps = PropsWithChildren;

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <html lang="en">
        <body data-layout-size="boxed" data-layout="horizontal">
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
};

export default DashboardLayout;
