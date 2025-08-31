import { forwardRef, PropsWithChildren } from 'react';
import BsDropdownDivider from 'react-bootstrap/DropdownDivider';

type DropdownDividerProps = PropsWithChildren<{
  onClick?: () => void;
}>;

export const DropdownDivider = forwardRef<HTMLHRElement, DropdownDividerProps>(
  function DropdownMenu({ children, onClick }, ref) {
    return (
      <BsDropdownDivider ref={ref} onClick={onClick}>
        {children}
      </BsDropdownDivider>
    );
  },
);
