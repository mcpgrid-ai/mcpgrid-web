import { FC, PropsWithChildren } from 'react';

import { ToastsProvider } from './ToastsProvider';
import './ThemeProvider.scss';

type ThemeProviderProps = PropsWithChildren<{
  name: string;
}>;

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, name }) => {
  return <ToastsProvider name={name}>{children}</ToastsProvider>;
};
