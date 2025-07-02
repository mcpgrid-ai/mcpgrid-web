import classNames from 'classnames';
import { forwardRef, PropsWithChildren } from 'react';
import BsButton from 'react-bootstrap/Button';
import { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';
import { ButtonVariant } from 'react-bootstrap/esm/types';

export type ButtonProps = PropsWithChildren<{
  variant?: ButtonVariant;
  className?: string;
  size?: 'sm' | 'lg';
}>;

// @ts-expect-error x3 error
export const Button: BsPrefixRefForwardingComponent<'button', ButtonProps> =
  forwardRef<HTMLButtonElement, ButtonProps>(function Button(
    { children, className, variant, size, ...rest },
    ref,
  ) {
    return (
      <BsButton
        variant={variant}
        size={size}
        ref={ref}
        className={classNames(className)}
        {...rest}
      >
        {children}
      </BsButton>
    );
  });
