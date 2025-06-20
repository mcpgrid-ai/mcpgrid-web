'use client';

import { createContext } from 'use-context-selector';

import { ThemeMode } from './ThemeProvider.types';

interface ThemeProviderContextProps {
  mode: ThemeMode;
}

export const ThemeProviderContext = createContext<ThemeProviderContextProps>({
  mode: ThemeMode.Light,
});
