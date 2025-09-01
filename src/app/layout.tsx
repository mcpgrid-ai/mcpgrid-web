import { FC, PropsWithChildren } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';

import { ThemeProvider } from '@core/uikit';
import { TranslationsProvider } from '@core/i18n';
import { QueryProvider } from '@network/common';
import { ApiProvider, ApiClient } from '@network/api';
import { AuthProvider } from '@core/auth/client';

type CommonLayoutProps = PropsWithChildren;

ApiClient.instance({
  baseURL: process.env.API_HOST,
});

const config = () => {
  if (!process.env.GCP_FIREBASE_JSON) return {};
  return JSON.parse(process.env.GCP_FIREBASE_JSON);
};

const CommonLayout: FC<CommonLayoutProps> = ({ children }) => {
  return (
    <ThemeProvider name={process.env.PRODUCT_NAME}>
      <TranslationsProvider>
        <QueryProvider>
          <AuthProvider config={config()}>
            <ApiProvider baseUrl={process.env.API_HOST}>
              <html lang="en">
                {children}
                {process.env.GOOGLE_ANALYTICS_ID && (
                  <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID} />
                )}
              </html>
            </ApiProvider>
          </AuthProvider>
        </QueryProvider>
      </TranslationsProvider>
    </ThemeProvider>
  );
};

export default CommonLayout;
