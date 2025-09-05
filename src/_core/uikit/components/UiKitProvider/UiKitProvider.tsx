import { FC, PropsWithChildren } from 'react';

import { ToastsProvider } from './ToastsProvider';
import './UiKitProvider.scss';

export type UiKitProviderProps = PropsWithChildren<{
  name: string;
}>;

export const UiKitProvider: FC<UiKitProviderProps> = ({ children, name }) => {
  return <ToastsProvider name={name}>{children}</ToastsProvider>;
};
