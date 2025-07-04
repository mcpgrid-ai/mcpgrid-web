import { FC, PropsWithChildren } from 'react';
import BsNavItem from 'react-bootstrap/NavItem';

type NavItemProps = PropsWithChildren<{
  className?: string;
}>;

export const NavItem: FC<NavItemProps> = ({ children, className }) => {
  return <BsNavItem className={className}>{children}</BsNavItem>;
};
