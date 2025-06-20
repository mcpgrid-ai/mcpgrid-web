import { FC, PropsWithChildren } from 'react';

type CommonLayoutProps = PropsWithChildren;

export const CommonLayout: FC<CommonLayoutProps> = ({ children }) => {
  return (
    <body data-layout-size="boxed" data-layout="horizontal">
      {children}
    </body>
  );
};
