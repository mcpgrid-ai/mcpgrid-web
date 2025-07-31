import { FC, PropsWithChildren } from 'react';

import { ThemeProvider } from '@core/uikit';
import { TranslationsProvider } from '@core/i18n';
import { QueryProvider } from '@network/common';
import { MeilisearchProvider } from '@network/api';

type CommonLayoutProps = PropsWithChildren;

const CommonLayout: FC<CommonLayoutProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <TranslationsProvider>
        <QueryProvider>
          <MeilisearchProvider
            baseUrl={process.env.MEILISEARCH_HOST}
            apiKey={process.env.MEILISEARCH_API_KEY}
          >
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
          </MeilisearchProvider>
        </QueryProvider>
      </TranslationsProvider>
    </ThemeProvider>
  );
};

export default CommonLayout;
