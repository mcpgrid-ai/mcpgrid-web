import classNames from 'classnames';
import { forwardRef, PropsWithChildren } from 'react';
import { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';

type HeadingTitleProps = PropsWithChildren<{
  className?: string;
}>;

// @ts-expect-error x3 error
export const HeadingTitle: BsPrefixRefForwardingComponent<
  'h1',
  HeadingTitleProps
> = forwardRef(function HeadingTitle(
  { as: Component = 'h1', children, className },
  ref,
) {
  return (
    <Component
      ref={ref}
      className={classNames('mb-sm-0 font-size-18', className)}
    >
      {children}
    </Component>
  );
});
