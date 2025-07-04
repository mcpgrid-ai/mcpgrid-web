import { FC, PropsWithChildren } from 'react';
import BsNavbar from 'react-bootstrap/Navbar';

export type NavbarProps = PropsWithChildren;

export const Navbar: FC<NavbarProps> = ({ children }) => {
  return <BsNavbar>{children}</BsNavbar>;
};
