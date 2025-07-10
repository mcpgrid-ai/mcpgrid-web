import { FC, PropsWithChildren } from 'react';
import BsNavbar from 'react-bootstrap/Navbar';

import { clsx, ClsxProps } from '../../utils/clsx';

export type NavbarProps = PropsWithChildren<ClsxProps>;

export const Navbar: FC<NavbarProps> = ({ children, ...clxProps }) => {
  return <BsNavbar className={clsx(clxProps)}>{children}</BsNavbar>;
};
