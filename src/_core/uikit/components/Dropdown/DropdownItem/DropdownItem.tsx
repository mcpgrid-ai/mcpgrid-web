import { forwardRef, PropsWithChildren } from 'react';
import BsDropdownItem from 'react-bootstrap/DropdownItem';

type DropdownItemProps = PropsWithChildren<{
  onClick?: () => void;
}>;

export const DropdownItem = forwardRef<HTMLAnchorElement, DropdownItemProps>(
  function DropdownMenu({ children, onClick }, ref) {
    return (
      <BsDropdownItem ref={ref} onClick={onClick}>
        {children}
      </BsDropdownItem>
    );
  },
);
