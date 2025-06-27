import { FC, PropsWithChildren } from 'react';
import BsCardTitle from 'react-bootstrap/CardTitle';

type CardTitleProps = PropsWithChildren<{
  className?: string;
}>;

export const CardTitle: FC<CardTitleProps> = ({ children, className }) => {
  return <BsCardTitle className={className}>{children}</BsCardTitle>;
};
