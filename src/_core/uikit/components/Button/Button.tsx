import classNames from 'classnames';
import { forwardRef, PropsWithChildren } from 'react';
import BsButton from 'react-bootstrap/Button';
import { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';

import { ButtonVariant } from './Button.types';

export type ButtonProps = PropsWithChildren<{
  variant?: ButtonVariant;
  className?: string;
  size?: 'sm' | 'lg';
  type?: 'button' | 'submit' | 'reset';
}>;

// @ts-expect-error x3 error
export const Button: BsPrefixRefForwardingComponent<'button', ButtonProps> =
  forwardRef<HTMLButtonElement, ButtonProps>(function Button(
    { children, className, variant, size, type, ...rest },
    ref,
  ) {
    return (
      <BsButton
        variant={variant}
        size={size}
        ref={ref}
        type={type}
        className={classNames(
          {
            'btn-soft-light': variant === 'soft-light',
          },
          className,
        )}
        {...rest}
      >
        {children}
      </BsButton>
    );
  });
