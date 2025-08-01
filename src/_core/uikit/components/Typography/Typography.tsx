import { forwardRef, PropsWithChildren } from 'react';
import { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';
import classNames from 'classnames';

import styles from './Typography.module.scss';

export type TypographyProps = PropsWithChildren<{
  className?: string;
  truncate?: number;
}>;

// @ts-expect-error x3 error
export const Typography: BsPrefixRefForwardingComponent<'p', TypographyProps> =
  forwardRef(function TypographyProps(
    { as: Component = 'p', children, className, truncate, ...props },
    ref,
  ) {
    return (
      <Component
        ref={ref}
        className={classNames(
          styles.root,
          {
            [styles[`truncate${truncate}`]]: !!truncate,
          },
          className,
        )}
        {...props}
      >
        {children}
      </Component>
    );
  });
