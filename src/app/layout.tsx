import { FC, PropsWithChildren } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';

import { ThemeProvider } from '@core/uikit';
import { TranslationsProvider } from '@core/i18n';
import { QueryProvider } from '@network/common';
import { ApiProvider, ApiClient } from '@network/api';
import { AuthProvider } from '@core/auth/client';

type CommonLayoutProps = PropsWithChildren;

const config = {
  apiKey: 'AIzaSyDdvlBIo2OGdFU0AhV75jcyAz0Si9doXCE',
  authDomain: 'mcp-box.firebaseapp.com',
  projectId: 'mcp-box',
  storageBucket: 'mcp-box.firebasestorage.app',
  messagingSenderId: '120593878309',
  appId: '1:120593878309:web:b8eec34386503c944d5ecc',
  measurementId: 'G-BSC823LMT3',
};

ApiClient.instance({
  baseURL: process.env.API_HOST,
});

const CommonLayout: FC<CommonLayoutProps> = ({ children }) => {
  return (
    <ThemeProvider name={process.env.PRODUCT_NAME}>
      <TranslationsProvider>
        <QueryProvider>
          <AuthProvider config={config}>
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
