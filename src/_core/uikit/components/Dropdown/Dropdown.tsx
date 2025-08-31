import { PropsWithChildren, ReactElement } from 'react';
import BsDropdown from 'react-bootstrap/Dropdown';

import { DropdownToggle } from './DropdownToggle';
import { DropdownMenu } from './DropdownMenu';
import { DropdownItem } from './DropdownItem';
import { DropdownDivider } from './DropdownDivider';

export type DropdownProps = PropsWithChildren<{
  className?: string;
}>;

interface DropdownComponent {
  (props: DropdownProps): ReactElement;
  Toggle: typeof DropdownToggle;
  Menu: typeof DropdownMenu;
  Item: typeof DropdownItem;
  Divider: typeof DropdownDivider;
}

export const Dropdown: DropdownComponent = ({ children, className }) => {
  return <BsDropdown className={className}>{children}</BsDropdown>;
};

Dropdown.Toggle = DropdownToggle;
Dropdown.Menu = DropdownMenu;
Dropdown.Item = DropdownItem;
Dropdown.Divider = DropdownDivider;
