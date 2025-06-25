import { forwardRef, PropsWithChildren } from 'react';
import BsButton from 'react-bootstrap/Button';
import { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';
import { ButtonVariant } from 'react-bootstrap/esm/types';

export type ButtonProps = PropsWithChildren<{
  variant?: ButtonVariant;
  className?: string;
}>;

// @ts-expect-error x3 error
export const Button: BsPrefixRefForwardingComponent<'button', ButtonProps> =
  forwardRef<HTMLButtonElement, ButtonProps>(function Button(
    { children, className, variant, ...rest },
    ref,
  ) {
    return (
      <BsButton variant={variant} ref={ref} className={className} {...rest}>
        {children}
      </BsButton>
    );
  });
