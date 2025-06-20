import { FC, Fragment, PropsWithChildren } from 'react';

type CommonLayoutProps = PropsWithChildren;

export const CommonLayout: FC<CommonLayoutProps> = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};
