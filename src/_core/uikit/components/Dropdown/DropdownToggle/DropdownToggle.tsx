import { forwardRef, PropsWithChildren } from 'react';
import BsDropdownToggle from 'react-bootstrap/DropdownToggle';

import { ButtonVariant } from '../../Button';

type DropdownToggleProps = PropsWithChildren<{
  className?: string;
  variant?: ButtonVariant;
}>;

export const DropdownToggle = forwardRef<
  HTMLButtonElement,
  DropdownToggleProps
>(function DropdownToggle({ children, className, variant }, ref) {
  return (
    <BsDropdownToggle ref={ref} className={className} variant={variant}>
      {children}
    </BsDropdownToggle>
  );
});
