import { FC, PropsWithChildren } from 'react';
import BsDropdown from 'react-bootstrap/Dropdown';

type DropdownMenuProps = PropsWithChildren;

export const DropdownMenu: FC<DropdownMenuProps> = ({ children }) => {
  return <BsDropdown.Menu>{children}</BsDropdown.Menu>;
};
