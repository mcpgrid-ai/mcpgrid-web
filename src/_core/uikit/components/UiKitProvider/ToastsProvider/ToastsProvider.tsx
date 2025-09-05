'use client';
import { SnackbarProvider } from 'notistack';
import { FC, PropsWithChildren } from 'react';

import { ToastsComponent } from './ToastsComponent';

type ToastsProviderProps = PropsWithChildren<{
  name: string;
}>;

export const ToastsProvider: FC<ToastsProviderProps> = ({ children, name }) => {
  return (
    <SnackbarProvider
      Components={{
        default: (props) => <ToastsComponent {...props} name={name} />,
        error: (props) => <ToastsComponent {...props} name={name} />,
        info: (props) => <ToastsComponent {...props} name={name} />,
        success: (props) => <ToastsComponent {...props} name={name} />,
        warning: (props) => <ToastsComponent {...props} name={name} />,
      }}
      anchorOrigin={{
        horizontal: 'right',
        vertical: 'bottom',
      }}
    >
      {children}
    </SnackbarProvider>
  );
};
