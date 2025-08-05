import { FC, PropsWithChildren } from 'react';

import { ThemeProvider } from '@core/uikit';
import { TranslationsProvider } from '@core/i18n';
import { QueryProvider } from '@network/common';
import { ApiProvider, ApiClient } from '@network/api';

type CommonLayoutProps = PropsWithChildren;

ApiClient.instance({
  baseURL: process.env.API_HOST,
});

const CommonLayout: FC<CommonLayoutProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <TranslationsProvider>
        <QueryProvider>
          <ApiProvider baseUrl={process.env.API_HOST}>
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
          </ApiProvider>
        </QueryProvider>
      </TranslationsProvider>
    </ThemeProvider>
  );
};

export default CommonLayout;
