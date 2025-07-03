import { PropsWithChildren, ReactElement } from 'react';
import BsNav from 'react-bootstrap/Nav';

import { NavItem } from './NavItem';
import { NavLink } from './NavLink';
import { NavPropsValue } from './Nav.types';

export type NavProps<T extends NavPropsValue> = PropsWithChildren<{
  variant?: 'tabs' | 'pills' | 'underline';
  className?: string;
  value?: T;
}>;

interface NavComponent {
  <T extends NavPropsValue = string>(props: NavProps<T>): ReactElement;
  Item: typeof NavItem;
  Link: typeof NavLink;
}

export const Nav: NavComponent = ({ children, variant, className, value }) => {
  return (
    <BsNav variant={variant} className={className} activeKey={value}>
      {children}
    </BsNav>
  );
};

Nav.Item = NavItem;
Nav.Link = NavLink;
