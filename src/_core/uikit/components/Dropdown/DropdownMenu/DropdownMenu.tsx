import { forwardRef, PropsWithChildren } from 'react';
import BsDropdownMenu from 'react-bootstrap/DropdownMenu';

type DropdownMenuProps = PropsWithChildren;

export const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(
  function DropdownMenu({ children }, ref) {
    return <BsDropdownMenu ref={ref}>{children}</BsDropdownMenu>;
  },
);
