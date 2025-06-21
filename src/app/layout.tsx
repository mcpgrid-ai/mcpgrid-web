import { FC, PropsWithChildren } from 'react';

import { ThemeProvider } from '@core/uikit';

type RootLayoutProps = PropsWithChildren;

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <html lang="en">{children}</html>
    </ThemeProvider>
  );
};

export default RootLayout;
