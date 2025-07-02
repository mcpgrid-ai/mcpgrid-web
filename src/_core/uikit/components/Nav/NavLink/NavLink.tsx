import { forwardRef, PropsWithChildren } from 'react';
import { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';
import BsNavLink from 'react-bootstrap/NavLink';

type NavLinkProps = PropsWithChildren<{
  active?: boolean;
}>;

// @ts-expect-error x3 error
export const NavLink: BsPrefixRefForwardingComponent<'a', NavLinkProps> =
  forwardRef<HTMLAnchorElement, NavLinkProps>(function NavLink(
    { children, active, ...props },
    ref,
  ) {
    return (
      <BsNavLink {...props} active={active} ref={ref}>
        {children}
      </BsNavLink>
    );
  });
