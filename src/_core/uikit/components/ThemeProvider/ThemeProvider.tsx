'use client';

import { FC, PropsWithChildren } from 'react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';

export type ThemeProviderProps = PropsWithChildren;

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  // data-bs-theme
  return (
    <NextThemeProvider enableSystem attribute="data-bs-theme">
      {children}
    </NextThemeProvider>
  );
};
