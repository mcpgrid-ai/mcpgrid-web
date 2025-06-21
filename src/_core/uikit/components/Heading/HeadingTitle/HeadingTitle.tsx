import { FC, PropsWithChildren } from 'react';

type HeadingTitleProps = PropsWithChildren;

export const HeadingTitle: FC<HeadingTitleProps> = ({ children }) => {
  return <h1 className="mb-sm-0 font-size-18">{children}</h1>;
};
