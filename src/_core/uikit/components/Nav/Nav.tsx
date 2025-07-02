import { PropsWithChildren, ReactElement } from 'react';
import BsNav from 'react-bootstrap/Nav';

import { NavItem } from './NavItem';
import { NavLink } from './NavLink';

export type NavProps = PropsWithChildren<{
  variant?: 'tabs' | 'pills' | 'underline';
}>;

interface NavComponent {
  (props: NavProps): ReactElement;
  Item: typeof NavItem;
  Link: typeof NavLink;
}

export const Nav: NavComponent = ({ children, variant }) => {
  return <BsNav variant={variant}>{children}</BsNav>;
};

Nav.Item = NavItem;
Nav.Link = NavLink;
