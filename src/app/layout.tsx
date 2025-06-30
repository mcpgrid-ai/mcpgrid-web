import { FC, PropsWithChildren } from 'react';

import { ThemeProvider } from '@core/uikit';

type CommonLayoutProps = PropsWithChildren;

const CommonLayout: FC<CommonLayoutProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <html lang="en">
        <body
          data-layout-size="boxed"
          data-layout="horizontal"
          data-topbar="light"
          data-bs-theme="light"
        >
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
};

export default CommonLayout;
