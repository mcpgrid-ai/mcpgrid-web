import { forwardRef, PropsWithChildren } from 'react';
import classNames from 'classnames';
import BsBreadcrumbItem from 'react-bootstrap/BreadcrumbItem';
import { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';

import styles from '../../Heading.module.scss';

type HeadingBreadcrumbItemProps = PropsWithChildren<{
  active?: boolean;
}>;

// @ts-expect-error x3 error
export const HeadingBreadcrumbItem: BsPrefixRefForwardingComponent<
  'li',
  HeadingBreadcrumbItemProps
> = forwardRef(function HeadingBreadcrumbItem(
  { children, active, as, ...props },
  ref,
) {
  return (
    <BsBreadcrumbItem
      // @ts-expect-error x3 error
      ref={ref}
      active={active}
      linkAs={as}
      linkProps={props}
      className={classNames(styles.item)}
    >
      {children}
    </BsBreadcrumbItem>
  );
});
