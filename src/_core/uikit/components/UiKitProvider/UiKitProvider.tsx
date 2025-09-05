import { FC, PropsWithChildren } from 'react';

import { ToastsProvider } from './ToastsProvider';
import { ThemeProvider } from './ThemeProvider';
import './UiKitProvider.scss';

export type UiKitProviderProps = PropsWithChildren<{
  name: string;
}>;

export const UiKitProvider: FC<UiKitProviderProps> = ({ children, name }) => {
  return (
    <ThemeProvider>
      <ToastsProvider name={name}>{children}</ToastsProvider>
    </ThemeProvider>
  );
};
