import { FC, PropsWithChildren } from 'react';

import './ThemeProvider.scss';

type ThemeProviderProps = PropsWithChildren;

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return <>{children}</>;
};
