import { forwardRef, PropsWithChildren } from 'react';
import { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';

export type TypographyProps = PropsWithChildren<{
  className?: string;
}>;

// @ts-expect-error x3 error
export const Typography: BsPrefixRefForwardingComponent<'p', TypographyProps> =
  forwardRef(function TypographyProps(
    { as: Component = 'p', children, className, ...props },
    ref,
  ) {
    return (
      <Component ref={ref} className={className} {...props}>
        {children}
      </Component>
    );
  });
