import { FC, PropsWithChildren } from 'react';
import BsDropdown from 'react-bootstrap/Dropdown';

import { ButtonVariant } from '../../Button';

type DropdownToggleProps = PropsWithChildren<{
  className?: string;
  variant?: ButtonVariant;
}>;

export const DropdownToggle: FC<DropdownToggleProps> = ({
  children,
  className,
  variant,
}) => {
  return (
    <BsDropdown.Toggle className={className} variant={variant}>
      {children}
    </BsDropdown.Toggle>
  );
};
