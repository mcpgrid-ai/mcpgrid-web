import { FC, PropsWithChildren } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';

import { UiKitProvider } from '@core/uikit';
import { TranslationsProvider } from '@core/i18n';
import { QueryProvider } from '@network/common';
import { ApiProvider, ApiClient } from '@network/api';
import { AuthProvider } from '@core/auth/client';
import { KeystoneProvider } from '@network/keystone';

type CommonLayoutProps = PropsWithChildren;

ApiClient.instance({
  baseURL: process.env.API_HOST,
});

const config = () => {
  if (!process.env.GCP_FIREBASE_ACCOUNT_KEY_BASE64) return {};
  const str = Buffer.from(
    process.env.GCP_FIREBASE_ACCOUNT_KEY_BASE64,
    'base64',
  ).toString('utf-8');
  return JSON.parse(str);
};

const CommonLayout: FC<CommonLayoutProps> = ({ children }) => {
  return (
    <UiKitProvider name={process.env.PRODUCT_NAME}>
      <TranslationsProvider>
        <QueryProvider>
          <AuthProvider config={config()}>
            <KeystoneProvider baseUrl={process.env.KEYSTONE_SCHEMA_URL}>
              <ApiProvider baseUrl={process.env.API_HOST}>
                <html lang="en" suppressHydrationWarning>
                  {children}
                  {process.env.GOOGLE_ANALYTICS_ID && (
                    <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID} />
                  )}
                </html>
              </ApiProvider>
            </KeystoneProvider>
          </AuthProvider>
        </QueryProvider>
      </TranslationsProvider>
    </UiKitProvider>
  );
};

export default CommonLayout;
