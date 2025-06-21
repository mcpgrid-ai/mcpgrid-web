import { FC, PropsWithChildren } from 'react';
import BsCardBody from 'react-bootstrap/CardBody';

type CardBodyProps = PropsWithChildren<{
  className?: string;
}>;

export const CardBody: FC<CardBodyProps> = ({ children, className }) => {
  return <BsCardBody className={className}>{children}</BsCardBody>;
};
