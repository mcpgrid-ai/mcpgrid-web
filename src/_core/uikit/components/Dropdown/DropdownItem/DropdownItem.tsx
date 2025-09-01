import { forwardRef, PropsWithChildren } from 'react';
import BsDropdownItem from 'react-bootstrap/DropdownItem';
import { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';

type DropdownItemProps = PropsWithChildren<{
  onClick?: () => void;
}>;

// @ts-expect-error x3 error
export const DropdownItem: BsPrefixRefForwardingComponent<
  'button',
  DropdownItemProps
> = forwardRef<HTMLAnchorElement, DropdownItemProps>(function DropdownMenu(
  { children, onClick, ...rest },
  ref,
) {
  return (
    <BsDropdownItem ref={ref} onClick={onClick} {...rest}>
      {children}
    </BsDropdownItem>
  );
});
