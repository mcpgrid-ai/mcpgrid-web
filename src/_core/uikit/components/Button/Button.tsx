import { FC, PropsWithChildren } from 'react';
import BsButton from 'react-bootstrap/Button';

export type ButtonProps = PropsWithChildren;

export const Button: FC<ButtonProps> = ({ children }) => {
  return <BsButton>{children}</BsButton>;
};
