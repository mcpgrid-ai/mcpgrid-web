'use client';

import { FC, PropsWithChildren } from 'react';

import { ThemeProviderContext } from './ThemeProvider.context';
import { ThemeMode } from './ThemeProvider.types';
import './ThemeProvider.scss';

type ThemeProviderProps = PropsWithChildren;

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return (
    <ThemeProviderContext.Provider value={{ mode: ThemeMode.Light }}>
      {children}
    </ThemeProviderContext.Provider>
  );
};
