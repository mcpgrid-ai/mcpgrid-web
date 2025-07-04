import { FC, PropsWithChildren } from 'react';
import BsCardHeader from 'react-bootstrap/CardHeader';

type CardHeaderProps = PropsWithChildren;

export const CardHeader: FC<CardHeaderProps> = ({ children }) => {
  return <BsCardHeader>{children}</BsCardHeader>;
};
