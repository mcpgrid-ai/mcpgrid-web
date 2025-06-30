import { FC, PropsWithChildren } from 'react';

import { ThemeProvider } from '@core/uikit';
import { TranslationsProvider } from '@core/i18n';

type CommonLayoutProps = PropsWithChildren;

const CommonLayout: FC<CommonLayoutProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <TranslationsProvider>
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
      </TranslationsProvider>
    </ThemeProvider>
  );
};

export default CommonLayout;
