'use client';

import { useContext } from 'use-context-selector';

import { ThemeProviderContext } from './ThemeProvider.context';

export const useTheme = () => useContext(ThemeProviderContext);
