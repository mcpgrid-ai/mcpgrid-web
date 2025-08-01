import { PropsWithChildren, ReactElement } from 'react';
import BsDropdown from 'react-bootstrap/Dropdown';

import { DropdownToggle } from './DropdownToggle';
import { DropdownMenu } from './DropdownMenu';

export type DropdownProps = PropsWithChildren<{
  className?: string;
}>;

interface DropdownComponent {
  (props: DropdownProps): ReactElement;
  Toggle: typeof DropdownToggle;
  Menu: typeof DropdownMenu;
}

export const Dropdown: DropdownComponent = ({ children, className }) => {
  return <BsDropdown className={className}>{children}</BsDropdown>;
};

Dropdown.Toggle = DropdownToggle;
Dropdown.Menu = DropdownMenu;
