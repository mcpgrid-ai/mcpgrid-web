import { FC, PropsWithChildren } from 'react';
import BsNavItem from 'react-bootstrap/NavItem';

type NavItemProps = PropsWithChildren;

export const NavItem: FC<NavItemProps> = ({ children }) => {
  return <BsNavItem>{children}</BsNavItem>;
};
