import { FC, Fragment, PropsWithChildren } from 'react';

import './ThemeProvider.scss';

type ThemeProviderProps = PropsWithChildren;

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};
