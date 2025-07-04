import { forwardRef, PropsWithChildren } from 'react';
import { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';
import BsNavLink from 'react-bootstrap/NavLink';

import { NavPropsValue } from '../Nav.types';

type NavLinkProps = PropsWithChildren<{
  active?: boolean;
  value?: NavPropsValue;
}>;

// @ts-expect-error x3 error
export const NavLink: BsPrefixRefForwardingComponent<'a', NavLinkProps> =
  forwardRef<HTMLAnchorElement, NavLinkProps>(function NavLink(
    { children, active, value, ...props },
    ref,
  ) {
    return (
      <BsNavLink {...props} active={active} ref={ref} eventKey={value}>
        {children}
      </BsNavLink>
    );
  });
