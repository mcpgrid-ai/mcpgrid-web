import { FC, Fragment, PropsWithChildren } from 'react';

type AuthLayoutProps = PropsWithChildren;

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return <Fragment>111{children}</Fragment>;
};

export default AuthLayout;
